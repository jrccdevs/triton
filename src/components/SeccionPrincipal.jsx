import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, Stack, useTheme } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ExploreIcon from '@mui/icons-material/Explore';

import Imagen1 from "../img/Gen1.png";
import Imagen2 from "../img/triton3.png";

const slides = [
  {
    id: 1,
    tag: "// EQUIPAMIENTO TÁCTICO",
    title: "CHAMARRAS MULTICAM",
    description: "Tecnología de grado militar, protección ante condiciones extremas y máxima movilidad ergonómica.",
    image: Imagen1,
    btnPrimary: "COMPRAR AHORA",
    badge: "EDICIÓN MIL-SPEC 2026"
  },
  {
    id: 2,
    tag: "// COLECCIÓN TÁCTICA URBANA",
    title: "TRITON CERPA HORA",
    description: "Tejido balístico reforzado e impermeabilidad avanzada para misiones intensas.",
    image: Imagen2,
    btnPrimary: "VER COLECCIÓN",
    badge: "EDICIÓN LIMITADA"
  }
];

export default function SeccionPrincipal() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [currentSlide, setCurrentSlide] = useState(0);

  // Cambio automático de banner
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const handleScrollToProducts = () => {
    const section = document.getElementById('productos-destacados');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: window.innerHeight * 0.85,
        behavior: 'smooth'
      });
    }
  };

  const darkBluePrimary = '#1E3A8A';
  const darkBlueHover = '#0F172A';

  const slide = slides[currentSlide];

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        width: '100%',
        // Distancia superior configurable respecto al navbar
        pt: { xs: '150px', sm: '180px', md: '180px' },
        pb: { xs: 4, sm: 6, md: 8 },
        minHeight: { xs: 'auto', md: '600px' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: isDark ? '#080D1A' : '#1E293B',
        color: '#FFFFFF'
      }}
    >
      {/* 1. FONDO O MÁSCARA EN ESCRITORIO (md en adelante) */}
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          position: 'absolute',
          inset: 0,
          zIndex: 1
        }}
      >
        {slides.map((s, index) => (
          <Box
            key={s.id}
            sx={{
              position: 'absolute',
              inset: 0,
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out, transform 4.5s ease-out',
              transform: index === currentSlide ? 'scale(1.02)' : 'scale(1)',
            }}
          >
            <Box
              component="img"
              src={s.image}
              alt={s.title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
            {/* Degradado para escritorio */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(
                  90deg, 
                  rgba(8, 13, 26, 0.92) 0%, 
                  rgba(8, 13, 26, 0.65) 55%, 
                  rgba(8, 13, 26, 0.3) 100%
                )`
              }}
            />
          </Box>
        ))}
      </Box>

      {/* 2. CONTENIDO PRINCIPAL ADAPTATIVO */}
      <Container
        maxWidth="xl"
        sx={{
          position: 'relative',
          zIndex: 10,
          px: { xs: 2, sm: 4 }
        }}
      >
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          spacing={{ xs: 3, md: 4 }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* BLOQUE DE TEXTO Y ACCIONES */}
          <Box maxWidth={{ xs: '100%', md: '580px' }} sx={{ width: '100%' }}>
            
            {/* Badge & Tag */}
            <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" sx={{ mb: 1.5 }}>
              <Box
                sx={{
                  px: 1,
                  py: 0.3,
                  borderRadius: '4px',
                  backgroundColor: darkBluePrimary,
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: { xs: '0.65rem', sm: '0.7rem' },
                  letterSpacing: 0.5,
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                {slide.badge}
              </Box>
              <Typography
                variant="caption"
                sx={{
                  color: '#94A3B8',
                  fontWeight: 800,
                  letterSpacing: 1,
                  fontFamily: 'monospace',
                  fontSize: { xs: '0.65rem', sm: '0.75rem' }
                }}
              >
                {slide.tag}
              </Typography>
            </Stack>

            {/* Título Principal */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '1.6rem', sm: '2.5rem', md: '3.6rem' },
                fontWeight: 900,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                lineHeight: 1.15,
                mb: 1.5,
                wordBreak: 'break-word'
              }}
            >
              {slide.title}
            </Typography>

            {/* Descripción */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1.1rem' },
                color: '#CBD5E1',
                lineHeight: 1.5,
                mb: 3
              }}
            >
              {slide.description}
            </Typography>

            {/* Botones de Acción */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
              <Button
                variant="contained"
                size="medium"
                startIcon={<ShoppingBagIcon />}
                onClick={handleScrollToProducts}
                sx={{
                  backgroundColor: darkBluePrimary,
                  color: '#FFFFFF',
                  fontWeight: 800,
                  px: { xs: 2, sm: 3.5 },
                  py: { xs: 1.2, sm: 1.4 },
                  borderRadius: '8px',
                  fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 14px rgba(30, 58, 138, 0.5)',
                  '&:hover': {
                    backgroundColor: darkBlueHover,
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                {slide.btnPrimary}
              </Button>

              <Button
                variant="outlined"
                size="medium"
                startIcon={<ExploreIcon />}
                onClick={handleScrollToProducts}
                sx={{
                  borderColor: 'rgba(255, 255, 255, 0.4)',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  px: { xs: 2, sm: 3 },
                  py: { xs: 1.2, sm: 1.4 },
                  borderRadius: '8px',
                  backdropFilter: 'blur(8px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  '&:hover': {
                    borderColor: '#FFFFFF',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                VER CATÁLOGO
              </Button>
            </Stack>

            {/* Indicadores de Banners */}
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: { xs: 2.5, md: 4 } }}>
              {slides.map((s, index) => (
                <Box
                  key={s.id}
                  onClick={() => setCurrentSlide(index)}
                  sx={{
                    width: index === currentSlide ? 30 : 10,
                    height: 5,
                    borderRadius: '3px',
                    backgroundColor: index === currentSlide ? darkBluePrimary : 'rgba(255, 255, 255, 0.3)',
                    border: index === currentSlide ? '1px solid rgba(255,255,255,0.4)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
              <Typography variant="caption" sx={{ color: '#64748B', fontFamily: 'monospace', ml: 1, fontSize: '0.75rem' }}>
                0{currentSlide + 1} / 02
              </Typography>
            </Stack>

          </Box>

          {/* VISUALIZADOR DE IMAGEN COMPLETA PARA MÓVILES Y TABLETS (xs y sm) */}
          <Box
            sx={{
              display: { xs: 'block', md: 'none' },
              width: '100%',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
              backgroundColor: '#0F172A',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <Box
              component="img"
              src={slide.image}
              alt={slide.title}
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '260px',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          </Box>

        </Stack>
      </Container>
    </Box>
  );
}