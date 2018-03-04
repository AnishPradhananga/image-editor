//headers here

'use strict';

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
  position: position,
  draw: draw,
  erase: erase,
  annotate: annotate
};