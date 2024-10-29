import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { routes } from "./Routes";
import NotFound from "../pages/NotFound";

const RouterList = () => {
  return (
    <div className="main_wrapper">
      <BrowserRouter>
        <Suspense>
          <Routes>
            {routes &&
              routes.map((route, index) => {
                return route.isView ? (
                  <Route
                    path={route.path}
                    key={index}
                    exact={route.exact}
                    element={
                      <>
                        {route.isPrivate ? (
                          <PrivateRoute
                            isLayout={route.isLayout}
                            isView={route.isView}
                          >
                            <route.element />
                          </PrivateRoute>
                        ) : (
                          <route.element />
                        )}
                      </>
                    }
                  />
                ) : (
                  <Route
                    path={route.path}
                    key={index}
                    exact={true}
                    element={<NotFound />}
                  />
                );
              })}
          </Routes>
        </Suspense>
      </BrowserRouter>
      {/* </SnackbarProvider> */}
    </div>
  );
};
export default RouterList;
