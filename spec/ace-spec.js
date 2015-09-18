/* jslint node: true */
/* global describe, it, expect */

"use strict";

var jsTest = require("jenkins-js-test");

var JENKINS_PAGE = '<html><body><div id="the-editor"></div></body></html>';

describe("ACE Editor tests", function () {

    it("- test", function (done) {
        jsTest.onPage(function() {
            var $ = require('jquery-detached').getJQuery();
            var ace = require("../js/index.js");
            var editor = ace.edit('the-editor', 'groovy', 'eclipse');
            
            expect(editor).toBeDefined();
            expect($('.ace_editor').length).toBe(1);
            expect($('style#ace_editor\\.css').length).toBe(1);
            expect($('style#ace-tm').length).toBe(1);
            
            done();
        }, JENKINS_PAGE);
    });
});
