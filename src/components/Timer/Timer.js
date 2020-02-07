import React, { Component } from 'react';
import Button from "../Button/Button";
import './Timer.css';

class Timer extends Component {
	constructor() {
		super();

		this.state = {
			isSession: true,
			timerSecond: 0,
			intervalID: 0,
		}

		// this.play = this.play.bind(this);
		// this.decreaseTimer = this.decreaseTimer.bind(this);
		// this.stop = this.stop.bind(this);
		// this.reset = this.reset.bind(this);
	}

	play = () => {
		let intervalID = setInterval(this.decreaseTimer, 1000);
		this.props.onPlayStopTimer(true);
		this.setState({
			intervalID: intervalID
		})
	}

	decreaseTimer = () => {
		switch (this.state.timerSecond) {
			case 0:
				if (this.props.timerMinute === 0) {
					if (this.state.isSession) {
						this.setState({
							isSession: false
						});
						this.props.onToggleInterval(this.state.isSession);
					} else {
						this.setState({
							isSession: true
						});
						this.props.onToggleInterval(this.state.isSession);
					}
				} else {
					this.props.onUpdateTimerMinute()
					this.setState({
						timerSecond: 59
					})					
				}
				break;
			default:
				this.setState((prevState) => {
					return {
						timerSecond: prevState.timerSecond - 1
					}
				})
				break;
		}
	}

	stop = () => {
		clearInterval(this.state.intervalID);
		this.props.onPlayStopTimer(false);
	}

	reset = () => {
		this.stop();
		this.props.onResetTimer();
		this.props.onPlayStopTimer(false);
		this.setState({
			timerSecond: 0,
			isSession: true
		})
	}


	render() {
		return (
		  <div>
		    <div className="Timer">
		      <div>
		        {this.state.isSession === true ?
		        	"Session" :
		        	"Break"
		        }
		      </div>
		      <div>
		        <span>{this.props.timerMinute}</span>
		        <span>:</span>
		        <span>
		        {this.state.timerSecond === 0 
		        	? "00" 
		        	: this.state.timerSecond < 10 
		        	? "0" + this.state.timerSecond
		        	: this.state.timerSecond
		    	}
		        </span>
		      </div>          
		    </div>

		    <Button 
		    	play={this.play}
		    	stop={this.stop}
		    	reset={this.reset}
		    	isPlay={this.props.isPlay}
		    />
		  </div>  
		)	
	}
}

export default Timer;
