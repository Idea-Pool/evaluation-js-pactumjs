const { addSpecHandler } = require("pactum").handler;
const { api_key, movie_id, guest_session_id, url } = require("../constants.json");

addSpecHandler("GET movie", (ctx) => {
    const { spec } = ctx;

    spec.get(`/movie/${movie_id}`);
    spec.withQueryParams({
        api_key: api_key,
    });

    spec.expectStatus(200);
});

addSpecHandler("DELETE rating", (ctx) => {
    const { spec } = ctx;

    spec.delete(`${url}/movie/${movie_id}/rating`)
        .withQueryParams({
            guest_session_id: guest_session_id,
            api_key: api_key,
        })
        .expectStatus(200);
});
