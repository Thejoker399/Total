import React, { Component } from 'react';
import Style from './App.css';

class Content extends Component {

    constructor() {
        super();
        this.state = {
            a: 0,
            b: 0,
            oparator: "+"
        }
    }
    setInputTextA = (evt) => {
        this.setState({ a: evt.target.value })
    }
    setInputTextB = (evt) => {
        this.setState({ b: evt.target.value })
    }
    setInputTextOparator = (evt) => {
        this.setState({ oparator: evt.target.value })
    }

    cal = () => {
        let a = this.state.a
        let b = this.state.b
        let oparator = this.state.oparator
        let total = 0
        if (oparator === "+") {
            total = parseInt(a) + parseInt(b)
        } else if (oparator === "-") {
            total = parseInt(a) - parseInt(b)
        } else if (oparator === "x") {
            total = parseInt(a) * parseInt(b)
        } else if (oparator === "/") {
            total = parseInt(a) / parseInt(b)
        }

        return total
    }

    render() {
        return (
            <div className="block-input content_img">
                <input type="text" onChange={this.setInputTextA} />
                <select name="oparator" onChange={this.setInputTextOparator}>
                    <option value="+"> + </option>
                    <option value="-"> - </option>
                    <option value="x"> x </option>
                    <option value="/"> / </option>
                </select>
                <input type="text" onChange={this.setInputTextB} />
                <div className="block-button">
                    <button className="button-submit" type="sudmit" onClick={this.cal} > OK</button>
                    <div className="block-total ">
                        <p>{this.state.a} {this.state.oparator} {this.state.b}</p>
                        <p>{this.cal()}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
