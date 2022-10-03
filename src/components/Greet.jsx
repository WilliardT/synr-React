import React from "react";
import PropTypes from 'prop-types';

class Greet extends React.Component {
   render () {
      const {name} = this.props;

      return (
         <h1>Hello world, my age is {name}</h1>
      );
   }
} 

Greet.propTypes = {
   name: PropTypes.string
};

export default Greet;