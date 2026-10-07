import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Stack,
  Grid,
  Paper,
  useTheme
} from '@mui/material';

// Íconos MUI
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import StyleRoundedIcon from '@mui/icons-material/StyleRounded';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';

// Componentes del proyecto
import NavBar from '../NavBar';
import ProductCard from '../Pantalones/ProductCard';
import GaleriaGorras from './GaleriaGorras';
import Footer from '../Footer';

// Imagen principal
import GorraImg from '../../img/gorros.png';

// CSS global
import '../../estilos/Seccion1.css';

export default function Gorras() {
  const categorias = "gorros";
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const [perfilSeleccionado, setPerfilSeleccionado] = useState('cold');

  const perfiles = {
    jockey: {
      titulo: "Jockey Táctico Perfil Bajo",
      badge: "SISTEMA MODULAR DE VELCRO",
      desc: "Diseñado para el máximo confort bajo cascos o protección auditiva. Paneles de velcro frontales y traseros para parches de identificación.",
      imagen: GorraImg,
      stats: [
        { label: "Protección Solar", val: "UPF 50+", icon: <WbSunnyRoundedIcon fontSize="small" /> },
        { label: "Base de materiales", val: "Ripstop 65/35", icon: <SecurityRoundedIcon fontSize="small" /> },
        { label: "Secado Rápido", val: "< 12 min", icon: <WaterDropRoundedIcon fontSize="small" /> },
        { label: "Ajuste frontal", val: "Anatómico", icon: <LayersRoundedIcon fontSize="small" /> }
      ]
    },
    boonie: {
      titulo: "Sombrero Boonie Operativo",
      badge: "COBERTURA TOTAL 360°",
      desc: "Borde amplio para sombra continua en campo abierto. Incluye lazos de cinta pasante para camuflaje con vegetación natural.",
      imagen: GorraImg,
      stats: [
        { label: "Protección Solar", val: "UPF 50+ Máx", icon: <WbSunnyRoundedIcon fontSize="small" /> },
        { label: "Base de materiales", val: "Algodón Táctico", icon: <SecurityRoundedIcon fontSize="small" /> },
        { label: "Ventilación", val: "Ojales Malla", icon: <WaterDropRoundedIcon fontSize="small" /> },
        { label: "Sujeción", val: "Barboquejo", icon: <LayersRoundedIcon fontSize="small" /> }
      ]
    },
    cold: {
      titulo: "Gorro Térmico Clima frío",
      badge: "AISLAMIENTO Y ERGONOMÍA",
      desc: "Microfleece de alta densidad que retiene el calor corporal en entornos fríos o nocturnos sin añadir peso ni volumen.",
      imagen: GorraImg,
      stats: [
        { label: "Protección Clima", val: "Frío Extremo", icon: <AcUnitRoundedIcon fontSize="small" /> },
        { label: "Base de materiales", val: "Forro polar 280 g", icon: <SecurityRoundedIcon fontSize="small" /> },
        { label: "Transpiración", val: "Alta Evacuación", icon: <WaterDropRoundedIcon fontSize="small" /> },
        { label: "Elasticidad", val: "4 Direcciones", icon: <LayersRoundedIcon fontSize="small" /> }
      ]
    }
  };

  const actual = perfiles[perfilSeleccionado];

  const handleScrollToProducts = () => {
    const section = document.getElementById('catalogo-gorras');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`seccion-principal-container ${isDark ? 'dark-mode' : 'light-mode'}`}>
      {/* NAVEGACIÓN */}
      <NavBar />

      {/* HERO PRINCIPAL */}
      <Container 
        maxWidth="xl" 
        className="seccion-principal-grid" 
        sx={{ 
          mt: { xs: '70px', sm: '80px', md: '0px' }, // <--- AGREGA ESTA LÍNEA (desplaza el contenido hacia abajo en móvil)
          pt: { xs: 3, sm: 5, md: 12 }, 
          pb: { xs: 4, md: 6 },
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        
        {/* ENCABEZADO Y SELECTOR CON ESPACIADO CORREGIDO */}
        <Box 
          display="flex" 
          flexDirection={{ xs: 'column', lg: 'row' }} 
          justifyContent="space-between" 
          alignItems={{ xs: 'stretch', lg: 'center' }} 
          mb={{ xs: 3, md: 4 }} 
          gap={{ xs: 2, lg: 3 }}
        >
          {/* TÍTULO Y SUBTÍTULO */}
          <Box sx={{ width: '100%', maxWidth: { lg: '60%' } }}>
            <Typography 
              variant="caption" 
              className="subtitulo-categoria"
              sx={{ 
                fontWeight: 800, 
                letterSpacing: 1.2, 
                textTransform: 'uppercase',
                display: 'block',
                mb: 0.5,
                fontSize: { xs: '0.68rem', sm: '0.75rem' }
              }}
            >
              RENDIMIENTO DE LOS SOMBREROS 2026
            </Typography>
            <Typography 
              variant="h3" 
              className="titulo-principal"
              sx={{ 
                fontWeight: 900, 
                textTransform: 'uppercase', 
                letterSpacing: -0.5, 
                fontSize: { xs: '1.3rem', sm: '1.8rem', md: '2.2rem', lg: '2.4rem' },
                lineHeight: 1.15
              }}
            >
              PROTECCIÓN Y CONTROL TÁCTICO
            </Typography>
          </Box>

          {/* SELECTOR DE PESTAÑAS (Separado y deslizable en móvil) */}
          <Paper
            elevation={0}
            className="contenedor-pestañas"
            sx={{
              p: 0.5,
              borderRadius: 2.5,
              display: 'flex',
              gap: 0.5,
              width: { xs: '100%', lg: 'auto' },
              maxWidth: '100%',
              overflowX: 'auto',
              whiteSpace: 'nowrap',
              '&::-webkit-scrollbar': { display: 'none' },
              msOverflowStyle: 'none',
              scrollbarWidth: 'none'
            }}
          >
            {[
              { id: 'jockey', label: 'Jinetes Tácticos', icon: <StyleRoundedIcon fontSize="small" /> },
              { id: 'boonie', label: 'Sombreros Boonie', icon: <SecurityRoundedIcon fontSize="small" /> },
              { id: 'cold', label: 'Gorros Térmicos', icon: <AcUnitRoundedIcon fontSize="small" /> }
            ].map((tab) => {
              const active = perfilSeleccionado === tab.id;
              return (
                <Button
                  key={tab.id}
                  onClick={() => setPerfilSeleccionado(tab.id)}
                  startIcon={tab.icon}
                  className={active ? 'pestaña-activa' : 'pestaña-inactiva'}
                  sx={{
                    borderRadius: 2,
                    px: { xs: 1.5, sm: 2 },
                    py: 0.8,
                    fontSize: { xs: '0.72rem', sm: '0.8rem' },
                    fontWeight: 800,
                    textTransform: 'none',
                    flexShrink: 0
                  }}
                >
                  {tab.label}
                </Button>
              );
            })}
          </Paper>
        </Box>

        {/* BENTO GRID */}
        <Grid container spacing={{ xs: 2.5, md: 3.5 }}>
          
          {/* PANEL IZQUIERDO: DETALLES */}
          <Grid item xs={12} lg={7}>
            <Paper
              elevation={0}
              className="tarjeta-detalles"
              sx={{
                p: { xs: 2, sm: 3, md: 3.5 },
                height: '100%',
                borderRadius: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <Box>
                <Chip
                  label={actual.badge}
                  className="badge-tactico"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: '0.65rem', sm: '0.7rem' },
                    mb: 2
                  }}
                />

                <Typography 
                  variant="h3" 
                  className="titulo-producto" 
                  sx={{ 
                    fontWeight: 900, 
                    mb: 1.5, 
                    fontSize: { xs: '1.3rem', sm: '1.8rem', md: '2.2rem' } 
                  }}
                >
                  {actual.titulo}
                </Typography>

                <Typography 
                  variant="body1" 
                  className="descripcion-producto" 
                  sx={{ 
                    fontSize: { xs: '0.85rem', sm: '0.95rem' }, 
                    lineHeight: 1.55, 
                    mb: 3 
                  }}
                >
                  {actual.desc}
                </Typography>

                {/* ESTADÍSTICAS RESPONSIVAS */}
                <Grid container spacing={{ xs: 1, sm: 1.5 }} mb={3}>
                  {actual.stats.map((st, idx) => (
                    <Grid item xs={6} sm={3} key={idx}>
                      <Paper
                        elevation={0}
                        className="caja-estadistica"
                        sx={{
                          p: { xs: 1, sm: 1.5 },
                          borderRadius: 2,
                          textAlign: 'center'
                        }}
                      >
                        <Box className="icono-estadistica" sx={{ mb: 0.5 }}>
                          {st.icon}
                        </Box>
                        <Typography variant="h6" className="valor-estadistica" sx={{ fontWeight: 900, fontSize: { xs: '0.75rem', sm: '0.85rem' } }}>
                          {st.val}
                        </Typography>
                        <Typography variant="caption" className="etiqueta-estadistica" sx={{ fontWeight: 700, fontSize: '0.62rem', display: 'block' }}>
                          {st.label}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* BOTONES DE ACCIÓN */}
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2} 
                alignItems={{ xs: 'stretch', sm: 'center' }} 
                justifyContent="space-between" 
                pt={1}
              >
                <Button
                  variant="contained"
                  onClick={handleScrollToProducts}
                  endIcon={<ArrowForwardRoundedIcon />}
                  className="boton-accion-principal"
                  sx={{
                    fontWeight: 900,
                    px: 3.5,
                    py: 1.2,
                    borderRadius: 2.5,
                    width: { xs: '100%', sm: 'auto' },
                    textTransform: 'uppercase',
                    fontSize: '0.78rem'
                  }}
                >
                  Ver Modelos Disponibles
                </Button>

                <Stack direction="row" spacing={1} alignItems="center" justifyContent={{ xs: 'center', sm: 'flex-start' }}>
                  <CheckCircleRoundedIcon sx={{ color: '#10b981', fontSize: 18 }} />
                  <Typography variant="caption" className="texto-garantia" sx={{ fontWeight: 800 }}>
                    Garantía Mil-Spec 2026
                  </Typography>
                </Stack>
              </Stack>
            </Paper>
          </Grid>

          {/* PANEL DERECHO: IMAGEN */}
          <Grid item xs={12} lg={5}>
            <Paper
              elevation={0}
              className="tarjeta-imagen"
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                position: 'relative',
                height: { xs: 240, sm: 320, lg: '100%' },
                minHeight: { lg: 360 }
              }}
            >
              <Box
                component="img"
                src={actual.imagen}
                alt={actual.titulo}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />

              <Box
                className="overlay-imagen"
                sx={{
                  position: 'absolute',
                  bottom: 12,
                  left: 12,
                  right: 12,
                  p: 1.2,
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography variant="subtitle2" className="texto-overlay" sx={{ fontWeight: 800, fontSize: '0.75rem' }}>
                  Edición Táctica TRITON®
                </Typography>
                <Chip
                  label="DISPONIBLE"
                  size="small"
                  sx={{
                    backgroundColor: '#10b981',
                    color: '#ffffff',
                    fontWeight: 900,
                    fontSize: '0.62rem'
                  }}
                />
              </Box>
            </Paper>
          </Grid>

        </Grid>
      </Container>

      {/* CATÁLOGO DE PRODUCTOS */}
      <Box sx={{ mb: 6 }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'flex-end' }} mb={3}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 900, textTransform: 'uppercase' }}>
                Catálogo de Sombreros
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.75 }}>
                Elige el modelo adecuado según tus necesidades tácticas o urbanas.
              </Typography>
            </Box>
          </Stack>

          <ProductCard categorias="camisas" />
        </Box>

      {/* GALERÍA */}
      <Box className="seccion-galeria" sx={{ py: 4 }}>
        <GaleriaGorras />
      </Box>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}