import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import PizzeriaList from "./components/PizzeriasPage";
import AddPizzeria from "./components/AddPizzeria";
import SinglePizzeriaPage from "./components/SinglePizzeriaPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/pizzerias">
            <PizzeriaList />
          </Route>
          <Route exact path="/pizzerias/add">
            <AddPizzeria />
          </Route>
          <Route exact path="/pizzerias/:pizzeriaId">
            <SinglePizzeriaPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;