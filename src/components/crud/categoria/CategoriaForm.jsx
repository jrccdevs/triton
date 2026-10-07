import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from "@mui/material";
import Swal from "sweetalert2";

const CategoriaForm = ({ onClose, onSaved }) => {
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    if (!name.trim()) {
      Swal.fire("Error", "El nombre es obligatorio", "error");
      return;
    }
  
    try {
      const res = await fetch("http://localhost:5000/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        Swal.fire("Éxito", data.message, "success");
        onSaved();
        onClose();
      } else {
        Swal.fire("Error", data.message || "No se pudo crear la categoría", "error");
      }
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>Nueva Categoría</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Nombre"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
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

export default CategoriaForm;
