import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { post } from "../../services/api"
import FormDevice from "./FormDevice"

function NewDevice() {    
    const { type } = useParams()

    const [device, setDevice] = useState({
        tipo: type.replace(/^\w/, (c) => c.toUpperCase()),
        marca:'',
        descripcion:'',
        cantidad:'',
        costo:''
    })

    let navigate = useNavigate()

    console.log(type);

    const change = (e) => {
        // setDevice(e.target.value)
        setDevice({...device, [e.target.name]: e.target.value})
        console.log(device)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await post(type, device)
            navigate(`/${type}`)
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <FormDevice change={change} handleSubmit={handleSubmit} device={device} action='new' />
    )

    // return (
    //     <div className="container">
    //         <div className="card-header">
    //             &nbsp;
    //         </div>
    //         <div className="card-body">
    //             <form onSubmit={handleSubmit} >
    //                 <div className="form-group">
    //                     <label className="col-lg-12" >Tipo</label>
    //                     <input 
    //                         type="text" 
    //                         className="form-control"
    //                         name="tipo"
    //                         value={type.replace(/^\w/, (c) => c.toUpperCase())}
    //                         disabled
    //                     />
    //                 </div>
    //                 <div className="form-group">
    //                     <label>Marca</label>
    //                     <input 
    //                         type="text" 
    //                         className="form-control"
    //                         name="marca"
    //                         onChange={(e) => setDevice({...device, [e.target.name]: e.target.value})}
    //                     />
    //                 </div>
    //                 <div className="form-group">
    //                     <label>Descripcion</label>
    //                     <input 
    //                         type="text" 
    //                         className="form-control"
    //                         name="descripcion"
    //                         onChange={(e) => setDevice({...device, [e.target.name]: e.target.value})}
    //                     />
    //                 </div>
    //                 <div className="form-group">
    //                     <label>Cantidad</label>
    //                     <input 
    //                         type="number" 
    //                         className="form-control"
    //                         name="cantidad"
    //                         onChange={(e) => setDevice({...device, [e.target.name]: parseInt(e.target.value)})}
    //                     />
    //                 </div>
    //                 <div className="form-group">
    //                     <label>Costo</label>
    //                     <input 
    //                         type="number" 
    //                         className="form-control"
    //                         name="costo"
    //                         onChange={(e) => setDevice({...device, [e.target.name]: parseInt(e.target.value)})}
    //                     />
    //                 </div>
    //                 <div className="form-group">
    //                     <div>
    //                         &nbsp;
    //                     </div>
    //                     <button type="submit" className="btn btn-success">Nuevo</button>
    //                 </div>
                    
    //             </form>
    //         </div>
    //         <div className="card-footer">
    //             &nbsp;
    //         </div>
    //     </div>       
    // )
}
export default NewDevice