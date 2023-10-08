import PropTypes from 'prop-types';
import { useState } from 'react';

const FirstApp = ({p}) => {

  const [a, setA] = useState(p);

  const handleAdd = () => { 
    setA(a + 1);
    console.log(a);
  }

  const handleSubtract = () => {
    setA(a - 1);
    console.log(a);
  }

  const handleReset = () => {
    setA(p);
    console.log(a);
  }

    return (
      <>
        <h1> Counter </h1>    
        <button onClick = { () => handleAdd() }> +1 </button>
        <button onClick = { () => handleReset() }> Reset </button>
        <button onClick = { () => handleSubtract() }> -1 </button>
        <br />
        <span> {a} </span>
      </>
    )
  }

export default FirstApp;

     FirstApp.propTypes = {
       title: PropTypes.string.isRequired,
       sum: PropTypes.number.isRequired
     }

     FirstApp.defaultProps = {
       title: 'No hay titulo',
      sum: 300
  }

