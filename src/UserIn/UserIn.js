import React from 'react';
import './UserIn.css';

const userIn = ({ id, onInputChange }) => {
  const styleLine = {
    marginTop: '20px',
    marginBottom: '20px'
  };
  const styleInput = {
    height: '40px',
    width: '400px',
    marginBottom: '20px',
    border: '1px solid #000000',
    fontSize: '20px',
    textAlign: 'center'
  };
  return (
    <div>
      <div style={ styleLine }>
        <label><strong>User-Id</strong></label>
      </div>
      <div style={ styleLine }>
        <input style={ styleInput } value={ id } onChange={onInputChange} type="text" />
      </div>
    </div>
  )
}

export default userIn;