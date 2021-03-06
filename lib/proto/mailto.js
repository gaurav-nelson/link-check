"use strict";

const Isemail = require('isemail');
const LinkCheckResult = require('../LinkCheckResult');

module.exports = {
    check: function (link, baseUrl, callback) {
        callback(null, new LinkCheckResult(link, Isemail.validate(link.substr(7)) ? 200 : 400, null));
    }
};
