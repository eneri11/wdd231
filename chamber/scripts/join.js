document.addEventListener('DOMContentLoaded', () => {
    // 1. Automatically populate the hidden timestamp field on page load
    const timestampField = document.getElementById('timestamp');
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

    // 2. Dynamic Modal Functionality for all Membership Levels (NP, Bronze, Silver, Gold)
    const levels = ['np', 'bronze', 'silver', 'gold'];

    levels.forEach(level => {
        const openBtn = document.getElementById(`open-${level}`);
        const modal = document.getElementById(`modal-${level}`);

        if (openBtn && modal) {
            openBtn.addEventListener('click', () => {
                modal.showModal();
            });
        }
    });

    // 3. Event Listener to close open dialog modals
    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const dialog = e.target.closest('dialog');
            if (dialog) {
                dialog.close();
            }
        });
    });
});