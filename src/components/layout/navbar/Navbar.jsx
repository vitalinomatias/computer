import { Link } from "react-router-dom"


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarPrincipal(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to='/' >Inicio</Link>
                </li>
                <NavDropdown  className='dropdown-toggle' title="Dispositivos" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                        <Link className='dropdown-item' to={`/${'raton'}`}>Ratones</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link className='dropdown-item' to={`/${'teclado'}`}>Teclados</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link className='dropdown-item' to={`/${'monitor'}`}>Monitores</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link className='dropdown-item' to={`/${'altavoz'}`}>Altavoces</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link className='dropdown-item' to={`/${'procesador'}`}>Procesadores</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link className='dropdown-item' to={`/${'placa'}`}>Placas</Link>
                    </NavDropdown.Item>
                </NavDropdown>
                </ul>
            </div>
        </nav>
    )
}

export default NavbarPrincipal