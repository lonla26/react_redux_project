import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterTasks from './components/FilterTasks';


function App() {
  return (
    <div className="App">
      <h3>Todo List</h3>
      <FilterTasks/>
      <ListTask/>
      <AddTask/>
    </div>
  );
}

export default App;








