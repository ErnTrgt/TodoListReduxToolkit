import { CiCircleRemove } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { MdOutlineEdit } from "react-icons/md";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodoById } from "../redux/todoSlice";
import { useState } from "react";

interface TodoProps {
    todoProps: TodoType;
}

const Todo = ({ todoProps }: TodoProps) => {
    const { id, content } = todoProps;

    const dispatch = useDispatch();

    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id));
    };

    const handleUpdateTodo = () => {
        const payload: TodoType = {
            id: id,
            content: newTodo,
        };
        dispatch(updateTodoById(payload));
    };

    const [editable, setEditable] = useState<boolean>(false);

    const [newTodo, setNewTodo] = useState<string>(content);

    return (
        <div className='todo-card'>
            {editable ? (
                <input
                    className='change-input'
                    type='text'
                    value={newTodo}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setNewTodo(e.target.value)
                    }
                />
            ) : (
                <div className='content-todo'>{content}</div>
            )}
            <div>
                <CiCircleRemove className='icons' onClick={handleRemoveTodo} />
                {editable ? (
                    <CiCircleCheck
                        className='icons'
                        onClick={() => {
                            handleUpdateTodo();
                            setEditable(false);
                        }}
                    />
                ) : (
                    <MdOutlineEdit
                        className='icons'
                        onClick={() => setEditable(true)}
                    />
                )}
            </div>
        </div>
    );
};

export default Todo;
