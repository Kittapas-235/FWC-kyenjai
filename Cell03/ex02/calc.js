const btn = document.querySelector('input[type="submit"]');

btn.addEventListener("click", () => {
    const val1 = document.getElementById("num1").value.trim();
    const val2 = document.getElementById("num2").value.trim();
    const symbol = document.getElementById("symbol").value;

    if (val1 === "" || val2 === "") {
        alert("Error :(");
        return;
    }

    const n1 = Number(val1);
    const n2 = Number(val2);

    if (isNaN(n1) || isNaN(n2) || n1 < 0 || n2 < 0) {
        alert("Error :(");
        return;
    }

    if ((symbol === "divide" || symbol === "mod") && n2 === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result = 0;
    if (symbol === "plus") result = n1 + n2;
    else if (symbol === "minus") result = n1 - n2;
    else if (symbol === "time") result = n1 * n2;
    else if (symbol === "divide") result = n1 / n2;
    else if (symbol === "mod") result = n1 % n2;

    alert(result);
    console.log(result);
});

setInterval(() => {
    alert("Use me, please...");
}, 30000);
