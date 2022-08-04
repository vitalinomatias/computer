import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { get } from "../../services/api"



function ListarTodos() {
    const [dispositivos, setDispositivos] = useState([])

    

    useEffect(()=> {
        get('teclado').then(dispositivos => {
            console.log(dispositivos);
            setDispositivos(dispositivos)
        }).catch(error =>{console.log(error);})
    },[])

    return (
        <div className="container">
            <div className="card-header">
                &nbsp;
            </div>
            <div className="card-body">
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>id</th>
                        <th>Tipo</th>
                        <th>Marca</th>
                        <th>Descripcion</th>
                        <th>Cantidad</th>
                        <th>Costo</th>
                        <th colSpan='2'>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dispositivos.map((dispositivo)=> (
                            <tr key={dispositivo.id}>
                                <td>{dispositivo.id}</td>
                                <td>{dispositivo.tipo}</td>
                                <td>{dispositivo.marca}</td>
                                <td>{dispositivo.descripcion}</td>
                                <td>{dispositivo.cantidad}</td>
                                <td>{dispositivo.costo}</td>
                                {/* <td><button className="btn btn-sm btn-success">Ver</button></td> */}
                                <td><Link className="btn btn-sm btn-success" to={`/ratones/${dispositivo.id}/edit`}>Editar</Link></td>
                                
                                <td><button className="btn btn-sm btn-danger">Eliminar</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
            <div className="card-footer">
                &nbsp;
            </div>
        </div>
    )
}

export default ListarTodos