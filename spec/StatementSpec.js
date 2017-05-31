var Statement = require('../lib/statement.js');

describe('statement', function() {

    it('should declare 3 variables', function() {
        
        var s = new Statement();
        expect(s.getText()).toEqual("");
        expect(s.getAgree()).toEqual(0);
        expect(s.getDisagree()).toEqual(0);
    });

    it('should be able to set text', function() {
        
        var s = new Statement();
        s.setText("Hello");
        expect(s.getText()).toEqual("Hello");
    });

    it('should be able to inc agree', function() {
        
        var s = new Statement();
        s.incAgree();
        expect(s.getAgree()).toEqual(1);
    });

    it('should be able to inc disagree', function() {
        
        var s = new Statement();
        s.incDisagree();
        expect(s.getDisagree()).toEqual(1);
    });

    it('should be able to dec agree', function() {
        
        var s = new Statement();
        s.decAgree();
        expect(s.getAgree()).toEqual(-1);
    });

    it('should be able to dec disagree', function() {
        
        var s = new Statement();
        s.decDisagree();
        expect(s.getDisagree()).toEqual(-1);
    });

    it('should have a working toString method', function() {
        
        var s = new Statement();
        s.setText("Hello there.");
        expect(s.toString()).toEqual("Hello there.");
    });

    it('should have chainable methods', function() {
        
        var s = new Statement();
        var t = s.setText("Hello there.")
                .incAgree().decAgree()
                .incDisagree().decDisagree()
                .toString();
        expect(s.toString()).toEqual(t);
    });
});