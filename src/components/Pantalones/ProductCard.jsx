import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  Button,
  IconButton,
  Chip,
  Skeleton,
  Stack,
  Tooltip
} from '@mui/material';

// Íconos MUI Tácticos
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Importación de estilos del módulo
import '../../estilos/Pantalones.css';
import '../../estilos/Seccion1.css';

const ProductCard = ({ categorias }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  // CONSUMO DEL ENDPOINT DINÁMICO
  useEffect(() => {
    console.log('Categoría capturada:', categorias);

    if (!categorias) {
      console.error('La categoría no está definida');
      setLoading(false);
      return;
    }

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://server-triton.vercel.app/categorias/${categorias}`
        );
        console.log('Datos completos de la API:', response.data);

        const productosObtenidos = response.data.products || response.data;
        setProducts(Array.isArray(productosObtenidos) ? productosObtenidos : []);
      } catch (error) {
        console.error(
          'Error fetching products:',
          error.response ? error.response.data : error.message
        );
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categorias]);

  // CONTROLES DE DESPLAZAMIENTO DEL CARRUSEL
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ width: '100%', py: 1, position: 'relative' }}>
      
      {/* CABECERA DEL CARRUSEL Y CONTROLES */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2.5, px: { xs: 1, sm: 2 } }}
      >
        <Stack direction="row" spacing={1.2} alignItems="center">
          <GpsFixedIcon sx={{ color: 'var(--color-accent)', fontSize: 20 }} />
          <Typography
            variant="overline"
            sx={{
              fontWeight: 900,
              letterSpacing: 2,
              color: 'var(--texto-titulo)',
              fontSize: '0.85rem'
            }}
          >
            DESPLIEGUE TÁCTICO // {categorias ? categorias.toUpperCase() : 'EQUIPAMIENTO'}
          </Typography>
        </Stack>

        {/* BOTONES DE NAVEGACIÓN DEL CARRUSEL */}
        {products.length > 0 && !loading && (
          <Stack direction="row" spacing={1}>
            <IconButton
              onClick={scrollLeft}
              size="small"
              sx={{
                bgcolor: 'var(--bg-tarjeta)',
                color: 'var(--texto-titulo)',
                border: '1px solid var(--border-color)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'all 0.25s ease',
                '&:hover': {
                  bgcolor: 'var(--color-accent)',
                  color: '#ffffff',
                  borderColor: 'var(--color-accent)',
                  transform: 'scale(1.05)'
                }
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            <IconButton
              onClick={scrollRight}
              size="small"
              sx={{
                bgcolor: 'var(--bg-tarjeta)',
                color: 'var(--texto-titulo)',
                border: '1px solid var(--border-color)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'all 0.25s ease',
                '&:hover': {
                  bgcolor: 'var(--color-accent)',
                  color: '#ffffff',
                  borderColor: 'var(--color-accent)',
                  transform: 'scale(1.05)'
                }
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Stack>
        )}
      </Stack>

      {/* RENDERIZADO DEL CARRUSEL */}
      {loading ? (
        // ESQUELETOS DE CARGA (SKELETONS)
        <Stack direction="row" spacing={2.5} sx={{ overflowX: 'hidden', py: 1 }}>
          {[1, 2, 3, 4].map((item) => (
            <Paper
              key={item}
              elevation={0}
              sx={{
                minWidth: { xs: 260, sm: 290, md: 310 },
                borderRadius: 4,
                p: 2,
                bgcolor: 'var(--bg-tarjeta)',
                border: '1px solid var(--border-color)'
              }}
            >
              <Skeleton variant="rounded" height={240} sx={{ borderRadius: 3, mb: 2 }} />
              <Skeleton variant="text" width="60%" height={20} />
              <Skeleton variant="text" width="80%" height={28} sx={{ mb: 2 }} />
              <Skeleton variant="rounded" height={44} sx={{ borderRadius: 3 }} />
            </Paper>
          ))}
        </Stack>
      ) : products.length > 0 ? (
        // LISTA EN CARRUSEL DESLIZANTE
        <Box
          ref={sliderRef}
          sx={{
            display: 'flex',
            gap: 2.5,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            py: 1.5,
            px: { xs: 1, sm: 2 },
            '&::-webkit-scrollbar': { height: '6px' },
            '&::-webkit-scrollbar-track': { bgcolor: 'transparent' },
            '&::-webkit-scrollbar-thumb': {
              bgcolor: 'var(--border-color)',
              borderRadius: '10px'
            },
            '&::-webkit-scrollbar-thumb:hover': {
              bgcolor: 'var(--color-accent)'
            }
          }}
        >
          {products.map((product) => (
            <Paper
              key={product.product_id}
              elevation={0}
              sx={{
                minWidth: { xs: 260, sm: 290, md: 310 },
                maxWidth: { xs: 260, sm: 290, md: 310 },
                scrollSnapAlign: 'start',
                borderRadius: 4,
                overflow: 'hidden',
                backgroundColor: 'var(--bg-tarjeta)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  borderColor: 'var(--color-accent)',
                  boxShadow: '0 16px 32px rgba(0,0,0,0.18)',
                  '& .product-img': {
                    transform: 'scale(1.08)'
                  },
                  '& .scan-line': {
                    opacity: 1,
                    animation: 'scanEffect 1.2s ease-in-out infinite'
                  }
                },
                '@keyframes scanEffect': {
                  '0%': { top: '0%' },
                  '100%': { top: '100%' }
                }
              }}
            >
              {/* LÍNEA LÁSER DE ESCANEO HUD EN HOVER */}
              <Box
                className="scan-line"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)',
                  boxShadow: '0 0 10px var(--color-accent)',
                  opacity: 0,
                  zIndex: 10,
                  pointerEvents: 'none'
                }}
              />

              {/* CONTENEDOR DE LA IMAGEN CON BADGE DE PRECIO */}
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: 250,
                  overflow: 'hidden',
                  bgcolor: 'rgba(0,0,0,0.03)'
                }}
              >
                <Box
                  component="img"
                  className="product-img"
                  src={product.main_image}
                  alt={product.product_name}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
                  }}
                />

                {/* OVERLAY GRADIENTE INFERIOR */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(10,15,29,0.7) 100%)'
                  }}
                />

                {/* INDICADOR STOCK/STATUS */}
                <Chip
                  label="READY // STOCK"
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 14,
                    left: 14,
                    fontWeight: 800,
                    fontSize: '0.62rem',
                    letterSpacing: 1,
                    bgcolor: 'rgba(10, 15, 29, 0.85)',
                    color: '#34d399 !important',
                    border: '1px solid rgba(52, 211, 153, 0.4)',
                    backdropFilter: 'blur(6px)'
                  }}
                />

                {/* BADGE DE PRECIO MILITAR */}
                <Chip
                  icon={<LocalOfferIcon sx={{ fontSize: '13px !important', color: '#10b981 !important' }} />}
                  label={`$${product.price}`}
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 14,
                    right: 14,
                    fontWeight: 900,
                    fontSize: '0.82rem',
                    bgcolor: 'rgba(10, 15, 29, 0.88)',
                    color: '#ffffff !important',
                    border: '1px solid rgba(16, 185, 129, 0.6)',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                  }}
                />
              </Box>

              {/* CONTENIDO Y INFORMACIÓN DEL PRODUCTO */}
              <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'var(--color-accent)',
                      fontWeight: 800,
                      letterSpacing: 1.2,
                      textTransform: 'uppercase',
                      display: 'block',
                      mb: 0.5,
                      fontSize: '0.68rem'
                    }}
                  >
                    ESPECIFICACIÓN MIL-SPEC
                  </Typography>

                  <Typography
                    variant="h6"
                    noWrap
                    sx={{
                      fontWeight: 900,
                      fontSize: '0.98rem',
                      color: 'var(--texto-titulo)',
                      textTransform: 'uppercase',
                      lineHeight: 1.25
                    }}
                  >
                    {product.product_name}
                  </Typography>
                </Box>

                {/* BOTÓN CON CORRECCIÓN TOTAL DE MODO CLARO Y MODO OSCURO */}
                <Button
                  component={Link}
                  to={`/productos/${product.product_id}`}
                  variant="contained"
                  fullWidth
                  startIcon={<ShoppingCartIcon fontSize="small" />}
                  endIcon={<ArrowForwardIcon fontSize="small" className="arrow-icon" />}
                  sx={{
                    // Solución para lectura perfecta en Modo Claro y Oscuro:
                    // Utiliza variable CSS o color de alto contraste con var(--texto-titulo)
                    bgcolor: 'var(--texto-titulo)',
                    color: 'var(--bg-tarjeta) !important',
                    fontWeight: 900,
                    py: 1.3,
                    px: 2,
                    borderRadius: 3,
                    textTransform: 'uppercase',
                    fontSize: '0.78rem',
                    letterSpacing: 0.5,
                    textDecoration: 'none !important',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
                    transition: 'all 0.3s ease',
                    '& .arrow-icon': {
                      transition: 'transform 0.3s ease'
                    },
                    '&:hover': {
                      bgcolor: 'var(--color-accent)',
                      color: '#ffffff !important',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(79, 70, 229, 0.4)',
                      '& .arrow-icon': {
                        transform: 'translateX(4px)'
                      }
                    }
                  }}
                >
                  Agregar al carrito
                </Button>
              </Box>
            </Paper>
          ))}
        </Box>
      ) : (
        // MENSAJE CUANDO NO HAY PRODUCTOS EN LA CATEGORÍA
        <Paper
          elevation={0}
          sx={{
            p: 4,
            textAlign: 'center',
            borderRadius: 4,
            bgcolor: 'var(--bg-tarjeta)',
            border: '1px solid var(--border-color)'
          }}
        >
          <Typography variant="body1" sx={{ color: 'var(--texto-cuerpo)', fontWeight: 700 }}>
            No hay productos disponibles en esta categoría actualmente.
          </Typography>
        </Paper>
      )}

    </Box>
  );
};

export default ProductCard;