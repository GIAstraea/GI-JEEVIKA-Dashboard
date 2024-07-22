document.addEventListener("DOMContentLoaded", () => {
    console.log("GI JEEVIKA Dashboard loaded successfully");
});

function showData(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
    } else {
        section.classList.add('hidden');
    }
}
