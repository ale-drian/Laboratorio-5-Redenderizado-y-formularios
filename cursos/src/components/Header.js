const Header = ({name, id}) => {
    return (
        <div>
            <h3>ID Course: {id}</h3>
            <h3>Course: {name}</h3>
        </div>
    );
  }
  
  export default Header;