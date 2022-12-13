import React from 'react'; 
import ReactDOM from 'react-dom';


function myName(user) {
  return (`${user.name}`)
};

function surName(user) {
  return (`${user.surname}`)
};

const user = {
  name: `Ed`,
  surname: `Babayan`
};

function TitleHeader() {
  return <h1>Hello, {myName(user)} {surName(user)}</h1>
};


function TextInput({ color }) {
  return <input style={{ color }} type="text" placeholder="введите текст" />;
}

function AddTask({ color }) {
  return <button style={{ color }}>Click me!</button>;
}


function App() {
  return (
    <div>
      <TitleHeader />
      <TextInput color='red' />
      <AddTask color='orange' />
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById("root"));
