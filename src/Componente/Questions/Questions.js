import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='questions-container'>
            <h1>QUESTIONS</h1>
           <div>
            <h3>how does react work ?</h3>
            <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. </p>
           </div>
           <div>
            <h3>difference between props and state in react</h3>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
           </div>
           <div>
            <h3>any other use of useeffect in react  without loading data </h3>
            <p>The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects</p>
           </div>
        </div>
    );
};

export default Questions;