import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Chip,
  Button,
  Stack,
  IconButton,
  LinearProgress,
  Tooltip,
  Fade
} from '@mui/material';

// Íconos MUI Tácticos
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ShieldIcon from '@mui/icons-material/Shield';
import SpeedIcon from '@mui/icons-material/Speed';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';

// Estilos globales de la app
import '../../estilos/Seccion1.css';

// Equipamiento Militar Avanzado con Métricas
const equipamientoLote = [
  {
    id: 1,
    codigo: 'SPEC-01 // RUSH-72',
    nombre: 'Mochila Asalto Misión 72H',
    categoria: 'SISTEMA DE CARGA MODULAR',
    tag: 'EDICIÓN MIL-SPEC',
    img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80',
    descripcion: 'Diseñada con ingeniería de dispersión de carga para misiones de hasta 72 horas. Chasis en Cordura® 1050D con recubrimiento de fluorocarbono repelente al agua.',
    metrics: [
      { label: 'Resistencia a la Abrasión', val: 98, icon: <ShieldIcon sx={{ fontSize: 16 }} /> },
      { label: 'Grado de Impermeabilidad', val: 92, icon: <WaterDropIcon sx={{ fontSize: 16 }} /> },
      { label: 'Capacidad de Carga Modular', val: 95, icon: <PrecisionManufacturingIcon sx={{ fontSize: 16 }} /> },
      { label: 'Ergonomía & Movilidad', val: 88, icon: <SpeedIcon sx={{ fontSize: 16 }} /> }
    ],
    highlights: ['Cordura® 1050D', 'Capacidad 72L', 'Cierres YKK® Watertight', 'Bolsillo Hidratación 3L']
  },
  {
    id: 2,
    codigo: 'SPEC-02 // TITAN-VEST',
    nombre: 'Chaleco Porta Placas Titán',
    categoria: 'PROTECCIÓN BALÍSTICA',
    tag: 'ALTO IMPACTO',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
    descripcion: 'Estructura ligera con sistema de desacople rápido mediante tirador monofilamento. Acolchado interior en malla 3D transpirable antiséptica.',
    metrics: [
      { label: 'Resistencia a la Abrasión', val: 95, icon: <ShieldIcon sx={{ fontSize: 16 }} /> },
      { label: 'Grado de Impermeabilidad', val: 75, icon: <WaterDropIcon sx={{ fontSize: 16 }} /> },
      { label: 'Capacidad de Carga Modular', val: 90, icon: <PrecisionManufacturingIcon sx={{ fontSize: 16 }} /> },
      { label: 'Ergonomía & Movilidad', val: 96, icon: <SpeedIcon sx={{ fontSize: 16 }} /> }
    ],
    highlights: ['Panel Balístico NIJ IV', 'Sistema Quick-Release', 'Malla 3D Termorreguladora', 'Nylon 1000D']
  },
  {
    id: 3,
    codigo: 'SPEC-03 // EDC-TITANIUM',
    nombre: 'Kit Sobrevivencia EDC Pro',
    categoria: 'HERRAMIENTAS DE PRECISIÓN',
    tag: 'TITANIO GRADO 5',
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80',
    descripcion: 'Instrumental indispensable de supervivencia urbana y táctica. Construido en aleaciones de titanio grado militar inoxidable y funda moldeada en Kydex®.',
    metrics: [
      { label: 'Resistencia a la Abrasión', val: 100, icon: <ShieldIcon sx={{ fontSize: 16 }} /> },
      { label: 'Grado de Impermeabilidad', val: 100, icon: <WaterDropIcon sx={{ fontSize: 16 }} /> },
      { label: 'Capacidad de Carga Modular', val: 80, icon: <PrecisionManufacturingIcon sx={{ fontSize: 16 }} /> },
      { label: 'Ergonomía & Movilidad', val: 99, icon: <SpeedIcon sx={{ fontSize: 16 }} /> }
    ],
    highlights: ['Titanio Grado 5', 'Linterna 2000lm', 'Acero 440C Antirreflejo', 'Funda Kydex®']
  }
];

export default function GaleriaAccesorios() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scanning, setScanning] = useState(false);

  const activeItem = equipamientoLote[currentIndex];

  const handleNext = () => {
    setScanning(true);
    setCurrentIndex((prev) => (prev + 1) % equipamientoLote.length);
    setTimeout(() => setScanning(false), 800);
  };

  const handlePrev = () => {
    setScanning(true);
    setCurrentIndex((prev) => (prev - 1 + equipamientoLote.length) % equipamientoLote.length);
    setTimeout(() => setScanning(false), 800);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      
      {/* 1. CABECERA CON ESTILO RACK OPERATIVO */}
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', md: 'flex-end' }}
        spacing={2}
        sx={{ mb: 4 }}
      >
        <Box>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
            <GpsFixedIcon sx={{ color: 'var(--color-accent)', fontSize: 20 }} />
            <Typography
              variant="caption"
              sx={{
                fontWeight: 900,
                letterSpacing: 2,
                color: 'var(--color-accent)',
                textTransform: 'uppercase'
              }}
            >
              CÁMORA DE INSPECCIÓN Y RENDIMIENTO
            </Typography>
          </Stack>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '1.8rem', sm: '2.5rem' },
              textTransform: 'uppercase',
              color: 'var(--texto-titulo)'
            }}
          >
            Showcase de Armamento & Equipamiento
          </Typography>
        </Box>

        {/* SELECTORES DE CONTROLES */}
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Typography variant="caption" sx={{ fontWeight: 800, color: 'var(--texto-cuerpo)', mr: 1 }}>
            0{currentIndex + 1} / 0{equipamientoLote.length}
          </Typography>

          <IconButton
            onClick={handlePrev}
            sx={{
              bgcolor: 'var(--bg-tarjeta)',
              color: 'var(--texto-titulo)',
              border: '1px solid var(--border-color)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              '&:hover': { bgcolor: 'var(--color-accent)', color: '#ffffff' }
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              bgcolor: 'var(--bg-tarjeta)',
              color: 'var(--texto-titulo)',
              border: '1px solid var(--border-color)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              '&:hover': { bgcolor: 'var(--color-accent)', color: '#ffffff' }
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>

      {/* 2. RACK PRINCIPAL DUAL (IMAGEN ESCANEO 3D + PANEL DE METRICAS) */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: 5,
          overflow: 'hidden',
          backgroundColor: 'var(--bg-tarjeta)',
          border: '1px solid var(--border-color)',
          boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
          position: 'relative'
        }}
      >
        <Grid container spacing={0}>
          
          {/* COLUMNA IZQUIERDA: VISOR CON EFECTO LÁSER HUD */}
          <Grid item xs={12} lg={6} sx={{ position: 'relative', minHeight: { xs: 360, sm: 480, lg: 580 } }}>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                backgroundImage: `linear-gradient(180deg, rgba(10,15,29,0.2) 0%, rgba(10,15,29,0.85) 100%), url(${activeItem.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: { xs: 3, sm: 4 }
              }}
            >
              {/* LÍNEA LÁSER DE ESCANEO DINÁMICO */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent, #10b981, #6366f1, transparent)',
                  boxShadow: '0 0 15px #10b981',
                  animation: scanning ? 'scanAnimation 0.8s ease-in-out infinite' : 'none',
                  zIndex: 3,
                  '@keyframes scanAnimation': {
                    '0%': { top: '0%' },
                    '50%': { top: '98%' },
                    '100%': { top: '0%' }
                  }
                }}
              />

              {/* BADGES TOP HUD */}
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ zIndex: 2 }}>
                <Chip
                  label={activeItem.tag}
                  sx={{
                    fontWeight: 900,
                    fontSize: '0.7rem',
                    letterSpacing: 1,
                    bgcolor: 'rgba(10, 15, 29, 0.8)',
                    color: '#34d399 !important',
                    border: '1px solid rgba(52, 211, 153, 0.4)',
                    backdropFilter: 'blur(8px)'
                  }}
                />

                <Chip
                  icon={<AutoAwesomeIcon sx={{ color: '#818cf8 !important', fontSize: '14px !important' }} />}
                  label="HUD ACTIVE v2.6"
                  sx={{
                    fontWeight: 800,
                    fontSize: '0.68rem',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    color: '#ffffff !important',
                    backdropFilter: 'blur(8px)'
                  }}
                />
              </Stack>

              {/* TÍTULO EN LA IMAGEN */}
              <Box sx={{ zIndex: 2 }}>
                <Typography
                  variant="caption"
                  sx={{ color: '#a5b4fc !important', fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase' }}
                >
                  {activeItem.codigo}
                </Typography>

                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 900,
                    color: '#ffffff !important',
                    textTransform: 'uppercase',
                    fontSize: { xs: '1.5rem', sm: '2.1rem' },
                    lineHeight: 1.1,
                    mt: 0.5
                  }}
                >
                  {activeItem.nombre}
                </Typography>
              </Box>

            </Box>
          </Grid>

          {/* COLUMNA DERECHA: TELEMETRÍA Y MÉTRICAS DE RENDIMIENTO */}
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                p: { xs: 3, sm: 5 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <Box>
                
                {/* Categoría y Código */}
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 800,
                    letterSpacing: 1.5,
                    color: 'var(--color-accent)',
                    display: 'block',
                    mb: 1
                  }}
                >
                  {activeItem.categoria}
                </Typography>

                {/* Descripción Corta */}
                <Typography
                  variant="body1"
                  sx={{
                    color: 'var(--texto-cuerpo)',
                    lineHeight: 1.6,
                    fontSize: '0.95rem',
                    mb: 3.5
                  }}
                >
                  {activeItem.descripcion}
                </Typography>

                {/* BARRAS DE RENDIMIENTO DE ESPECIFICACIONES */}
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 900,
                    color: 'var(--texto-titulo)',
                    textTransform: 'uppercase',
                    letterSpacing: 0.5,
                    mb: 2.5
                  }}
                >
                  Métricas de Desempeño Operativo:
                </Typography>

                <Stack spacing={2.5} sx={{ mb: 4 }}>
                  {activeItem.metrics.map((m, i) => (
                    <Box key={i}>
                      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 0.8 }}>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Box sx={{ color: 'var(--color-accent)', display: 'flex' }}>
                            {m.icon}
                          </Box>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: 'var(--texto-titulo)', fontSize: '0.82rem' }}>
                            {m.label}
                          </Typography>
                        </Stack>

                        <Typography variant="caption" sx={{ fontWeight: 900, color: 'var(--color-accent)' }}>
                          {m.val}%
                        </Typography>
                      </Stack>

                      <LinearProgress
                        variant="determinate"
                        value={m.val}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          bgcolor: 'var(--bg-subtarjeta)',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 4,
                            bgcolor: 'var(--color-accent)'
                          }
                        }}
                      />
                    </Box>
                  ))}
                </Stack>

                {/* CHIPS HIGHLIGHTS */}
                <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} sx={{ mb: 4 }}>
                  {activeItem.highlights.map((h, idx) => (
                    <Chip
                      key={idx}
                      label={h}
                      size="small"
                      sx={{
                        fontWeight: 800,
                        fontSize: '0.72rem',
                        bgcolor: 'var(--bg-subtarjeta)',
                        color: 'var(--texto-titulo)',
                        border: '1px solid var(--border-color)',
                        py: 1.5,
                        px: 0.5
                      }}
                    />
                  ))}
                </Stack>

              </Box>

              {/* BOTONES DE ACCIÓN PRINCIPALES */}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<ShoppingBagIcon />}
                  href="#catalogo-accesorios"
                  sx={{
                    bgcolor: 'var(--color-accent)',
                    color: '#ffffff !important',
                    fontWeight: 900,
                    py: 1.6,
                    borderRadius: 3,
                    textTransform: 'uppercase',
                    fontSize: '0.85rem',
                    boxShadow: '0 8px 22px rgba(79, 70, 229, 0.35)',
                    '&:hover': {
                      bgcolor: 'var(--color-accent)',
                      filter: 'brightness(1.1)',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Adquirir Equipamiento
                </Button>

                <Button
                  variant="outlined"
                  fullWidth
                  href="#catalogo-accesorios"
                  startIcon={<VisibilityIcon />}
                  sx={{
                    borderColor: 'var(--border-color)',
                    color: 'var(--texto-titulo)',
                    fontWeight: 800,
                    py: 1.6,
                    borderRadius: 3,
                    textTransform: 'uppercase',
                    fontSize: '0.85rem',
                    '&:hover': {
                      borderColor: 'var(--color-accent)',
                      bgcolor: 'var(--bg-subtarjeta)'
                    }
                  }}
                >
                  Explorar Catálogo
                </Button>
              </Stack>

            </Box>
          </Grid>

        </Grid>
      </Paper>

      {/* 3. MINIATURAS DEL RACK (MINI-CARROUSEL INFERIOR) */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {equipamientoLote.map((item, idx) => {
          const isSelected = idx === currentIndex;
          return (
            <Grid item xs={12} sm={4} key={item.id}>
              <Paper
                elevation={0}
                onClick={() => {
                  setScanning(true);
                  setCurrentIndex(idx);
                  setTimeout(() => setScanning(false), 800);
                }}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  bgcolor: 'var(--bg-tarjeta)',
                  border: `2px solid ${isSelected ? 'var(--color-accent)' : 'var(--border-color)'}`,
                  boxShadow: isSelected ? '0 8px 20px rgba(79, 70, 229, 0.2)' : 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    borderColor: 'var(--color-accent)'
                  }
                }}
              >
                <Box
                  sx={{
                    width: 55,
                    height: 55,
                    borderRadius: 2,
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    flexShrink: 0
                  }}
                />
                <Box sx={{ overflow: 'hidden' }}>
                  <Typography
                    variant="caption"
                    sx={{ color: isSelected ? 'var(--color-accent)' : 'var(--texto-cuerpo)', fontWeight: 800 }}
                  >
                    {item.codigo}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    noWrap
                    sx={{ fontWeight: 900, color: 'var(--texto-titulo)', fontSize: '0.85rem' }}
                  >
                    {item.nombre}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>

    </Container>
  );
}