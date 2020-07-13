import * as React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import DetailPage from './components/DetailPage/DetailPage';
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route path="/DetailPage" render={() => <DetailPage />} />
      </Switch>
    </div>
  );
}
