import { Outlet, Link } from "react-router";
export function Layout(){
    return(
        <>
         <nav>
            <Link to="/">Inicio</Link>
            <Link to="/formulas">Formulas</Link>
         </nav>
         <main>
            <Outlet />
         </main>
         <footer>

         </footer>
        </>
    )
}