
function getItems(){
    return [10,20];
}

// let items = getItems();
// let thirdItems = items[2] != undefined ? items[2] : 0;

// console.log(thirdItems);




let [,,thirdItems = 0] = getItems();
console.log(thirdItems);