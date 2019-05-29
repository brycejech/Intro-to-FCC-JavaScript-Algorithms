'use strict';

// Most efficient
function truthCheck(arr, pre){
    for(let i = 0, len = arr.length; i < len; i++){
        if(!arr[i][pre]) return false;
    }
    return true;
}

// Equally efficient, more readable
function truthCheck2(arr, pre){
    for(const obj of arr){
        if(!obj[pre]) return false;
    }
    return true;
}

function truthCheck3(arr, pre){
    return arr.filter(o => !o[pre]).length > 0 ? false : true;
}

// Can also be done with reduce, but... just don't ;)
function truthCheck4(arr, pre){
    return arr.reduce((acc, o) => {
        if(!acc) return false;
        return o[pre] ? true : false;
    }, true);
}

module.exports = {
    truthCheck,
    truthCheck2,
    truthCheck3,
    truthCheck4
}