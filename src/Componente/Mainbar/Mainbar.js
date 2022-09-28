import React from 'react';
import logo from '../../images/images-removebg-preview.png';
import Card from '../Card/Card';
import'./Mainbar.css'

const Mainbar = ({activities,addTime,addBreak}) => {
   
    return (
        <div>
            <div className='main'>
              <div>
                 <div className='title'>
                     <img className='logo' src={logo} alt="" />
                     <h1>My Daily Activity</h1>
                 </div>
                 <h3>
                  Select today's exercise
                 </h3>
              </div>
              <div className='cards'>
                   {
                     activities.map(activity => <Card activity={activity} addTime={addTime} key={activity.id}></Card>)
                   }
              </div>
            </div>
        </div>
    );
};

export default Mainbar;