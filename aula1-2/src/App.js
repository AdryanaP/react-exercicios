import './App.css';
import Person from "./Person";

export default function App() {
  const user = {
    firstName: "Adryana",
    age: 21,
    city: "Rio de Janeiro"
  }

  return (
    <div className="App">
      <header className="App-header">
       <p>Hello world!</p>
       <Person 
          name={user.firstName}
          age={user.age}
          city={user.city}
        />
      </header>
    </div>
  );
}