const Maze = require('./Maze')

class MazeFactory {
    static Create(command) {
        return new Maze(command)
    }
    static FindError(str) {
        //检查格式错误：正则表达式检查
        const patt = /^-?\w*\s-?\w*\n-?\w*,-?\w*\s-?\w*,-?\w*(;-?\w*,-?\w*\s-?\w*,-?\w*)*$/
        if (!patt.test(str)) {
            return "Incorrect command format."
        }

        //将命令字符串处理为一个数组，方便后面的三个有效性检查
        let arrCheckStr = str.split("\n")
        //将行和列信息处理为数组
        let rowcol = arrCheckStr[0].split(" ")
        //将连通性信息处理为数组,依次按";"" "","去split
        let connect = arrCheckStr[1].split(";")
            for (let i = 0; i < connect.length; i++) {
                connect[i] = connect[i].split(" ")
                for (let j = 0; j < connect[i].length; j++) {
                    connect[i][j] = connect[i][j].split(",")
                }
            }

        //检查无效的数字:用split处理后的结果，!Number.isInteger(值)
        //如果检查后有效，数组里面的元素也全部转化为了数字。为接下来的数字是否超出预定范围做准备
        for (let i = 0; i < rowcol.length; i++) {
            rowcol[i] = Number(rowcol[i])
            if (!Number.isInteger(rowcol[i])) {
                return "Invalid number format."
            }
        };
        for (let i = 0; i < connect.length; i++) {
            for (let j = 0; j < connect[i].length; j++) {
                for (let k = 0; k < connect[i][j].length; k++) {
                    connect[i][j][k] = Number(connect[i][j][k])
                    if (!Number.isInteger(connect[i][j][k])) {
                        return "Invalid number format."
                    }
                }
            }
        }        

        //检查数字超出预定范围：遍历数组arrCheckStr,与下面的标准做比较。
        //1.行列至少2行2列吧，低于2行2列连一个弯道都无法设置，叫啥“迷宫”呢，干脆叫“过道”好了。
        //2.行列标>=0 && 行列标<=行列数-1
        for (let i = 0; i < rowcol.length; i++) {
            if (rowcol[i] < 2) {
                return "Number out of range."
            }
        }
        for (let i = 0; i < connect.length; i++) {
            for (let j = 0; j < connect[i].length; j++) {
                if (connect[i][j][0] < 0 || connect[i][j][0] >= rowcol[0] || connect[i][j][1] < 0 || connect[i][j][1] >= rowcol[1]) {
                    return "Number out of range."
                }
            }
        }

        //检查连通性错误：两个网格必须，（行坐标相等&&列坐标差值为1）||（列坐标相等&&行坐标差值为1）
        for (let i = 0; i < connect.length; i++) {
            if (!((connect[i][0][0] == connect[i][1][0] && Math.abs(connect[i][0][1] - connect[i][1][1]) == 1) || (Math.abs(connect[i][0][0] - connect[i][1][0]) == 1 && connect[i][0][1] == connect[i][1][1]))) {
                return "Maze format error."
            }
        }
    }
}

module.exports = MazeFactory
