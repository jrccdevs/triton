import React, { useState, useEffect } from "react";
import { TextField, Button, MenuItem, Box } from "@mui/material";

const ProductForm = ({ product, onSave }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    main_image: "",
    description: "",
    cantidad: "",
    promocion: "inactivo",
  });

  useEffect(() => {
    if (product) {
      setForm(product);
    }
  }, [product]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Nombre"
        name="name"
        value={form.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Precio"
        name="price"
        type="number"
        value={form.price}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Imagen Principal (URL)"
        name="main_image"
        value={form.main_image}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Descripción"
        name="description"
        value={form.description}
        onChange={handleChange}
        fullWidth
        margin="normal"
        multiline
        rows={3}
        required
      />
      <TextField
        label="Cantidad"
        name="cantidad"
        type="number"
        value={form.cantidad}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        select
        label="Promoción"
        name="promocion"
        value={form.promocion}
        onChange={handleChange}
        fullWidth
        margin="normal"
      >
        <MenuItem value="activo">Activo</MenuItem>
        <MenuItem value="inactivo">Inactivo</MenuItem>
      </TextField>

      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Guardar
      </Button>
    </Box>
  );
};

export default ProductForm;
