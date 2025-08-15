// fetch
// fetch("url") -> data received in the response is not directly usable we need to convert it into JSON and json is a format for structuring data
var btn = document.querySelector("button").addEventListener("click", function() {
    fetch("https://api.github.com/users/async")
        .then(raw => raw.json()) // convert the response to JSON
        .then(data => {
            console.log(data);
        });
});