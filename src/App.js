import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
       this.state = {
         data: 0
      }
      this.setNewNumber = this.setNewNumber.bind(this)
   };
   setNewNumber() {
      this.setState({data: this.state.data + 1})
   }
   render() {
      return (
         <div>
            <Content myNumber = {this.state.data}></Content>
            <button onClick = {this.setNewNumber}>+</button>
         </div>
      );
   }}
class Content extends React.Component {
  componentWillMount(){
  console.log("Componenet will mount");
  }
componentDidMount() {
 console.log('Component did mount')
}
    componentWillReceiveProps(newProps) {  
      console.log(newProps,'will receive')  
      console.log('Component will receive props')
   }
   shouldComponentUpdate(newProps, newState) {
     console.log(newProps,newState,'should update')
      return true;
   }
   componentWillUpdate(nextProps, nextState) {
     console.log(nextProps,nextState,'will update')
      console.log('Component will update');
   }
   componentDidUpdate(prevProps, prevState) {
     console.log(prevProps,prevState)
      console.log('Component did update')
   }
render(){
      return(
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
   componentWillUnmount() {
    console.log('Component will unmount')
 }
}
export default App;
