import { NavLink, Outlet } from "react-router-dom";

export function AdminLayout(){

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <ul className= "navbar-nav">

                    <li classname="nav-item ">
                        <NavLink className={"nav-link"} to={"/home"}>Home</NavLink>
                    </li >

                    <li classname="nav-item">
                    <NavLink className={"nav-link"} to={"/products"}>Products</NavLink>
                    </li>

                    <li classname="nav-item">
                    <NavLink className={"nav-link"} to={"/contact"}>Contacts</NavLink>
                    </li>

                    <li classname="nav-item">
                    <NavLink className={"nav-link"} to={"/connexion"}>Connexion</NavLink>
                    </li>

                    
                </ul>
            </div>
        </nav>
        <Outlet/>
        </>
    )
}