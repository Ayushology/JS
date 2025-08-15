let searchbtn = document.querySelector(".search");
let usernameinp = document.querySelector(".usernameinp");
let card = document.querySelector(".card");

function Getuserprofile(username) {
    return fetch(`https://api.github.com/users/${username}`).then((raw) => {
        if (!raw.ok) {
            throw new Error("Not found");
        }
        return raw.json();
    });
}

function Getuserrepo(username) {
    return fetch(`https://api.github.com/users/${username}/repos?sort=updated`).then((raw) => {
        if (!raw.ok) {
            throw new Error("Repos not found");
        }
        return raw.json();
    });
}

function Decoratedata(details) {
    // Corrected: Define the blogLink variable here
    const blogLink = details.blog ? `<a href="${details.blog}" target="_blank" class="text-blue-400 hover:underline">${details.blog}</a>` : 'Not provided';
    
    return `
    <img 
        src="${details.avatar_url}" 
        alt="User Avatar" 
        class="w-32 h-32 rounded-full border-4 border-gray-700 object-cover"
    />
    <!-- Details -->
    <div class="flex-1">
        <h2 class="text-xl font-bold">${details.name || details.login}</h2>
        <p class="text-gray-400">@${details.login}</p>
        <p class="mt-3 text-gray-300 leading-relaxed">
            ${details.bio || 'No bio provided.'}
        </p>
        <!-- Additional Info -->
        <div class="mt-4 space-y-1 text-sm text-gray-400">
            <p>📍 Location: ${details.location || "Not provided"}</p>
            <p>🏢 Company: ${details.company || "Not specified"}</p>
            <p>🔗 Blog: ${blogLink}</p>
        </div>
        <!-- Stats -->
        <div class="flex gap-4 mt-6">
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
        <a 
            href="${details.html_url}" 
            target="_blank" 
            class="inline-block  mt-6 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-sm font-medium transition">
                View Profile
        </a>
    </div>`;
}

searchbtn.addEventListener("click", function() {
    let username = usernameinp.value.trim();
    if (username.length > 0) {
        Getuserprofile(username).then(function(data) {
            card.innerHTML = Decoratedata(data);
        }).catch(function(error) {
            alert(error.message); // Using alert as per your original code
        });
    } else {
        alert("INVALID"); // Using alert as per your original code
    }
});
