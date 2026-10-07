import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, IconButton, Button,
  TextField, MenuItem, Grid, TableSortLabel, TablePagination
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import ProductImageForm from "./ProductImageForm";
import ProductImageEdit from "./ProductImageEdit";

const ProductImageList = () => {
  const [productImages, setProductImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [search, setSearch] = useState("");
  const [openForm, setOpenForm] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Paginación
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Ordenamiento
  const [orderBy, setOrderBy] = useState("id");
  const [order, setOrder] = useState("asc");

  // Traer productos
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/productos");
    const data = await res.json();
    setProducts(data);
  };

  // Traer imágenes
  const fetchProductImages = async () => {
    const res = await fetch("http://localhost:5000/api/product-images");
    const data = await res.json();
    setProductImages(data);
    setFilteredImages(data);
  };

  useEffect(() => {
    fetchProducts();
    fetchProductImages();
  }, []);

  // Filtrado
  useEffect(() => {
    let filtered = productImages;

    if (selectedProduct) {
      filtered = filtered.filter(img => img.product_id === selectedProduct);
    }
    if (search) {
      const s = search.toLowerCase();
      filtered = filtered.filter(img =>
        img.color.toLowerCase().includes(s) ||
        (img.caracteristicas && img.caracteristicas.toLowerCase().includes(s))
      );
    }

    // Ordenamiento
    filtered.sort((a, b) => {
      if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
      if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredImages(filtered);
  }, [selectedProduct, search, productImages, order, orderBy]);

  // Cambiar página
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 15));
    setPage(0);
  };

  // Cambiar ordenamiento
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

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
        await fetch(`http://localhost:5000/api/product-images/${id}`, { method: "DELETE" });
        Swal.fire("Eliminado", "La imagen fue eliminada correctamente", "success");
        fetchProductImages();
      } catch (err) {
        console.error(err);
        Swal.fire("Error", "No se pudo eliminar la imagen", "error");
      }
    }
  };

  return (
    <div>
      <h2>Imágenes de Productos</h2>
      <Button variant="contained" color="primary" onClick={() => setOpenForm(true)}>
        Nueva Imagen
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
            label="Buscar por Color o Características"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {["id", "product_name", "color", "IMAGEN"].map((col) => (
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
            {filteredImages
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((img) => (
              <TableRow key={img.id}>
                <TableCell>{img.id}</TableCell>
                <TableCell>{img.product_name}</TableCell>
                <TableCell>{img.color}</TableCell>
                <TableCell>
                    {img.image_url ? (
                      <img src={img.image_url} alt={img.color} width="60" />
                    ) : "Sin imagen"}
                  </TableCell>
                {/*<TableCell>{img.image_url}</TableCell>
                <TableCell>{img.caracteristicas}</TableCell>*/}
                <TableCell>
                  <IconButton onClick={() => { setSelectedImage(img); setOpenEdit(true); }}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(img.id)} color="error">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={filteredImages.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 15]}
      />

      {openForm && <ProductImageForm onClose={() => setOpenForm(false)} onSaved={fetchProductImages} />}
      {openEdit && <ProductImageEdit productImage={selectedImage} onClose={() => setOpenEdit(false)} onSaved={fetchProductImages} />}
    </div>
  );
};

export default ProductImageList;

export { default as ProductImageList } from "./ProductImageList";
export { default as ProductImageForm } from "./ProductImageForm";
export { default as ProductImageEdit } from "./ProductImageEdit";
