const initState = {
    height: 10,
    width: 10,
    minesNumber: 10,
    matrix: startState(),
    status: new Array(10).fill(0).map(() => new Array(10).fill(0)),
    minesLocation: [],
    count: 0,
    flagOn: 0,
    winStatus: 0,
}
function startState() {
    let new_matrix = [];
    let new_mines = [];
    // var arr = [];
    while (new_mines.length < 10) {
        let r = Math.floor(Math.random() * 100) + 1;
        if (new_mines.indexOf(r) === -1) new_mines.push(r);
    }
    new_mines.sort()
    let row;
    for (let i = 1; i <= 10; i++) {
        row = [];
        for (let j = 1; j <= 10; j++) {
            if (new_mines.indexOf((i - 1) * 10 + j) === -1)
                row.push(0);
            else
                row.push(-1);
        }
        new_matrix.push(row);
    }

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (new_matrix[i][j] === -1) {
                if (i + 1 < 10 && new_matrix[i + 1][j] !== -1) new_matrix[i + 1][j]++;
                if (i + 1 < 10 && j - 1 >= 0 && new_matrix[i + 1][j - 1] !== -1) new_matrix[i + 1][j - 1]++;
                if (i + 1 < 10 && j + 1 < 10 && new_matrix[i + 1][j + 1] !== -1) new_matrix[i + 1][j + 1]++;
                if (j + 1 < 10 && new_matrix[i][j + 1] !== -1) new_matrix[i][j + 1]++;
                if (j - 1 >= 0 && new_matrix[i][j - 1] !== -1) new_matrix[i][j - 1]++;
                if (i - 1 >= 0 && new_matrix[i - 1][j] !== -1) new_matrix[i - 1][j]++;
                if (i - 1 >= 0 && j - 1 >= 0 && new_matrix[i - 1][j - 1] !== -1) new_matrix[i - 1][j - 1]++;
                if (i - 1 >= 0 && j + 1 < 10 && new_matrix[i - 1][j + 1] !== -1) new_matrix[i - 1][j + 1]++;
            }
        }
    }

    return (new_matrix);
}
function openPressed(curr_mat, curr_stat, row_no, col_no, h, w) {
    if (curr_stat[row_no][col_no] === 2) return;
    if (curr_stat[row_no][col_no] === 1) return;
    curr_stat[row_no][col_no] = 1;
    if (curr_mat[row_no][col_no] === 0) {
        let i = row_no, j = col_no;
        if (i + 1 < h) openPressed(curr_mat, curr_stat, i + 1, j, h, w);
        if (i + 1 < h && j - 1 >= 0) openPressed(curr_mat, curr_stat, i + 1, j - 1, h, w);
        if (i + 1 < h && j + 1 < w) openPressed(curr_mat, curr_stat, i + 1, j + 1, h, w);
        if (j + 1 < w) openPressed(curr_mat, curr_stat, i, j + 1, h, w);
        if (j - 1 >= 0) openPressed(curr_mat, curr_stat, i, j - 1, h, w);
        if (i - 1 >= 0) openPressed(curr_mat, curr_stat, i - 1, j, h, w);
        if (i - 1 >= 0 && j - 1 >= 0) openPressed(curr_mat, curr_stat, i - 1, j - 1, h, w);
        if (i - 1 >= 0 && j + 1 < w) openPressed(curr_mat, curr_stat, i - 1, j + 1, h, w);
    }
}
function hasWon(curr_mat, curr_stat, h, w) {
    for(let i=0;i<h;i++){
        for(let j=0;j<w;j++){
            if(curr_mat[i][j] !== -1 && curr_stat[i][j] === 0) return false;
        }
    }
   
    return true;
}
function allOne(curr_stat, h, w) {
    for(let i=0;i<h;i++){
        for(let j=0;j<w;j++){
            curr_stat[i][j] =1;
        }
    }
    return curr_stat;
}
const rootReducer = (state = initState, action) => {
    // console.log(action);
    if (action.type === 'UPDATE_CONFIG') {
        // console.log(state)
        // let newPosts = state.posts.filter(post => action.id  !== post.id)
        let new_matrix = [];
        let new_mines = [];
        let new_status = [];
        // var arr = [];
        while (new_mines.length < action.val.minesNo) {
            let r = Math.floor(Math.random() * action.val.height * action.val.width) + 1;
            if (new_mines.indexOf(r) === -1) new_mines.push(r);
        }
        new_mines.sort()
        let row;
        for (let i = 1; i <= action.val.height; i++) {
            row = [];
            for (let j = 1; j <= action.val.width; j++) {
                if (new_mines.indexOf((i - 1) * action.val.height + j) === -1)
                    row.push(0);
                else
                    row.push(-1);
            }
            new_matrix.push(row);
        }
        for (let i = 1; i <= action.val.height; i++) {
            row = [];
            for (let j = 1; j <= action.val.width; j++) {
                row.push(0);
            }
            new_status.push(row);
        }
        for (let i = 0; i < new_matrix.length; i++) {
            for (let j = 0; j < new_matrix[i].length; j++) {
                if (new_matrix[i][j] === -1) {
                    if (i + 1 < new_matrix.length && new_matrix[i + 1][j] !== -1) new_matrix[i + 1][j]++;
                    if (i + 1 < new_matrix.length && j - 1 >= 0 && new_matrix[i + 1][j - 1] !== -1) new_matrix[i + 1][j - 1]++;
                    if (i + 1 < new_matrix.length && j + 1 < new_matrix[i].length && new_matrix[i + 1][j + 1] !== -1) new_matrix[i + 1][j + 1]++;
                    if (j + 1 < new_matrix[i].length && new_matrix[i][j + 1] !== -1) new_matrix[i][j + 1]++;
                    if (j - 1 >= 0 && new_matrix[i][j - 1] !== -1) new_matrix[i][j - 1]++;
                    if (i - 1 >= 0 && new_matrix[i - 1][j] !== -1) new_matrix[i - 1][j]++;
                    if (i - 1 >= 0 && j - 1 >= 0 && new_matrix[i - 1][j - 1] !== -1) new_matrix[i - 1][j - 1]++;
                    if (i - 1 >= 0 && j + 1 < new_matrix[i].length && new_matrix[i - 1][j + 1] !== -1) new_matrix[i - 1][j + 1]++;
                }
            }
        }

        console.table(new_matrix);
        console.table(new_mines);
        console.table(new_status);
        return {
            ...state,
            height: action.val.height,
            width: action.val.width,
            minesNumber: action.val.minesNo,
            matrix: new_matrix,
            minesLocation: new_mines,
            status: new_status,
            count: 0,
            flagOn: 0,
            winStatus: 0,
        }
    } else if (action.type === 'UPDATE_CLICK') {
        console.table(action.val)
        var curr_mat = state.matrix;
        var curr_stat = state.status;

        if (state.flagOn === 0) {
            if(curr_mat[action.val.row_no][action.val.col_no] == -1) {
                console.log("change win status to 0")
                return{
                    ...state,
                    status: allOne(curr_stat,state.height,state.width),
                    count: state.count + 1,
                    winStatus: -1,
                }
            }
            openPressed(curr_mat, curr_stat, action.val.row_no, action.val.col_no, state.height, state.width)
            let curr_winStatus = state.winStatus
            
            if(hasWon(curr_mat,curr_stat,state.height,state.width)){
                console.log("win_status changed to 1")
                curr_stat = allOne(curr_stat,state.height,state.width);
                curr_winStatus = 1;
            }
            console.table(curr_stat)
            return {
                ...state,
                status: curr_stat,
                count: state.count + 1,
                winStatus: curr_winStatus,
            }
        } else {
            if (curr_stat[action.val.row_no][action.val.col_no] === 0) {
                curr_stat[action.val.row_no][action.val.col_no] = 2;
            } else if (curr_stat[action.val.row_no][action.val.col_no] === 2) {
                curr_stat[action.val.row_no][action.val.col_no] = 0;
            }
            return {
                ...state,
                status: curr_stat,
                count: state.count + 1,
            }
        }
    } else if (action.type === 'INVERT_FLAG') {
        // console.table(action);
        let new_flag = (action.val.curr_flag === 0) ? 1 : 0;
        // console.table(new_flag)
        return {
            ...state,
            flagOn: new_flag,
        }
    }

    return state;
}

export default rootReducer;