import React from 'react';

const SessionLength = ({ sessionLength, onIncreaseSessionLength, onDecreaseSessionLength, isPlay }) => {
	
// below is so that we can add validation; else we can just pass onDecreaseBreakInterval directly to onClick event of button
	function increaseSession() {
		if (sessionLength === 60) {
			return;
		}
		onIncreaseSessionLength();
	}

	function decreaseSession() {
		if (sessionLength === 1) {
			return;
		}
		onDecreaseSessionLength();
	}

    return (
      <div className="Break-interval">
        <button 
        	disabled={isPlay === true ? "disabled" : ""} 
        	onClick={increaseSession}
        >Up</button>
        <section>{sessionLength}</section>
        <button 
        	disabled={isPlay === true ? "disabled" : ""} 
        	onClick={decreaseSession}
        >down</button>          
      </div>
    )
}

export default SessionLength;