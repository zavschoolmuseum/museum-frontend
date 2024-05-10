import { Route, Routes, Navigate } from "react-router-dom";
import BasePage from "./pages/BasePage.jsx";
import "./App.css"


function ReAdmin() {
  console.log(document.URL)
  window.location.url = import.meta.env.VITE_BACKEND_ADMIN_PANEL
  return (
    <>
    </>
  )
}


export default function App() {
  return (
    <>
      <Routes>
        <Route index path={ "/:lang/*" } element={<BasePage />} />
        <Route path={ "/admin" } element={<ReAdmin />} />
        <Route path={ "*" } element={<Navigate to="/ru/main" replace />} />
      </Routes>
    </>
  )
}