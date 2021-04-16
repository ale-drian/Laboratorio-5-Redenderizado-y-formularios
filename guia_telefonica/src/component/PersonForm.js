const PersonForm = ({handleSubmitAddPerson, handleChangeName, handleChangePhone}) => {
  return (
    <div>
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
    </div>
  )
}

export default PersonForm;