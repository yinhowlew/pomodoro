import React from 'react';

const BreakInterval = ({ breakInterval, onIncreaseBreakInterval, onDecreaseBreakInterval, isPlay }) => {

// below is so that we can add validation; else we can just pass onDecreaseBreakInterval directly to onClick event of button
	const decreaseCounter = () => {
		if (breakInterval === 1) {
			return;
		}

		onDecreaseBreakInterval();
	}

	const increaseCounter = () => {
		if (breakInterval === 60) {
			return;
		}

		onIncreaseBreakInterval();
	}	

    return (
      <div className="Break-interval">
        <button 
        	disabled={isPlay === true ? "disabled" : ""} 
        	onClick={increaseCounter}
        >Up</button>
        <section>{breakInterval}</section>
        <button 
        	disabled={isPlay === true ? "disabled" : ""} 
        	onClick={decreaseCounter}
        >down</button>      
      </div>
    )
}

export default BreakInterval;