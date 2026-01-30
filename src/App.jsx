import HomePage from "./pages/HomePage"
import AboutUs from "./pages/AboutUs"
import Products from "./pages/Products"
import DefaultLayout from "./layouts/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductsDetail from "./pages/ProductsDetail"
import NotFoundPage from "./pages/NotFoundPage"
import { BudgetProvider } from "./contexts/BudgetContext"


function App() {


  return (
    <BudgetProvider>
    <BrowserRouter>
      <Routes>
        {/** in default layout ci sono tutte le pagine che devono condividere lo stesso layout  */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/chisiamo" element={<AboutUs />} />
          <Route path="/prodotti" >
            <Route index element={<Products />} />
            <Route path=":id" element={<ProductsDetail />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
      </Routes>

    </BrowserRouter>
    </BudgetProvider>
  )
}

export default App
