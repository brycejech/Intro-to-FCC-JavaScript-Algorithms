'use strict';

function booWho(bool){
    return typeof bool === 'bolean';
}

function booWho2(bool){
    return Object.prototype.toString.call(bool) === '[object Boolean]';
}

function booWho3(bool){
    return _type(bool) === 'boolean';
}

function _type(thing){
    return Object.prototype.toString.call(thing).match(/\[object (.*?)\]/)[1].toLowerCase();
}

module.exports = {
    booWho,
    booWho2,
    booWho3
}