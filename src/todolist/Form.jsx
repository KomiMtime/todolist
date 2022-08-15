import React, { Component } from "react";

import { Button } from "element-react";



import "./form.css"

class Form extends Component {
    state = {
        value: "",
    }

    handleChange = () => {
        return (e) => {
            this.setState({
                value: e.target.value
            })
        }
    }

    handleAdicionar = () => {
        return (e) => {
            this.props.onReceiveKeywords(this.state.value);
            this.setState({
                value: "",
            })
        }
    }

    render() {
        return (
            <div className="contentBox">
                <p className="title">TODOLIST</p>
                <div className="inputBox">

                    <input className="input"
                        type="text"
                        placeholder="Nome da tarefa"
                        value={this.state.value}
                        onChange={this.handleChange()}
                    ></input>
                    <Button type="primary" icon="plus" onClick={this.handleAdicionar()}>Adicionar</Button>
                </div>
                <div className="divider"></div>
                <input className="input"
                    type="text"
                    placeholder="Pesquisar uma tarefa"
                ></input>
            </div>
        )
    }
}

export default Form;