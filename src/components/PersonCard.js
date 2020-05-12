import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    increment = () => {
        this.setState({age: this.state.age + 1}); 
    }

    render(){
        const {firstName, lastName, age, hairColor } = this.props;
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <h2>Age: {this.state.age}</h2>
                <h2>Hair Color: {hairColor}</h2>
                <button onClick = {this.increment}>Birthday Button for {firstName} {lastName}</button>

            </div>
        );
    }
}


export default PersonCard;