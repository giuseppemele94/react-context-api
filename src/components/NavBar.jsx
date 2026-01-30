import { Link, NavLink } from "react-router-dom";
//serve per accedere allo stato globale budetMode
import { useBudget } from "../contexts/BudgetContext";


function NavBar() {

  //leggo lo stato globale dal Context
  const { budgetMode, setBudgetMode } = useBudget();

  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">

        <div className="collapse navbar-collapse justify-content-center" >
          <ul className="navbar-nav gap-4">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/chisiamo">About us</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/prodotti"> Products </NavLink>
            </li>

            {/* 
        Bottone per attivare/disattivare la modalità budget
       al click cambiamo il valore di budgetMode
         se  true diventa false
         se  false diventa true
      */}
            <button className="btn btn-primary"
              //quindi al click cambia lo stato con NOT , inizialmente ho impostato lo stato del pulsante come false
              //quindi al click !budetMode che corrisponde a !false diventerà true , quindi cambia lo stato
              onClick={() => setBudgetMode(!budgetMode)}
            >

 {
          // testo del bottone DINAMICO
          // cambia in base allo stato
          //if budgetMode === true -> "Disattiva Modalitò Budget , else -> Attiva Modalità Budget 
          // "
          budgetMode
            ? "Disattiva Modalità Budget"
            : "Attiva Modalità Budget"
        }
            </button>


          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
