import React, { Suspense } from "react";
import "./App.css";
import AppRoutes from './routes';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </div>
  );
}

export default App;