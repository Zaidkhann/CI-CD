import { test } from "node:test";
import assert from "node:assert";

process.env.NODE_ENV = "test";
const { default: app } = await import("./server.js");

test("API returns correct message", async () => {
    const server = app.listen(0);

    try {
        const response = await fetch(
            `http://localhost:${server.address().port}/api/message`
        );

        const data = await response.json();

        assert.equal(response.status, 200);
        assert.equal(data.message, "Hello from Express server!");
    } finally {
        server.close();
    }
});
