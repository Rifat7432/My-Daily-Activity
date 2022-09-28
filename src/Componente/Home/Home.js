import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Mainbar from '../Mainbar/Mainbar';
import Sidebar from '../Sidebar/Sidebar';
import './Home.css'

const Home = () => {
    const [activities,setActivities] = useState([])
    useEffect(()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    },[]);
    const addTime = (time) =>{
        console.log(time)
    }
    return (
        <div className='home'>
            <div>
                <Mainbar activities={activities} addTime={addTime}></Mainbar>
            </div>
            <div>
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Home;