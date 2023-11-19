// App.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MyCard from './MyCard';
import Row from 'react-bootstrap/Row';

const App = () => {
  const title = "Adopta un perrito";

  const cardData = [
    {
      image: 'https://media.istockphoto.com/id/490849353/es/foto/linda-hombres-blancos-caniche-cachorro.jpg?s=612x612&w=0&k=20&c=IAOTqMpVhxnyQD9WMn7VPua041IO0fGp4y1VcZRkQSM=',
      name: 'Daddy',
      description: 'Lleno de amor y ganas de jugar',
      tags: { text: 'Poddle', color: 'info' },
    },
    {
      image: 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg',
      name: 'Cachetón',
      description: 'Muy juguetón y el perro más fiel que pueda existir',
      tags: { text: 'Golden', color: 'info' },
    },
    {
      image: 'https://img.freepik.com/foto-gratis/labrador-recuperar_155003-149.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699747200&semt=ais',
      name: 'Sofi',
      description: 'Amorosa, juguetona y fiel',
      tags: { text: 'Labradora', color: 'info' },
    },
    {
      image: 'https://static9.depositphotos.com/1594920/1087/i/450/depositphotos_10875775-stock-photo-golden-retriever-2-years.jpg',
      name: 'Ayún',
      description: 'Amorosa, juguetona y fiel',
      tags: { text: 'Labradora', color: 'info' },
    },
    // Agregar más datos de tarjetas según sea necesario
  ];

  return (
    <div>
      <Header title={title} />
      <Row className="card-container">
        {cardData.map((card, index) => (
          <MyCard key={index} {...card} />
        ))}
      </Row>
      <Footer />
    </div>
  );
};

export default App;
