import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TimePicker from 'react-time-picker';
import TimeHelper from '../TimeHelper/TimeHelper';


function Dashboard() {
    // const navigate = useNavigate()
    // var [time, setTime] = useState(0);
    // var [timeExit, setTimeExit] = useState(0);
    // var [timeArrival, setTimeArrival] = useState(0);
    // var [launchBreakTime, setlaunchBreakTime] = useState(0);
    // const handleLogOut = () => {
    //     navigate('/login');
    // }

    // function getExitTime(e) {
    //     setTimeExit(e.target.value);


    // }; function getArrivalTime(e) {
    //     setTimeArrival(e.target.value);

    // };
    // function getLaunchBreakTime(e) {
    //     setlaunchBreakTime(e.target.value);

    // };


    // function calclauteTime(e, a, l) {
    //     let t = e - a - l;
    //     return t;

    // }


    return (
        <TimeHelper />

        // <div>
        //     Welcome On Board  <br /> <br />
        //     <p>Enter Enter Time </p>
        //     <input type="time" onClick={getArrivalTime} />
        //     <p>{getArrivalTime}</p>
        //     <p>Enter Exit Time </p>
        //     <input type="time" onClick={getExitTime} />
        //     <p>How many Hours you take your launchBreak</p>
        //     <input type="number" onClick={getLaunchBreakTime} />
        //     <input type="button" value="Submit" onClick={calclauteTime(timeExit, timeArrival, launchBreakTime)}></input>
        //     <p>Your Worked for {parseInt(calclauteTime(timeExit, timeArrival, launchBreakTime))} Hours !</p>



        //     <form onSubmit={calclauteTime(timeExit, timeArrival, launchBreakTime)}>
        //         <p>Enter Exit Time </p>
        //         <input type="number" onClick={getExitTime} />


        //         <p>Enter Enter Time </p>
        //         <input type="number" onClick={getArrivalTime} />
        //         <p>Enter launchBreak Time </p>






        //         <input type="button" value="Submit" onClick={calclauteTime(timeExit, timeArrival, launchBreakTime)}></input>

        //         <p>Your Worked for {calclauteTime(timeExit, timeArrival, launchBreakTime)} Hours !</p>

        //     </form>

        // </div>
    )
}
export default Dashboard;