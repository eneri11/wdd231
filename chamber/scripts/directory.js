// =====================================
// Business Directory
// =====================================

const directory = document.querySelector("#directory");

const url = "data/members.json";

async function getMembers() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const members = await response.json();

        displayMembers(members);

    } catch (error) {
        console.error("Unable to load member data:", error);
    }
}

getMembers();

function displayMembers(members) {

    directory.innerHTML = "";

    members.forEach(member => {

        const card = document.createElement("section");
        card.classList.add("member-card");

        const membershipLevels = {
            1: "Member",
            2: "Silver",
            3: "Gold"
        };

        card.innerHTML = `
            <img
                src="images/${member.image}"
                alt="${member.name} Logo"
                loading="lazy"
                width="200"
                height="200">

            <h3>${member.name}</h3>

            <p><strong>Category:</strong> ${member.category}</p>

            <p><strong>Address:</strong> ${member.address}</p>

            <p><strong>Phone:</strong> ${member.phone}</p>

            <p>
                <strong>Website:</strong>
                <a href="${member.website}" target="_blank">
                    Visit Website
                </a>
            </p>

            <p><strong>Founded:</strong> ${member.founded}</p>

            <p><strong>Membership:</strong>
                ${membershipLevels[member.membership]}
            </p>

            <p>${member.description}</p>
        `;

        directory.appendChild(card);

    });

}

// =====================================
// Grid and List View Buttons
// =====================================

const gridButton = document.querySelector("#gridView");
const listButton = document.querySelector("#listView");

gridButton.addEventListener("click", () => {
    directory.classList.add("grid-view");
    directory.classList.remove("list-view");
});

listButton.addEventListener("click", () => {
    directory.classList.add("list-view");
    directory.classList.remove("grid-view");
});