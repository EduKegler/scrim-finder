import React from "react";
import './section.css';

interface ISection  {
    children: React.ReactElement | React.ReactElement[];
}
const Section = React.memo((props: ISection) => { 
    const { children } = props;
    return(
        <div className='cf-section'>
            {React.Children.map(children, e => e)}
        </div>
    );
});

export default Section;