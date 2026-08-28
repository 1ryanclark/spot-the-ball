const imageWrapper = document.getElementById("imageWrapper");
const output = document.getElementById("output");

imageWrapper.addEventListener("click", function(event) {
    const rect = imageWrapper.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    output.textContent = `X: ${x.toFixed(2)}%, Y: ${y.toFixed(2)}%`;
});
