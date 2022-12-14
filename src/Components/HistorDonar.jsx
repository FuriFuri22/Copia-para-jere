import React from "react";
import { useEffect, useContext, useState } from "react";


export const HistorDonar = () =>{
 
 const [donacion, setDonacion] = useState([])
  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch('http://localhost:4000/Donacion', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        });
        const donation= await resp.json();
        console.log(donation)
        setDonacion(donation)
    } catch (error) {
        console.log(error);
        throw new Error('Error al cargar el historial');
    }})();
  },[])
  
  console.log(donacion)
  return (
    
    <div>
        
        <div  id="container form " className="container"><br />
            
                  <div className="text-center">
                <label htmlFor="#container" className="form-control blankito"><p className="h4"> Historial de donaciones</p></label>
            </div>
            <div className="row">
            { (!donacion || !donacion.isActive)
             ?<p>Cargando...</p>
             : donacion.map(donacion => (
               <div key={donacion._id} className="card text-bg-dark mb-3">
                <div className="row g-0">
                 <div className="col-md-4">
                    <img src="/donaciones.jpeg" className="img-fluid rounded-start" alt="..." />
                 </div>
                 <div className="col-md-8">
                  <div className="card-body">
                  <h5 className="card-title">{donacion.typeDonacion}</h5>
                  <p className="card-text"><small className="text-muted">{donacion.description}</small></p>
                </div>
              </div>
            </div>
          </div>
          ))}
            </div>
            
       </div>
     </div> 
   
)
}