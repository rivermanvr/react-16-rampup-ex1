import React from 'react';
import './UserOut.css';

const userOut = ({ p1, p2 }) => {
  const styleLine = {
    marginTop: '20px',
    marginBottom: '20px'
  };
  const styleOutput = {
    height: 'auto',
    width: '400px',
    marginBottom: '30px',
    fontSize: '20px',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  };
  return (
    <div>
      <div style={ styleLine }><strong>Paragraphs</strong></div>
      <div><p style={ styleOutput }>{ p1 }</p></div>
      <div><p style={ styleOutput }>{ p2 }</p></div>
    </div>
  );
};

export default userOut;