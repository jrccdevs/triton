import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Chip,
  Stack,
  Button,
  useTheme
} from '@mui/material';

// Íconos MUI
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';
import FlareRoundedIcon from '@mui/icons-material/FlareRounded';
import ThermostatRoundedIcon from '@mui/icons-material/ThermostatRounded';
import OpacityRoundedIcon from '@mui/icons-material/OpacityRounded';
import TouchAppRoundedIcon from '@mui/icons-material/TouchAppRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

// Imagen promocional / técnica (Asegúrate de ajustar la ruta a tus imágenes)
import GorraTechImg from '../../img/gorros.png';

export default function GaleriaGorras() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  // Estado para la pestaña de características activas
  const [featureTab, setFeatureTab] = useState('tech');

  // Datos de las pestañas informativas
  const infoTabs = [
    { id: 'tech', label: 'Tecnología de Tela', icon: <FlareRoundedIcon fontSize="small" /> },
    { id: 'climate', label: 'Control Térmico', icon: <ThermostatRoundedIcon fontSize="small" /> },
    { id: 'modular', label: 'Sistema Modular', icon: <ShieldRoundedIcon fontSize="small" /> }
  ];

  // Contenido dinámico según la pestaña seleccionada
  const contentData = {
    tech: {
      tag: "INNOVACIÓN EN TEJIDOS",
      title: "Construcción Ripstop & Repelente Rip-Stop®",
      desc: "Nuestras gorras incorporan un entramado micro-cuadrículas que evita la propagación de rasgaduras en situaciones extremas. Recubrimiento de teflón DWR que repele líquidos y polvo de manera efectiva.",
      highlights: [
        "Resistencia al rasgado comprobada Mil-Spec",
        "Tratamiento anti-manchas y repelente a aceites",
        "Protección solar UV50+ integrada permanentemente"
      ]
    },
    climate: {
      tag: "GESTIÓN DEL CLIMA",
      title: "Evacuación Activa de Humedad y Calor",
      desc: "Paneles internos de malla tridimensional que canalizan el flujo de aire continuo, absorbiendo el sudor de la frente y evaporándolo 3 veces más rápido que el algodón convencional.",
      highlights: [
        "Ojales cortados con láser para flujo direccional",
        "Banda elástica interior con absorción rápida",
        "Retención térmica optimizada en modelos fríos"
      ]
    },
    modular: {
      tag: "ECOSISTEMA TÁCTICO",
      title: "Paneles Velcro Loop Integrados",
      desc: "Diseño ergonómico con parches de velcro en el frente, parte posterior y corona para la fijación segura de parches de identificación IR, insignias o luces estroboscópicas.",
      highlights: [
        "Velcro suave de alta durabilidad anti-desgaste",
        "Ajuste trasero de perfil bajo sin interferencias",
        "Sin botones metálicos superiores (Helmet Friendly)"
      ]
    }
  };

  const currentContent = contentData[featureTab];

  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Container maxWidth="xl">
        
        {/* ENCABEZADO DE LA SECCIÓN */}
        <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
          <Chip
            label="EXCLUSIVO TRITON GEAR 2026"
            sx={{
              backgroundColor: isDark ? 'rgba(99, 102, 241, 0.15)' : 'rgba(79, 70, 229, 0.1)',
              color: isDark ? '#a5b4fc' : '#4f46e5',
              fontWeight: 900,
              fontSize: '0.75rem',
              letterSpacing: 1.2,
              mb: 1.5,
              border: `1px solid ${isDark ? 'rgba(99, 102, 241, 0.3)' : 'rgba(79, 70, 229, 0.2)'}`
            }}
          />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '1.6rem', sm: '2.2rem', md: '2.8rem' },
              textTransform: 'uppercase',
              letterSpacing: -0.5,
              color: 'text.primary',
              mb: 1.5
            }}
          >
            Anatomía y Especificaciones
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 700,
              mx: 'auto',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              lineHeight: 1.6
            }}
          >
            Descubre la ingeniería aplicada en la confección de nuestras prendas para la cabeza. Diseñadas para operar en las condiciones más exigentes.
          </Typography>

          {/* NAVEGADOR DE PESTAÑAS TÉCNICAS */}
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            sx={{
              mt: 3,
              overflowX: 'auto',
              py: 1,
              px: 2,
              maxWidth: '100%',
              '&::-webkit-scrollbar': { display: 'none' },
              msOverflowStyle: 'none',
              scrollbarWidth: 'none'
            }}
          >
            {infoTabs.map((tab) => {
              const active = featureTab === tab.id;
              return (
                <Button
                  key={tab.id}
                  onClick={() => setFeatureTab(tab.id)}
                  startIcon={tab.icon}
                  sx={{
                    px: { xs: 2, sm: 3 },
                    py: 1,
                    borderRadius: 3,
                    fontWeight: 800,
                    fontSize: { xs: '0.75rem', sm: '0.85rem' },
                    textTransform: 'none',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    backgroundColor: active 
                      ? '#4f46e5' 
                      : isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                    color: active 
                      ? '#ffffff' 
                      : 'text.secondary',
                    boxShadow: active ? '0 4px 14px rgba(79, 70, 229, 0.35)' : 'none',
                    '&:hover': {
                      backgroundColor: active 
                        ? '#4338ca' 
                        : isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'
                    }
                  }}
                >
                  {tab.label}
                </Button>
              );
            })}
          </Stack>
        </Box>

        {/* BENTO GRID PRINCIPAL */}
        <Grid container spacing={{ xs: 2.5, md: 3.5 }}>
          
          {/* TARJETA 1: DETALLE TÉCNICO CAMBIANTE (GRANDE) */}
          <Grid item xs={12} lg={7}>
            <Paper
              elevation={0}
              className="tarjeta-detalles"
              sx={{
                p: { xs: 3, sm: 4 },
                height: '100%',
                borderRadius: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: isDark ? '#818cf8' : '#4f46e5',
                    fontWeight: 900,
                    letterSpacing: 1.5,
                    display: 'block',
                    mb: 1
                  }}
                >
                  {currentContent.tag}
                </Typography>

                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: '1.4rem', sm: '1.9rem', md: '2.2rem' },
                    mb: 2,
                    color: 'text.primary'
                  }}
                >
                  {currentContent.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    lineHeight: 1.7,
                    mb: 3
                  }}
                >
                  {currentContent.desc}
                </Typography>

                {/* HIGHLIGHTS / LISTA CON ÍCONOS */}
                <Stack spacing={1.5} mb={3}>
                  {currentContent.highlights.map((item, index) => (
                    <Stack key={index} direction="row" spacing={1.5} alignItems="center">
                      <CheckCircleOutlineRoundedIcon sx={{ color: '#10b981', fontSize: 20 }} />
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 700, color: 'text.primary', fontSize: { xs: '0.85rem', sm: '0.95rem' } }}
                      >
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>

              {/* PIE DE LA TARJETA */}
              <Box
                sx={{
                  pt: 2,
                  borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: 1
                }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <VerifiedUserRoundedIcon sx={{ color: '#4f46e5', fontSize: 20 }} />
                  <Typography variant="caption" sx={{ fontWeight: 800, color: 'text.secondary' }}>
                    Estándares Militares Calificados
                  </Typography>
                </Stack>
                <Chip
                  icon={<TouchAppRoundedIcon fontSize="small" />}
                  label="Explora las pestañas arriba"
                  size="small"
                  variant="outlined"
                  sx={{ fontWeight: 700, fontSize: '0.7rem' }}
                />
              </Box>
            </Paper>
          </Grid>

          {/* TARJETA 2: VISUAL MUESTRA CON PUNTOS CALIENTES */}
          <Grid item xs={12} lg={5}>
            <Paper
              elevation={0}
              className="tarjeta-imagen"
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                position: 'relative',
                height: { xs: 280, sm: 360, lg: '100%' },
                minHeight: { lg: 380 }
              }}
            >
              <Box
                component="img"
                src={GorraTechImg}
                alt="Detalle táctico Gorra TRITON"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />

              {/* HOTSPOT OVERLAY 1 (Frente) */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '35%',
                  left: '45%',
                  transform: 'translate(-50%, -50%)',
                  p: 1,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(79, 70, 229, 0.4)',
                  boxShadow: '0 0 15px rgba(79, 70, 229, 0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'translate(-50%, -50%) scale(1.15)' }
                }}
              >
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ffffff' }} />
              </Box>

              {/* OVERLAY TÉCNICO INFERIOR */}
              <Box
                className="overlay-imagen"
                sx={{
                  position: 'absolute',
                  bottom: 16,
                  left: 16,
                  right: 16,
                  p: 2,
                  borderRadius: 2.5,
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 900, color: '#ffffff', fontSize: '0.85rem' }}>
                    Panel Frontal Reforzado
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.7rem' }}>
                    Estructura semi-rígida indeformable
                  </Typography>
                </Box>
                <OpacityRoundedIcon sx={{ color: '#38bdf8' }} />
              </Box>
            </Paper>
          </Grid>

          {/* TRES TARJETAS INFORMATIVAS SECUNDARIAS (BENTO BOTTOM) */}
          <Grid item xs={12} sm={4}>
            <Paper
              elevation={0}
              className="caja-estadistica"
              sx={{ p: 3, borderRadius: 3, height: '100%' }}
            >
              <Box sx={{ color: '#4f46e5', mb: 1.5 }}>
                <FlareRoundedIcon fontSize="large" />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 900, fontSize: '1rem', mb: 0.5, color: 'text.primary' }}>
                Protección Solar UV50+
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.825rem', lineHeight: 1.5 }}>
                Bloquea el 98% de la radiación ultravioleta perjudicial durante largas exposiciones solares.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper
              elevation={0}
              className="caja-estadistica"
              sx={{ p: 3, borderRadius: 3, height: '100%' }}
            >
              <Box sx={{ color: '#10b981', mb: 1.5 }}>
                <OpacityRoundedIcon fontSize="large" />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 900, fontSize: '1rem', mb: 0.5, color: 'text.primary' }}>
                Secado Ultra Rápido
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.825rem', lineHeight: 1.5 }}>
                Tecnología de fibras capilares que evaporan la sudoración y la humedad en cuestión de minutos.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper
              elevation={0}
              className="caja-estadistica"
              sx={{ p: 3, borderRadius: 3, height: '100%' }}
            >
              <Box sx={{ color: '#f59e0b', mb: 1.5 }}>
                <ShieldRoundedIcon fontSize="large" />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 900, fontSize: '1rem', mb: 0.5, color: 'text.primary' }}>
                Costuras de Alta Densidad
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.825rem', lineHeight: 1.5 }}>
                Hilos de nylon reforzado en puntos de mayor tensión para prolongar la vida útil del equipo.
              </Typography>
            </Paper>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}