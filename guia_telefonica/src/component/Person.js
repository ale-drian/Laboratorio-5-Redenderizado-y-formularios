const Person = ({person}) => {
  return (
    <div>
        <p key={person.name}>{person.name} {person.phone}</p>
    </div>
  )
}

export default Person;