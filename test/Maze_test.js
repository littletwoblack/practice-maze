const Maze = require('../maze/Maze.js');
const assert = require('assert')

describe('creatMaze', function() {

  it('should return:7行7列的迷宫字符串', function() {

    const input="3 3\n0,1 0,2;0,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1";
    const expect= '[W][W][W][W][W][W][W]\n'+
                  '[W][R][W][R][R][R][W]\n'+
                  '[W][R][W][R][W][R][W]\n'+
                  '[W][R][R][R][R][R][W]\n'+
                  '[W][W][W][R][W][R][W]\n'+
                  '[W][R][R][R][W][R][W]\n'+
                  '[W][W][W][W][W][W][W]\n'
    const maze = new Maze(input)
    const mazeText = maze.render();
    assert.equal(mazeText, expect)
  })

  it('should return:11行9列的迷宫字符串', function() {

    const input="5 4\n0,1 0,2;0,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1";
    const expect= '[W][W][W][W][W][W][W][W][W]\n'+
                  '[W][R][W][R][R][R][W][R][W]\n'+
                  '[W][R][W][R][W][R][W][W][W]\n'+
                  '[W][R][R][R][R][R][W][R][W]\n'+
                  '[W][W][W][R][W][R][W][W][W]\n'+
                  '[W][R][R][R][W][R][W][R][W]\n'+
                  '[W][W][W][W][W][W][W][W][W]\n'+
                  '[W][R][W][R][W][R][W][R][W]\n'+
                  '[W][W][W][W][W][W][W][W][W]\n'+
                  '[W][R][W][R][W][R][W][R][W]\n'+
                  '[W][W][W][W][W][W][W][W][W]\n'
    const maze = new Maze(input)
    const mazeText = maze.render();
    assert.equal(mazeText, expect)
  })  

});
