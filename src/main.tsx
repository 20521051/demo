import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorLayout from "./layouts/ErrorLayout/ErrorLayout";


const ErrorPage = ()=>{
  return(
    <React.Fragment>
      <p className="">Oops... Page not found!</p>
      <ErrorLayout></ErrorLayout>
    </React.Fragment>
  );
}

// Component có thể xảy ra lỗi runtime
const WithErrorBoundary: React.FC = () => {
  // Giả sử có một lỗi xảy ra trong phương thức render của ChildComponent1
  throw new Error('Error Boundary will turn on!');
  return <div>Error Boundary</div>;
};
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/home" Component={App} />
          <Route path="/error" Component={WithErrorBoundary} />
          <Route path="/*" Component={ErrorPage} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
