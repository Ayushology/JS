let searchbtn = document.querySelector(".search");
let usernameinp = document.querySelector(".usernameinp");
let card = document.querySelector(".card");

function Getuserprofile(username) {
    return fetch(`https://api.github.com/users/${username}`).then((raw) => {
        if (!raw.ok) throw new Error("User not found");
        return raw.json();
    });
}

function Decoratedata(details) {
    const blogLink = details.blog
        ? `<a href="${details.blog}" target="_blank" class="text-blue-400 hover:underline break-all">${details.blog}</a>`
        : 'Not provided';

    return `
        <div class="flex flex-col items-center space-y-4 w-full">
            <!-- Avatar -->
            <img src="${details.avatar_url}" alt="User Avatar"
                class="w-32 h-32 rounded-full border-4 border-gray-700 object-cover shadow-lg">

            <!-- Name & Username -->
            <div>
                <h2 class="text-2xl font-bold">${details.name || details.login}</h2>
                <p class="text-gray-400">@${details.login}</p>
            </div>

            <!-- Bio -->
            <p class="max-w-md text-gray-300 leading-relaxed text-sm px-2">
                ${details.bio || 'No bio provided.'}
            </p>

            <!-- Location / Company / Blog -->
            <div class="text-sm text-gray-400 space-y-1">
                <p>📍 Location: ${details.location || "Not provided"}</p>
                <p>🏢 Company: ${details.company || "Not specified"}</p>
                <p>🔗 Blog: ${blogLink}</p>
            </div>

            <!-- Stats -->
            <div class="flex flex-col sm:flex-row gap-6 sm:gap-12 mt-4">
                <div class="text-center">
                    <p class="text-lg font-semibold">${details.public_repos}</p>
                    <p class="text-sm text-gray-400">Repos</p>
                </div>
                <div class="text-center">
                    <p class="text-lg font-semibold">${details.followers}</p>
                    <p class="text-sm text-gray-400">Followers</p>
                </div>
                <div class="text-center">
                    <p class="text-lg font-semibold">${details.following}</p>
                    <p class="text-sm text-gray-400">Following</p>
                </div>
            </div>

            <!-- Profile Link -->
            <a href="${details.html_url}" target="_blank"
                class="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-sm font-medium transition mt-4 shadow-md hover:shadow-lg">
                View Profile
            </a>
        </div>
    `;
}

searchbtn.addEventListener("click", function () {
    let username = usernameinp.value.trim();
    if (!username) {
        alert("Please enter a username");
        return;
    }

    Getuserprofile(username)
        .then((data) => {
            card.innerHTML = Decoratedata(data);
        })
        .catch((error) => {
            card.innerHTML = `<p class="text-red-500">${error.message}</p>`;
        });
});

// Trigger search on Enter key
usernameinp.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchbtn.click();
    }
});
