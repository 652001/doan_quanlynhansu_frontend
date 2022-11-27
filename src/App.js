import React from "react";
import { Routes, Route } from 'react-router-dom'
import DefaultLayout from "./components/layouts/DefaultLayout";
import * as routes from "./routes";



function App() {
  return (
    <>
      <Routes>
        {routes.publicRoutes.map((route, index) => {
          const Layout = route.layout || DefaultLayout;
          const Page = route.component;
          return (
            <Route
              path={route.path}
              key={index}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
