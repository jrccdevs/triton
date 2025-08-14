import React, { useRef, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Empresa from "../../img/triton.svg";
import '../../estilos/Carrito/Factura.css'

const Factura = ({ cart, total }) => {
  const facturaRef = useRef();

  const numeroFactura = '001-000' + Math.floor(100000 + Math.random() * 900000);
  const fecha = new Date().toLocaleDateString();
  const nit = '123456789';
  const qrData = `Factura:${numeroFactura}|NIT:${nit}|Total:${total.toFixed(2)}|Fecha:${fecha}`;

  useEffect(() => {
    const generarPDF = async () => {
      const element = facturaRef.current;

      const pdfWindow = window.open('', '_blank');
      if (!pdfWindow) {
        alert('Por favor, permite las ventanas emergentes para ver el PDF.');
        return;
      }

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgProps = pdf.getImageProperties(imgData);
      const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

      const yOffset = imgHeight < pdfHeight ? (pdfHeight - imgHeight) / 2 : 0;

      pdf.addImage(imgData, 'PNG', 0, yOffset, pdfWidth, imgHeight);

      const pdfBlob = pdf.output('bloburl');
      pdfWindow.location.href = pdfBlob;
    };

    generarPDF();
  }, [cart, total]);

  return (
    <div ref={facturaRef} className="factura-container">
      <header className="factura-header">
        <img src={Empresa} alt="Logo" crossOrigin="anonymous" />
        <div className="factura-info">
          <p><strong>N° Factura:</strong> {numeroFactura}</p>
          <p><strong>NIT:</strong> {nit}</p>
          <p><strong>Fecha:</strong> {fecha}</p>
        </div>
      </header>

      <section className="factura-cliente">
        <p><strong>Cliente:</strong> Consumidor Final</p>
        <p><strong>CI/NIT:</strong> 0</p>
      </section>

      <table className="factura-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Color</th>
            <th>Talla</th>
            <th>Cantidad</th>
            <th>Precio Unit.</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, i) => {
            const qty = item.quantity || 1;
            const subtotal = item.price * qty;
            return (
              <tr key={i}>
                <td data-label="Producto">{item.name}</td>
                <td data-label="Color">{item.color}</td>
                <td data-label="Talla">{item.size}</td>
                <td data-label="Cantidad">{qty}</td>
                <td data-label="Precio Unit.">${item.price.toFixed(2)}</td>
                <td data-label="Subtotal">${subtotal.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="factura-total">
        <strong>Total: ${total.toFixed(2)}</strong>
      </div>

      <div className="factura-qr">
        <QRCodeCanvas value={qrData} size={128} />
      </div>
    </div>
  );
};

export default Factura;
