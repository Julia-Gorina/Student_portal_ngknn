module.exports = {
    globDirectory: ".",
    globPatterns: ["**/*.{css,js,html}"],
    swDest: "service-worker.js",
    runtimeCaching: /https:\/\/jsonplaceholder\/typicode\.com/,
    handler: "networkFirst"
};