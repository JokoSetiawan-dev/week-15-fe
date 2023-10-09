import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../src/pages";
import { MainLayout } from "./layout";
import {  EditCategory } from "./components";
import React from "react";
import NewTransaction from "./components/NewTransactionForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage data={[]} />
            </MainLayout>
          }
        />
        <Route path="/newtransaction" element={<NewTransaction />} />
        <Route path="/category/update" element={<EditCategory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
