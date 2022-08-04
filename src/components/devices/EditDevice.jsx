import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import FormDevice from "./FormDevice"
import { getIndividual, put } from "../../services/api"

function EditDevice(){

    const {type, id} = useParams()

    const [device, setDevice] = useState({
        tipo:'',
        marca:'',
        descripcion:'',
        cantidad:'',
        costo:''
    })

    let navigate = useNavigate()
    
    console.log(device);
    console.log(id)

    console.log(type);

    const change = (e) => {
        // setDevice(e.target.value)
        setDevice({...device, [e.target.name]: e.target.value})
        console.log(device)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            await put(device, type)
            // console.log(dispositivo);
            navigate(`/${type}`)
        } catch (error) {
            // console.log(error);
        }
        
    }

    useEffect(()=> {
        getIndividual(id, type).then(device => {
            // console.log(dispositivo);
            setDevice(device)
            
        }).catch(error =>{console.log(error);})
    },[])

    console.log(device);

    return (
        <FormDevice type={type} change={change} handleSubmit={handleSubmit} device={device} />
    )
}

export default EditDevice