const Filter = ({handleChangeFilter}) => {
  return (
    <div>
      <div>Filter shown with: <input onChange={handleChangeFilter}/></div>
    </div>
  )
}

export default Filter;