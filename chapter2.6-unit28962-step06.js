// 2.6 Studio: Mario (https://stepik.org/lesson/50576/step/6?unit=28962)

/*
 * Print to the console a pyramid of '#' characters of the specified height.
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */

// My function:
function printPyramid(height) {
    if (height < 1) {
        return;
    }
    let strings = [];
    let tmpArr = [];
    for (let row = 0; row < height; row++) {
        tmpArr = [];
        for (let indx = 0; indx <= height; indx++) {
            let char = "";
            char = indx + row <= height - 2 ? " " : "#";
            tmpArr.push(char);
        }
        strings.push(tmpArr.join(''));
    }
    strings.forEach(x => console.log(x.valueOf()));
}

// Testing:
printPyramidV3(5);

// =====
// Alternative #1:
function printPyramidV2(height) {
    for (let i = 1; i <= height; i++) {
        console.log('#'.repeat(i + 1).padStart(height + 1));
    }
}

// Alternative #2:
function printPyramidV3(height) {
    let arr = new Array(height + 1).fill(' ')
    for (let i = 2; i <= height + 1; i++) {
        console.log(arr.fill('#', -i).join(''))
    }
}
