import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, MenuItem } from "@mui/material";

const ProductImageForm = ({ onClose, onSaved }) => {
  const [productId, setProductId] = useState("");
  const [color, setColor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [caracteristicas, setCaracteristicas] = useState("");
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/productos");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async () => {
    if (!productId || !color || !imageUrl) {
      Swal.fire("Error", "Debes completar todos los campos obligatorios", "error");
      return;
    }
    try {
      await fetch("http://localhost:5000/api/product-images", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product_id: productId, color, image_url: imageUrl, caracteristicas }),
      });
      Swal.fire("Éxito", "Imagen creada correctamente", "success");
      onSaved();
      onClose();
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "No se pudo crear la imagen", "error");
    }
  };

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>Nueva Imagen</DialogTitle>
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
        <TextField label="Color" fullWidth margin="dense" value={color} onChange={(e) => setColor(e.target.value)} />
        <TextField label="URL de la Imagen" fullWidth margin="dense" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        <TextField label="Características" fullWidth margin="dense" value={caracteristicas} onChange={(e) => setCaracteristicas(e.target.value)} />
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

export default ProductImageForm;
