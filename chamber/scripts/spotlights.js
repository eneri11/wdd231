// =====================================
// Chamber Member Spotlights
// =====================================

const spotlightContainer = document.querySelector("#spotlights");
const memberURL = "data/members.json";

async function getSpotlights() {
    try {
        const response = await fetch(memberURL);

        if (!response.ok) {
            throw new Error("Unable to load member data.");
        }

        const members = await response.json();

        displaySpotlights(members);
        
    } catch (error) {
        console.error(error);
    }
}

getSpotlights();

function displaySpotlights(members) {

    console.log(members);

    const qualifiedMembers = members.filter(member =>
    Number(member.membership) >= 2
    );

    console.log(qualifiedMembers);

    qualifiedMembers.sort(() => Math.random() - 0.5);

    const selectedMembers = qualifiedMembers.slice(0, 3);

    spotlightContainer.innerHTML = "";

    selectedMembers.forEach(member => {
         console.log(member);

        const card = document.createElement("section");
        card.classList.add("spotlight-card");

        const membership =
            member.membership === 3 ? "Gold Member" : "Silver Member";

        card.innerHTML = `
            <img
                src="images/${member.image}"
                alt="${member.name} Logo"
                loading="lazy"
                width="150"
                height="150">

            <h3>${member.name}</h3>

            <p>${member.address}</p>

            <p>${member.phone}</p>

            <p>${membership}</p>

            <a href="${member.website}" target="_blank" rel="noopener">
                Visit Website
            </a>
        `;

        spotlightContainer.appendChild(card);
        console.log(spotlightContainer.innerHTML);
    });

}