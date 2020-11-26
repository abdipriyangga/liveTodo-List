import React from 'react';
import {Button} from 'react-bootstrap';

export default function viewTodo(props) {
    const { title, todoList, buttonCmd, updateTodo } = props;
    return (
        <div className="w-50 border border-primary p-2">
            <h2 className="mb-2">{title}</h2>
            {todoList.length &&
                todoList.map((todo, index) => {
                    if(!todo.isComplete){
                        return(
                            <div className="border border-warning mb-1 p-2 d-flex justify-content-between"> 
                                <p>{todo.title}</p>
                                <Button 
                                    onClick={() => {
                                        const newTodoList = todoList;
                                        newTodoList[index].isComplete = !newTodoList[index].isComplete;
                                        updateTodo(newTodoList);
                                    }} >
                                        {buttonCmd}
                                    </Button>
                            </div>
                        );
                    }
                })}      
        </div>
    );
}
