const MazeFactory = require('./maze/MazeFactory.js')

input = "3 3\n0,1 0,2;0,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1"

//检查输入的有效性
let err = MazeFactory.FindError(input)
if (err !== undefined) {
    print(err)
    return
}

//构造迷宫
let maze = MazeFactory.Create(input)
let mazeText = maze.render()
print(mazeText)

function print(str){
    console.log(str)
}
