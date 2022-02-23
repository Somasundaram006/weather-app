import React from 'react';

const Button = ({ onClick, children }) => {
 return (
   <button onClick={onClick} className="btnWrapper">
     {children}
   </button>
 )
}

export default Button;