$(document).ready(function () {
    $("#cal").click(function () {
        const val1 = $("#num1").val().trim();
        const val2 = $("#num2").val().trim();

        // ตรวจสอบค่าว่าง หรือมีตัวอักษรที่ไม่ใช่ตัวเลข (ป้องกันค่าติดลบ ทศนิยม และช่องว่าง)
        if (val1 === "" || val2 === "" || !/^\d+$/.test(val1) || !/^\d+$/.test(val2)) {
            alert("Error :(");
            return;
        }

        const n1 = parseInt(val1, 10);
        const n2 = parseInt(val2, 10);
        const symbol = $("#symbol").val();

        // ตรวจสอบการหารหรือ mod ด้วยศูนย์
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

    // แจ้งเตือนทุกๆ 30 วินาที
    setInterval(function () {
        alert("Use me, please...");
    }, 30000);
});