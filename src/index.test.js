var expect = require('chai').expect;
var editor = require("./index");

describe('image-editor', function(){
    //add unit tests here
    
    //simple test cases 
    it('should check if import returns string', function(){
        expect(editor.import()).to.be.a("string");
    });
    
    it('should check if draw returns string', function(){
        expect(editor.draw()).to.be.a("string");
    });
    
    it('should check if position returns string', function(){
        expect(editor.position()).to.be.a("string");
    });
    
    it('should check if erase returns string', function(){
        expect(editor.erase()).to.be.a("string");
    });
    
    it('should check if annotate returns string', function(){
        expect(editor.annotate()).to.be.a("string");
    });
});

