//headers here

'use strict';

function import_image(){
    return "getting image...";
}

function position(){
    return "getting position";
}

function draw(){
    return "drawing";
}

function erase(){
    return "erasing";
}

function annotate(){
    return "adding annotation";
}

module.exports = {
    import: import_image,
    position: position,
    draw: draw,
    erase: erase,
    annotate: annotate
};