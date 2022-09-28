import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Mainbar from '../Mainbar/Mainbar';
import Sidebar from '../Sidebar/Sidebar';
import './Home.css'

const Home = () => {
    const [activities,setActivities] = useState([]);
    const [time,settime] = useState(0);
    
    useEffect(()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    },[]);
    const addTime = (t) =>{
       if(time){
        settime(time + t)
       }
       else{
        settime(t)
       }
    }
   
    return (
        <div className='home'>
            <div>
                <Mainbar activities={activities} addTime={addTime}></Mainbar>
            </div>
            <div>
                <Sidebar time={time}></Sidebar>
            </div>
        </div>
    );
};

export default Home;