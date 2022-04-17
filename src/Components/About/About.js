import React from 'react';
import me from "../../Images/About/me.JPG";

const About = () => {
    return (
        <div className='text-center bg-secondary text-white'>
            <img height={300} src={me} alt='pic'/>
            <h3>A Owadud Bhuiyan</h3>
           <p>
                I want to be a full Stack Developer. But now I want to expert in React and React Native. I am doing 3-4 years of job experience, I want to do a startUp that's why I am doing market research and also doing some works on fiverr Marketplace.
           </p>
        </div>
    );
};

export default About;