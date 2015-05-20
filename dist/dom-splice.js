(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.domSplice = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = slice;

function slice(el, start, del) {
  for (var _len = arguments.length, items = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    items[_key - 3] = arguments[_key];
  }

  var children = el.childNodes;

  // if negative we start from the end
  if (start < 0) start = children.length + start;
  start = Math.max(0, start);

  var sel = children[start];
  var ret = [];

  if (sel) {
    // if deletion count is not specified
    // and neither is insertion, all the
    // elements following `start` are removed
    if (!del && !items.length) {
      del = children.length - start;
    }

    del = Math.max(0, del);
    if (del) {
      for (var i = 0; i < del; i++) {
        var child = children[start + i];
        if (child) {
          el.removeChild(child);
          ret.push(child);
        }
      }
    }

    if (items.length) {
      sel = children[start];
      if (sel) {
        items.forEach(function (item) {
          el.insertBefore(item, sel);
        });
      } else {
        append();
      }
    }
  } else {
    append();
  }

  function append() {
    items.forEach(el.appendChild, el);
  }

  return ret;
}

module.exports = exports["default"];

},{}]},{},[1])(1)
});