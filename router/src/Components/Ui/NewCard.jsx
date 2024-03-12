import React from 'react';
import './NewCard.css';

const NewCard = (props) => {
    const classess = 'card ' + props.className
  return (
    <div className={classess} >{props.children}</div>
  )
}

export default NewCard