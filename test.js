var array = {
    1: {
        name: "ayy",
        type: "test"
    },
    2:{
        name: "yes",
        type: "prod"
    },
    3:{
        name: "no",
        type: "prod"
    },
    4:{
        name: "lmao",
        type: "test"
    }
}


//console.log(array);

var array2 = {};

Object.keys(array).forEach(function(key) {
    var curArray = array[key];
    if(!array2[curArray.type]) array2[curArray.type] = {}
    array2[curArray.type][curArray.name] = curArray;
})

console.log(array2);
