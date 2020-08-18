import React from 'react'

const RainBow = (WrappedComponent) => {

    const colors = ['red', 'pink', 'orange', 'black', 'green', 'yellow', 'cyan', 'purple', 'blue'];
    const randomColor = colors[Math.floor(Math.random()*9)];
    
    const classname = randomColor+ '-text' ;

    return (props) => {
        return (
            <div className={classname}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}


export default RainBow;