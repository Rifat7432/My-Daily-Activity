import React from 'react';
import './Card.css'

const Card = ({activity,addTime}) => {
    const {name,time,image,age,guide} = activity
    return (
        <div className='card'data-aos="zoom-in">
            <img className='player-img' src={image} alt="" />
            <div className="card-body">
                <h4>{name}</h4>
                <p>{guide.slice(0,120)}...</p>
                <h5>For Age :{age}</h5>
                <h5>Time required :{time}m</h5>

                        <button onClick={()=>addTime(time)} className='liked'>
                        Add to list
                        </button>

            </div>
        </div>
    );
};

export default Card;