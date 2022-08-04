import { useEffect, useState } from "react"
import { getIndividual, put } from "../../services/api"

import { useParams } from "react-router-dom"

function Individual() {
    const [dispositivo, setDispositivo] = useState({
        tipo:'',
        marca:'',
        descripcion:'',
        cantidad:'',
        costo:''
    })

    const {id}=useParams()
    console.log(id);

    
    useEffect(()=> {
        getIndividual(id).then(dispositivo => {
            // console.log(dispositivo);
            setDispositivo(dispositivo)
        }).catch(error =>{console.log(error);})
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            await put(dispositivo)
            // console.log(dispositivo);
        } catch (error) {
            // console.log(error);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
            {/* <form> */}
                <div className="form-group">
                    <label>Tipo</label>
                    <select 
                        className="form-control" 
                        name="tipo" 
                        onChange={(e) => setDispositivo({...dispositivo, [e.target.name]: e.target.value})} 
                        value={dispositivo.tipo}
                    >
                        <option value="Raton">Raton</option>
                        <option value="Teclado">Teclado</option>
                        <option value="Monitor">Monitor</option>
                        <option value="Altavoz">Altavoz</option>
                        <option value="Procesador">Procesador</option>
                        <option value="Placa">Placa</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Marca</label>
                    <input 
                        type="text" 
                        className="form-control"
                        name="marca"
                        onChange={(e) => setDispositivo({...dispositivo, [e.target.name]: e.target.value})}
                        value={dispositivo.marca}
                    />
                </div>
                <div className="form-group">
                    <label>Descripcion</label>
                    <input 
                        type="text" 
                        className="form-control"
                        name="descripcion"
                        onChange={(e) => setDispositivo({...dispositivo, [e.target.name]: e.target.value})}
                        value={dispositivo.descripcion}
                    />
                </div>
                <div className="form-group">
                    <label>Cantidad</label>
                    <input 
                        type="number" 
                        className="form-control"
                        name="cantidad"
                        onChange={(e) => setDispositivo({...dispositivo, [e.target.name]: parseInt(e.target.value)})}
                        value={dispositivo.cantidad}
                    />
                </div>
                <div className="form-group">
                    <label>Costo</label>
                    <input 
                        type="number" 
                        className="form-control"
                        name="costo"
                        onChange={(e) => setDispositivo({...dispositivo, [e.target.name]: parseInt(e.target.value)})}
                        value={dispositivo.costo}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Actualizar</button>
            </form>
        </>        
    )
}

export default Individual