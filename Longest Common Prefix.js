var longestCommonPrefix = function (strs) {
    if (strs.length < 1) return ""
    let text = ""
    const shotTextChar = strs.sort((a, b) => (a.length - b.length))[0]
    // console.log("text" , shotTextChar)
    for (let i = 0; i <= shotTextChar.length; i++) {
        text = shotTextChar.slice(0, i)
        // console.log(text)
        for (let j = 1; j < strs.length; j++) {
            if (text !== strs[j].slice(0,i)){
                // console.log(text.slice(0,i))
                return text.slice(0,text.length-1)
            }
        }
        
    }
    // console.log(text)
    return text
};


console.log(longestCommonPrefix(["flower", "flow", "flight"])) 