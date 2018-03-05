var expect = require('chai').expect;
var editor = require("./index");

describe('image-editor', function(){
    //add unit tests here
    
    //simple test case 
    it('should check if draw exists', function(){
        expect(editor.draw).to.exist;
    });
});

