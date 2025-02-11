$(document).ready(function () {
    $(".love-container").css("opacity", "0");

    setTimeout(function () {
        $(".love-container").css("opacity", "1");
    }, 500);
});

document.addEventListener("DOMContentLoaded", function () {
    const letters = document.querySelectorAll(".magic-text span");

    letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.05}s`; // Adjust timing here (0.05s per letter)
    });
});
