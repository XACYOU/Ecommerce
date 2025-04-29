import React from 'react'

const Select = ({type, opts}) => {
  return (
    <select className="select select-md">
      <option>{type}</option>
      {opts.map((opt, i)=>(

      <option key={i}>{opt}</option>

      ))}
    </select>
  );
}

export default Select