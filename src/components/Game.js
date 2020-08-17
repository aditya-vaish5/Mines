import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateClick } from '../actions/updateActions'

class Game extends Component {
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
        if (stat === 0) {
            return <div className="col s0.5" onClick={() => this.props.updateOnClick(row_no,col_no)}>A</div>
        } else if (stat === 2) {
            return <div className="col s0.5">Flag</div>
        } else {
            if (mat === -1) return <div className="col s0.5">Mine</div>
            else return <div className="col s0.5">{mat}</div>
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
            ans.push(<div className="row custom-row">{this.row(matrix[i], status[i], i)}</div>);
        }

        // console.table(ans);
        return ans;
    }

    render() {
        // console.log(this.props)
        return (
            <div className="container" >
                <h4 className="center">Game</h4>
                <div className="col ">
                    {this.table(this.props.matrix, this.props.status)}
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
                    <div className="col">
                        <p>Matrix  : {this.toSTR(this.props.matrix)}</p>
                    </div>
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateOnClick: (row_no, col_no) => {
            // console.log("Clicked " + row_no + col_no);
            dispatch(updateClick(row_no, col_no))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Game);