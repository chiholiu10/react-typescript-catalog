import * as React from "react";
import Search from './components/Search/SearchInput';
import Result from './components/Search/SearchResult';
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Search/>
      <Result/>
    </div>
  );
}
