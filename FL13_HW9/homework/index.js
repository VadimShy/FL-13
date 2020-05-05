function convert(...args) {
    let arr = [];
    let wiseWesaValue;
        
    for (let i = 0; i < args.length; i++) {
        
        if(typeof args[i] === 'string') {
            wiseWesaValue = +args[i];
        }else{
            wiseWesaValue = String(args[i]);
        }
        arr.push(wiseWesaValue);
    }
    return arr;
}

function executeforEach(arr, callback) {
    let i;
        
    for (i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

function mapArray(arr, callback) {
    let arr2 = [];
    
    executeforEach(arr, el => arr2.push(callback(el)));
  
    return arr2;
}

function filterArray(arr, functionInArgument) {
    let filteredAray = [];
    
    executeforEach(arr, el => { 
      if (functionInArgument(el)) {
        filteredAray.push(el);
      }
    });
        
    return filteredAray;
}

function flipOver(str) {
    let newStr = '';

    for ( let i = str.length-1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

function makeListFromRange(arr) {
    let newArr = [];

    for (let i = arr[0]; i <= arr[1]; i++) {
        newArr.push(i);
    }

    return newArr;
}

function substitute(arr) {
    let newArr = [];
    let newArrValue;
    let ten = 10;
    let twenty = 20;
        
    for (let i = 0; i < arr.length; i++) {
        
        if(arr[i] > ten && arr[i] < twenty) {
            newArrValue = '*';
        }else{
            newArrValue = arr[i];
        }
        newArr.push(newArrValue);
    }
    return newArr;
}
