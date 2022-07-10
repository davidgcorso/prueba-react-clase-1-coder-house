import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {  } from "./";
import {ItemListContainer} from "../src/Components/ItemListContainer.jsx"
import {ItemDetailContainer} from "../src/Components/ItemDetailContainer.jsx"

import injectContext from "./store/appContext";
import { NavBar } from "./component/navBar.jsx";
/* import { Footer } from "./component/footer"; */


const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route exact path={`/category/:id`}>
              <ItemListContainer />
            </Route>
            <Route exact path={`/item/:id`}>
            <ItemDetailContainer />
            </Route>
            <Route>
              <h1 className="title text-center">Not found!</h1>
              <div className="itemDescription">
                <p className="paragraph card">
                    La pagina a la cual accediste no se encuentra disponible.
                  <br /> 
                </p>
              </div>
            </Route>
          </Switch>
         {/*  <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);