import React from 'react';
import Time from '../Time';
import Timer from './Timer';

export default class PomodoroTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: "pomodoro"
        }
    }
    showTab = (e,tab) => {
        e.preventDefault();
        this.props.setStatus(tab);
        this.setState({currentTab: tab});
    }
    render() {
        return (
            <div className="w3-container">
                <div className="w3-cell-row w3-center w3-deep-purple w3-mobile">
                    <div className="w3-bar-item w3-hover-purple w3-cell w3-third" onClick={
                            (e) => this.showTab(e,"pomodoro")
                        }
                        id="pomodoro">
                        <span>Pomodoro</span>
                    </div>
                    <div className="w3-bar-item w3-hover-purple w3-cell w3-third" onClick={
                            (e) => this.showTab(e,"shortBreak")
                        }
                        id="shortBreak">
                        <span>Short Break</span>
                    </div>
                    <div className="w3-bar-item w3-hover-purple w3-cell w3-third" onClick={
                            (e) => this.showTab(e,"longBreak")
                        }
                        id="longBreak">
                        <span>Long Break</span>
                    </div>
                </div>
                {
                    this.state.currentTab === "pomodoro" && <Timer id="pomodoro" onTimeEnd={this.props.onTimeEnd} totalTime={new Time(20, 0)}/>
                }
                {
                    this.state.currentTab === "shortBreak" && <Timer id="shortBreak" onTimeEnd={this.props.onTimeEnd} totalTime={new Time(0, 5)}/>
                }
                {
                    this.state.currentTab === "longBreak" && <Timer id="longBreak" onTimeEnd={this.props.onTimeEnd} totalTime={new Time(25, 0)}/>
                } 
            </div>
        )
    }
}
