import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, MenuItem } from "@mui/material";
import Swal from "sweetalert2";

const ProductSizeForm = ({ onClose, onSaved }) => {
  const [productId, setProductId] = useState("");
  const [size, setSize] = useState("");
  const [products, setProducts] = useState([]);

  // Traer productos
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/productos");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async () => {
    if (!productId || !size) {
      Swal.fire("Error", "Todos los campos son obligatorios", "error");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/product-sizes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product_id: parseInt(productId), size }),
      });

      if (!res.ok) {
        const data = await res.json();
        Swal.fire("Error", data.message || "No se pudo crear el tamaño", "error");
        return;
      }

      Swal.fire("Éxito", "Tamaño creado correctamente", "success");
      onSaved();
      onClose();
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>Nuevo Tamaño</DialogTitle>
      <DialogContent>
        <TextField
          select
          label="Producto"
          fullWidth
          margin="dense"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        >
          {products.map((prod) => (
            <MenuItem key={prod.id} value={prod.id}>
              {prod.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Tamaño"
          fullWidth
          margin="dense"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductSizeForm;
