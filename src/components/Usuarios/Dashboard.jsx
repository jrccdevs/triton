import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  Grid,
  Paper,
  IconButton,
  Avatar,
  Divider,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  People,
  ShoppingCart,
  BarChart,
  Menu as MenuIcon,
  Logout,
} from "@mui/icons-material";
import ProductList from "../productos/ProductList";
import CategoriaList from "../crud/categoria/CategoriaList"
import ProductSizeList from "../crud/product_size/ProductSizeList"
import ProductImageList from "../crud/product_images/ProductImageList"
import ColorImageList from "../crud/color_image/ColorImageList"
import { Category } from "@mui/icons-material";
const drawerWidth = 240;

const Dashboard = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "Usuarios", icon: <People /> },
    { text: "Productos", icon: <ShoppingCart /> },
    { text: "Categorias", icon: <Category /> },
    { text: "Tallas", icon: <Category /> },
    { text: "Imagenes Producto", icon: <Category /> },
    { text: "Color Producto", icon: <Category /> },
    { text: "Ventas", icon: <BarChart /> },
  ];

  return (
    <Box sx={{ display: "flex", bgcolor: "#f4f6f8", minHeight: "100vh" }}>
      <CssBaseline />

      {/* Barra superior */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
          boxShadow: 3,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton color="inherit" edge="start" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ fontWeight: "bold" }}>
              Panel de Administración
            </Typography>
          </Box>

          {/* Avatar de usuario */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="body1">Admin</Typography>
            <Avatar sx={{ bgcolor: "secondary.main" }}>A</Avatar>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Menú lateral */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "#ffffff",
            borderRight: "1px solid #e0e0e0",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "primary.main", mb: 2 }}>
            Menú
          </Typography>
          <Divider />
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={item.text}
                selected={selectedIndex === index}
                onClick={() => setSelectedIndex(index)}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  "&.Mui-selected": {
                    bgcolor: "primary.main",
                    color: "white",
                    "& .MuiListItemIcon-root": { color: "white" },
                  },
                  "&:hover": {
                    bgcolor: "primary.light",
                    color: "white",
                    "& .MuiListItemIcon-root": { color: "white" },
                  },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          <Divider sx={{ mt: 2, mb: 2 }} />
          <ListItem button sx={{ borderRadius: 2 }}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Cerrar sesión" />
          </ListItem>
        </Box>
      </Drawer>

      {/* Contenido principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
        }}
      >
        <Toolbar />

        {/* Render dinámico según el menú */}
        {selectedIndex === 0 && (
          <>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ mb: 4, fontWeight: "bold", color: "primary.main" }}
            >
              Bienvenido al Dashboard
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Paper
                  sx={{
                    p: 3,
                    textAlign: "center",
                    boxShadow: 4,
                    borderRadius: 4,
                    bgcolor: "white",
                  }}
                >
                  <Avatar sx={{ bgcolor: "primary.main", mb: 2, mx: "auto" }}>
                    <People />
                  </Avatar>
                  <Typography variant="h6">Usuarios</Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "primary.main" }}
                  >
                    120
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper
                  sx={{
                    p: 3,
                    textAlign: "center",
                    boxShadow: 4,
                    borderRadius: 4,
                    bgcolor: "white",
                  }}
                >
                  <Avatar sx={{ bgcolor: "secondary.main", mb: 2, mx: "auto" }}>
                    <ShoppingCart />
                  </Avatar>
                  <Typography variant="h6">Productos</Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "secondary.main" }}
                  >
                    58
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper
                  sx={{
                    p: 3,
                    textAlign: "center",
                    boxShadow: 4,
                    borderRadius: 4,
                    bgcolor: "white",
                  }}
                >
                  <Avatar sx={{ bgcolor: "success.main", mb: 2, mx: "auto" }}>
                    <BarChart />
                  </Avatar>
                  <Typography variant="h6">Ventas</Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "success.main" }}
                  >
                    $12,340
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </>
        )}

        {selectedIndex === 1 && (
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Gestión de Usuarios
          </Typography>
        )}

        {selectedIndex === 2 && <ProductList />}
        {selectedIndex === 3 && <CategoriaList />}
        {selectedIndex === 4 && <ProductSizeList />}
        {selectedIndex === 5 && <ProductImageList />}
        {selectedIndex === 6 && <ColorImageList />}
        {selectedIndex === 7 && (
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Gestión de Ventas
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;
