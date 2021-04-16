import React, { useState } from 'react'
import Filter from './component/Filter';
import PersonForm from './component/PersonForm';
import Persons from './component/Persons';

const App = () => {
  const [ persons, setPersons ] = useState([
    {
      name: 'Arto Hellas',
      phone: '040-1234567'
    }
  ]);
  const [ newName, setNewName ] = useState('');
  const [ newPhone, setNewPhone ] = useState('');
  const [ filterName, setFilterName ] = useState('');

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  }

  const handleChangePhone = (event) => {
    setNewPhone(event.target.value);
  }

  const handleChangeFilter = (event) => {
    setFilterName(event.target.value);
  }

  const handleSubmitAddPerson = (event) => {
    event.preventDefault();
    if (isExisting(newName)){
      alert( newName + " is already added to phonebook");
    }else{
      let newPerson = {
        name: newName,
        phone: newPhone
      }
      setPersons([...persons, newPerson]);
      event.target.reset(); //resetear
    }
  }

  const isExisting = (name) => {
    let search = persons.find(person => person.name === name);
    return search !== undefined ? true : false;
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChangeFilter={handleChangeFilter}/>
      <PersonForm handleSubmitAddPerson={handleSubmitAddPerson} 
                  handleChangeName={handleChangeName} 
                  handleChangePhone={handleChangePhone}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filterName={filterName}/>
    </div>
  )
}

export default App;