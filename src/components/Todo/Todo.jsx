import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import './Todo.css';

const Todo = () => {
    const [todos, setTodos] = useState(["Water Plants", "Clean Room"]);
    const [inputValue, setInputValue] = useState('');
    const [showTextArea, setShowTextArea] = useState(false);
    const [isIconClicked, setIconClicked] = useState(false);

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
            <span className='ms-3 me-4 d-flex align-items-center justify-content-between'>
                <h4 className='m-0'>Todo</h4>
                <FaPlus
                    onClick={() => {
                        setShowTextArea(!showTextArea);
                        setIconClicked(!isIconClicked);
                    }}
                    className={isIconClicked ? 'rotated-icon' : 'plus'}
                />
            </span>
            {
                showTextArea && (
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                onKeyDown={e => {
                                    if (e.key === 'Enter') {
                                        handleAddTodo();
                                        e.preventDefault();
                                    }
                                }}
                                style={{ fontStyle: inputValue ? 'normal' : 'italic' }}
                                placeholder="Add Todo here..."
                                className='ps-2 py-2 w-75 inpTextarea mt-3'
                            />
                        </>
                    </div>
                )
            }
            <ul className='p-0'>
                {todos.map((todo, index) => (
                    <li key={index} className="todo px-3 py-2 my-3 ms-4">
                        <div className="form-check d-flex justify-content-between">
                            <span>
                                <input className="form-check-input" type="checkbox" id={`todo-${index}`} />
                                <label className="form-check-label" htmlFor={`todo-${index}`}>
                                    {todo}
                                </label>
                            </span>
                            <button type="button" className="close my-auto" aria-label="Close" onClick={() => handleDeleteTodo(index)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
