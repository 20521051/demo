import { useState } from "react";

import "./App.css";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Manager from "./components/Manager";

function App() {
  return (
    <div className="App">
        <MainLayout>
          <Manager></Manager>
        </MainLayout>
    </div>
  );
}

export default App;
