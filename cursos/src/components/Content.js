import Part from "./Part";

const Content = ({parts}) => {

    const total = parts.reduce((collector, part) =>  collector + part.exercises,0)

    return (
        <div>
            {parts.map(part => <Part part={part}/>)}
            <p><b>Total exercises: </b>{total}</p>
        </div>
    );
  }
  
  export default Content;