import React, { useState } from 'react'

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
      <div>Filter shown with: <input onChange={handleChangeFilter}/></div>
      <form onSubmit={handleSubmitAddPerson}>
        <div>
          name: <input onChange={handleChangeName}/>
        </div>
        <div>
          phone: <input onChange={handleChangePhone}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.filter(person => person.name.includes(filterName))
        .map(person => <p key={person.name}>{person.name} {person.phone}</p>)}
    </div>
  )
}

export default App