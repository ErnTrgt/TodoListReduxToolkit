import { useState } from "react";
import { useDispatch, UseDispatch } from "react-redux";
import { createTodo } from "../redux/todoSlice";
import { TodoType } from "../types/Types";

const TodoCreate = () => {
    const dispatch = useDispatch();

    const [newTodo, setNewTodo] = useState<string>("");

    const handleCreateTodo = () => {
        if (newTodo.trim().length == 0) {
            alert("Please Enter A Task");
            return;
        }

        const payload: TodoType = {
            id: Math.floor(Math.random() * 999999),
            content: newTodo,
        };
        dispatch(createTodo(payload));
        setNewTodo("");
    };

    return (
        <div className='todo-create'>
            <input
                value={newTodo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setNewTodo(e.target.value)
                }
                className='todo-input'
                placeholder='Enter a task'
                type='text'
            />
            <button onClick={handleCreateTodo} className='create-button'>
                Create
            </button>
        </div>
    );
};

export default TodoCreate;
