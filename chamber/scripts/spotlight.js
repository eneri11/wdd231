const membersUrl = 'data/members.json'; // Path to your week 2 JSON file

async function loadSpotlights() {
  try {
    const response = await fetch(membersUrl);
    const members = await response.json();
    
    // Filter for Gold and Silver members only
    const qualifiedMembers = members.filter(m => m.membershipLevel === 'Gold' || m.membershipLevel === 'Silver');
    
    // Randomly shuffle the array
    const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());
    
    // Take the first 2 or 3 members
    const selectedMembers = shuffled.slice(0, 3);
    
    const container = document.getElementById('spotlight-cards');
    container.innerHTML = ''; // Clear fallback
    
    selectedMembers.forEach(member => {
      const card = document.createElement('div');
      card.className = 'spotlight-card';
      card.innerHTML = `
        <h3>${member.companyName}</h3>
        <img src="images/${member.logo}" alt="${member.companyName} Logo">
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        <span class="badge">${member.membershipLevel} Member</span>
      `;
      container.appendChild(card);
    });
    
  } catch (error) {
    console.error("Error loading spotlights:", error);
  }
}

loadSpotlights();