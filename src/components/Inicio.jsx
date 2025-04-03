import React, { Component } from 'react'
import {useEffect, useState} from 'react';
import NavBar from './NavBar'
import Footer from './Footer';
import { Link } from 'react-router-dom'
import '../css/inicio.css';
import Empresa from "../img/homepage.webp";
import Productos2 from './Productos2.jsx';
import Seccion1 from './Seccion1.jsx';
import SeccionPrincipal from './SeccionPrincipal.jsx';

export default function Inicio() {
  const [data, setData] = useState("");
  const getData = async () => {
    try {
      const resp = await fetch('https://server-triton.vercel.app/productos');
      const json = await resp.json();
      setData(json);
    } catch (err) {
      setData(err.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ width: '100%', margin: 0, padding: 0 }}>
    <NavBar />
    <div style={{ marginTop: 'auto' }}>
      <SeccionPrincipal />
    </div>
    <div style={{ width: '100%' }}>
      <Productos2 />
    </div>
    <div style={{ width: '100%' }}>
      <Seccion1 />
    </div>
    <Footer />
  </div>
    
  )
}


