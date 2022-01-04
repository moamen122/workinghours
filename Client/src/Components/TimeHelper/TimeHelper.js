import React, { Component, Fragment } from 'react';
import { AppBar, IconButton, TimePicker, Toggle, Slider } from 'material-ui';
import Theme from 'material-ui/styles/MuiThemeProvider';
import ResetIcon from 'material-ui/svg-icons/action/settings-backup-restore';
import TimeIcon from 'material-ui/svg-icons/av/av-timer';
import * as Str from '../../Strings';
import './TimeHelper.scss';

class TimeHelper extends Component {
    constructor(props) {
        super(props);
        var time = new Date(); // time for now 
        var initialDifference = 600000;
        this.state = {
            current: time.getTime(), // open on what time now 
            zoneOffset: time.getTimezoneOffset(),
            start: time.getTime(),
            end: (time.getTime() + initialDifference),
            diff: ("00:" + initialDifference / 60000), // make difference between 2 times by default by 10 mins 
            tookBreak: false,
            breakTime: 0, // breaktime by 0 by default
            breakElement: ''
        }
    }

    onBreakSliderChange = (event, value) => {
        //calculateBreakTime
        var intervalInMinutes = 120; // max time of break is 120 minutes
        var intervals = 1 / value; // make intervals to equal 1/0.25 to make slider increase by 30 mins 
        this.setState({ breakTime: intervalInMinutes / intervals }, () => { this.getDur() }) // calculate breaktime and call getDur to update the state with new values 
    }



    onBreakToggle = (event, value) => {
        var breakElement = <div>
            <Slider step={0.125} value={0}                   //make toggle increase by 30 mins 
                onChange={this.onBreakSliderChange}
            />
        </div>
        var toSet = '';
        if (value) { // if having value open breakElement
            toSet = breakElement;
        }
        this.setState({
            tookBreak: value,
            breakElement: toSet,
            breakTime: 0
        }, () => { this.getDur() })
    }

    reset = () => {
        var time = new Date();
        var initialDifference = 600000;
        this.setState({
            current: time.getTime(),
            zoneOffset: time.getTimezoneOffset(),
            start: time.getTime(),                              //reset the app by makeing state with initial values
            end: (time.getTime() + initialDifference),
            diff: ("00:" + initialDifference / 60000),
            tookBreak: false,
            breakTime: 0,
            breakElement: ''
        });
    }

    render() {
        return (
            <div className="Helper">
                <Theme >
                    <AppBar


                        title={Str.APP_TITLE}
                        iconElementRight={<IconButton onClick={this.reset}><ResetIcon /></IconButton>}
                        iconElementLeft={<IconButton><TimeIcon /></IconButton>}
                    />
                </Theme>
                <Theme>
                    <div className="Body">
                        <TimePicker
                            format="ampm"
                            label={Str.TIME_START}
                            value={new Date(this.state.start)}
                            onChange={this.handleStartChange}
                        />
                        <Toggle
                            label="Break?"
                            onToggle={this.onBreakToggle}
                            toggled={this.state.tookBreak}
                        />
                        {this.state.breakElement} {/*call get breakElement from the state after toggeled */}

                        <TimePicker
                            format="ampm"
                            label={Str.TIME_END}
                            value={new Date(this.state.end)}
                            onChange={this.handleEndChange}
                        />
                        <p>{this.state.breakTime} mins break</p>  {/* get breaktime from the state after determined  */}
                        <h1> Your worked for {this.state.diff} Hours!</h1>
                    </div>
                </Theme>
            </div>
        );
    }
    handleStartChange = (event, date) => {
        this.setState({ start: date }, () => {              // put start time 
            this.getDur()
        });
    }
    handleEndChange = (event, date) => {
        this.setState({ end: date }, () => {                //put end time 
            this.getDur()
        });

    }
    getDur() {
        var timeDiffInMillis = this.state.end - this.state.start;
        if (timeDiffInMillis < 0) {
            timeDiffInMillis = timeDiffInMillis * -1; // avoid negative values

        }
        var minutes = timeDiffInMillis / 60000; //1st  convert from miliseconds to mins 
        var hours = 0;
        var output = '';
        if (this.state.breakTime > 0) {
            minutes = minutes - this.state.breakTime    // remove breaktime from working hours 
        }
        if (minutes > 59) {                                 //2nd convert from minutes to hours 
            //more than an hour
            hours = Math.trunc(minutes / 60); // removing any fraction digits to get hours 
            minutes = minutes % 60;  // get reminder mins 
            output = hours + ":" + minutes + " "; // print output in hours and mins format
        } else {
            //less than an hour
            output = "0:" + minutes;
        }
        this.setState({ diff: output });
    }
}

export default TimeHelper;