// function requiredArg(){
//     throw new console.error('The argument is required !');
// }

// function add(x = requiredArg(), y = requiredArg()){
//     console.log(x+y);
// }

// // add(10);
// add(10,20);


function add(x, y, z){
    console.log(arguments.length);

    return x+y+z;
}

add(10);
add(10,20);
add(10,20,30);