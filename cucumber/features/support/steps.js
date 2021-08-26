const pactum = require("pactum");
const { Given, When, Then, Before } = require("@cucumber/cucumber");
const { api_key, guest_session_id, url } = require("../../../constants");
const expectedJsonSchema = require("../../../expected.json");

let spec = pactum.spec();

Before(() => {
    spec = pactum.spec();
});

Given(/^the "(.+)" is added to the GET request$/, function (movie_id) {
    spec.get(`${url}/movie/${movie_id}?api_key=${api_key}`);
});

Given(/^the "(.+)" is added to the POST request$/, function (movie_id) {
    spec.post(`${url}/movie/${movie_id}/rating`).withQueryParams({
        guest_session_id: guest_session_id,
        api_key: api_key,
    });
});

Given(/^the "(.+)" rating is added to the POST request's body$/, function (rate) {
    spec.withJson({
        value: rate,
    });
});

Given(/^the "(.+)" is added to the DELETE request$/, function (movie_id) {
    spec.delete(`${url}/movie/${movie_id}/rating`).withQueryParams({
        guest_session_id: guest_session_id,
        api_key: api_key,
    });
});

When(/^the response is received$/, async function () {
    await spec.toss();
});

Then(/^response should have a status "(.+)"$/, function (code) {
    spec.response().should.have.status(+code);
});

Then(/^response should contain the movie title: "(.+)"$/, function (title) {
    spec.response().to.have.bodyContains(title);
});

Then(/^the response should have proper schema$/, function () {
    spec.response().to.have.jsonSchema(expectedJsonSchema);
});

Then(/^the response should contain the "(.+)" status message$/, function (message) {
    spec.response().to.have.bodyContains(message);
});
