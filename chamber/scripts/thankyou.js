document.addEventListener('DOMContentLoaded', () => {
    // 1. Get current URL parameters
    const formData = new URLSearchParams(window.location.search);
    const resultsElement = document.getElementById('results');

    // 2. Format ISO timestamp to readable date/time string
    function formatTimestamp(isoString) {
        if (!isoString) return 'N/A';
        try {
            const date = new Date(isoString);
            return date.toLocaleString('en-US', {
                dateStyle: 'medium',
                timeStyle: 'short'
            });
        } catch (e) {
            return isoString;
        }
    }

    // 3. Render submitted values into the results container
    if (resultsElement) {
        // Helper function to safely get and sanitize query params
        const getValue = (key) => formData.get(key) || 'N/A';

        resultsElement.innerHTML = `
            <p><strong>First Name:</strong> ${getValue('fname')}</p>
            <p><strong>Last Name:</strong> ${getValue('lname')}</p>
            <p><strong>Email Address:</strong> ${getValue('email')}</p>
            <p><strong>Mobile Phone:</strong> ${getValue('phone')}</p>
            <p><strong>Organization Name:</strong> ${getValue('organization')}</p>
            <p><strong>Submitted On:</strong> ${formatTimestamp(formData.get('timestamp'))}</p>
        `;
    }
});