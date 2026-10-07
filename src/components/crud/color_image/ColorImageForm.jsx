import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, MenuItem } from "@mui/material";

const ColorImageForm = ({ onClose, onSaved }) => {
  const [productId, setProductId] = useState("");
  const [color, setColor] = useState("");
  const [colorImageUrl, setColorImageUrl] = useState("");
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/productos");
    const data = await res.json();
    setProducts(Array.isArray(data) ? data : []);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async () => {
    if (!productId || !color || !colorImageUrl) {
      Swal.fire("Error", "Debes completar todos los campos", "error");
      return;
    }
    try {
      await fetch("http://localhost:5000/api/color-images", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product_id: productId, color, color_image_url: colorImageUrl }),
      });
      Swal.fire("Éxito", "Imagen de color creada correctamente", "success");
      onSaved();
      onClose();
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "No se pudo crear la imagen", "error");
    }
  };

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>Nueva Imagen de Color</DialogTitle>
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
        <TextField label="URL de Imagen de Color" fullWidth margin="dense" value={colorImageUrl} onChange={(e) => setColorImageUrl(e.target.value)} />
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

export default ColorImageForm;
