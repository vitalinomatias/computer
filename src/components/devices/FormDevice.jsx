function FormDevice({change, handleSubmit, device, action }){
    return (
        <div className="container">
            <div className="card-header">
                &nbsp;
            </div>
            <div className="card-body">
                {/* <form onSubmit={handleSubmit} > */}
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group">
                        <label className="col-lg-12" >Tipo</label>
                        <input
                            type="text"
                            className="form-control"
                            name="tipo"
                            value={device.tipo}
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <label>Marca</label>
                        <input
                            type="text"
                            className="form-control"
                            name="marca"
                            // onChange={(e) => setDevice({...device, [e.target.name]: e.target.value})}
                            onChange={(e) => change(e)}
                            value={device.marca}
                        />
                    </div>
                    <div className="form-group">
                        <label>Descripcion</label>
                        <input
                            type="text"
                            className="form-control"
                            name="descripcion"
                            // onChange={(e) => setDevice({...device, [e.target.name]: e.target.value})}
                            onChange={(e) => change(e)}
                            value={device.descripcion}
                        />
                    </div>
                    <div className="form-group">
                        <label>Cantidad</label>
                        <input
                            type="number"
                            className="form-control"
                            name="cantidad"
                            // onChange={(e) => setDevice({...device, [e.target.name]: parseInt(e.target.value)})}
                            onChange={(e) => change(e)}
                            value={device.cantidad}
                        />
                    </div>
                    <div className="form-group">
                        <label>Costo</label>
                        <input
                            type="number"
                            className="form-control"
                            name="costo"
                            // onChange={(e) => setDevice({...device, [e.target.name]: parseInt(e.target.value)})}
                            onChange={(e) => change(e)}
                            value={device.costo}
                        />
                    </div>
                    <div className="form-group">
                        <div>
                            &nbsp;
                        </div>
                        <button type="submit" className="btn btn-success">{action==='new' ? 'Nuevo': 'Actualizar'}</button>
                    </div>

                </form>
            </div>
            <div className="card-footer">
                &nbsp;
            </div>
        </div>
    )
}

export default FormDevice