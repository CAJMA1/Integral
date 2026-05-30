import { Outlet, Link } from "react-router";
export function Layout(){
    return(
        <>
         <nav className="navbar-main">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/formulas">Formulas</Link></li>
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