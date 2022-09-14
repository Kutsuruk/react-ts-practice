import React from 'react';
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonsList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import LoggedIn from "./components/state/LoggedIn";
import ThemeContextProvider from "./components/context/ThemeContext";
import Box from "./components/context/Box";
import UserContextProvider from "./components/context/UserContext";
import User from "./components/context/User";
import MutableRef from "./components/ref/MutableRef";
import Counter from "./components/class/Counter";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import List from "./components/generics/List";

function App() {
    const person = {
        firstname: 'Bruce',
        lastname: 'Wayne',
    }
    const personsList = [
        {
            firstname: 'Bruce',
            lastname: 'Wayne',
        },
        {
            firstname: 'Clark',
            lastname: 'Kent',
        },
        {
            firstname: 'Princess',
            lastname: 'Diana',
        }
    ]

  return (
    <div>
        <List items={['Batman', 'Spider man', 'Superman']} onClick={(item) => console.log(item)} />
        <List items={[1, 4, 2]} onClick={(item) => console.log(item)} />
    </div>
  );
}

export default App;
