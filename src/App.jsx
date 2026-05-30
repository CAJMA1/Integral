import { Route, Routes } from "react-router"
import { Layout } from "./pages/Layout"
import { Formulas } from "./pages/Formulas"
import { Home } from "./pages/Home"
export function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={ <Home />}/>
        <Route path="/formulas" element={<Formulas />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
