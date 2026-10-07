import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Skeleton,
  IconButton
} from '@mui/material';

// Iconos MUI
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Swiper React + Estilos
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Estilos dinámicos Modo Claro / Oscuro
import '../estilos/Productos2.css';

export default function Productos2({ data: initialData }) {
  const [products, setProducts] = useState(initialData || []);
  const [loading, setLoading] = useState(!initialData);

  useEffect(() => {
    if (!initialData) {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('https://server-triton.vercel.app/productos');
          setProducts(response.data);
        } catch (error) {
          console.error("Error al obtener los productos:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchProducts();
    } else {
      setProducts(initialData);
      setLoading(false);
    }
  }, [initialData]);

  const handleCardClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box component="section" className="productos2-section">
      <Container maxWidth="lg">
        {/* ENCABEZADO */}
        

        {loading ? (
          /* SKELETONS (CARGANDO) */
          <Box sx={{ display: 'flex', gap: 2, overflow: 'hidden' }}>
            {Array.from(new Array(4)).map((_, index) => (
              <Box key={index} sx={{ width: { xs: '100%', sm: '50%', md: '25%' }, flexShrink: 0, p: 1 }}>
                <Card className="p2-card" sx={{ p: 1 }}>
                  <Skeleton variant="rectangular" height={220} sx={{ borderRadius: 2 }} />
                  <Box sx={{ pt: 2 }}>
                    <Skeleton variant="text" width="80%" height={28} />
                    <Skeleton variant="text" width="40%" height={24} />
                    <Skeleton variant="rectangular" height={40} sx={{ mt: 2, borderRadius: 2 }} />
                  </Box>
                </Card>
              </Box>
            ))}
          </Box>
        ) : (
          /* CARRUSEL SWIPER */
          <Box 
            sx={{ 
              position: 'relative',
              px: { xs: 0, md: 2 },
              '& .swiper-pagination': { position: 'relative', mt: 3 },
              '& .swiper-pagination-bullet': { 
                bgcolor: 'var(--p2-text-secondary)', 
                opacity: 0.4,
                width: 10,
                height: 10,
                transition: 'all 0.3s ease'
              },
              '& .swiper-pagination-bullet-active': { 
                bgcolor: '#007bff', 
                opacity: 1, 
                width: 26, 
                borderRadius: 4 
              }
            }}
          >
            {/* BOTÓN ANTERIOR */}
            <IconButton
              className="swiper-prev-btn p2-card"
              sx={{
                position: 'absolute',
                top: '42%',
                left: -18,
                zIndex: 10,
                display: { xs: 'none', md: 'flex' },
                '&:hover': { bgcolor: '#007bff !important', color: '#fff !important' }
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" className="p2-title" />
            </IconButton>

            {/* BOTÓN SIGUIENTE */}
            <IconButton
              className="swiper-next-btn p2-card"
              sx={{
                position: 'absolute',
                top: '42%',
                right: -18,
                zIndex: 10,
                display: { xs: 'none', md: 'flex' },
                '&:hover': { bgcolor: '#007bff !important', color: '#fff !important' }
              }}
            >
              <ArrowForwardIosIcon fontSize="small" className="p2-title" />
            </IconButton>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                prevEl: '.swiper-prev-btn',
                nextEl: '.swiper-next-btn'
              }}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 16 },
                768: { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 4, spaceBetween: 24 }
              }}
              style={{ paddingBottom: '10px' }}
            >
              {products.map((product) => {
                const productId = product.product_id || product.id;
                const isPromo = product.is_promo || product.price < 150;

                return (
                  <SwiperSlide key={productId}>
                    <Card
                      elevation={0}
                      className="p2-card"
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justify: 'space-between',
                        position: 'relative',
                        '&:hover .product-image': {
                          transform: 'scale(1.08)'
                        }
                      }}
                    >
                      {/* BADGE DE PROMOCIÓN */}
                      {isPromo && (
                        <Chip
                          icon={<LocalOfferIcon sx={{ fontSize: '14px !important', color: '#fff !important' }} />}
                          label="PROMOCIÓN"
                          size="small"
                          color="error"
                          sx={{
                            position: 'absolute',
                            top: 12,
                            left: 12,
                            zIndex: 2,
                            fontWeight: 'bold',
                            fontSize: '0.7rem',
                            letterSpacing: 0.5
                          }}
                        />
                      )}

                      {/* CONTENEDOR DE LA IMAGEN */}
                      <Box
                        component={Link}
                        to={`/productos/${productId}`}
                        onClick={handleCardClick}
                        className="p2-img-box"
                        sx={{
                          position: 'relative',
                          overflow: 'hidden',
                          borderRadius: '12px 12px 0 0',
                          pt: '100%',
                          display: 'block'
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={product.main_image || product.image_url}
                          alt={product.product_name}
                          className="product-image"
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            p: 2,
                            transition: 'transform 0.4s ease'
                          }}
                        />
                      </Box>

                      {/* DETALLES DE PRODUCTO */}
                      <CardContent sx={{ flexGrow: 1, pt: 2, pb: 1 }}>
                        <Typography
                          component={Link}
                          to={`/productos/${productId}`}
                          onClick={handleCardClick}
                          variant="subtitle1"
                          className="p2-title"
                          sx={{
                            fontWeight: 700,
                            textDecoration: 'none',
                            display: '-webkit-box',
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            lineHeight: 1.3,
                            mb: 1,
                            '&:hover': {
                              color: '#007bff !important'
                            }
                          }}
                        >
                          {product.product_name}
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5 }}>
                          <Typography variant="caption" className="p2-subtitle">
                            Desde:
                          </Typography>
                          <Typography variant="h6" sx={{ fontWeight: 800, color: '#007bff' }}>
                            {product.price} $
                          </Typography>
                        </Box>
                      </CardContent>

                      {/* BOTÓN AGREGAR */}
                      <CardActions sx={{ p: 2, pt: 0 }}>
                        <Button
                          component={Link}
                          to={`/productos/${productId}`}
                          onClick={handleCardClick}
                          fullWidth
                          variant="contained"
                          startIcon={<ShoppingCartOutlinedIcon />}
                          sx={{
                            borderRadius: 2,
                            fontWeight: 700,
                            textTransform: 'none',
                            py: 1,
                            boxShadow: 'none',
                            backgroundColor: '#007bff',
                            '&:hover': {
                              backgroundColor: '#0056b3',
                              boxShadow: '0 4px 12px rgba(0, 123, 255, 0.4)'
                            }
                          }}
                        >
                          Agregar al carrito
                        </Button>
                      </CardActions>
                    </Card>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        )}
      </Container>
    </Box>
  );
}