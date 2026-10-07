import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Button,
  Chip,
  Stack,
  useTheme,
  IconButton
} from '@mui/material';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

export default function Seccion1() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: 0,
      title: 'Resistencia Táctica',
      subtitle: 'Telas MIL-SPEC & Anti-desgarro',
      icon: <ShieldOutlinedIcon sx={{ fontSize: 28 }} />,
      badge: 'GRADO MILITAR',
      heading: 'Protección Extrema y Estándar MIL-SPEC',
      description:
        'Equipamiento fabricado con fibras de Cordura® Nylon y tejido Ripstop. Diseñado para soportar tracción extrema, roce continuo y condiciones severas en campo.',
      stats: [
        { label: 'Tejido Anti-desgarro', val: '100% Ripstop' },
        { label: 'Densidad del Material', val: '500D Cordura' },
        { label: 'Certificación de Carga', val: 'MIL-STD' }
      ],
      points: [
        'Resistencia superior a la abrasión y fricción',
        'Refuerzos dobles en rodillas, codos y puntos de tensión',
        'Compatibilidad total con equipamiento MOLLE'
      ]
    },
    {
      id: 1,
      title: 'Protección Climática',
      subtitle: 'Impermeable & DWR Tech',
      icon: <WaterDropOutlinedIcon sx={{ fontSize: 28 }} />,
      badge: 'WEATHERPROOF',
      heading: 'Blindaje Térmico e Impermeabilidad Total',
      description:
        'Membrana microporosa que bloquea el agua externa y el viento mientras evacúa el vapor de sudor. Mantiene tu cuerpo seco en operaciones bajo lluvia intensa.',
      stats: [
        { label: 'Columna de Agua', val: '20,000 mm' },
        { label: 'Costuras Industriales', val: '100% Termoselladas' },
        { label: 'Filtro Solar', val: 'UV 50+' }
      ],
      points: [
        'Tratamiento DWR (Durable Water Repellent) de alta resistencia',
        'Cierres impermeables YKK® herméticos',
        'Secado ultra rápido y ventilación regulable'
      ]
    },
    {
      id: 2,
      title: 'Diseño Ergonómico',
      subtitle: 'Flexibilidad 4-Way Stretch',
      icon: <FitnessCenterOutlinedIcon sx={{ fontSize: 28 }} />,
      badge: 'CORTE ANATÓMICO',
      heading: 'Ergonomía Táctica sin Restricciones',
      description:
        'Patronaje 3D articulado que se adapta a la anatomía humana. Permite flexiones, agachamientos y movimientos rápidos sin generar tirantez en la prenda.',
      stats: [
        { label: 'Elasticidad de Tejido', val: '4-Way Stretch' },
        { label: 'Reducción de Peso', val: '-30% Peso' },
        { label: 'Ajuste Dinámico', val: 'Anatómico 3D' }
      ],
      points: [
        'Bolsillos tácticos de perfil bajo con acceso rápido',
        'Ajuste regulable en cintura, puños y tobillos',
        'Movilidad sin fricción ni acumulaciones de tela'
      ]
    }
  ];

  const currentPillar = pillars[activeTab];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 9 },
        px: { xs: 2, md: 4 },
        width: '100%',
        /* Integración directa con el fondo global sin parches blancos */
        backgroundColor: 'transparent',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}
    >
      <Container maxWidth="lg">
        {/* Encabezado Principal */}
        <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
          <Chip
            label="TECNOLOGÍA & PERFORMANCE"
            color="primary"
            size="small"
            sx={{
              fontWeight: 800,
              letterSpacing: 1.5,
              mb: 1.5,
              borderRadius: '6px',
              px: 1
            }}
          />
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '1.8rem', sm: '2.4rem', md: '2.8rem' },
              letterSpacing: '-0.5px',
              color: 'text.primary',
              textTransform: 'uppercase'
            }}
          >
            Ingeniería Táctica de Vanguardia
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 600,
              mx: 'auto',
              mt: 1,
              color: 'text.secondary',
              fontSize: { xs: '0.95rem', md: '1.05rem' }
            }}
          >
            Explora las especificaciones avanzadas integradas en nuestro equipamiento táctico profesional.
          </Typography>
        </Box>

        {/* Tarjetas de Selección / Selector de Pestañas Interactivas */}
        <Grid container spacing={2} mb={4}>
          {pillars.map((pillar, index) => {
            const isSelected = activeTab === index;
            return (
              <Grid item xs={12} sm={4} key={pillar.id}>
                <Paper
                  elevation={isSelected ? 4 : 0}
                  onClick={() => setActiveTab(index)}
                  sx={{
                    p: 2.5,
                    cursor: 'pointer',
                    borderRadius: 3,
                    border: '1.5px solid',
                    borderColor: isSelected
                      ? 'primary.main'
                      : isDark
                      ? 'rgba(255, 255, 255, 0.08)'
                      : 'rgba(0, 0, 0, 0.08)',
                    bgcolor: isSelected
                      ? isDark
                        ? 'rgba(25, 118, 210, 0.15)'
                        : 'rgba(25, 118, 210, 0.06)'
                      : isDark
                      ? 'rgba(255, 255, 255, 0.03)'
                      : 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <IconButton
                    disableRipple
                    sx={{
                      bgcolor: isSelected ? 'primary.main' : 'action.hover',
                      color: isSelected ? '#ffffff' : 'text.primary',
                      borderRadius: 2,
                      p: 1.2,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {pillar.icon}
                  </IconButton>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 800,
                        color: isSelected ? 'primary.main' : 'text.primary',
                        lineHeight: 1.2
                      }}
                    >
                      {pillar.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: 'text.secondary', display: 'block', mt: 0.3 }}
                    >
                      {pillar.subtitle}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        {/* Panel Principal de Detalles */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 4, md: 5 },
            borderRadius: 4,
            border: '1px solid',
            borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)',
            bgcolor: isDark ? '#1a202c' : '#ffffff',
            boxShadow: isDark
              ? '0 20px 40px rgba(0,0,0,0.4)'
              : '0 20px 40px rgba(0,0,0,0.06)',
            transition: 'all 0.3s ease'
          }}
        >
          <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
            {/* Información Técnica */}
            <Grid item xs={12} md={7}>
              <Stack spacing={2}>
                <Box display="flex" alignItems="center" gap={1.5}>
                  <Chip
                    label={currentPillar.badge}
                    color="primary"
                    variant="outlined"
                    size="small"
                    sx={{ fontWeight: 800, fontSize: '0.7rem' }}
                  />
                </Box>

                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    color: 'text.primary',
                    fontSize: { xs: '1.3rem', sm: '1.6rem', md: '1.9rem' },
                    lineHeight: 1.3
                  }}
                >
                  {currentPillar.heading}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.7,
                    fontSize: { xs: '0.92rem', md: '1rem' }
                  }}
                >
                  {currentPillar.description}
                </Typography>

                <Stack spacing={1.5} pt={1}>
                  {currentPillar.points.map((pt, i) => (
                    <Box key={i} display="flex" alignItems="flex-start" gap={1.5}>
                      <CheckCircleRoundedIcon
                        color="primary"
                        sx={{ fontSize: 20, mt: '2px', flexShrink: 0 }}
                      />
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 600, color: 'text.primary' }}
                      >
                        {pt}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Stack>
            </Grid>

            {/* Especificaciones Tácticas */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: isDark ? 'rgba(0,0,0,0.25)' : '#f8fafc',
                  border: '1px solid',
                  borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    fontWeight: 800,
                    letterSpacing: 1.2,
                    color: 'text.secondary',
                    display: 'block',
                    mb: 2
                  }}
                >
                  ESPECIFICACIONES TÉCNICAS
                </Typography>

                <Stack spacing={1.5}>
                  {currentPillar.stats.map((st, i) => (
                    <Paper
                      key={i}
                      elevation={0}
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        bgcolor: isDark ? '#242c3d' : '#ffffff',
                        border: '1px solid',
                        borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary', fontWeight: 600 }}
                      >
                        {st.label}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: 'primary.main', fontWeight: 800 }}
                      >
                        {st.val}
                      </Typography>
                    </Paper>
                  ))}
                </Stack>

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => (window.location.href = '/productos')}
                  sx={{
                    mt: 3,
                    py: 1.4,
                    fontWeight: 800,
                    borderRadius: 2.5,
                    textTransform: 'none',
                    fontSize: '0.95rem',
                    boxShadow: '0 8px 20px rgba(25, 118, 210, 0.3)'
                  }}
                >
                  Explorar Catálogo Técnico
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}