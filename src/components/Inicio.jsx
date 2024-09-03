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
      const resp = await fetch('http://localhost:4001/api/product');
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
    <div>
    <div>
      <NavBar />
    </div>
    
      <div style={{bottom:0}}>
        <SeccionPrincipal />
      </div>
      <div>
         <Productos2 />
      </div>
      <div>
         <Seccion1 />
      </div>
    <div>
      <Footer />
    </div>
  </div>
    
  )
}


