import * as React from 'react';

export default class NewTodoInput extends React.Component<any, any> {
    protected _recordInput = (event) => {
        console.log(event.target.value)
    };

    public render() {
        return (
            <div className="newTodoInput">
                <div className="todo-input category">
                    <input type="text" onChange={this._recordInput}/>
                </div>
                <div className="todo-input content">
                    <input type="text" onChange={this._recordInput}/>
                </div>
                <div className="todo-input time">
                    <input type="text" onChange={this._recordInput}/>
                </div>
                <div className="todo-input tags">
                    <input type="text" onChange={this._recordInput}/>
                </div>
                <div className="todo-input priority">
                    <input type="text" onChange={this._recordInput}/>
                </div>
            </div>
        )
    }
}