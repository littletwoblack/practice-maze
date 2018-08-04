class Maze {
    constructor(command) {
        this.command = command
    }

    render() {
        //提取inputcommand的第一行，生成迷宫的行列数组arrRowCol
        let arrRowCol = this.command.split("\n")[0].split(" ")
        for (let i = 0; i < arrRowCol.length; i++) {
            arrRowCol[i] = Number(arrRowCol[i])
        };

        //生成对应行列的道路网格数组,并转换为渲染网格的坐标。算法是道路网格坐标先+1再*2.
        let arrRoadCoord = []
        for (let i = 0; i < arrRowCol[0]; i++) {
            for (let j = 0; j < arrRowCol[1]; j++) {
                arrRoadCoord.push([(i + 1) * 2, (j + 1) * 2])
            }
        }

        //for循环生成渲染网格数组对象arrRender。其行数和列数为道路网格的二倍再加一,默认值为"W"。
        let arrRender = []
        for (let i = 0; i < arrRowCol[0] * 2 + 1; i++) {
            arrRender.push([])
            for (let j = 0; j < arrRowCol[1] * 2 + 1; j++) {
                arrRender[i].push("W")
            }
        }

        //将command的连通性定义字符截出，处理为坐标，再将坐标push进道路坐标数组arrRoadCoord中。
        let arrConnectStr = this.command.split("\n")[1].split(";")
        //循环，将由分号分开的连通定义字符串处理为一个坐标
        for (let i = 0; i < arrConnectStr.length; i++) {
            //处理两个连通坐标中的第一个为数字数组
            let arr1 = arrConnectStr[i].split(" ")[0].split(",")
            for (let i = 0; i < arr1.length; i++) {
                arr1[i] = Number(arr1[i])
            }
            //处理两个连通坐标中的第二个为数字数组
            let arr2 = arrConnectStr[i].split(" ")[1].split(",")
            for (let i = 0; i < arr2.length; i++) {
                arr2[i] = Number(arr2[i])
            }
            //将两个连通坐标合并为一个，因已经明确坐标数组仅为包含二个元素的数组，所以直接求算术平均并push进道路坐标数组arrRoadCoord中。
            arrRoadCoord.push([((arr1[0] + 1) * 2 + (arr2[0] + 1) * 2) / 2, ((arr1[1] + 1) * 2 + (arr2[1] + 1) * 2) / 2])
        }

        //在arrRender中找出arrRoadCoord坐标下的值，并将值改为"R"
        for (let i = 0; i < arrRoadCoord.length; i++) {
            arrRender[arrRoadCoord[i][0] - 1][arrRoadCoord[i][1] - 1] = "R"
        }

        //渲染出目标字符串并return
        let mazeText = ""
        for (let i = 0; i < arrRender.length; i++) {
            for (let j = 0; j < arrRender[i].length; j++) {
                mazeText += "[" + arrRender[i][j] + "]"
            }
            mazeText += "\n"
        }
        return mazeText
    }
}

module.exports = Maze