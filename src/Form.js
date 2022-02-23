import React from 'react';
import Button from './Button';

const Form = ({data, setData, getReport}) => {
   return (
       <div className="formWrapper">
       <input
           value={data}
           onChange={e => setData(e.target.value)}
           placeholder="Search City"
           className="formInp"
         ></input>
       <Button onClick={() =>getReport()}>Get Weather Report</Button>
       </div>
   )
}

export default Form;