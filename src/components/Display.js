import React from 'react';
import data from '../shared/data';



const Display = (props) => {
    let display;
    if(props.show){
        display = data.map(person => {
    
            return(
            <div className="display" key={person.id}>
                <div className="display-img"><img src={person.image} alt={person.name}></img></div>
                <div className="display-text">
                    <p>{person.name}</p>
                    <p>{person.age} years</p>
                </div>
            </div>)
        })
    } else{
        display = null;
    }
    return(
        <>
        {display}
        </>
    )
}

export default Display;