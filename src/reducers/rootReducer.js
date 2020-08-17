const initState = {
    height: 10,
    width: 10,
    minesNumber: 10,
    matrix: startState(),
    status: new Array(10).fill(0).map(() => new Array(10).fill(0)),
    minesLocation: [],
}
function startState(){
    var new_matrix = [];
    var new_mines = [];
    // var arr = [];
    while (new_mines.length < 10) {
        var r = Math.floor(Math.random() * 100) + 1;
        if (new_mines.indexOf(r) === -1) new_mines.push(r);
    }
    new_mines.sort()
    var row;
    for (var i = 1; i <= 10; i++) {
        row = [];
        for (var j = 1; j <= 10; j++) {
            if (new_mines.indexOf((i - 1) * 10 + j) === -1)
                row.push(0);
            else
                row.push(-1);
        }
        new_matrix.push(row);
    }

    for (var i = 0; i < 10;i++) {
        for (var j = 0; j < 10; j++) {
            if (new_matrix[i][j] === -1) {
                if (i + 1 < 10 && new_matrix[i + 1][j] !== -1) new_matrix[i + 1][j]++;
                if (i + 1 < 10 && j - 1 >= 0 && new_matrix[i + 1][j - 1] !== -1) new_matrix[i + 1][j - 1]++;
                if (i + 1 < 10 && j + 1 <10 && new_matrix[i + 1][j + 1] !== -1) new_matrix[i + 1][j + 1]++;
                if (j + 1 < 10 && new_matrix[i][j + 1] !== -1) new_matrix[i][j + 1]++;
                if (j - 1 >= 0 && new_matrix[i][j - 1] !== -1) new_matrix[i][j - 1]++;
                if (i - 1 >= 0 && new_matrix[i - 1][j] !== -1) new_matrix[i - 1][j]++;
                if (i - 1 >= 0 && j - 1 >= 0 && new_matrix[i - 1][j - 1] !== -1) new_matrix[i - 1][j - 1]++;
                if (i - 1 >= 0 && j + 1 < 10 && new_matrix[i - 1][j + 1] !== -1) new_matrix[i - 1][j + 1]++;
            }
        }
    }

    return(new_matrix);
}

const rootReducer = (state = initState, action) => {
    // console.log(action);
    if (action.type === 'UPDATE_CONFIG') {
        // console.log(state)
        // let newPosts = state.posts.filter(post => action.id  !== post.id)
        var new_matrix = [];
        var new_mines = [];
        var new_status = [];
        // var arr = [];
        while (new_mines.length < action.val.minesNo) {
            var r = Math.floor(Math.random() * action.val.height * action.val.width) + 1;
            if (new_mines.indexOf(r) === -1) new_mines.push(r);
        }
        new_mines.sort()
        var row;
        for (var i = 1; i <= action.val.height; i++) {
            row = [];
            for (var j = 1; j <= action.val.width; j++) {
                if (new_mines.indexOf((i - 1) * action.val.height + j) === -1)
                    row.push(0);
                else
                    row.push(-1);
            }
            new_matrix.push(row);
        }
        for (var i = 1; i <= action.val.height; i++) {
            row = [];
            for (var j = 1; j <= action.val.width; j++) {
                    row.push(0);
            }
            new_status.push(row);
        }
        for (var i = 0; i < new_matrix.length; i++) {
            for (var j = 0; j < new_matrix[i].length; j++) {
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
            status:new_status,
        }
    }else if(action.type === 'UPDATE_CLICK'){
        console.table(action.val)
    }

    return state;
}

export default rootReducer;