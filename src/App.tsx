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
import RandomNumber from "./components/restriction/RandomNumber";
import Toast from "./components/templateliterals/Toast";
import CustomButton from "./components/html/Button";
import CustomInput from "./components/html/Input";

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
        <CustomButton variant='primary' onClick={() => console.log('Clicked')}>
            Primary Button
        </CustomButton>
    </div>
  );
}

export default App;
