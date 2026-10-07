import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Breadcrumbs,
  Link,
  Chip,
  Paper,
  InputAdornment,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  ToggleButton,
  ToggleButtonGroup,
  Stack,
  Button,
  Drawer,
  IconButton,
  Divider
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';
import SecurityIcon from '@mui/icons-material/Security';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import FlashOnIcon from '@mui/icons-material/FlashOn';

// Imports exactos del proyecto
import NavBar from '../NavBar';
import ProductCard from './ProductCard';
import GaleriaPants from './GaleriaPants';
import Footer from '../Footer';
import Empresa from '../../img/homepage.webp';
import '../../estilos/Seccion1.css';
//import '../../css/Pantalones.css';

export default function Pantalones() {
  const [searchQuery, setSearchQuery] = useState('');
  const [subCategoria, setSubCategoria] = useState('todos');
  const [orden, setOrden] = useState('populares');
  const [vistaGrid, setVistaGrid] = useState('grid');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const categorias = 'pantalones';

  const subCategoriasList = [
    { id: 'todos', label: 'Todos los Pantalones' },
    { id: 'ripstop', label: 'Ripstop Táctico' },
    { id: 'cargo', label: 'Operativo Cargo' },
    { id: 'termicos', label: 'Térmicos y Membrana' },
    { id: 'urbano', label: 'Low-Profile / Urbano' }
  ];

  const techFeatures = [
    {
      icon: <SecurityIcon color="primary" sx={{ fontSize: 30 }} />,
      title: 'Tejido Anti-desgarro',
      desc: 'Refuerzo Ripstop 500D resistente a tracciones e impactos severos en el terreno.'
    },
    {
      icon: <WaterDropIcon color="primary" sx={{ fontSize: 30 }} />,
      title: 'Tratamiento DWR Teflón',
      desc: 'Repelente al agua, aceites y manchas de barro para mantenerte seco.'
    },
    {
      icon: <LocalOfferIcon color="primary" sx={{ fontSize: 30 }} />,
      title: 'Ergonomía 3D',
      desc: 'Corte anatómico articulado en rodillas para máxima movilidad sin fricción.'
    }
  ];

  const handleScrollToProducts = () => {
    const section = document.getElementById('catalogo-pantalones');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box className="pantalones-main-wrapper" sx={{ minHeight: '100vh' }}>
      {/* NAVEGACIÓN */}
      <NavBar />

      {/* 1. HERO BANNER ADAPTABLE */}
      <Box
        className="pantalones-hero-section"
        sx={{
          py: { xs: 4, md: 6 },
          pb: { xs: 8, md: 10 },
          borderBottom: '1px solid rgba(0,0,0,0.08)'
        }}
      >
        <Container maxWidth="lg">
          {/* Breadcrumbs */}
          <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
            >
              <HomeIcon sx={{ fontSize: 18 }} />
              Inicio
            </Link>
            <Typography color="primary" sx={{ fontWeight: 700 }}>
              Pantalones Tácticos
            </Typography>
          </Breadcrumbs>

          <Grid container spacing={4} alignItems="center">
            {/* Texto Principal */}
            <Grid item xs={12} md={7}>
              <Box>
                <Chip
                  icon={<FlashOnIcon color="primary" />}
                  label="EQUIPAMIENTO OPERATIVO DE ALTO RENDIMIENTO"
                  variant="outlined"
                  color="primary"
                  sx={{
                    fontWeight: 800,
                    fontSize: '0.75rem',
                    letterSpacing: 1,
                    mb: 2.5
                  }}
                />

                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: '2.2rem', sm: '3.2rem', md: '3.8rem' },
                    lineHeight: 1.1,
                    textTransform: 'uppercase',
                    letterSpacing: '-1px',
                    mb: 2
                  }}
                >
                  Paso Firme. <br />
                  <Box component="span" color="primary.main">
                    Camuflaje Letal.
                  </Box>
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.15rem' },
                    lineHeight: 1.7,
                    maxWidth: 580,
                    mb: 4
                  }}
                >
                  Los pantalones tácticos Multicam están hechos para la acción real. Diseñados con tejidos resistentes, bolsillos estratégicos y libertad total de movimiento para durabilidad indestructible en cada paso.
                </Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleScrollToProducts}
                    sx={{
                      fontWeight: 800,
                      px: 4,
                      py: 1.6,
                      fontSize: '1rem',
                      borderRadius: 2,
                      textTransform: 'uppercase'
                    }}
                  >
                    Ver Catálogo Ahora
                  </Button>
                </Stack>

                {/* Métricas / Badges rápidos */}
                <Stack direction="row" spacing={3} sx={{ pt: 2, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>100%</Typography>
                    <Typography variant="caption" color="text.secondary">Ripstop 500D</Typography>
                  </Box>
                  <Divider orientation="vertical" flexItem />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>8+</Typography>
                    <Typography variant="caption" color="text.secondary">Bolsillos Tácticos</Typography>
                  </Box>
                  <Divider orientation="vertical" flexItem />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                      <VerifiedUserIcon color="primary" sx={{ fontSize: 20, verticalAlign: 'middle', mr: 0.5 }} />
                      Garantía
                    </Typography>
                    <Typography variant="caption" color="text.secondary">Uso Intenso</Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>

            {/* Imagen del Hero encuadrada */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                  border: '1px solid rgba(0,0,0,0.1)',
                  maxHeight: 480
                }}
              >
                <Box
                  component="img"
                  src={Empresa}
                  alt="Pantalón Táctico TRITON"
                  sx={{
                    width: '100%',
                    height: '100%',
                    maxHeight: 480,
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 2. TARJETAS DESTACADAS DE TECNOLOGÍA */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
        <Grid container spacing={2}>
          {techFeatures.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={1}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)'
                  }
                }}
              >
                <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: 'action.hover' }}>
                  {item.icon}
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5, lineHeight: 1.3 }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

     

      {/* 4. LISTADO PRINCIPAL DE PRODUCTOS */}
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h5" sx={{ fontWeight: 800 }}>
            Catálogo de Pantalones Tácticos
          </Typography>
        </Box>

        {/* COMPONENTE PRODUCT CARD */}
        <ProductCard
          categorias={categorias}
          searchQuery={searchQuery}
          subCategoria={subCategoria}
          orden={orden}
          vistaGrid={vistaGrid}
        />
      </Container>

      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h5" sx={{ fontWeight: 800 }}>
            Catálogo de Pantalones Tácticos
          </Typography>
        </Box>

        {/* COMPONENTE PRODUCT CARD */}
        <GaleriaPants/>
      </Container>

      {/* 5. DRAWER LATERAL PARA MÓVILES */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: { width: 280, p: 3 }
          }
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            Filtros Tácticos
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 3 }} />

        <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1.5 }}>
          Subcategorías
        </Typography>
        <Stack spacing={1}>
          {subCategoriasList.map((cat) => (
            <Chip
              key={cat.id}
              label={cat.label}
              clickable
              color={subCategoria === cat.id ? 'primary' : 'default'}
              variant={subCategoria === cat.id ? 'filled' : 'outlined'}
              onClick={() => {
                setSubCategoria(cat.id);
                setDrawerOpen(false);
              }}
              sx={{ justifyContent: 'flex-start', py: 2, fontWeight: 700 }}
            />
          ))}
        </Stack>
      </Drawer>

      {/* PIE DE PÁGINA */}
      <Footer />
    </Box>
  );
}