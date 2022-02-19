
function getProfile(){

    return [
        'Sanjay',
        'Barman',
        ['Red','Green','Blue']
    ];
}

let [
    firstName,
    lastName,
    [
        color1,
        color2,
        color3
    ]
] = getProfile();

console.log(color1);
console.log(color2);
console.log(color3);