import React from "react";
import { List } from "./components/List";
import { arrayDataList } from "./data";
//import { ListItem.tsx } from '../../types';

function App() {
  return (
    <>
      <List data={arrayDataList} />
    </>
  );
}

export default App;
