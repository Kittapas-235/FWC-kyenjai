$(document).ready(function () {
    let size = 200;
    let colorIndex = 0;
    const colors = ["red", "green", "blue"];

    function update() {
        $("#balloon").css({
            width: size + "px",
            height: size + "px",
            backgroundColor: colors[colorIndex]
        });
    }

    $("#balloon").click(function () {
        size += 10;
        colorIndex = (colorIndex + 1) % colors.length;

        if (size > 420) {
            size = 200;
            colorIndex = 0;
        }
        update();
    });

    $("#balloon").mouseleave(function () {
        if (size > 200) {
            size -= 5;
            colorIndex = (colorIndex - 1 + colors.length) % colors.length;
            update();
        }
    });
});