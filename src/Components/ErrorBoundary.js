import React from "react";

class ErrorBoundary extends React.Component{
   constructor(props){
    super(props);
    this.state = {
        hasError: false
    }
   }

   //lifecyckle mthod

   componentDidCatch(error,info){
    this.setState({hasError : true});

   }
   render(){
    if (this.state.hasError){
       return <h1>Oops this is not good</h1> 
    }
    return this.props.children;
   }
}

export default ErrorBoundary;