import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  }
  
  const handleSubmitAddPerson = (event) => {
    event.preventDefault();
    let newPerson = {
      name: newName
    }
    setPersons([...persons, newPerson]);
    event.target.reset(); //resetear
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmitAddPerson}>
        <div>
          name: <input onChange={handleChangeName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p>{person.name}</p>)}
    </div>
  )
}

export default App