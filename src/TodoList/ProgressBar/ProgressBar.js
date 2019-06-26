import React from 'react';
import './progress-bar.css'

function ProgressBar(props) {

    function createBar(todos) {
        const total = todos.length;
        const totalChecked = todos.filter(todo => todo.checked).length
        const percentChecked = (totalChecked / total);

        if(percentChecked) {
            return <div style={{flex:percentChecked}} className="progress-box green"></div>
        }
    }

    return (
        <div className="progress-container">
            <div className="progress-bar">
                {createBar(props.todos)}
            </div>
        </div>
    );
}

export default ProgressBar;