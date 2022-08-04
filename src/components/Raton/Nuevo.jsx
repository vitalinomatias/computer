import { useState } from "react"
import { post } from "../../services/api"

function Nuevo() {
    const [dispositivo, setDispositivo] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            await post(dispositivo)
            //useNavigator -- react router dom
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <div className="card-header">
                &nbsp;
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label className="col-lg-12" >Tipo</label>
                        <select className="form-control" name="tipo" onChange={(e) => setDispositivo({...dispositivo, [e.target.name]: e.target.value})} >
                            <option selected>Elija una opcion</option>
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
                        />
                    </div>
                    <div className="form-group">
                        <label>Descripcion</label>
                        <input 
                            type="text" 
                            className="form-control"
                            name="descripcion"
                            onChange={(e) => setDispositivo({...dispositivo, [e.target.name]: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label>Cantidad</label>
                        <input 
                            type="number" 
                            className="form-control"
                            name="cantidad"
                            onChange={(e) => setDispositivo({...dispositivo, [e.target.name]: parseInt(e.target.value)})}
                        />
                    </div>
                    <div className="form-group">
                        <label>Costo</label>
                        <input 
                            type="number" 
                            className="form-control"
                            name="costo"
                            onChange={(e) => setDispositivo({...dispositivo, [e.target.name]: parseInt(e.target.value)})}
                        />
                    </div>
                    <div className="form-group">
                        <div>
                            &nbsp;
                        </div>
                        <button type="submit" className="btn btn-success">Nuevo</button>
                    </div>
                    
                </form>
            </div>
            <div className="card-footer">
                &nbsp;
            </div>
        </div>       
    )
}
export default Nuevo


