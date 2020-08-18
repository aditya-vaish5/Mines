import React from 'react'

const Rules = () => {
    return (
        <div className="container">
            <h4 className="center">Rules</h4>
            <p></p>
            <h5 className="center">How to start</h5>
            <p>Initially, of course, you have to guess by clicking a random box.</p>
            <h5 className="center">How to proceed further</h5>
            <p>If a box that you've clicked in empty, that means that box is touching 0 mines. If the box has a number in it, that's how many mines that specific box is touching.</p>
            <h5 className="center">Flag Rules</h5>
            <p>You can then infer which unlclicked boxes are mines. You can flag on "suspected mine" boxes to mark them with a flag, so you don't accidentally click on that. Use the floating button on bottom-right corner to falg or unflag boxes. If you are able to expose all non-mine boxes, you win.</p>
            <h5 className="center">When You are Done</h5>
            <p>Once you have finished the game go back to HOME page to plat once again.</p>
        </div>
    )
}

export default Rules