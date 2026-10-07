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
  Tabs,
  Tab,
  Divider,
  Avatar
} from '@mui/material';

// Iconos
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';

// Componentes
import NavBar from '../NavBar';
import ProductCard from '../Pantalones/ProductCard';
import Footer from '../Footer';
import GaleriaChaquetas from './GaleriaChaquetas';
// Importamos exactamente tu CSS donde defines .dark-mode
import '../../estilos/Seccion1.css'; 

// Imagen
import ImagenChaquetas from '../../img/camisas.png';

export default function Chaquetas() {
  const [selectedLayer, setSelectedLayer] = useState(0);

  const handleLayerChange = (event, newValue) => {
    setSelectedLayer(newValue);
  };

  const capasTácticas = [
    {
      label: 'Capa 3 • Shell Impermeable',
      titulo: 'Chaqueta Softshell Storm-Pro',
      subtitulo: 'Máxima protección contra tormentas y clima adverso.',
      temperatura: '-10°C a 10°C',
      impermeabilidad: 'Columna de 10.000 mm',
      caracteristicas: [
        'Cierres estancos termosellados YKK Aquaguard',
        'Capa exterior Ripstop 500D resistente al desgarro',
        'Capucha regulable ocultable en cuello militar'
      ]
    },
    {
      label: 'Capa 2 • Térmica / Abrigo',
      titulo: 'Chaqueta Polar Fleece Tactical',
      subtitulo: 'Retención de calor corporal con peso ultra-reducido.',
      temperatura: '-5°C a 15°C',
      impermeabilidad: 'Resistente a llovizna (DWR)',
      caracteristicas: [
        'Tejido térmico micro-fleece respirable',
        'Refuerzos en hombros y codos para carga de mochila',
        'Paneles de velcro en bíceps para parches de identificación'
      ]
    },
    {
      label: 'Capa 1 • Cortaviento Urbano',
      titulo: 'Cortavientos Táctico Recon',
      subtitulo: 'Diseño liviano para operaciones ágiles y entrenamiento.',
      temperatura: '10°C a 22°C',
      impermeabilidad: 'Repelente al agua básico',
      caracteristicas: [
        'Compresión ultraligera (entra en un bolsillo)',
        'Aberturas de ventilación axilares con cierre',
        'Ajuste anatómico sin restricción de movimiento'
      ]
    }
  ];

  return (
    <Box className="seccion-principal-container pantalones-hero-section" sx={{ minHeight: '100vh', pt: 1 }}>
      <NavBar />

      <Container maxWidth="xl" sx={{ pt: { xs: 2, md: 4 }, pb: 6 }}>
        {/* CONTAINER HERO */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: 4,
            overflow: 'hidden',
            border: '1px solid rgba(150, 150, 150, 0.2)'
          }}
        >
          <Grid container spacing={0}>
            {/* LADO IZQUIERDO: IMAGEN HERO */}
            <Grid 
              item 
              xs={12} 
              md={6} 
              lg={7} 
              sx={{ 
                position: 'relative', 
                minHeight: { xs: 350, md: 520 }
              }}
            >
              <Box
                component="img"
                src={ImagenChaquetas}
                alt="Chaqueta Táctica"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />

              {/* Badge Flotante de Temperatura */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 20,
                  left: 20,
                  p: 2,
                  px: 2.5,
                  borderRadius: 3,
                  bgcolor: 'rgba(20, 20, 20, 0.85)',
                  backdropFilter: 'blur(8px)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <Avatar sx={{ bgcolor: '#1976d2', color: '#ffffff' }}>
                  <ThermostatOutlinedIcon />
                </Avatar>
                <Box>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      textTransform: 'uppercase', 
                      letterSpacing: 0.8, 
                      fontWeight: 700, 
                      display: 'block',
                      opacity: 0.85
                    }}
                  >
                    SISTEMA TÉRMICO OPERATIVO
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 900, lineHeight: 1 }}>
                    {capasTácticas[selectedLayer].temperatura}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* LADO DERECHO: DETALLES Y PESTAÑAS */}
            <Grid 
              item 
              xs={12} 
              md={6} 
              lg={5} 
              sx={{ 
                p: { xs: 3, sm: 4, md: 5 }, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center'
              }}
            >
              <Box mb={2}>
                <Chip
                  icon={<LayersOutlinedIcon sx={{ fontSize: '16px !important' }} />}
                  label="TECNOLOGÍA DE CAPAS TÁCTICAS"
                  color="primary"
                  size="small"
                  sx={{ fontWeight: 800, mb: 2, letterSpacing: 0.5 }}
                />

                <Tabs
                  value={selectedLayer}
                  onChange={handleLayerChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  sx={{
                    mb: 3,
                    borderBottom: 1,
                    borderColor: 'divider',
                    '& .MuiTab-root': {
                      fontWeight: 800,
                      fontSize: '0.8rem',
                      textTransform: 'none',
                      minWidth: 'auto',
                      px: 1.5,
                      pb: 1.5,
                      color: 'inherit'
                    }
                  }}
                >
                  {capasTácticas.map((capa, idx) => (
                    <Tab key={idx} label={capa.label} />
                  ))}
                </Tabs>

                <Typography variant="h4" component="h1" sx={{ fontWeight: 900, mb: 1, textTransform: 'uppercase' }}>
                  {capasTácticas[selectedLayer].titulo}
                </Typography>

                <Typography variant="body2" sx={{ opacity: 0.8, fontSize: '0.95rem', mb: 3 }}>
                  {capasTácticas[selectedLayer].subtitulo}
                </Typography>
              </Box>

              <Stack direction="row" spacing={1.5} mb={3} flexWrap="wrap" gap={1}>
                <Chip
                  icon={<WaterDropOutlinedIcon sx={{ fontSize: '18px !important' }} />}
                  label={capasTácticas[selectedLayer].impermeabilidad}
                  variant="outlined"
                  sx={{ fontWeight: 700, borderRadius: 2, color: 'inherit', borderColor: 'rgba(150,150,150,0.3)' }}
                />
                <Chip
                  icon={<ShieldOutlinedIcon sx={{ fontSize: '18px !important' }} />}
                  label="Refuerzo Cordura"
                  variant="outlined"
                  sx={{ fontWeight: 700, borderRadius: 2, color: 'inherit', borderColor: 'rgba(150,150,150,0.3)' }}
                />
              </Stack>

              <Stack spacing={1.5} mb={4}>
                {capasTácticas[selectedLayer].caracteristicas.map((item, index) => (
                  <Stack key={index} direction="row" alignItems="center" spacing={1.5}>
                    <CheckCircleOutlinedIcon color="primary" sx={{ fontSize: 20 }} />
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  borderRadius: 3,
                  py: 1.6,
                  fontWeight: 800,
                  textTransform: 'none',
                  fontSize: '1rem'
                }}
              >
                Ver Modelos Disponibles
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* MÓDULOS DE ESPECIFICACIONES HORIZONTALES */}
        <Grid container spacing={2} sx={{ mt: 3 }}>
          {[
            {
              icon: <WaterDropOutlinedIcon color="primary" fontSize="medium" />,
              title: 'Protección impermeable',
              desc: 'Tejido tratado con membranas DWR que repelen el agua en lluvias continuas.'
            },
            {
              icon: <AirOutlinedIcon color="primary" fontSize="medium" />,
              title: 'Bloqueo a prueba de viento',
              desc: 'Detiene el viento frío garantizando la retención de temperatura corporal.'
            },
            {
              icon: <ShieldOutlinedIcon color="primary" fontSize="medium" />,
              title: 'Estándar Táctico Milspec',
              desc: 'Resistencia probada a desgarros, fricción intensa y desgaste por equipo.'
            }
          ].map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  borderRadius: 3,
                  border: '1px solid rgba(150, 150, 150, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2
                }}
              >
                <Box 
                  sx={{ 
                    p: 1.2, 
                    borderRadius: 2, 
                    bgcolor: 'rgba(150, 150, 150, 0.1)', 
                    display: 'flex' 
                  }}
                >
                  {item.icon}
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.75, display: 'block', lineHeight: 1.3 }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 5 }} />

        {/* CATÁLOGO DE PRODUCTOS */}
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 900, mb: 0.5, textTransform: 'uppercase' }}>
            Catálogo General de Chaquetas
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.75, mb: 3 }}>
            Elige el equipamiento adecuado según tu nivel de exigencia.
          </Typography>

          <ProductCard categorias="chaquetas" />
        </Box>
        <Box>
         

          <GaleriaChaquetas />
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}