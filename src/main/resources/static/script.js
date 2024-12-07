document.getElementById("runButton").addEventListener("click", function () {
    const code = document.getElementById("editor").value;
    // delay 입력되지 않았을 경우, 0(기본값).
    const delay = parseInt(document.getElementById("delayInput").value) || 0;

    axios.post('/execute', { code: code, delay: delay })
        .then(response => {
            // Element 안에 있는 HTML 코드를 태그 해석하여 Display.
            document.getElementById("output").innerHTML = response.data;
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Error Occurred");
        });
});