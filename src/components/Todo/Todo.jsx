import React, { useState } from 'react';

import './Todo.css';

const Todo = () => {
    const [todos, setTodos] = useState(["Water Plants", "Clean Room"]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const handleDeleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div>
            <span>Todo</span><br></br>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul className='p-0'>
                {todos.map((todo, index) => (
                    <div className="form-check m-3" key={index}>
                        <div>
                        <input className="form-check-input" type="checkbox" id={`todo-${index}`} />
                        <label className="form-check-label" htmlFor={`todo-${index}`}>
                            {todo}
                        </label>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
