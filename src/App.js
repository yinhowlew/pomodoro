import React, { Component } from 'react';
import './App.css';
import Timer from "./components/Timer/Timer";
import BreakInterval from "./components/BreakInterval/BreakInterval";
import SessionLength from "./components/SessionLength/SessionLength";


class App extends Component {
  constructor() {
    super()
    this.state = {
      sessionLength: 25,
      breakInterval: 5,
      timerMinute: 25,
      isPlay: false,
    };
  }
    
  onIncreaseBreakInterval = () => {
    this.setState((prevState) => {
      return {
        breakInterval: prevState.breakInterval + 1
      }
    })
  }

  onDecreaseBreakInterval = () => {
    this.setState((prevState) => {
      return {
        breakInterval: prevState.breakInterval - 1
      }
    })
  }

  onIncreaseSessionLength = () => {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength + 1,
        timerMinute: prevState.sessionLength + 1
      }
    })
  }

  onDecreaseSessionLength = () => {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 1,
        timerMinute: prevState.sessionLength - 1
      }
    })
  }

  onUpdateTimerMinute = () => {
      this.setState((prevState) => {
      return {
        timerMinute: prevState.timerMinute - 1
      }
    })  
  }

  onToggleInterval = (isSession) => {
    if (isSession) {
      this.setState({
        timerMinute: this.state.sessionLength
     })
    } else {
      this.setState({
        timerMinute: this.state.breakInterval
      })
    }
  }

  onResetTimer = () => {
    this.setState({
      timerMinute: this.state.sessionLength
    })
  }

// this is to stop buttons up down clickable during session
  onPlayStopTimer = (isPlay) => {
    this.setState({
      isPlay: isPlay
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Pomodoro Clock
        </header>

        <div className="Configure">
          <div className="Break-length">
            <section>
              Break Length
            </section>
            <BreakInterval 
              isPlay={this.state.isPlay}
              breakInterval={this.state.breakInterval}
              onIncreaseBreakInterval={this.onIncreaseBreakInterval}
              onDecreaseBreakInterval={this.onDecreaseBreakInterval}
            />
          </div>
          <div className="Break-length">
            <section>
              Session Length
            </section>
            <SessionLength 
              isPlay={this.state.isPlay}
              sessionLength={this.state.sessionLength}
              onIncreaseSessionLength={this.onIncreaseSessionLength}
              onDecreaseSessionLength={this.onDecreaseSessionLength}
            />         
          </div>
        </div>

        <Timer 
          isPlay={this.state.isPlay}
          timerMinute={this.state.timerMinute}
          breakInterval={this.state.breakInterval}
          onUpdateTimerMinute={this.onUpdateTimerMinute}
          onToggleInterval={this.onToggleInterval}
          onResetTimer={this.onResetTimer}
          onPlayStopTimer={this.onPlayStopTimer}
        />

      </div>
    );
  }  
}

export default App;



// obsolete code:

  // finalTimeUpdate = () => {
  //   this.setState({finalTime: new Date().getTime() + this.state.sessionLength});
  // }

  // updateTimer = (minutes, seconds, countdownUpdate) => {
  //   this.setState({min: minutes});
  //   this.setState({sec: seconds});  
  //   this.state.run ?
  //   this.setState({timerID: countdownUpdate}) :
  //   this.setState({timerID: 0}) 
  // }

  // triggerTimer = () => {
  //   this.state.run ?
  //   this.setState({run: false}) :
  //   this.setState({run: true})
  //   console.log(this.state.run);
  // }
