import Content from "./Content";
import Header from "./Header";

const Course = ({course}) => {
  return (
      <div>
          <Header name={course.name} id={course.id}/>
          <Content parts={course.parts}/>
      </div>
  );
}

export default Course;