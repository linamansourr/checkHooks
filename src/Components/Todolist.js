import React from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

function Todolist ({handleDone, todos}){
    return (
        <div>
            {todos.map((task, key)=>(
                <Todo task={task} key={key} handleDone={handleDone} />
            )
            )
            }
        </div>
    )
}

Todo.PropTypes = {
    todos : PropTypes.object,
    handleDone : PropTypes.func,
};
export default Todolist;