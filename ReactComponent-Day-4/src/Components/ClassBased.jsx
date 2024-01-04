import React from "react";
import PropTypes from "prop-types";
import functionBased from "./FunctionBased";

class ClassBasedComponent extends React.Component{
    constructor(props){
        super(props)
        console.log("Props = ", props)
        this.state = {count: undefined}
    }
    
    componentDidMount()
    {
        console.log("Will Mount");
    }
    
    componentWillUpdate(){
        console.log("Will Update")
    }

    componentDidUpdate(){
        console.log("Did Update")
    }

    render(){
        return(
            <h1>{this.state.count.map((e,i) => <p key={`class-key-${i}`}>{e}</p>)}</h1>
            // <h1>{this.state.count}</h1>
            // <span style={{fontSize: "25px"}}>{this.props.count}</span>
        );
    }

    shouldComponentUpdate(){
        return true;
        // return false means it will not change not once you release as true that time it will work
        //return false;
    }

    static getDerivedStateFromProps(props, state) {  
        //console.log("work", props, state)
        // When ever you using spread operator that time only you have access state variable
        return {...props} 
        // return {props}
    }

    componentWillUnmount()
    {
        alert("Component Will Unmount")
    }
}
export default ClassBasedComponent;
ClassBasedComponent.propTypes = {
    count: PropTypes.number.isRequired,
  };