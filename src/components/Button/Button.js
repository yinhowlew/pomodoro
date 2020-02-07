import React from 'react';

const Button = ({ play, stop, reset, isPlay }) => {
    return (
        <div className="Button">
          <button 
          	disabled={isPlay === true ? "disabled" : ""} 
          	onClick={play}
          	className="Button"
          >
            Play
          </button>
          <button 
          	onClick={stop}
          	className="Button"
          >
            Stop
          </button>          
          <button 
          	onClick={reset}
          	className="Button"
          >
            Reset
          </button>             
        </div>
    )
}

export default Button;