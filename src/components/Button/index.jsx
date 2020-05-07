import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <>
      <div className="btn red-button">
        {props.value}
      </div>
    </>
  )
}
export default Button;
