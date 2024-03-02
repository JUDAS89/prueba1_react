import { useState, useEffect } from 'react'
import '../App.css'

function MiApi () {
    // 3 - info guardara los valores traidos dessde la API
    const [info, setInfo] = useState({})

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
            setInfo(data) // Con setInfo actualizamos el estado
        } catch (error){
            console.log(error)
        }     
    }

    return(
        <>
            <h1>Indicadores Economicos</h1>
            <ul>
                {Object.keys(info).map((indicador) => {
                    const { nombre, valor, unidad_medida } = info[indicador];
                    return nombre && valor ? (
                        <li key={indicador}>
                            {nombre}: {valor}  {unidad_medida}
                        </li>
                    ) : null;
                })}
            </ul>
        </>
    )
}

export default MiApi 