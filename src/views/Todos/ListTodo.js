import React from 'react';
import './ListTodo.scss';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';
import Color from '../HOC/Color';
class ListTodo extends React.Component {
    state = {
        listTodos: [
            {
                id: 'todo1', title: 'Doing homework'
            },
            {
                id: 'todo2', title: 'Playing game'
            },
            {
                id: 'todo3', title: 'Watch movies'
            }
        ],
        editTodo: {

        }
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Wow so easy!")
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentTodos
        })

        toast.success("Delete success!")
    }
    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0

        //click save
        if (!isEmptyObj && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos]
            let objIndex = listTodosCopy.findIndex((item => item.id == todo.id));

            listTodosCopy[objIndex].title = editTodo.title
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}

            })
            toast.success("Update success!")
            return;
        }

        //click edit
        this.setState({
            editTodo: todo
        })
    }

    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        return (
            <>
                <p>
                    Simple TODO App
                </p>
                <div className='list-todo-container'>
                    <AddTodo addNewTodo={this.addNewTodo} />
                    <div className='list-todo-content'>
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div key={item.id} className='todo-child'>
                                        {isEmptyObj ?

                                            <span> {index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input
                                                            onChange={(event) => this.handleOnchangeEditTodo(event)}
                                                            value={editTodo.title} />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>
                                                }
                                            </>

                                        }
                                        {/* <input value={item.title} /> */}
                                        <button
                                            onClick={() => this.handleEditTodo(item)}
                                            className='edit'>
                                            {!isEmptyObj && editTodo.id === item.id ? 'Save' : 'Edit'}

                                        </button>
                                        <button
                                            onClick={() => this.handleDeleteTodo(item)}
                                            className='delete'>Delete</button>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </>

        )
    }
}

export default Color(ListTodo);