import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Chip,
  Stack,
  Divider,
  Button,
  Avatar,
  Rating
} from '@mui/material';

// Íconos Material UI
import StyleIcon from '@mui/icons-material/Style';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ShieldCheckIcon from '@mui/icons-material/Shield';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FlashOnIcon from '@mui/icons-material/FlashOn';

// Datos para la pasarela horizontal moderna
const galeriaEstilos = [
  {
    id: 'look-urban',
    tag: 'TÁCTICO URBANO',
    nombre: 'Serie Tactical Blackout',
    frase: 'Ingeniería discreta para la ciudad',
    imagen: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1400&auto=format&fit=crop',
    calificacion: 4.9,
    opiniones: 128,
    caracteristicas: [
      { titulo: 'Corte anatómico', desc: 'Ajuste ceñido pero flexible' },
      { titulo: 'Costuras invisibles', desc: 'Evita la fricción con chalecos' },
      { titulo: 'Color sólido', desc: 'Resistente a lavados frecuentes' }
    ],
    materiaPrima: 'Poly-Elastano Pro 180g',
    usoRecomendado: 'Patrullaje / Uso Diario'
  },
  {
    id: 'look-camo',
    tag: 'OPERACIONES CAMO',
    nombre: 'Edición Recon Coyote & Tan',
    frase: 'Máxima ventilación en climas cálidos',
    imagen: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1400&auto=format&fit=crop',
    calificacion: 5.0,
    opiniones: 94,
    caracteristicas: [
      { titulo: 'Protección UV 50+', desc: 'Bloqueo solar certificado' },
      { titulo: 'Secado Express', desc: 'Evacua humedad en 10 min' },
      { titulo: 'Bolsillo Oculto', desc: 'Cierre magnético de perfil bajo' }
    ],
    materiaPrima: 'Ripstop Micro-Mesh 140g',
    usoRecomendado: 'Terreno Árido / Despliegue'
  },
  {
    id: 'look-fit',
    tag: 'ATHLETIC HIGH-PERFORMANCE',
    nombre: 'Polera Dry-Fit Combat',
    frase: 'Libertad de movimiento 360 grados',
    imagen: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1400&auto=format&fit=crop',
    calificacion: 4.8,
    opiniones: 210,
    caracteristicas: [
      { titulo: 'Elasticidad 4-Way', desc: 'Acompaña la flexión muscular' },
      { titulo: 'Tratamiento Antibacteriano', desc: 'Control de malos olores' },
      { titulo: 'Ultra ligera', desc: 'Sensación de segunda piel' }
    ],
    materiaPrima: 'Micro-Poliéster Respirable',
    usoRecomendado: 'Entrenamiento / Crossfit Táctico'
  }
];

export default function GaleriaCamisas() {
  const [estiloActivo, setEstiloActivo] = useState(0);
  const estilo = galeriaEstilos[estiloActivo];

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      
      {/* HEADER PRINCIPAL MODERNO */}
      <Box mb={4} textAlign="center">
        <Chip
          icon={<AutoAwesomeIcon sx={{ fontSize: '14px !important', color: '#818cf8' }} />}
          label="LOOKBOOK & SHOWCASE DIVERSIFICADO"
          sx={{
            backgroundColor: 'rgba(129, 140, 248, 0.1)',
            color: '#818cf8',
            border: '1px solid rgba(129, 140, 248, 0.25)',
            fontWeight: 800,
            fontSize: '0.75rem',
            mb: 1.5
          }}
        />
        <Typography variant="h3" component="h2" sx={{ fontWeight: 900, textTransform: 'uppercase', color: 'white', letterSpacing: -0.5 }}>
          Líneas de Diseño & Siluetas
        </Typography>
        <Typography variant="body2" sx={{ color: '#94a3b8', mt: 1, maxWidth: 600, mx: 'auto' }}>
          Explora los acabados textiles, caída de la tela y aplicaciones en terreno según cada categoría.
        </Typography>
      </Box>

      {/* SELECTOR DE ESTILOS HORIZONTAL (TABS ESTILO PILL) */}
      <Stack direction="row" spacing={2} justifyContent="center" mb={4} sx={{ overflowX: 'auto', pb: 1 }}>
        {galeriaEstilos.map((item, index) => {
          const esSeleccionado = index === estiloActivo;
          return (
            <Paper
              key={item.id}
              onClick={() => setEstiloActivo(index)}
              elevation={0}
              sx={{
                px: 3,
                py: 1.5,
                borderRadius: 50,
                cursor: 'pointer',
                backgroundColor: esSeleccionado ? '#818cf8' : 'rgba(255, 255, 255, 0.03)',
                color: esSeleccionado ? '#000000' : '#94a3b8',
                border: esSeleccionado ? '1px solid #818cf8' : '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                '&:hover': {
                  backgroundColor: esSeleccionado ? '#818cf8' : 'rgba(255, 255, 255, 0.08)',
                  color: esSeleccionado ? '#000' : '#white'
                }
              }}
            >
              <StyleIcon sx={{ fontSize: 18 }} />
              <Typography variant="subtitle2" sx={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem' }}>
                {item.tag}
              </Typography>
            </Paper>
          );
        })}
      </Stack>

      {/* HERO BANNER HORIZONTAL FULL-WIDTH (IMAGEN ENORME CON OVERLAY) */}
      <Paper
        elevation={0}
        sx={{
          position: 'relative',
          height: { xs: 350, md: 460 },
          borderRadius: 5,
          overflow: 'hidden',
          backgroundColor: '#090d16',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          mb: 3
        }}
      >
        <Box
          component="img"
          src={estilo.imagen}
          alt={estilo.nombre}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'all 0.6s ease'
          }}
        />

        {/* Viñeta Oscura Inferior */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(9, 13, 22, 0.95) 0%, rgba(9, 13, 22, 0.3) 50%, transparent 100%)'
          }}
        />

        {/* Ficha Flotante Superior */}
        <Box position="absolute" top={24} left={24} zIndex={2}>
          <Chip
            label={estilo.tag}
            sx={{
              backgroundColor: '#818cf8',
              color: '#000',
              fontWeight: 900,
              fontSize: '0.75rem'
            }}
          />
        </Box>

        {/* Título e Info sobre el Banner */}
        <Box position="absolute" bottom={32} left={32} right={32} zIndex={2} display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ md: 'flex-end' }} gap={2}>
          <Box>
            <Typography variant="h3" component="h3" sx={{ color: 'white', fontWeight: 900, textTransform: 'uppercase', mb: 0.5 }}>
              {estilo.nombre}
            </Typography>
            <Typography variant="h6" sx={{ color: '#cbd5e1', fontWeight: 400, fontSize: '1rem' }}>
              {estilo.frase}
            </Typography>
          </Box>

          <Stack direction="row" spacing={2} alignItems="center">
            <Box textAlign={{ xs: 'left', md: 'right' }}>
              <Stack direction="row" alignItems="center" spacing={0.5} justifyContent={{ md: 'flex-end' }}>
                <Rating value={estilo.calificacion} precision={0.1} readOnly size="small" sx={{ color: '#fbbf24' }} />
                <Typography variant="body2" sx={{ color: 'white', fontWeight: 800 }}>
                  {estilo.calificacion}
                </Typography>
              </Stack>
              <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                {estilo.opiniones} Valoraciones de usuarios
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Paper>

      {/* BENTO GRID INFORMATIVO DE 3 COLUMNAS (DETALLES SIN DUPLICAR BARRAS DE TELEMETRÍA) */}
      <Grid container spacing={3}>
        
        {/* BLOQUE 1: ATRIBUTOS CLAVE */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              height: '100%',
              borderRadius: 4,
              backgroundColor: '#0f172a',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <Typography variant="caption" sx={{ color: '#818cf8', fontWeight: 800, textTransform: 'uppercase', display: 'block', mb: 2 }}>
              01 // Características de Confección
            </Typography>
            
            <Stack spacing={2}>
              {estilo.caracteristicas.map((c, i) => (
                <Box key={i} display="flex" gap={1.5} alignItems="flex-start">
                  <FlashOnIcon sx={{ color: '#818cf8', fontSize: 18, mt: 0.3 }} />
                  <Box>
                    <Typography variant="body2" sx={{ color: 'white', fontWeight: 800 }}>
                      {c.titulo}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                      {c.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Grid>

        {/* BLOQUE 2: MATERIAL Y COMPOSICIÓN */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              height: '100%',
              borderRadius: 4,
              backgroundColor: '#0f172a',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <Typography variant="caption" sx={{ color: '#38bdf8', fontWeight: 800, textTransform: 'uppercase', display: 'block', mb: 2 }}>
              02 // Base Textil y Uso
            </Typography>

            <Box mb={2.5}>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                COMPOSICIÓN PRINCIPAL:
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 800 }}>
                {estilo.materiaPrima}
              </Typography>
            </Box>

            <Divider sx={{ my: 1.5, borderColor: 'rgba(255,255,255,0.08)' }} />

            <Box>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                ENTORNO RECOMENDADO:
              </Typography>
              <Typography variant="subtitle1" sx={{ color: '#34d399', fontWeight: 800 }}>
                {estilo.usoRecomendado}
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* BLOQUE 3: ACCIÓN DIRECTA / NAVEGACIÓN AL CATÁLOGO */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              height: '100%',
              borderRadius: 4,
              backgroundColor: 'rgba(129, 140, 248, 0.05)',
              border: '1px solid rgba(129, 140, 248, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between'
            }}
          >
            <Box>
              <ShieldCheckIcon sx={{ color: '#818cf8', fontSize: 32, mb: 1 }} />
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 800, mb: 0.5 }}>
                Garantía de Ajuste
              </Typography>
              <Typography variant="body2" sx={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                Todas nuestras prendas están probadas para resistir uso continuo sin perder forma ni color.
              </Typography>
            </Box>

            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                mt: 3,
                backgroundColor: '#818cf8',
                color: '#000',
                fontWeight: 900,
                py: 1.2,
                borderRadius: 3,
                textTransform: 'uppercase',
                '&:hover': { backgroundColor: '#6366f1', color: '#fff' }
              }}
            >
              Ver Catálogo Completo
            </Button>
          </Paper>
        </Grid>

      </Grid>
    </Container>
  );
}