import React, { Suspense } from "react";
import "./App.css";
import AppRoutes from './route/Index';
import RouterList from "./route/Index";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <RouterList />
      </Suspense>
    </div>
  );
}

export default App;