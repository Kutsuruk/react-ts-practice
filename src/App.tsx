import React from 'react';
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonsList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";

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
        {/*<Greet name='Alex' messagesCount={11} isLogged={true} />*/}
        {/*<Person name={person} />*/}
        {/*<PersonsList names={personsList} />*/}
        {/*<Status status='loading' />*/}
        {/*<Heading>Placeholder text</Heading>*/}
        {/*<Oscar>*/}
        {/*    <Heading>Oscar goes to Leonardo Dicaprio!</Heading>*/}
        {/*</Oscar>*/}
        {/*<Greet name='Wishwas' isLogged={false} />*/}

        <Button handleClick={(event, id) => console.log('button clicked!', event, id)} />
        <Input value='' handleChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;
