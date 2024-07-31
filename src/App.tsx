import TodoCreate from "./components/TodoCreate";
import "./App.css";
import TodoList from "./components/TodoList";
function App() {
    return (
        <div className='App'>
            <TodoCreate />
            <TodoList />
        </div>
    );
}

export default App;
