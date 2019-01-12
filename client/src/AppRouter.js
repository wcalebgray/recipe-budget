import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Items from "./Items";

const Index = () => <h2>Home</h2>;
const Recipes = () => <h2>Recipes</h2>;
const Meals = () => <h2>Meals</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/items">Items</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/meals">Meals</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/items" component={Items} />
      <Route path="/recipes" component={Recipes} />
      <Route path="/meals" component={Meals} />
    </div>
  </Router>
);

export default AppRouter;