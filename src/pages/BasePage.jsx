import {Navigate, Route, Routes, useParams} from "react-router-dom";
import AccountPage from "./account/AccountPage.jsx";
import Header from "../components/header/Header.jsx";
import IndexPage from "./content/index/IndexPage.jsx";
import ItemsPage from "./content/items/ItemsPage.jsx";
import Footer from "../components/footer/Footer.jsx";

export default function BasePage() {
  const lang = useParams().lang

  return (
    <>
      <Header language={ lang } />
      <Routes>
        <Route path={ "account/*" } element={<AccountPage language={ lang } />} />
        <Route path={ "main" } element={<IndexPage language={ lang } />} />
        <Route path={ "items" } element={<ItemsPage language={ lang } />} />
        <Route path={ "*" } element={<Navigate to="/ru/main" replace />} />
      </Routes>
      <Footer language={ lang } />
    </>
  )
}