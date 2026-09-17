$(document).ready(function () {
    function saveCookie() {
        const list = [];
        $("#ft_list div").each(function () {
            list.push($(this).text());
        });
        document.cookie = "todos=" + encodeURIComponent(JSON.stringify(list)) + ";path=/;max-age=604800";
    }

    function createTodo(text) {
        const $item = $("<div></div>").text(text);

        $item.click(function () {
            if (confirm("Do you really want to remove this TO DO?")) {
                $(this).remove();
                saveCookie();
            }
        });

        // ใช้ .prepend() ของ jQuery เพื่อใส่ไว้บนสุดเสมอ
        $("#ft_list").prepend($item);
    }

    $("#new").click(function () {
        const text = prompt("New TO DO:");
        if (text && text.trim() !== "") {
            createTodo(text.trim());
            saveCookie();
        }
    });

    // โหลดข้อมูลจาก Cookie
    const cookie = document.cookie.split("; ").find(row => row.startsWith("todos="));
    if (cookie) {
        try {
            const list = JSON.parse(decodeURIComponent(cookie.split("=")[1]));
            for (let i = list.length - 1; i >= 0; i--) {
                createTodo(list[i]);
            }
        } catch (e) {
            console.error(e);
        }
    }
});
