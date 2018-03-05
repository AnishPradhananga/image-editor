//headers here

'use strict';

function import_image(){
    return "getting image...";
}

function position(){
    console.log("getting position");
}

function draw(){
    console.log("drawing");
}

function erase(){
    console.log("erasing");
}

function annotate(){
    console.log("adding annotation");
}

module.exports = {
    import: import_image,
    position: position,
    draw: draw,
    erase: erase,
    annotate: annotate
};