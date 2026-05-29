import { Route, Routes } from "react-router"
import { Layout } from "./pages/Layout"
import { Formulas } from "./pages/Formulas"

export function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/formulas" element={<Formulas />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
