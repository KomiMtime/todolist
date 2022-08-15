import React, { Component } from "react";
import "./list.css"
import { Checkbox } from "element-react"


class List extends Component {
    state = {

    }
    aaa(e) {
        console.log(e)
        // onChange={(e)=>{this.props.onCheckBoxCuont(e)}}
    }

    render() {
        return (
            <ul className="listBox">
                {
                    this.props.list.map(value => <li className="listData" key={value.id} >
                        <span > <Checkbox checked={value.checked} onChange={(e) => { this.props.onCheckBoxCuont(e, value.id) }}></Checkbox> {value.taskname}</span>
                        <i className="el-icon-delete" onClick={this.props.onDeleteTask(value.id)}></i>
                    </li>)
                }
            </ul>
        )
    }
}

export default List;