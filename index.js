// Write your solution here!

const drivers=[];
drivers.push('Milo', 'Otis', 'Garfield');

function destructivelyAppendDriver(name){
    drivers.push(name);
};

function destructivelyPrependDriver(name){
    drivers.unshift(name);
};

function destructivelyRemoveLastDriver(name){
    drivers.pop(name);
};

function destructivelyRemoveFirstDriver(name){
    drivers.shift(name);
};

function appendDriver(name){
    const arr=[...drivers,name];
    return arr;
    debugger
};

function prependDriver(name){
    const arr=[name,...drivers]
    return arr;
}

function removeLastDriver(){
    const arr = drivers.slice(0,drivers.length-1);
    return arr;
}

function removeFirstDriver(){
    const arr = drivers.slice(1);
    return arr;
}