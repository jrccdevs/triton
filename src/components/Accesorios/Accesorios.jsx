import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Stack,
  Button,
  Chip
} from '@mui/material';

// Íconos MUI Tácticos
import ShieldIcon from '@mui/icons-material/Shield';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import VerifiedIcon from '@mui/icons-material/Verified';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import FitScreenIcon from '@mui/icons-material/FitScreen';

// Componentes del Proyecto
import NavBar from '../NavBar';
import ProductCard from '../Pantalones/ProductCard';
import GaleriaAccesorios from './GaleriaAccesorios';
import Footer from '../Footer';

// Estilos compartidos (Variables de Modo Claro y Oscuro)
import '../../estilos/Seccion1.css';

// Imagen Principal
import Empresa from '../../img/accesorios.png';

export default function Accesorios() {
  const categorias = "accesorios";
  const [selectedSubcat, setSelectedSubcat] = useState('todos');

  const subcategorias = [
    { id: 'todos', label: 'TODO EL EQUIPO' },
    { id: 'mochilas', label: 'MOCHILAS & MOLLE' },
    { id: 'guantes', label: 'GUANTES & PROTECCIÓN' },
    { id: 'edc', label: 'HERRAMIENTAS EDC' }
  ];

  return (
    <Box className="seccion-principal-container" sx={{ minHeight: '100vh', pb: 4 }}>
      
      {/* 1. NAVEGACIÓN */}
      <NavBar />

      {/* 2. BANNER HERO DINÁMICO & CINEMÁTICO */}
      <Box
        component="section"
        sx={{
          mt: { xs: '65px', sm: '75px', md: '80px' },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="xl" sx={{ pt: { xs: 3, md: 4 }, pb: { xs: 2, md: 3 } }}>
          
          <Paper
            elevation={6}
            sx={{
              position: 'relative',
              borderRadius: { xs: 3, md: 5 },
              overflow: 'hidden',
              minHeight: { xs: 440, sm: 480, md: 520 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              p: { xs: 3, sm: 6, md: 8 },
              backgroundImage: `linear-gradient(135deg, rgba(10, 15, 29, 0.94) 0%, rgba(15, 23, 42, 0.82) 55%, rgba(15, 23, 42, 0.45) 100%), url(${Empresa})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            {/* Badges y HUD Táctico Superior */}
            <Box
              sx={{
                position: 'absolute',
                top: 24,
                right: 24,
                display: { xs: 'none', sm: 'flex' },
                alignItems: 'center',
                gap: 1,
                bgcolor: 'rgba(0, 0, 0, 0.65)',
                backdropFilter: 'blur(10px)',
                px: 2,
                py: 0.8,
                borderRadius: 2,
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <FitScreenIcon sx={{ color: '#10b981', fontSize: 18 }} />
              <Typography variant="caption" sx={{ color: '#ffffff !important', fontWeight: 800, letterSpacing: 1 }}>
                OPERACIONES ESPECIALES / NORMA MILITAR 810G
              </Typography>
            </Box>

            {/* Contenido en Blanco para Garantizar la Visibilidad */}
            <Stack spacing={2.5} sx={{ maxWidth: 680, zIndex: 2 }}>
              
              <Stack direction="row" spacing={1} alignItems="center">
                <Chip
                  icon={<FlashOnIcon sx={{ color: '#10b981 !important' }} />}
                  label="TRITON TÁCTICO 2026"
                  sx={{
                    fontWeight: 900,
                    fontSize: '0.75rem',
                    letterSpacing: 1.5,
                    bgcolor: 'rgba(16, 185, 129, 0.25)',
                    color: '#34d399 !important',
                    border: '1px solid rgba(16, 185, 129, 0.5)'
                  }}
                />
              </Stack>

              <Typography
                variant="h1"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: '2.2rem', sm: '3.4rem', md: '3.9rem' },
                  lineHeight: 1.08,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  color: '#ffffff !important',
                  textShadow: '0 4px 18px rgba(0, 0, 0, 0.8)'
                }}
              >
                EQUIPAMIENTO <br />
                <Box
                  component="span"
                  sx={{
                    color: '#818cf8 !important',
                    textShadow: '0 0 25px rgba(99, 102, 241, 0.5)'
                  }}
                >
                  MODULAR Y ACCESORIOS
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#e2e8f0 !important',
                  fontSize: { xs: '0.95rem', sm: '1.1rem' },
                  lineHeight: 1.6,
                  fontWeight: 500,
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.7)'
                }}
              >
                Diseñado para misiones de alto impacto. Explora mochilas con acople rápido MOLLE, arneses de grado militar, guantes reforzados y herramientas de supervivencia EDC.
              </Typography>

              <Stack direction="row" spacing={2} sx={{ pt: 1 }}>
                <Button
                  variant="contained"
                  href="#catalogo-accesorios"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    bgcolor: '#4f46e5',
                    color: '#ffffff !important',
                    fontWeight: 900,
                    px: 4,
                    py: 1.6,
                    borderRadius: 3,
                    fontSize: '0.9rem',
                    boxShadow: '0 10px 25px rgba(79, 70, 229, 0.5)',
                    textTransform: 'uppercase',
                    letterSpacing: 0.5,
                    '&:hover': {
                      bgcolor: '#4338ca',
                      boxShadow: '0 12px 28px rgba(79, 70, 229, 0.7)',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Explorar Catálogo
                </Button>
              </Stack>

            </Stack>
          </Paper>

        </Container>
      </Box>

      {/* 3. STRIP DE TARJETAS TÁCTICAS DINÁMICAS (ADAPTACIÓN PERFECTA CLARO/OSCURO) */}
      <Box sx={{ py: 2 }}>
        <Container maxWidth="xl">
          <Grid container spacing={2.5}>
            {[
              { title: 'CORDURA® 1000D', sub: 'Inmune a roturas y abrasión', icon: <PrecisionManufacturingIcon /> },
              { title: 'SISTEMA MOLLE 360°', sub: 'Acople de precisión modular', icon: <Inventory2Icon /> },
              { title: 'NORMA IMPERMEABLE', sub: 'Protección militar contra humedad', icon: <ShieldIcon /> },
              { title: 'HERRAMIENTAS EDC', sub: 'Aleaciones de titanio y acero', icon: <BuildCircleIcon /> }
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={0}
                  className="tarjeta-min-spec"
                  sx={{
                    p: 2.5,
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    height: '100%',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-tarjeta)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 12px 25px rgba(79, 70, 229, 0.15)',
                      borderColor: 'var(--color-accent)',
                      '& .icono-spec-box': {
                        bgcolor: 'var(--color-accent)',
                        color: '#ffffff',
                        transform: 'scale(1.1) rotate(5deg)'
                      }
                    }
                  }}
                >
                  <Box
                    className="icono-spec-box"
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2.5,
                      bgcolor: 'var(--bg-subtarjeta)',
                      color: 'var(--color-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 800,
                        fontSize: '0.88rem',
                        color: 'var(--texto-titulo)',
                        letterSpacing: 0.3
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: '0.78rem',
                        display: 'block',
                        color: 'var(--texto-cuerpo)',
                        mt: 0.3
                      }}
                    >
                      {item.sub}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. BARRA DE BENEFICIOS DINÁMICA DE ALTO IMPACTO */}
      <Box sx={{ my: 3 }}>
        <Container maxWidth="xl">
          <Paper
            elevation={0}
            className="barra-beneficios-container"
            sx={{
              py: 3,
              px: { xs: 2, md: 4 },
              borderRadius: 4,
              backgroundColor: 'var(--bg-tarjeta)',
              border: '1px solid var(--border-color)',
              boxShadow: '0 6px 20px rgba(0,0,0,0.04)'
            }}
          >
            <Grid container spacing={3} justifyContent="space-around" alignItems="center">
              {[
                { icon: <LocalShippingIcon sx={{ fontSize: 28 }} />, title: 'ENVÍO PRIORITARIO', sub: 'Despacho táctico express a todo el país' },
                { icon: <VerifiedIcon sx={{ fontSize: 28 }} />, title: 'GARANTÍA DE POR VIDA', sub: 'Probado rigurosamente en terreno operativo' },
                { icon: <AutoAwesomeIcon sx={{ fontSize: 28 }} />, title: 'ACCESORIOS ORIGINALES', sub: 'Sello oficial de calidad Triton Gear' }
              ].map((beneficio, idx) => (
                <Grid item xs={12} sm={4} key={idx}>
                  <Box
                    className="beneficio-item"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      p: 1,
                      borderRadius: 2,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        transform: 'translateX(4px)'
                      }
                    }}
                  >
                    <Box
                      sx={{
                        color: 'var(--color-accent)',
                        display: 'flex',
                        p: 1.2,
                        borderRadius: 3,
                        bgcolor: 'var(--bg-subtarjeta)'
                      }}
                    >
                      {beneficio.icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'var(--texto-titulo)', fontSize: '0.9rem' }}>
                        {beneficio.title}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'var(--texto-cuerpo)', fontSize: '0.78rem', display: 'block' }}>
                        {beneficio.sub}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* 5. GALERÍA BENTO GRID */}
      <Box className="seccion-galeria-wrapper" sx={{ py: { xs: 3, md: 5 } }}>
        <GaleriaAccesorios />
      </Box>

      {/* 6. CATÁLOGO CON FILTROS E-COMMERCE */}
      <Container id="catalogo-accesorios" maxWidth="xl" className="seccion-productos-wrapper" sx={{ pb: { xs: 8, md: 12 }, pt: 3 }}>
        
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'center' }}
          spacing={3}
          sx={{ mb: 4 }}
        >
          <Box>
            <Typography
              variant="h3"
              className="titulo-seccion-catalogo"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '1.8rem', sm: '2.5rem' },
                textTransform: 'uppercase',
                color: 'var(--texto-titulo)'
              }}
            >
              Módulo de Productos
            </Typography>
            <Typography variant="body2" sx={{ color: 'var(--texto-cuerpo)' }}>
              Selecciona el equipamiento necesario para completar tu configuración táctica
            </Typography>
          </Box>

          {/* Selector interactivo de subcategorías */}
          <Stack direction="row" spacing={1.5} sx={{ overflowX: 'auto', width: { xs: '100%', md: 'auto' }, pb: { xs: 1, md: 0 } }}>
            {subcategorias.map((sub) => {
              const active = selectedSubcat === sub.id;
              return (
                <Chip
                  key={sub.id}
                  label={sub.label}
                  onClick={() => setSelectedSubcat(sub.id)}
                  sx={{
                    fontWeight: 800,
                    px: 1.8,
                    py: 2.3,
                    borderRadius: 3,
                    cursor: 'pointer',
                    fontSize: '0.75rem',
                    letterSpacing: 0.5,
                    bgcolor: active ? 'var(--color-accent)' : 'var(--bg-tarjeta)',
                    color: active ? '#ffffff !important' : 'var(--texto-titulo)',
                    border: `1px solid ${active ? 'var(--color-accent)' : 'var(--border-color)'}`,
                    boxShadow: active ? '0 8px 20px rgba(79, 70, 229, 0.3)' : '0 2px 8px rgba(0,0,0,0.03)',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      bgcolor: active ? 'var(--color-accent)' : 'var(--bg-subtarjeta)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                />
              );
            })}
          </Stack>
        </Stack>

        {/* Rejilla de tarjetas de productos */}
        <Box className="contenedor-tarjetas-productos">
          <ProductCard categorias={categorias} />
        </Box>

      </Container>

      {/* 7. PIE DE PÁGINA */}
      <Footer />

    </Box>
  );
}