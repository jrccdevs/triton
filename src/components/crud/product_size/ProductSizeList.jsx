// src/components/crud/product_size/ProductSizeList.jsx
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, IconButton, Button,
  TextField, MenuItem, Grid, TableSortLabel, TablePagination
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import ProductSizeForm from "./ProductSizeForm";
import ProductSizeEdit from "./ProductSizeEdit";

const ProductSizeList = () => {
  const [productSizes, setProductSizes] = useState([]);
  const [filteredSizes, setFilteredSizes] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [search, setSearch] = useState("");
  const [openForm, setOpenForm] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  // Paginación
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Ordenamiento
  const [orderBy, setOrderBy] = useState("id");
  const [order, setOrder] = useState("asc");

  // Traer productos
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/productos");
      const data = await res.json();
      setProducts(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error al cargar productos:", err);
      setProducts([]);
    }
  };

  // Traer product_sizes
  const fetchProductSizes = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/product-sizes");
      const data = await res.json();
      setProductSizes(Array.isArray(data) ? data : []);
      setFilteredSizes(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error al cargar product_sizes:", err);
      setProductSizes([]);
      setFilteredSizes([]);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchProductSizes();
  }, []);

  // Filtrado y ordenamiento
  useEffect(() => {
    let filtered = [...productSizes];

    if (selectedProduct) {
      filtered = filtered.filter(ps => ps.product_id === selectedProduct);
    }

    if (search) {
      const s = search.toLowerCase();
      filtered = filtered.filter(ps =>
        (ps.size && ps.size.toLowerCase().includes(s)) ||
        (ps.product_name && ps.product_name.toLowerCase().includes(s))
      );
    }

    // Ordenamiento
    filtered.sort((a, b) => {
      if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
      if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredSizes(filtered);
  }, [selectedProduct, search, productSizes, order, orderBy]);

  // Cambiar página
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Cambiar ordenamiento
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // Eliminar
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      try {
        await fetch(`http://localhost:5000/api/product-sizes/${id}`, { method: "DELETE" });
        Swal.fire("Eliminado", "El registro fue eliminado correctamente", "success");
        fetchProductSizes();
      } catch (err) {
        console.error(err);
        Swal.fire("Error", "No se pudo eliminar el registro", "error");
      }
    }
  };

  return (
    <div>
      <h2>Tamaños de Productos</h2>
      <Button variant="contained" color="primary" onClick={() => setOpenForm(true)}>
        Nuevo Tamaño
      </Button>

      {/* Filtros */}
      <Grid container spacing={2} sx={{ marginTop: 2, marginBottom: 2 }}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            select
            label="Filtrar por Producto"
            fullWidth
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(Number(e.target.value))}
          >
            <MenuItem value="">Todos</MenuItem>
            {products.map((prod) => (
              <MenuItem key={prod.id} value={prod.id}>
                {prod.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Buscar por Tamaño o Producto"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Grid>
      </Grid>

      {/* Tabla */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {["id", "product_name", "size"].map((col) => (
                <TableCell key={col}>
                  <TableSortLabel
                    active={orderBy === col}
                    direction={orderBy === col ? order : "asc"}
                    onClick={() => handleRequestSort(col)}
                  >
                    {col.replace("_", " ").toUpperCase()}
                  </TableSortLabel>
                </TableCell>
              ))}
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredSizes
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((ps) => (
                <TableRow key={ps.id}>
                  <TableCell>{ps.id}</TableCell>
                  <TableCell>{ps.product_name}</TableCell>
                  <TableCell>{ps.size}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => { setSelectedSize(ps); setOpenEdit(true); }}>
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(ps.id)} color="error">
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Paginación */}
      <TablePagination
        component="div"
        count={filteredSizes.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 15]}
      />

      {openForm && <ProductSizeForm onClose={() => setOpenForm(false)} onSaved={fetchProductSizes} />}
      {openEdit && <ProductSizeEdit productSize={selectedSize} onClose={() => setOpenEdit(false)} onSaved={fetchProductSizes} />}
    </div>
  );
};

export default ProductSizeList;
