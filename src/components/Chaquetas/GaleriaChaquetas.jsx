import React, { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Stack,
  Chip,
  IconButton,
  Avatar
} from '@mui/material';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

// Importamos exactamente el CSS global de tu proyecto
import '../../estilos/Seccion1.css';

const coleccionLookbook = [
  {
    id: 1,
    tag: 'EDICIÓN ESPECIAL 2026',
    titulo: 'Chaqueta Softshell Storm-Pro 500D',
    subtitulo: 'Aislamiento Térmico y Membrana DWR Impermeable',
    precio: '$129.99',
    imagenPrincipal: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80',
    detallesTecnicos: [
      { punto: 'Membrana Hydro-Shield', desc: '10.000 mm de columna de agua.' },
      { punto: 'Cierres YKK Aquaguard', desc: 'Sellado hermético anti-filtraciones.' },
      { punto: 'Refuerzo Cordura', desc: 'Alta resistencia al roce de mochila.' }
    ]
  },
  {
    id: 2,
    tag: 'OPERACIONES EN FRÍO',
    titulo: 'Polar Fleece Tactical Arctic',
    subtitulo: 'Retención de Calor Corporal con Tejido Ultra-Respirable',
    precio: '$89.99',
    imagenPrincipal: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1000&q=80',
    detallesTecnicos: [
      { punto: 'Micro-Fleece 300g', desc: 'Capacidad de retención de calor rápida.' },
      { punto: 'Paneles de Velcro', desc: 'Soporte para parches e identificación.' },
      { punto: 'Corte Anatómico', desc: 'Libertad de movimiento articular.' }
    ]
  },
  {
    id: 3,
    tag: 'URBANO & ENTRENAMIENTO',
    titulo: 'Cortavientos Recon Ultra-Light',
    subtitulo: 'Capa Protectora Milspec Compresible y Plegable',
    precio: '$74.99',
    imagenPrincipal: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1000&q=80',
    detallesTecnicos: [
      { punto: 'Tejido Ripstop Antidesgarro', desc: 'Nailon de alta densidad.' },
      { punto: 'Ventilación Axilar', desc: 'Cierres respirables pasivos.' },
      { punto: 'Bolsillo Compacto', desc: 'Guardado ultra-reducido.' }
    ]
  }
];

export default function GaleriaChaquetas() {
  const [indiceActivo, setIndiceActivo] = useState(0);

  const itemActivo = coleccionLookbook[indiceActivo];

  const handleAnterior = () => {
    setIndiceActivo((prev) => (prev === 0 ? coleccionLookbook.length - 1 : prev - 1));
  };

  const handleSiguiente = () => {
    setIndiceActivo((prev) => (prev === coleccionLookbook.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box sx={{ py: 3 }}>
      {/* TÍTULO DE LA SECCIÓN LOOKBOOK */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Box>
          <Chip
            label="GALERÍA INTERACTIVA"
            color="primary"
            size="small"
            sx={{ fontWeight: 800, mb: 1, letterSpacing: 0.5 }}
          />
          <Typography variant="h4" sx={{ fontWeight: 900, textTransform: 'uppercase' }}>
            Lookbook Táctico en Detalle
          </Typography>
        </Box>

        {/* Botones Nav del Carousel */}
        <Stack direction="row" spacing={1}>
          <IconButton
            onClick={handleAnterior}
            sx={{
              border: '1px solid rgba(150, 150, 150, 0.3)',
              borderRadius: 2,
              '&:hover': { bgcolor: 'action.hover' }
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          <IconButton
            onClick={handleSiguiente}
            sx={{
              border: '1px solid rgba(150, 150, 150, 0.3)',
              borderRadius: 2,
              '&:hover': { bgcolor: 'action.hover' }
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>

      {/* STAGE PRINCIPAL (Estructura Split Escenario) */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: 4,
          overflow: 'hidden',
          border: '1px solid rgba(150, 150, 150, 0.2)',
          mb: 3
        }}
      >
        <Grid container spacing={0}>
          {/* LADO IZQUIERDO: VISOR FOTOGRÁFICO DE IMPACTO */}
          <Grid item xs={12} md={7} sx={{ position: 'relative', minHeight: { xs: 350, md: 480 }, bgcolor: '#0a0a0a' }}>
            <Box
              component="img"
              src={itemActivo.imagenPrincipal}
              alt={itemActivo.titulo}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'all 0.5s ease-in-out'
              }}
            />

            {/* Badge Flotante Tag */}
            <Chip
              label={itemActivo.tag}
              sx={{
                position: 'absolute',
                top: 20,
                left: 20,
                fontWeight: 800,
                bgcolor: 'rgba(0,0,0,0.75)',
                color: '#fff',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            />
          </Grid>

          {/* LADO DERECHO: ESPECIFICACIONES Y PUNTOS DE INTERÉS */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              p: { xs: 3, md: 4 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 900, mb: 1, textTransform: 'uppercase' }}>
                {itemActivo.titulo}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8, mb: 3 }}>
                {itemActivo.subtitulo}
              </Typography>

              {/* Puntos de interés tácticos */}
              <Typography variant="caption" sx={{ fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', display: 'block', mb: 2, opacity: 0.6 }}>
                INSPECCIÓN DE PUNTOS CLAVE
              </Typography>

              <Stack spacing={2} mb={3}>
                {itemActivo.detallesTecnicos.map((det, i) => (
                  <Paper
                    key={i}
                    elevation={0}
                    sx={{
                      p: 1.8,
                      borderRadius: 2.5,
                      border: '1px solid rgba(150, 150, 150, 0.2)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1.5,
                      bgcolor: 'rgba(150, 150, 150, 0.05)'
                    }}
                  >
                    <CheckCircleIcon color="primary" sx={{ fontSize: 20, mt: 0.2 }} />
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
                        {det.punto}
                      </Typography>
                      <Typography variant="caption" sx={{ opacity: 0.75, display: 'block', mt: 0.3 }}>
                        {det.desc}
                      </Typography>
                    </Box>
                  </Paper>
                ))}
              </Stack>
            </Box>

            {/* Acción y Precio */}
            <Stack direction="row" justifyContent="space-between" alignItems="center" pt={2} sx={{ borderTop: '1px solid rgba(150, 150, 150, 0.2)' }}>
              <Box>
                <Typography variant="caption" sx={{ opacity: 0.6, fontWeight: 700, display: 'block' }}>
                  PRECIO SUGERIDO
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 900, color: 'primary.main' }}>
                  {itemActivo.precio}
                </Typography>
              </Box>

              <Button
                variant="contained"
                startIcon={<ShoppingBagOutlinedIcon />}
                sx={{ borderRadius: 3, px: 3, py: 1.2, fontWeight: 800, textTransform: 'none' }}
              >
                Añadir al Carrito
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      {/* TIRILLA DE MINIATURAS (THUMBNAILS NAVEGABLES) */}
      <Grid container spacing={2}>
        {coleccionLookbook.map((item, index) => {
          const isSelected = index === indiceActivo;
          return (
            <Grid item xs={12} sm={4} key={item.id}>
              <Paper
                elevation={0}
                onClick={() => setIndiceActivo(index)}
                sx={{
                  p: 1.5,
                  borderRadius: 3,
                  cursor: 'pointer',
                  border: '2px solid',
                  borderColor: isSelected ? 'primary.main' : 'rgba(150, 150, 150, 0.2)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  bgcolor: isSelected ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
                  '&:hover': {
                    borderColor: 'primary.main'
                  }
                }}
              >
                <Avatar
                  src={item.imagenPrincipal}
                  variant="rounded"
                  sx={{ width: 56, height: 56, borderRadius: 2 }}
                />
                <Box sx={{ overflow: 'hidden' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.titulo}
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.7, display: 'block' }}>
                    {item.precio}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}