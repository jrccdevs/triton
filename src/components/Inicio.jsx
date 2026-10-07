import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Avatar,
  Rating,
  Stack,
  Chip,
  Tabs,
  Tab,
  Fade,
  Grow,
  CardActionArea,
  Divider,
  useTheme
} from '@mui/material';

// Íconos Material UI
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import VerifiedUserTwoToneIcon from '@mui/icons-material/VerifiedUserTwoTone';
import CreditScoreTwoToneIcon from '@mui/icons-material/CreditScoreTwoTone';
import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';
import FormatQuoteTwoToneIcon from '@mui/icons-material/FormatQuoteTwoTone';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import ShieldTwoToneIcon from '@mui/icons-material/ShieldTwoTone';
import WaterDropTwoToneIcon from '@mui/icons-material/WaterDropTwoTone';
import FitnessCenterTwoToneIcon from '@mui/icons-material/FitnessCenterTwoTone';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import MemoryTwoToneIcon from '@mui/icons-material/MemoryTwoTone';

// Estilo exclusivo para variables de color
import '../estilos/Seccion1.css';

import NavBar from './NavBar';
import Footer from './Footer';
import Productos2 from './Productos2';
import SeccionPrincipal from './SeccionPrincipal';

export default function Inicio() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tabIndex, setTabIndex] = useState(0);

  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch('https://server-triton.vercel.app/productos');
        const json = await resp.json();
        setData(json);
      } catch (err) {
        console.error('Error cargando productos:', err);
        setData([]);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const trustBadges = [
    {
      icon: <LocalShippingTwoToneIcon sx={{ fontSize: 32, color: 'var(--color-acento)' }} />,
      title: 'ENVÍOS NACIONALES',
      desc: 'Despacho táctico express a todo el país.'
    },
    {
      icon: <VerifiedUserTwoToneIcon sx={{ fontSize: 32, color: 'var(--color-acento)' }} />,
      title: 'CALIDAD MIL-SPEC',
      desc: 'Materiales probados para alto rendimiento.'
    },
    {
      icon: <CreditScoreTwoToneIcon sx={{ fontSize: 32, color: 'var(--color-acento)' }} />,
      title: 'PAGO SEGURO',
      desc: 'Transacciones cifradas de extremo a extremo.'
    },
    {
      icon: <SupportAgentTwoToneIcon sx={{ fontSize: 32, color: 'var(--color-acento)' }} />,
      title: 'SOPORTE 24/7',
      desc: 'Asistencia táctica especializada constante.'
    }
  ];

  const pilaresTecnologicos = [
    {
      id: 0,
      label: 'CORDURA® 1000D',
      subtitle: 'Resistencia Extrema',
      icon: <ShieldTwoToneIcon />,
      badge: 'GRADO MILITAR // MIL-SPEC',
      heading: 'Protección Extrema y Densidad Ripstop',
      desc: 'Estructura molecular entrelazada para resistir rasgaduras, abrasión y condiciones ambientales extremas.',
      specs: [
        { label: 'Estructura Principal', value: '100% Nylon Cordura' },
        { label: 'Tolerancia a Fricción', value: '> 50.000 Ciclos Martindale' },
        { label: 'Costura Táctica', value: 'Hilo V-69 Reforzado' }
      ]
    },
    {
      id: 1,
      label: 'SISTEMA MOLLE 360°',
      subtitle: 'Modularidad & Repelencia',
      icon: <WaterDropTwoToneIcon />,
      badge: 'MODULAR // IMPERMEABLE',
      heading: 'Repelencia de Agua y Transpirabilidad',
      desc: 'Membrana inteligente que repele líquidos exteriores al instante mientras transfiere el vapor térmico.',
      specs: [
        { label: 'Columna de Agua', value: 'ISO 10.000 mm' },
        { label: 'Transpirabilidad', value: '8.000 g/m²/24h' },
        { label: 'Capa Protectora', value: 'Tratamiento DWR Teflon' }
      ]
    },
    {
      id: 2,
      label: 'HERRAMIENTAS EDC',
      subtitle: 'Movilidad 4-Way Stretch',
      icon: <FitnessCenterTwoToneIcon />,
      badge: 'ERGONOMÍA // MOVILIDAD',
      heading: 'Anatomía Operativa Sin Restricciones',
      desc: 'Paneles elásticos con memoria de forma que responden activamente a cualquier postura o sprint de emergencia.',
      specs: [
        { label: 'Flexibilidad Textil', value: 'Elastano 4-Way Stretch' },
        { label: 'Refuerzo de Impacto', value: 'Doble Capa en Articulaciones' },
        { label: 'Sistema de Ajuste', value: 'Correas Velcro Táctico' }
      ]
    }
  ];

  const pilarActual = pilaresTecnologicos[tabIndex];

  const testimonios = [
    {
      name: 'Carlos M.',
      role: 'Operador de Seguridad',
      comment: 'Las botas tácticas superaron mis expectativas en terreno. Resistencia y comodidad imbatibles.',
      rating: 5
    },
    {
      name: 'Sonia R.',
      role: 'Senderista / Outdoor',
      comment: 'La mochila de 45L tiene excelente distribución de carga y los cierres son súper reforzados.',
      rating: 5
    },
    {
      name: 'Gabriel P.',
      role: 'Cliente Frecuente',
      comment: 'Excelente atención en los envíos y los pantalones son justo lo que necesitaba para el trabajo duro.',
      rating: 5
    }
  ];

  // Propiedad redefinible de estilo base para tarjetas dinámicas en MUI
  const muiCardDynamicStyle = {
    backgroundColor: 'var(--bg-card)',
    border: '1px solid',
    borderColor: 'var(--borde-color)',
    borderRadius: 4,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      borderColor: 'var(--color-acento)',
      transform: 'translateY(-5px)',
      boxShadow: isDark
        ? '0 12px 30px rgba(59, 130, 246, 0.2)'
        : '0 12px 25px rgba(37, 99, 235, 0.12)'
    }
  };

  return (
    <Box className={`pagina-inicio-container ${isDark ? 'dark-mode' : ''}`}>
      <NavBar />

      <Box component="section" sx={{ width: '100%' }}>
        <SeccionPrincipal />
      </Box>

      {/* BENEFICIOS TÁCTICOS (Uso de Grow & CardActionArea MUI) */}
      <Container maxWidth="lg" sx={{ my: 6 }}>
        <Grid container spacing={3}>
          {trustBadges.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Grow in={true} timeout={(index + 1) * 300}>
                <Paper elevation={0} sx={muiCardDynamicStyle}>
                  <CardActionArea sx={{ p: 3, borderRadius: 4, height: '100%' }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box
                        sx={{
                          p: 1.2,
                          borderRadius: 3,
                          backgroundColor: isDark
                            ? 'rgba(59, 130, 246, 0.12)'
                            : 'rgba(37, 99, 235, 0.08)',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: 800,
                            fontSize: '0.82rem',
                            color: 'var(--texto-principal)'
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: '0.75rem',
                            mt: 0.3,
                            color: 'var(--texto-secundario)',
                            lineHeight: 1.35
                          }}
                        >
                          {item.desc}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardActionArea>
                </Paper>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CATÁLOGO DESTACADO */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Box sx={{ mb: 4 }}>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
            <GpsFixedIcon sx={{ color: 'var(--color-acento)', fontSize: 18 }} />
            <Chip
              label="SELECCIÓN OFICIAL"
              size="small"
              sx={{
                backgroundColor: 'var(--color-acento)',
                color: '#ffffff',
                fontWeight: 900,
                fontSize: '0.68rem',
                letterSpacing: 1
              }}
            />
          </Stack>

          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              fontWeight: 900,
              color: 'var(--texto-principal)'
            }}
          >
            PRODUCTOS DESTACADOS
          </Typography>
        </Box>

        <Productos2 data={data} loading={loading} />
      </Container>

      {/* ESPECIFICACIONES TÁCTICAS (Uso de Tabs MUI) */}
      <Container maxWidth="lg" sx={{ my: 9 }}>
        <Paper
          elevation={0}
          sx={{
            p: 1,
            mb: 4,
            backgroundColor: 'var(--bg-card)',
            border: '1px solid',
            borderColor: 'var(--borde-color)',
            borderRadius: 4
          }}
        >
          <Tabs
            value={tabIndex}
            onChange={(e, newIndex) => setTabIndex(newIndex)}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            sx={{
              '& .MuiTabs-indicator': {
                height: 3,
                borderRadius: 2,
                backgroundColor: 'var(--color-acento)'
              }
            }}
          >
            {pilaresTecnologicos.map((pilar) => (
              <Tab
                key={pilar.id}
                icon={pilar.icon}
                iconPosition="start"
                label={pilar.label}
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '0.75rem', md: '0.88rem' },
                  color: 'var(--texto-secundario)',
                  '&.Mui-selected': {
                    color: 'var(--color-acento)'
                  }
                }}
              />
            ))}
          </Tabs>
        </Paper>

        {/* Transición Fade MUI al alternar tabs */}
        <Fade in={true} key={pilarActual.id} timeout={400}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              backgroundColor: 'var(--bg-card)',
              border: '1px solid',
              borderColor: 'var(--borde-color)',
              borderRadius: 4
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={7}>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
                  <MemoryTwoToneIcon sx={{ color: 'var(--color-acento)', fontSize: 22 }} />
                  <Typography
                    variant="overline"
                    sx={{
                      fontWeight: 900,
                      letterSpacing: 2,
                      fontSize: '0.75rem',
                      color: 'var(--color-acento)'
                    }}
                  >
                    {pilarActual.badge}
                  </Typography>
                </Stack>

                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: '1.4rem', md: '1.9rem' },
                    fontWeight: 900,
                    color: 'var(--texto-principal)',
                    mb: 2
                  }}
                >
                  {pilarActual.heading}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    color: 'var(--texto-secundario)',
                    mb: 3
                  }}
                >
                  {pilarActual.desc}
                </Typography>

                <Stack spacing={2}>
                  {pilarActual.specs.map((spec, idx) => (
                    <Stack key={idx} direction="row" spacing={1.5} alignItems="center">
                      <CheckCircleTwoToneIcon sx={{ color: 'var(--color-acento)', fontSize: 20 }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'var(--texto-principal)' }}>
                        {spec.label}:
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'var(--texto-secundario)' }}>
                        {spec.value}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Grid>

              {/* Módulo de Especificaciones Internas */}
              <Grid item xs={12} md={5}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    backgroundColor: 'var(--bg-card-inner)',
                    border: '1px solid',
                    borderColor: 'var(--borde-color)'
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 900,
                      letterSpacing: 1.5,
                      textTransform: 'uppercase',
                      display: 'block',
                      mb: 2.5,
                      color: 'var(--color-acento)'
                    }}
                  >
                    ESPECIFICACIONES TÉCNICAS
                  </Typography>

                  <Stack spacing={2}>
                    {pilarActual.specs.map((spec, idx) => (
                      <React.Fragment key={idx}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{ color: 'var(--texto-secundario)', fontSize: '0.85rem' }}
                          >
                            {spec.label}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontWeight: 800,
                              fontSize: '0.88rem',
                              color: 'var(--texto-principal)'
                            }}
                          >
                            {spec.value}
                          </Typography>
                        </Box>
                        {idx < pilarActual.specs.length - 1 && (
                          <Divider sx={{ borderColor: 'var(--borde-color)' }} />
                        )}
                      </React.Fragment>
                    ))}
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Fade>
      </Container>

      {/* TESTIMONIOS (Uso de Grow & CardActionArea MUI) */}
      <Container maxWidth="lg" sx={{ my: 9 }}>
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.6rem', md: '2.2rem' },
              fontWeight: 900,
              color: 'var(--texto-principal)'
            }}
          >
            LO QUE DICEN NUESTROS OPERADORES
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {testimonios.map((testimonio, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Grow in={true} timeout={(idx + 1) * 350}>
                <Paper elevation={0} sx={muiCardDynamicStyle}>
                  <CardActionArea
                    sx={{
                      p: 4,
                      borderRadius: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'stretch'
                    }}
                  >
                    <Box>
                      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                        <Rating value={testimonio.rating} readOnly size="small" sx={{ color: '#f59e0b' }} />
                        <FormatQuoteTwoToneIcon sx={{ fontSize: 36, color: 'var(--color-acento)', opacity: 0.4 }} />
                      </Stack>

                      <Typography
                        variant="body1"
                        sx={{
                          fontStyle: 'italic',
                          mb: 3,
                          fontSize: '0.92rem',
                          lineHeight: 1.6,
                          color: 'var(--texto-secundario)'
                        }}
                      >
                        "{testimonio.comment}"
                      </Typography>
                    </Box>

                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar
                        sx={{
                          backgroundColor: 'var(--color-acento)',
                          color: '#ffffff',
                          fontWeight: 900,
                          width: 44,
                          height: 44
                        }}
                      >
                        {testimonio.name.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'var(--texto-principal)' }}>
                          {testimonio.name}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'var(--color-acento)', fontWeight: 700, fontSize: '0.72rem' }}>
                          {testimonio.role}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardActionArea>
                </Paper>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}