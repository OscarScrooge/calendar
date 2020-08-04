import React from 'react';
import ContainerMonth from "./app/containers/containerMonth";
import ContainerDays from "./app/containers/ContainerDays";
import ContainerYear from "./app/containers/containerYear";

function App() {
  return (
    <div className="App">
       <ContainerYear/>
      <ContainerMonth/>
      <ContainerDays/>
    </div>
  );
}

export default App;
