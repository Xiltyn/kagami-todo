import * as React from 'react';
import Todo from "../../models/Todo";
import {addNewTodo} from "../../actions/todoActions";
import {connect} from "react-redux";
import Dim from "../global/Dim";
import '../../assets/scss/components/global/dim'

class NewTodoInput extends React.Component<any, any> {
    constructor() {
        super();

        this.state = {
            category    :   null,
            content     :   null,
            time        :   null,
            tags        :   null,
            priority    :   null
        }
    }

    protected _recordInput = (event) => {

        if (event.target === this.refs.category) {
            this.setState({ category: event.target.value});
        } else if (event.target === this.refs.content) {
            this.setState({ content: event.target.value});
        } else if (event.target === this.refs.time) {
            this.setState({ time: event.target.value});
        } else if (event.target === this.refs.tags) {
            let tags = [];
            tags.push(event.target.value);
            this.setState({ tags: tags});
        } else if (event.target === this.refs.priority) {
            this.setState({ priority: event.target.value});
        }

    };

    protected submitNewTodo = () => {
        let currentState = this.state;
        const newTodo:Todo = new Todo(currentState.content, currentState.time, currentState.tags);
        this.props.addNewTodo(newTodo);
        this.props.switchInput(false);
    };

    public render() {
        return (
            <div className="newTodoInput">
                <Dim />
                <div className="inputs-wrapper">
                    <div className="todo-input">
                        <input ref="category" placeholder="category" type="text" onChange={this._recordInput}/>
                    </div>
                    <div className="todo-input">
                        <input ref="content" placeholder="content" type="text" onChange={this._recordInput}/>
                    </div>
                    <div className="todo-input">
                        <input ref="time" placeholder="time" type="text" onChange={this._recordInput}/>
                    </div>
                    <div className="todo-input">
                        <input ref="tags" placeholder="tags" type="text" onChange={this._recordInput}/>
                    </div>
                    <div className="todo-input">
                        <input ref="priority" placeholder="priority" type="text" onChange={this._recordInput}/>
                    </div>
                    <button onClick={this.submitNewTodo}>Submit</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewTodo: (object:Todo) => {
            dispatch(addNewTodo(object));
        }
    };
};

export default connect(null, mapDispatchToProps)(NewTodoInput);