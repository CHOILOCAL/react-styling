import React from 'react';
import Button from "./components/Button";
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="Large">Button</Button>
        <Button size="medium">Button</Button>
        <Button size="small">Button</Button>
      </div>

      <div className="buttons">
        <Button color="gray" size="Large">Button</Button>
        <Button color="gray" size="medium">Button</Button>
        <Button color="gray" size="small">Button</Button>
      </div>

      <div className="buttons">
        <Button size="large" outline>Button</Button>
        <Button color="gray" outline={true}>Button</Button>
        <Button color="pink" size="small" outline={true}>Button</Button>
      </div>

      <div className="buttons">
        <Button size="large" fullWidth className="customizedButton">Button</Button>
        <Button size="large" color="gray" onMouseMove={() => console.log('마우스 무브')} onClick={() => console.log('클릭')}fullWidth={true}>Button</Button>
        <Button size="large" color="pink" fullWidth={true}>Button</Button>
      </div>
     
    </div>
  );
}

export default App;
