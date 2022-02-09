function CreateObject(arr) {
    var object = {};
    for (var i = 0; i < arr.length; i += 2){
        object[arr[i]] = arr[i+1];
    }
    return object;
}


module.exports = CreateObject;
