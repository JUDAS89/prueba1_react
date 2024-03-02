import React from "react"

const Buscador = ({ onBuscar }) => {
    const handleChange = (e) => {
      onBuscar(e.target.value);
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Buscar por nombre"
          className="form-control"
          onChange={handleChange}
        />
      </div>
    );
  };
  
  export default Buscador;