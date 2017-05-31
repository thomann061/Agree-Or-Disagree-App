const Statement = function() {

    this._text = "";
    this._agree = 0;
    this._disagree = 0;
    return this;
}

Statement.prototype.setText = function(text) {

    this._text = text;
    return this;
}

Statement.prototype.getText = function() {

    return this._text;
}

Statement.prototype.getAgree = function() {

    return this._agree;
}

Statement.prototype.getDisagree = function() {

    return this._disagree;
}

Statement.prototype.incAgree = function() {

    this._agree++;
    return this;
}

Statement.prototype.decAgree = function() {

    this._agree--;
    return this;
}

Statement.prototype.incDisagree = function() {

    this._disagree++;
    return this;
}

Statement.prototype.decDisagree = function() {

    this._disagree--;
    return this;
}

Statement.prototype.toString = function() {

    return this._text;
}

module.exports = Statement;

