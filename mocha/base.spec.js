/* eslint-disable no-undef */
const { request } = require("pactum");
const { url } = require("../constants");

require("./spec.handlers");

before(() => {
    request.setBaseUrl(url);
});
