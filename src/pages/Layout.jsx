import { Outlet, NavLink } from "react-router";
export function Layout(){
    return(
        <>
         <nav className="navbar-main">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/formulas">Formulas</NavLink></li>
            </ul>
         </nav>
         
         <main>
            <Outlet />
         </main>
         <footer>

         </footer>
        </>
    )
}