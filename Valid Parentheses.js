var isValid = function (s) {
    if (s.length === 0) return false
    let arr = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            arr.push(s[i])
        }
        else {
            let selectPop = arr.pop()
            // console.log(s[i])
            // console.log(selectPop)
            if ((selectPop !== '(' && s[i] === ')') || (selectPop !== '{' && s[i] === '}') || (selectPop !== '[' && s[i] === ']')) {
                return false
            } 
        }
        console.log(arr)
        console.log(arr.length)
    }
    return arr.length == 0;
};

console.log(isValid("(]")) 