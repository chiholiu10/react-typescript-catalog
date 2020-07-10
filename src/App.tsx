import * as React from "react";
import Search from './components/Search/Search';
import Result from './components/Result/Result';
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Search/>
      <Result/>
    </div>
  );
}
