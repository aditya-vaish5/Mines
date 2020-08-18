import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateClick, invertFlag } from '../actions/updateActions'


class Game extends Component {
    // shouldComponentUpdate(nextProps, nextState) {
    //     return !shallowEqual(this.state.props, nextState.props);
    // }
    toSTR = (activities) => {
        let res = "";
        for (let i = 0; i < activities.length; i++) {
            // get the size of the inner array
            let s = "";
            let innerArrayLength = activities[i].length;
            // loop the inner array
            for (let j = 0; j < innerArrayLength; j++) {
                s += activities[i][j];
            }
            res += s + '\n'
        }
        return res;
    }

    block = (mat, stat, row_no, col_no) => {
        // if (row_no >= this.props.height || col_no >= this.props.width) return;
        if (stat === 0) {
            return <div className="box closed" onClick={() => this.props.updateOnClick(row_no, col_no)}>
                .
            </div>
        } else if (stat === 2) {
            return <div className="box closed flag" onClick={() => this.props.updateOnClick(row_no, col_no)}><i className="tiny material-icons  light-green-text text-accent-3" >flag</i></div>
        } else {
            if (mat === -1) return <div className="box mine"><i className="tiny material-icons" >wb_sunny</i></div>
            else return <div className="box open">{mat !== 0 ? mat : "."}</div>
        }

    }
    row = (matrix_row, status_row, row_no) => {
        let r = [];
        for (let i = 0; i < matrix_row.length; i++) {
            r.push(this.block(matrix_row[i], status_row[i], row_no, i));
        }
        return r;
    }
    table = (matrix, status) => {
        let ans = [];
        for (let i = 0; i < matrix.length; i++) {
            ans.push(<div className="wrapper">{this.row(matrix[i], status[i], i)}</div>);
        }

        // console.table(ans);
        return ans;
    }

    render() {
        console.log(this.props)
        let headMessage = (<></>);
        if (this.props.winStatus === 0) {
            headMessage = (<h4 className="center">Game</h4>)
        } else if (this.props.winStatus === 1) {
            headMessage = (<h4 className="center green-text">Game Won!</h4>)
        } else {
            headMessage = (<h4 className="center red-text">Game Over, You Lose!</h4>)
        }

        return (
            <div className="container" >
                {headMessage}
                <div className="center">
                    <div className="col ">
                        {this.table(this.props.matrix, this.props.status)}
                    </div>
                </div>
                <div className="row">
                    <div className="col s2">
                        <p>Height : {this.props.height}</p>
                    </div>
                    <div className="col s2">
                        <p>Width : {this.props.width}</p>
                    </div>
                    <div className="col s2">
                        <p>Mines Number  : {this.props.minesNumber}</p>
                    </div>
                    {/* <div className="col">
                        <p>Matrix  : {this.toSTR(this.props.matrix)}</p>
                    </div> */}

                </div><div className="fixed-action-btn">
                    <a class="btn-floating btn-large red">
                        {
                            (this.props.flagOn === 1) ?
                                (<i class="large material-icons red-text white" onClick={() => this.props.invertFlag(this.props.flagOn)}>flag</i>) :
                                (<i class="large material-icons blue" onClick={() => this.props.invertFlag(this.props.flagOn)}>flag</i>)
                        }
                    </a>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        height: state.height,
        width: state.width,
        minesNumber: state.minesNumber,
        matrix: state.matrix,
        status: state.status,
        clickCnt: state.count,
        flagOn: state.flagOn,
        winStatus: state.winStatus,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateOnClick: (row_no, col_no) => {
            // console.log("Clicked " + row_no + col_no);
            dispatch(updateClick(row_no, col_no))
        },
        invertFlag: (curr_flag) => {
            dispatch(invertFlag(curr_flag))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Game);