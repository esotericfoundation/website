document.addEventListener("DOMContentLoaded", function () {
    const text = "We are a small team of developers dedicated to creating high-quality software.";
    const description = document.getElementById("description");
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            description.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 60); // Adjust typing speed here (milliseconds)
        } else {
            description.classList.remove("typewriter");
            description.classList.add("done-typewriter");
        }
    }

    description.innerHTML = ""; // Clear initial text
    description.classList.add("typewriter");
    typeWriter();
});
