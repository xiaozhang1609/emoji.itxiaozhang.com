// Function to copy text to clipboard
function copyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}

// Add click event listener to each emoji item
document.querySelectorAll('.emoji-item').forEach(item => {
    item.addEventListener('click', () => {
        const emoji = item.getAttribute('data-emoji');
        copyToClipboard(emoji);

        // Show the notification
        item.classList.add('show-notification');

        // Hide the notification after 2 seconds
        setTimeout(() => {
            item.classList.remove('show-notification');
        }, 500);
    });
});
