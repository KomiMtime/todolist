import React, { Component } from "react";

import Form from "./Form";
import List from "./List";
import Total from "./Total"

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
    }

    state = {
        list: [],
    }

    handleReceiveKeywords = () => {
        return (keywords) => {
            if (keywords === '') {
                return;
            }
            this.state.list.push({
                id: new Date().getTime(),
                taskname: keywords,
                checked: false,
            })
            this.setState({})
        }
    }

    handleDeleteTask = (id) => {
        return () => {
            let newList = this.state.list.filter((value) => {
                return value.id != id;
            })
            this.setState({
                list: newList,
            })
        }
    }

    handleCheckBoxCuont = () => {
        return (e, id) => {
            this.state.list.map((value) => {
                if(value.id===id){
                    value.checked = !value.checked
                }
            })
            this.setState({})
        }
    }

    render() {
        return (
            <>
                <Form onReceiveKeywords={this.handleReceiveKeywords()}></Form>
                <List list={this.state.list} onCheckBoxCuont={this.handleCheckBoxCuont()} onDeleteTask={this.handleDeleteTask}></List>
                <Total listNum={this.state.list.length} listCheckedNum={this.state.list.filter((item) => { if (item.checked) { return item } }).length}></Total>
            </>
        )
    }

}

export default ToDoList;