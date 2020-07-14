import * as React from "react";
import { Route, Switch } from "react-router-dom";
import CatalogPage from './components/CatalogPage/CatalogPage';
import DetailPage from './components/DetailPage/DetailPage';
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <CatalogPage />} />
        <Route path="/DetailPage" render={() => <DetailPage />} />
      </Switch>
    </div>
  );
}
