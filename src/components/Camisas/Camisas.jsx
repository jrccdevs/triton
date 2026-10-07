import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Stack,
  Chip,
  IconButton,
  LinearProgress,
  Avatar
} from '@mui/material';

// Iconos
import AirIcon from '@mui/icons-material/Air';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import StraightenIcon from '@mui/icons-material/Straighten';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import ShieldIcon from '@mui/icons-material/Shield';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import LayersIcon from '@mui/icons-material/Layers';

// Componentes del Proyecto
import NavBar from '../NavBar';
import ProductCard from '../Pantalones/ProductCard';
import GaleriaCamisas from './GaleriaCamisas';
import Footer from '../Footer';

// Imagen Principal
import ImagenCamisas from '../../img/poleras.png';

// CSS con soporte para .dark-mode
import '../../estilos/Seccion1.css';

// Datos interactivos para la consola de tecnologías
const tecnologiasCamisa = {
  'Athletic Fit': {
    titulo: 'Polera Tactical Athletic Fit',
    subtitulo: 'Ajuste anatómico de compresión media para máxima agilidad en movimiento.',
    respirabilidad: 95,
    elasticidad: 90,
    resistencia: 80,
    materiaPrima: 'Poliéster Ultra-Mesh + Elastano 15%',
    tags: ['Secado en 10 min', 'Panel Transpirable', 'Costuras Anti-Rozadura']
  },
  'Regular Táctico': {
    titulo: 'Camisa Operator Low-Profile',
    subtitulo: 'Diseño holgado de porte discreto con bolsillos de acceso rápido.',
    respirabilidad: 85,
    elasticidad: 65,
    resistencia: 95,
    materiaPrima: 'Ripstop 65/35 Algodón-Poliéster',
    tags: ['Bolsillos Ocultos', 'Repelente a Manchas', 'Protección UPF 50+']
  },
  'Combat Shirt': {
    titulo: 'Combat Shirt Milspec Pro',
    subtitulo: 'Torso elástico para uso con chaleco balístico y mangas reforzadas anti-desgarro.',
    respirabilidad: 90,
    elasticidad: 85,
    resistencia: 98,
    materiaPrima: 'Cuerpo Micro-Mesh + Mangas Cordura 500D',
    tags: ['Codos Reforzados', 'Velcro para Parches', 'Cierres YKK']
  }
};

export default function Camisas() {
  const [corteActivo, setCorteActivo] = useState('Athletic Fit');
  const [patronCamuflaje, setPatronCamuflaje] = useState('Multicam');

  const configActual = tecnologiasCamisa[corteActivo];

  return (
    <Box className="pantalones-hero-section" sx={{ minHeight: '100vh', pt: 1 }}>
      <NavBar />

      <Container maxWidth="xl" sx={{ pt: { xs: 2, md: 4 }, pb: 6 }} className="seccion-principal-container">
        
        {/* ================= HERO SHOWROOM TÁCTICO & INTERACTIVO ================= */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: 4,
            overflow: 'hidden',
            border: '1px solid rgba(150, 150, 150, 0.2)',
            mb: 5,
            bgcolor: 'background.paper'
          }}
        >
          <Grid container spacing={0}>
            
            {/* LADO IZQUIERDO: VISUALIZADOR DE PRENDA CON OVERLAYS DINÁMICOS */}
            <Grid
              item
              xs={12}
              lg={7}
              sx={{
                position: 'relative',
                minHeight: { xs: 380, md: 540 },
                bgcolor: '#0d1117',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}
            >
              <Box
                component="img"
                src={ImagenCamisas}
                alt="Camisa Táctica"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                  '&:hover': { transform: 'scale(1.03)' }
                }}
              />

              {/* OVERLAY SUPERIOR: BADGE DE ESTADO Y SELECTOR DE PATRÓN */}
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ position: 'absolute', top: 20, left: 20, right: 20, zIndex: 3 }}
              >
                <Chip
                  icon={<LocalFireDepartmentIcon sx={{ color: '#ff9800 !important' }} />}
                  label="SHOWROOM VIRTUAL 2026"
                  sx={{
                    bgcolor: 'rgba(0, 0, 0, 0.75)',
                    color: '#fff',
                    fontWeight: 800,
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                />

                {/* Selector rápido de camuflajes/colores */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 0.8,
                    px: 1.5,
                    borderRadius: 3,
                    bgcolor: 'rgba(0, 0, 0, 0.75)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  <Typography variant="caption" sx={{ color: '#fff', fontWeight: 700, mr: 0.5 }}>
                    Patrón:
                  </Typography>
                  {['Multicam', 'Negro Táctico', 'Coyote'].map((patron) => (
                    <Chip
                      key={patron}
                      label={patron}
                      size="small"
                      onClick={() => setPatronCamuflaje(patron)}
                      sx={{
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        bgcolor: patronCamuflaje === patron ? 'primary.main' : 'rgba(255, 255, 255, 0.15)',
                        color: '#ffffff',
                        '&:hover': { bgcolor: 'primary.dark' }
                      }}
                    />
                  ))}
                </Paper>
              </Stack>

              {/* OVERLAY INFERIOR: TARJETA FLOTANTE CON LA MATERIA PRIMA */}
              <Paper
                elevation={4}
                sx={{
                  position: 'absolute',
                  bottom: 20,
                  left: 20,
                  right: 20,
                  p: 2,
                  borderRadius: 3,
                  bgcolor: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(12px)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: 1.5
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1.5}>
                  <Avatar sx={{ bgcolor: 'primary.main', color: '#fff' }}>
                    <LayersIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="caption" sx={{ opacity: 0.7, fontWeight: 700, display: 'block', lineHeight: 1 }}>
                      COMPOSICIÓN TÉCNICA ({patronCamuflaje.toUpperCase()})
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 900 }}>
                      {configActual.materiaPrima}
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={1}>
                  {configActual.tags.map((tag, idx) => (
                    <Chip
                      key={idx}
                      label={tag}
                      size="small"
                      sx={{
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        color: '#fff',
                        border: '1px solid rgba(255,255,255,0.2)'
                      }}
                    />
                  ))}
                </Stack>
              </Paper>
            </Grid>

            {/* LADO DERECHO: CONSOLA DE CONFIGURACIÓN & METRICAS DE RENDIMIENTO */}
            <Grid
              item
              xs={12}
              lg={5}
              sx={{
                p: { xs: 3, sm: 4, md: 5 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <Box>
                {/* SELECTOR DE CORTE CON EFECTO ACTIVO */}
                <Typography variant="caption" sx={{ fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', opacity: 0.6, display: 'block', mb: 1.5 }}>
                  1. SELECCIONA EL PERFIL DE CORTE:
                </Typography>

                <Grid container spacing={1} mb={3}>
                  {Object.keys(tecnologiasCamisa).map((corte) => {
                    const activo = corteActivo === corte;
                    return (
                      <Grid item xs={4} key={corte}>
                        <Paper
                          elevation={0}
                          onClick={() => setCorteActivo(corte)}
                          sx={{
                            p: 1.5,
                            textAlign: 'center',
                            borderRadius: 2.5,
                            cursor: 'pointer',
                            border: '2px solid',
                            borderColor: activo ? 'primary.main' : 'rgba(150, 150, 150, 0.2)',
                            bgcolor: activo ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
                            transition: 'all 0.2s ease',
                            '&:hover': { borderColor: 'primary.main' }
                          }}
                        >
                          <FitScreenIcon color={activo ? 'primary' : 'action'} sx={{ mb: 0.5 }} />
                          <Typography variant="body2" sx={{ fontWeight: 800, fontSize: '0.75rem', lineHeight: 1.1 }}>
                            {corte}
                          </Typography>
                        </Paper>
                      </Grid>
                    );
                  })}
                </Grid>

                {/* TITULO Y DESCRIPCIÓN DINÁMICA */}
                <Typography variant="h4" sx={{ fontWeight: 900, textTransform: 'uppercase', mb: 1 }}>
                  {configActual.titulo}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8, mb: 4 }}>
                  {configActual.subtitulo}
                </Typography>

                {/* MÉTRICAS DE RENDIMIENTO TÉCNICO */}
                <Typography variant="caption" sx={{ fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', opacity: 0.6, display: 'block', mb: 2 }}>
                  2. RENDIMIENTO EN TERRENO:
                </Typography>

                <Stack spacing={2} mb={4}>
                  <Box>
                    <Stack direction="row" justifyContent="space-between" mb={0.5}>
                      <Typography variant="caption" sx={{ fontWeight: 800 }}>Respirabilidad & Evacuación Dry-Fit</Typography>
                      <Typography variant="caption" sx={{ fontWeight: 900, color: 'primary.main' }}>{configActual.respirabilidad}%</Typography>
                    </Stack>
                    <LinearProgress variant="determinate" value={configActual.respirabilidad} sx={{ height: 8, borderRadius: 4 }} />
                  </Box>

                  <Box>
                    <Stack direction="row" justifyContent="space-between" mb={0.5}>
                      <Typography variant="caption" sx={{ fontWeight: 800 }}>Elasticidad Articular (4-Way Stretch)</Typography>
                      <Typography variant="caption" sx={{ fontWeight: 900, color: 'primary.main' }}>{configActual.elasticidad}%</Typography>
                    </Stack>
                    <LinearProgress variant="determinate" value={configActual.elasticidad} sx={{ height: 8, borderRadius: 4 }} />
                  </Box>

                  <Box>
                    <Stack direction="row" justifyContent="space-between" mb={0.5}>
                      <Typography variant="caption" sx={{ fontWeight: 800 }}>Resistencia Ripstop / Fricción</Typography>
                      <Typography variant="caption" sx={{ fontWeight: 900, color: 'primary.main' }}>{configActual.resistencia}%</Typography>
                    </Stack>
                    <LinearProgress variant="determinate" value={configActual.resistencia} sx={{ height: 8, borderRadius: 4 }} />
                  </Box>
                </Stack>
              </Box>

              {/* BOTÓN DE ACCIÓN */}
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  borderRadius: 3,
                  py: 1.8,
                  fontWeight: 900,
                  textTransform: 'none',
                  fontSize: '1rem'
                }}
              >
                Ver Diseños en {corteActivo}
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* ================= CATÁLOGO DE PRODUCTOS ================= */}
        <Box sx={{ mb: 6 }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'flex-end' }} mb={3}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 900, textTransform: 'uppercase' }}>
                Catálogo de Poleras y Camisas
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.75 }}>
                Elige el modelo adecuado según tus necesidades tácticas o urbanas.
              </Typography>
            </Box>
          </Stack>

          <ProductCard categorias="camisas" />
        </Box>

        {/* ================= GALERÍA INTERACTIVA / LOOKBOOK ================= */}
        <Box sx={{ mt: 6 }}>
          <GaleriaCamisas />
        </Box>

      </Container>

      <Footer />
    </Box>
  );
}