import React from 'react';


const Button = ({style, text, icon}) => {
    return (
        <div>
          <button className={style}>{icon}{text}</button>
        </div>
    );
};

export default Button;