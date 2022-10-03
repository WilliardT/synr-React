import React from "react";


class Counter extends React.Component {
      state = {
         counter: 0
      }
   
      onClickButton = () => {
         this.setState({
            counter: this.state.counter + 1
         })
      }

      render () {
      let counter = this.state.counter 
            
      return (
         <div className="counter">
            <p>You cliked {counter} times</p>
            <button onClick={() => this.onClickButton()}>click me</button>

         </div>
      );
   }
}

export default Counter;