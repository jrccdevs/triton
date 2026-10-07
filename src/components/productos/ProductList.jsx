import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Grid,
  TablePagination,
} from "@mui/material";
import ProductForm from "./ProductForm";

const API_URL = "http://localhost:5000";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  // Paginación
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // 🔹 Obtener productos
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${API_URL}/productos`);
      setProducts(res.data);
      setFilteredProducts(res.data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  // 🔹 Obtener categorías para filtro (opcional)
  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/categories`);
      setCategories(res.data);
    } catch (err) {
      console.error("Error al cargar categorías:", err);
      setCategories([]);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  // 🔹 Abrir modal
  const handleOpen = (product = null) => {
    setEditingProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setEditingProduct(null);
    setOpen(false);
  };

  // 🔹 Guardar producto (crear o editar)
  const handleSave = async (product) => {
    try {
      if (editingProduct) {
        await axios.put(`${API_URL}/productos/${editingProduct.id}`, product);
      } else {
        await axios.post(`${API_URL}/productos`, product);
      }
      fetchProducts();
      handleClose();
    } catch (error) {
      console.error("Error al guardar producto:", error);
    }
  };

  // 🔹 Eliminar producto
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/productos/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error al eliminar producto:", error);
    }
  };

  // 🔹 Filtrado
  const fetchProductsByCategory = async (categoryId) => {
    try {
      setSelectedCategory(categoryId); // Actualiza selección
      setPage(0); // Reinicia paginación
  
      if (!categoryId) {
        setFilteredProducts(products); // Todos los productos
        return;
      }
  
      const res = await axios.get(`${API_URL}/productos/categoria/${categoryId}`);
      setFilteredProducts(res.data);
    } catch (error) {
      console.error("Error al obtener productos por categoría:", error);
    }
  };
  useEffect(() => {
    const baseList = selectedCategory ? filteredProducts : products;
  
    if (search.trim() === "") {
      setFilteredProducts(baseList);
    } else {
      setFilteredProducts(
        baseList.filter(
          (p) =>
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.description.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, products, filteredProducts, selectedCategory]);
  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Gestión de Productos
      </Typography>
      <Button variant="contained" color="primary" onClick={() => handleOpen()}>
        Nuevo Producto
      </Button>

      {/* Filtros */}
      <Grid container spacing={2} sx={{ marginTop: 2, marginBottom: 2 }}>
        <Grid item xs={12} sm={6} md={4}>
        <TextField
  select
  label="Filtrar por Categoría"
  fullWidth
  value={selectedCategory} // Ahora siempre refleja la categoría actual
  onChange={(e) => fetchProductsByCategory(e.target.value)}
>
  <MenuItem value="">Todos</MenuItem>
  {categories.map((cat) => (
    <MenuItem key={cat.id} value={cat.id}>
      {cat.name}
    </MenuItem>
  ))}
</TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Buscar por Nombre o Descripción"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Grid>
      </Grid>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Descripcion</TableCell>
              <TableCell>Cantidad</TableCell>
              <TableCell>Promoción</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>${product.price}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell>{product.cantidad}</TableCell>
                  <TableCell>{product.promocion}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      onClick={() => handleOpen(product)}
                      sx={{ mr: 1 }}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDelete(product.id)}
                    >
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Paginación */}
      <TablePagination
        component="div"
        count={filteredProducts.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 15]}
      />

      {/* Modal con formulario */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {editingProduct ? "Editar Producto" : "Nuevo Producto"}
        </DialogTitle>
        <DialogContent>
          <ProductForm product={editingProduct} onSave={handleSave} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProductList;
