import React from 'react'
import { connect } from 'react-redux'
import { updateConfigAndInit } from '../actions/updateActions'

class Home extends React.Component {

    state = {
        height: 10,
        width: 10,
        minesNo: 10,
    }

    handleChange = (e) => {
        // e.preventDefault()
        // console.log(e.target)
        if (e.target.value <= 30 )
            this.setState(
                {
                    [e.target.id]: e.target.value
                }
            )
    }

    handleChangeMinesNo = (e) => {
        if (e.target.value <= this.state.width * this.state.height)
            this.setState(
                {
                    [e.target.id]: e.target.value
                }
            )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateConfigAndInit(this.state.height, this.state.width, this.state.minesNo)
        this.props.history.push('/game')
    }

    render() {
        return (
            <div className="container">
                <h4 className="center">Welcome to Home...</h4>
                <div className="inputs">
                    <input type="number" id="width" min="1" max="30" className="width" onChange={this.handleChange} value={this.state.width} />
                    <label for="width">Width (between 1 and 30)</label>
                    {/* <span class="helper-text" data-error="wrong" data-success="right">Helper text</span> */}


                    <input type="number" id="height" min="1" max="30" className="height" onChange={this.handleChange} value={this.state.height}/>
                    <label for="height">Height (between 1 and 30)</label>
                    {/* <span class="helper-text" data-error="wrong" data-success="right">Helper text</span> */}

                    <input type="number" id="minesNo" className="minesNo" onChange={this.handleChangeMinesNo} value={this.state.minesNo} />
                    <label for="minesNo">Mines number (between 1 and height * width)</label>
                    {/* <span class="helper-text" data-error="wrong" data-success="right"></span> */}
                    <p></p>
                    <button className="btn blue lighten-2 center" onClick={this.handleSubmit}>Start Game!</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // this.state.height = state.heigth;
    // this.state.width = state.width;
    // this.state.minesNo = state.minesNo;

    // return {
    //     height: state.height,
    //     width: state.width,
    //     minesNo: state.minesNumber
    // }
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateConfigAndInit: (h, w, no) => {
            dispatch(updateConfigAndInit(h, w, no))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)