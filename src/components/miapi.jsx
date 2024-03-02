import React, { useState, useEffect } from 'react'
import './style.css'

function MiApi () {
    // 3 - info guardara los valores traidos dessde la API
    const [indicadores, setIndicadores] = useState({})
    const [search, setSearch] = useState('')

    // 2 - llamamos a la funcion consultarApi al momento de montar el componente
    useEffect(() => {
        consultarApi()
    }, [])

    // 1 - funcion que consulta la API
    const consultarApi = async() => {
        const url = "https://mindicador.cl/api"
        try{
            const response = await fetch(url)
            const data = await response.json()
            setIndicadores(data) // Con setInfo actualizamos el estado
        } catch (error){
            console.log(error)
        }     
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
      }

    const normalizeString = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, '') //para que el filtro no considere los acentos 

    let results = []
    if (!search) {
      results = Object.entries(indicadores).slice(3).map(([codigo, indicador]) => ({
        ...indicador,
        codigo,
      }))
    } else {
      results = Object.entries(indicadores)
        .slice(3)
        .filter(([codigo, indicador]) =>
        normalizeString(indicador.nombre).toLowerCase().includes(normalizeString(search.toLowerCase()))
        )
        .map(([codigo, indicador]) => ({ ...indicador, codigo }))
    }

    //ordenar resultados de la API por nombre y alfabeticamente
    results.sort((a,b) => a.nombre.localeCompare(b.nombre))
  
    return (
        <>
        <div>
            <input
            type="text"
            placeholder="Buscar por nombre"
            className="form-control"
            value={search}
            onChange={handleSearch}
            />
      </div>
          <table className="table">
            <thead>
              <tr>
                <th className='codigo'>Código</th>
                <th className='nombre'>Nombre</th>
                <th className='medida'>Medida</th>
                <th className='fecha'>Fecha</th>
                <th className='valor'>Valor</th>
              </tr>
            </thead>
            <tbody>
                {results.map(({ codigo, nombre, unidad_medida, fecha, valor }) => (
                    <tr key={codigo}>
                        <td>{codigo}</td>
                        <td>{nombre}</td>
                        <td>{unidad_medida}</td>
                        <td>{fecha.slice(0, 10)}</td>
                        <td>{valor}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </>
    )
}

export default MiApi 