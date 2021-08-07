import React from 'react' ;

const style ={
    border:"none" ,
    outline:"none" ,
    padding:"1em" ,
    color:"white",
    backgroundColor:"black",
    margin:"0 20px"
}
class StateLearning extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            counter : 0 ,
        }
    }
    incrementHandler = () => {
        this.setState({...this.state , counter:this.state.counter + 1})
    }
    decrementHandler = () => {
        this.setState({...this.state , counter:this.state.counter - 1})
    }
    render(){
        return(
            <React.Fragment>
                <button style={style} onClick={this.incrementHandler}>+</button>
                <span>{this.state.counter}</span>
                <button style={style} onClick={this.decrementHandler}>-</button>
            </React.Fragment>
        )
    }
}
export default StateLearning ;