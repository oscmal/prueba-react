import {useEffect, useState} from "react"
import React from "react";
import Paginas from './Paginas'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpAZ, faArrowDownZA } from '@fortawesome/free-solid-svg-icons'


const Miapi = () => {
  const [personajes, setPersonajes] = useState([]);
  const [buscar, setBuscar] = useState('')
  const [info, setInfo] = useState([])
  const inicialUrl = "https://rickandmortyapi.com/api/character";

  const fetchPersonajes =async(url) => {
    const response = await fetch( url )
    const data = await response.json()
    if(data.error){
      alert("Nombre de personaje no existe")
      return;
    }
    setPersonajes  ([...data.results])
    setInfo (data.info)
  };

  const buscarPersonajes = ()=>{
    let url = inicialUrl;
    if (buscar !==''){
      url = url+"?name="+buscar;
    }
    fetchPersonajes(url)
  }

  const ordenarPersonajes = (orden) => {
    if(orden == "asc"){
      setPersonajes([...personajes].sort((a, b) => 
      a.name > b.name ? 1 : -1,));
    }
    if(orden == "desc"){
      setPersonajes([...personajes].sort((a, b) => 
      a.name > b.name ? -1 : 1,));
    }
   
  }


  const onPrevious = () => {
    fetchPersonajes(info.prev)
  }

  const onNext = () => {
    fetchPersonajes(info.next)
  }
  useEffect(() =>{
    fetchPersonajes(inicialUrl)
  }, [])

  return (
        <>
            <div className='container mt-5'>
              <div>
                <div className="me-5">
                  <label className="text-light mx-5">Buscar Personaje</label>
                  <div className="input-group mb-3">
                    <input type="text" value={buscar} onChange={ (event) => setBuscar (event.target.value)} className="form-control" placeholder="Nombre Personaje" aria-label="Nombre Personaje" aria-describedby="basic-addon2"></input>
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary" type="button" onClick={buscarPersonajes}>Buscar</button>
                    </div>
                  </div>
                </div>
                <h1>Listado Personajes</h1>
                <div className="div-order">
                  Ordenar Alfabéticamente
                  <div className="btn-group" role="group" aria-label="Order By">
                    <button type="button" className="btn btn-light border-black" onClick={() => ordenarPersonajes('asc')} data-toggle="tooltip" title="Tooltip on bottom">
                      <FontAwesomeIcon icon={faArrowUpAZ} />
                    </button>
                    <button type="button" className="btn btn-light border-black"  onClick={() => ordenarPersonajes('desc')} data-toggle="tooltip" title="Tooltip on bottom">
                      <FontAwesomeIcon icon={faArrowDownZA} />
                    </button>
                  </div>
                </div>
                <br/>
                <div className="container">
                  <div className="row align-items-start">
                      {
                        
                          personajes.map((item, index) =>{
                            return(
                              <div className="col-12 col-sm-6 col-lg-4 col-xl-3"  key={item.id}>
                              <div className="card" key={index}>
                                <img src={item.image} className="card-img-top" alt={item.name}></img>
                                <div className="card-body">
                                  <p className="card-text">{item.name}</p>
                                  <p className="card-text">{item.gender}</p>
                                </div>
                              </div>
                              </div>
                              )
                          
                          })
                      }
                  </div>
                </div>
              </div>
              <Paginas 
                prev={info.prev} 
                next={info.next} 
                onPrevious={onPrevious} 
                onNext={onNext} />
            </div>
        </>
          );

}

export default Miapi
  

