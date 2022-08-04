
export const get = async (type) => {
    const response = await fetch(`http://localhost:8000/api/v1/${type}/`,{
    })
    const data = await response.json()
    return data
}

export const getIndividual = async (id,type) => {
    const response = await fetch(`http://localhost:8000/api/v1/${type}/${id}`,{
    })
    const data = await response.json()
    return data
}


export const post = async(type,device)=> {
    const response = await fetch(`http://localhost:8000/api/v1/${type}/`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(device),
    }
    )
}

export const put = async(device, type)=> {
    const response = await fetch(`http://localhost:8000/api/v1/${type}/${device.id}/`,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(device),
    }
    )
}

