import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { get } from "../../services/api"

import { useParams } from "react-router-dom"



function All() {
    const [devices, setDevices] = useState([])

    const {type} = useParams()

    // const getAll = ()
    // console.log(device);

    useEffect(()=> {
        get(type).then(devices => {
            console.log(devices);
            setDevices(devices)
        }).catch(error =>{console.log(error);})
    },[type])

    return (
        <div className="container">
            <div className="card-header">
                <div>&nbsp;</div>
                {/* <button className="btn btn-success">Nuevo</button> */}
                <Link className="btn btn-success" to={`/new/${type}`}>Nuevo</Link>
            </div>
            <div className="card-body">
                <div>&nbsp;</div>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>No.</th>
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
                        devices.map((device, index)=> (
                            <tr key={device.id}>
                                <td>{index+1}</td>
                                <td>{device.tipo}</td>
                                <td>{device.marca}</td>
                                <td>{device.descripcion}</td>
                                <td>{device.cantidad}</td>
                                <td>{device.costo}</td>
                                {/* <td><button className="btn btn-sm btn-success">Ver</button></td> */}
                                {/* <td><Link className="btn btn-sm btn-success" to={`/ratones/${device.id}/edit`}>Editar</Link></td> */}
                                <td><Link className="btn btn-sm btn-success" to={`/edit/${type}/${device.id}`}>Ver</Link></td>
                                <td><Link className="btn btn-sm btn-primary" to={`/edit/${type}/${device.id}`}>Editar</Link></td>
                                
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
    // return (
    //     <h1>este es all</h1>
    // )
}

export default All