import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Stack,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Rating,
  Avatar,
  IconButton
} from '@mui/material';

import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShieldIcon from '@mui/icons-material/Shield';
import VerifiedIcon from '@mui/icons-material/Verified';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function GaleriaPants() {
  const [expanded, setExpanded] = useState(false);
  const [activeReview, setActiveReview] = useState(0);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const palabrasClave = [
    'TEJIDO RIPSTOP 500D',
    'TRATAMIENTO TEFLON DWR',
    '8 BOLSILLOS CARGO',
    'RODILLERAS ARTICULADAS',
    'CINTURA FLEX-FIT',
    'COSTURAS REFORZADAS'
  ];

  const ventajas = [
    {
      id: 'panel1',
      icon: <LocalShippingOutlinedIcon color="primary" sx={{ fontSize: 26 }} />,
      title: 'Envío Táctico Express',
      desc: 'Despacho prioritario seguro a todo el país en 24/48 hs.',
      detail: 'Los pedidos procesados antes de las 13:00 hs salen el mismo día laboral con código de seguimiento en tiempo real.'
    },
    {
      id: 'panel2',
      icon: <VerifiedUserOutlinedIcon color="primary" sx={{ fontSize: 26 }} />,
      title: 'Garantía Milspec',
      desc: 'Soporta uso continuo en terreno extremo.',
      detail: 'Cubre fallas de costura o cierres durante 12 meses de uso intenso. Reemplazo directo en caso de defecto de fábrica.'
    },
    {
      id: 'panel3',
      icon: <AutorenewOutlinedIcon color="primary" sx={{ fontSize: 26 }} />,
      title: 'Cambio de Talle Sin Cargo',
      desc: '¿No te quedó exacto? Lo cambiamos en tu puerta.',
      detail: 'Dispones de 30 días para solicitar cambio de talle o color. Pasamos a retirar la prenda por tu domicilio.'
    },
    {
      id: 'panel4',
      icon: <HeadphonesOutlinedIcon color="primary" sx={{ fontSize: 26 }} />,
      title: 'Soporte Operativo',
      desc: 'Asesoramiento por expertos en equipamiento.',
      detail: 'Canal directo vía WhatsApp con especialistas para guiarte en medidas exactas o compatibilidad de accesorios.'
    }
  ];

  const resenas = [
    {
      nombre: 'Carlos M.',
      rol: 'Operador de Seguridad',
      comentario: 'El tejido Ripstop realmente aguanta el roce continuo. Los bolsillos cargo tienen el espacio exacto sin abultar demasiado.',
      estrellas: 5,
      modelo: 'Striker XT Gen 3'
    },
    {
      nombre: 'Roberto G.',
      rol: 'Instrucción al Aire Libre',
      comentario: 'Excelente calce en la cintura Flex-Fit. Lo probé en caminatas de alta exigencia y la elasticidad responde de diez.',
      estrellas: 5,
      modelo: 'Pantalón Táctico Urban'
    },
    {
      nombre: 'Diego L.',
      rol: 'Comprador Verificado',
      comentario: 'Llegó al día siguiente de la compra. El cambio de talle fue súper fácil por WhatsApp. 100% recomendado.',
      estrellas: 5,
      modelo: 'Línea Cargo Pro'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % resenas.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [resenas.length]);

  const handleNext = () => setActiveReview((prev) => (prev + 1) % resenas.length);
  const handlePrev = () => setActiveReview((prev) => (prev - 1 + resenas.length) % resenas.length);

  return (
    <Box
      className="galeria-pants-section"
      sx={{
        py: 3,
        my: 2,
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* 1. CINTA MARQUEE CON FONDO LIMPIO */}
      <Box
        sx={{
          mb: 4,
          py: 1.2,
          bgcolor: 'transparent',
          display: 'flex',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          borderTop: '1px solid rgba(150, 150, 150, 0.2)',
          borderBottom: '1px solid rgba(150, 150, 150, 0.2)'
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            gap: 4,
            animation: 'marquee 22s linear infinite',
            '@keyframes marquee': {
              '0%': { transform: 'translateX(0%)' },
              '100%': { transform: 'translateX(-50%)' }
            }
          }}
        >
          {[...palabrasClave, ...palabrasClave, ...palabrasClave].map((text, i) => (
            <Typography
              key={i}
              variant="caption"
              sx={{
                fontWeight: 900,
                letterSpacing: 2,
                color: 'text.secondary',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 2
              }}
            >
              <span>{text}</span>
              <span style={{ color: '#1976d2' }}>•</span>
            </Typography>
          ))}
        </Box>
      </Box>

      <Container maxWidth="lg">
        {/* 2. ENCABEZADO */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          spacing={2}
          sx={{ mb: 3 }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 900, textTransform: 'uppercase', color: 'text.primary', letterSpacing: 0.5 }}>
              Estándar de Servicio TRITON
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Haga clic en cada tarjeta para consultar las preguntas frecuentes y condiciones de entrega.
            </Typography>
          </Box>

          <Chip
            icon={<ShieldIcon sx={{ fontSize: '18px !important' }} />}
            label="CENTRO OPERATIVO ACTIVO • 24/7"
            color="primary"
            variant="outlined"
            sx={{
              fontWeight: 800,
              fontSize: '0.75rem',
              letterSpacing: 0.5,
              bgcolor: 'action.hover'
            }}
          />
        </Stack>

        {/* 3. TARJETAS DE SERVICIO */}
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {ventajas.map((v) => (
            <Grid item xs={12} sm={6} md={3} key={v.id}>
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 3,
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: expanded === v.id ? 'primary.main' : 'rgba(150, 150, 150, 0.25)',
                  boxShadow: expanded === v.id ? '0 4px 20px rgba(25, 118, 210, 0.15)' : 'none',
                  transition: 'all 0.25s ease-in-out',
                  overflow: 'hidden',
                  '&:hover': {
                    borderColor: 'primary.main'
                  }
                }}
              >
                <Accordion
                  expanded={expanded === v.id}
                  onChange={handleAccordionChange(v.id)}
                  sx={{
                    bgcolor: 'transparent',
                    boxShadow: 'none',
                    '&:before': { display: 'none' }
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
                    sx={{ p: 2, alignItems: 'flex-start' }}
                  >
                    <Stack spacing={1.5} alignItems="flex-start" width="100%">
                      <Box
                        sx={{
                          p: 1,
                          borderRadius: 2,
                          bgcolor: 'action.hover',
                          display: 'flex'
                        }}
                      >
                        {v.icon}
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary', lineHeight: 1.2 }}>
                          {v.title}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mt: 0.5, lineHeight: 1.3 }}>
                          {v.desc}
                        </Typography>
                      </Box>
                    </Stack>
                  </AccordionSummary>

                  <AccordionDetails sx={{ px: 2, pb: 2, pt: 0 }}>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        bgcolor: 'action.hover',
                        borderLeft: '3px solid',
                        borderColor: 'primary.main'
                      }}
                    >
                      <Typography variant="caption" sx={{ color: 'text.primary', lineHeight: 1.4, display: 'block' }}>
                        {v.detail}
                      </Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* 4. CARRUSEL DE RESEÑAS / TESTIMONIOS */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2.5, md: 3 },
            borderRadius: 3,
            bgcolor: 'background.paper',
            border: '1px solid rgba(150, 150, 150, 0.25)'
          }}
        >
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            alignItems={{ xs: 'flex-start', md: 'center' }}
            justifyContent="space-between"
            spacing={3}
          >
            <Box minWidth={220}>
              <Stack direction="row" alignItems="center" spacing={1} mb={0.5}>
                <Typography variant="h5" sx={{ fontWeight: 900, color: 'text.primary' }}>
                  4.9
                </Typography>
                <Rating value={5} readOnly size="small" />
              </Stack>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, display: 'block' }}>
                Más de 1,200 operadores equipados
              </Typography>
              <Chip
                icon={<VerifiedIcon sx={{ fontSize: '14px !important' }} />}
                label="Valoraciones Verificadas"
                size="small"
                color="success"
                variant="outlined"
                sx={{ mt: 1, height: 22, fontSize: '0.65rem', fontWeight: 700 }}
              />
            </Box>

            <Box sx={{ flex: 1, minHeight: 60 }}>
              <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.primary', mb: 1, lineHeight: 1.5 }}>
                "{resenas[activeReview].comentario}"
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Avatar sx={{ width: 24, height: 24, bgcolor: 'primary.main', fontSize: '0.75rem', fontWeight: 800 }}>
                  {resenas[activeReview].nombre[0]}
                </Avatar>
                <Typography variant="caption" sx={{ fontWeight: 800, color: 'text.primary' }}>
                  {resenas[activeReview].nombre}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  • {resenas[activeReview].rol} ({resenas[activeReview].modelo})
                </Typography>
              </Stack>
            </Box>

            <Stack direction="row" spacing={1} alignSelf={{ xs: 'flex-end', md: 'center' }}>
              <IconButton size="small" onClick={handlePrev} sx={{ border: '1px solid rgba(150,150,150,0.3)' }}>
                <ArrowBackIosNewIcon fontSize="inherit" />
              </IconButton>
              <IconButton size="small" onClick={handleNext} sx={{ border: '1px solid rgba(150,150,150,0.3)' }}>
                <ArrowForwardIosIcon fontSize="inherit" />
              </IconButton>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}