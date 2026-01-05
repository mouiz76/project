function downloadImages() {
    const images = document.querySelectorAll('.gallery img');
    const errorMessage = document.getElementById('errorMessage');

    if (images.length === 0) {
        errorMessage.textContent =
            "Deze afbeelding is momenteel niet beschikbaar om te downloaden.";
        return;
    }

    errorMessage.textContent = "";

    images.forEach((img, index) => {
        const link = document.createElement('a');
        link.href = img.src;
        link.download = `afbeelding_${index + 1}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}
