import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../src/pages";
import { MainLayout } from "./layout";
import { NewCategory, EditCategory } from "./components";
import React from "react";

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
        <Route path="/newcategory" element={<NewCategory />} />
        <Route path="/category/update" element={<EditCategory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
