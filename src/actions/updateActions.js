export const updateConfigAndInit = (height, width, minesNo) => {
    return {
        type: 'UPDATE_CONFIG',
        val: {
            height: height,
            width: width,
            minesNo: minesNo
        }
    }
}
export const updateClick = (row_no, col_no) => {
    return {
        type: 'UPDATE_CLICK',
        val: {
            row_no: row_no,
            col_no: col_no
        }
    }
}
export const invertFlag = (curr_flag) => {
    return {
        type: 'INVERT_FLAG',
        val: {
            curr_flag : curr_flag,
        }
    }
}