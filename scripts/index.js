document.addEventListener("DOMContentLoaded", function () {
    const text = "We are a small team of developers dedicated to creating high-quality software.";
    const textElement = document.getElementById("text");
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50); // Adjust typing speed here (milliseconds)
        }
    }

    textElement.innerHTML = ""; // Clear initial text
    typeWriter();
});
