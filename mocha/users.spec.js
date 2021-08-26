/* eslint-disable no-undef */
const pactum = require("pactum");
const { api_key, guest_session_id, url, movie_id } = require("../constants.json");
const path = require("path");
const rating = path.resolve(__dirname, "../data/rating.json");

describe("The user should be able to handle the rating of the movie", () => {
    let e2e = pactum.e2e("Check rating");

    it("should get the movie by ID", async () => {
        await e2e.step("GET movie by ID")
            .spec("GET movie")
            .clean("DELETE rating");
    });

    it("should add the rating", async () => {
        await e2e.step("POST rating on movie")
            .spec()
            .post(`${url}/movie/${movie_id}/rating`).withQueryParams({
                guest_session_id: guest_session_id,
                api_key: api_key,
            })
            .withJson(rating)
            .expectStatus(201)
            .expectBodyContains("Success.");
    });

    it("should delete the rating", async () => {
        await e2e.step("DELETE rating")
            .spec()
            .delete(`${url}/movie/${movie_id}/rating`).withQueryParams({
                guest_session_id: guest_session_id,
                api_key: api_key,
            })
            .expectStatus(200);
    });

    it("should clean up", async () => {
        await e2e.cleanup();
    });
});
