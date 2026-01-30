import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

function DefaultLayout() {


    return (
       <>
        <header>
            <NavBar/>
             </header>
            
            
            <main>
                {/** in outlet react inserisce Homepage/aboutus/products , quindi il layout non cambia mai cambia solo il contenuto di outlet in 
                 * base ai segnaposto 
                */}
            <Outlet/> 
       </main>
       </>
    )
}

export default DefaultLayout