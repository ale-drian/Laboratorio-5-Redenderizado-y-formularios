import Person from "./Person";

const Persons = ({persons, filterName}) => {
  return (
    <div>
      {
        persons.filter(person => person.name.includes(filterName))
        .map(person => {
            return <Person key={person.name} person={person}/>
        })}
    </div>
  )
}

export default Persons;