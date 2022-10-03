import React from "react";

class CounterProops extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         text: ' '
      }
   }

   onHandleChange = (e) => {
      this.setState({
        text: e.target.value
      })
   }

   render () {
      return (
         <div>
            <input type="text" placeholder="type smth" value={this.state.text} onChange={(e) => this.onHandleChange(e)}/>
            <p>{this.state.text}</p>
         </div>
      );
   }
}


export default CounterProops;