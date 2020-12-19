import React from 'react';
import "../css/counter.css";

export default class Counter extends React.Component {

    state = {
        // eslint-disable-next-line react/prop-types
        counter: this.props.start || 0,
        value: 0
    };
    
    increment = () => this.setState({ counter: +this.state.counter+1 });
    decrement = () => this.setState({ counter: +this.state.counter-1 });
    changeValue = () => this.setState({ counter: this.state.value, value: 0 });
    handleInputChange = (event) => this.setState({ value: event.target.value });
    // eslint-disable-next-line react/prop-types
    handleReset = () => this.setState({ counter: this.props.start || 0});

    render (){
        return (
            <div className="counterMain">
                <div className="incDecSection">
                    <button className="btn-dec" onClick={this.decrement}>-</button>
                    <span className="counterVal">{this.state.counter}</span>
                    <button className="btn-inc" onClick={this.increment}>+</button>
                </div>
                <div className="changeSection">
                    <input type="text" value={this.state.value} onChange={this.handleInputChange} />
                    <button onClick={this.changeValue} className="btn-change">Zmień</button>
                </div>
                <div className="resetSection">
                    <button className='btn-reset' onClick={this.handleReset}>Reset</button>
                </div>
            </div>
        );
    }
}