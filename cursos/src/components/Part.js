const Part = ({part}) => {

    
    return (
        <div>
            <p><b>ID Part: </b>{part.id}</p>
            <p><b>Name: </b>{part.name}</p>
            <p><b>Exercises: </b>{part.exercises}</p>
        </div>
    );
  }
  
  export default Part;