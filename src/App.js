import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Listadonoticias from './components/ListadoNoticas'

function App() {

  //definir la categoría y noticias
  const[categoria, guardarCategoria]= useState('');
  const[noticias, guardarNoticias]= useState([]);

  useEffect(()=>{
    const consultarAPI = async() => {
      const url = `http://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=de5027ba4dfb47c9b82e6bb935de38a5`
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      console.log(noticias);
      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria])

  return (
    <Fragment>
      <Header titulo='Buscador de Noticias' />
      <div className="container white">
        <Formulario
          guardarCategoria= {guardarCategoria}
        />
        <Listadonoticias
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
