import React, { useEffect, useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, IconButton, Button
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import Swal from "sweetalert2";
import CategoriaForm from "./CategoriaForm";
import CategoriaEdit from "./CategoriaEdit";

const CategoriaList = () => {
  const [categorias, setCategorias] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedCategoria, setSelectedCategoria] = useState(null);

  // 🔹 Traer categorías
  const fetchCategorias = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/categories");
      const data = await res.json();
      setCategorias(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCategorias();
  }, []);

  // 🔹 Eliminar
  const handleDelete = async (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`http://localhost:5000/api/categories/${id}`, { method: "DELETE" });
          if (res.ok) {
            Swal.fire("Eliminado", "La categoría fue eliminada", "success");
            fetchCategorias();
          } else {
            Swal.fire("Error", "No se pudo eliminar la categoría", "error");
          }
        } catch (err) {
          Swal.fire("Error", err.message, "error");
        }
      }
    });
  };

  return (
    <div>
      <h2>Categorías</h2>
      <Button variant="contained" color="primary" onClick={() => setOpenForm(true)}>
        Nueva Categoría
      </Button>

      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categorias.map((cat) => (
              <TableRow key={cat.id}>
                <TableCell>{cat.id}</TableCell>
                <TableCell>{cat.name}</TableCell>
                <TableCell>
                  <IconButton onClick={() => { setSelectedCategoria(cat); setOpenEdit(true); }}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(cat.id)} color="error">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {openForm && (
        <CategoriaForm onClose={() => setOpenForm(false)} onSaved={fetchCategorias} />
      )}
      {openEdit && (
        <CategoriaEdit categoria={selectedCategoria} onClose={() => setOpenEdit(false)} onSaved={fetchCategorias} />
      )}
    </div>
  );
};

export default CategoriaList;
