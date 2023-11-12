import "./App.css";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import User from "./components/User";

function App() {
  
  return (
    <div className="App">
      <User />
      <Form />
      <TaskList />
    </div>
  );
}

export default App;
