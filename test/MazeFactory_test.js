const assert = require('assert')

const MazeFactory = require('../maze/MazeFactory')

describe('MazeFactory', function () {
   // 输入正确的时候，期望没有返回
  it('should return: undefined', function(){
    const input='3 3\n0,1 0,2;0,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1'
    const expect= undefined

    const error = MazeFactory.FindError(input)
    assert.equal(error, expect)
  })

  // 无效的数字：输入的字符串无法正确的转换为数字。
  it('should return: Invalid number format.', function(){
    //a无法转换为数字
    const input='3 3\n0,1 a,2;0,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 8,1;1,2 2,2;2,0 2,1'
    const expect="Invalid number format."

    const error = MazeFactory.FindError(input)
    assert.equal(error, expect)
  })
  

  // 格式错误：输入命令的格式不符合约定。
  it('should return: Incorrect command format.', function() {
    //没写空格
    const input="3 3\n0,10,2;0,01,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1"
    const expect="Incorrect command format."

    const error = MazeFactory.FindError(input);
    assert.equal(error, expect);
  })


  //测试 数字超出预定范围
  it('should return: Number out of range.', function(){
    //负数
    const input="3 3\n0,-1 0,2;0,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1"
    const expect="Number out of range."

    const error = MazeFactory.FindError(input)
    assert.equal(error, expect)
  })

  it('should return: Number out of range.', function(){
    //4,1 4,2超出3 3 行列的限制
    const input="3 3\n4,1 4,2;0,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1"
    const expect="Number out of range."

    const error = MazeFactory.FindError(input)
    assert.equal(error, expect)
  })

  //连通性错误：如果两个网格无法连通，则属于这种错误。
  it('should return: Maze format error.', function(){
    const input="3 3\n1,1 0,2;0,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1"
    const expect="Maze format error."

    const error = MazeFactory.FindError(input)
    assert.equal(error, expect)
  })
  
})
