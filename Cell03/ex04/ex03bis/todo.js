$(document).ready(function () {
    // 1. สร้างกล่องข้อความ TO DO
    function createTodo(text) {
        const $item = $("<div></div>").text(text);

        $item.click(function () {
            if (confirm("Do you really want to delete this TO DO?")) {
                $(this).remove();
                saveList();
            }
        });

        $("#ft_list").prepend($item);
    }

    // 2. เซฟข้อความทั้งหมดลง Cookie
    function saveList() {
        const list = [];
        $("#ft_list div").each(function () {
            list.push($(this).text());
        });

        document.cookie = "todos=" + encodeURIComponent(JSON.stringify(list)) + ";path=/;max-age=604800";
    }

    // 3. ดึงข้อมูลจาก Cookie ตอนเปิดหน้าเว็บ
    function loadList() {
        const allCookies = document.cookie.split("; ");
        const todoCookie = allCookies.find(row => row.startsWith("todos="));

        if (!todoCookie) return;

        try {
            const jsonString = decodeURIComponent(todoCookie.replace("todos=", ""));
            const list = JSON.parse(jsonString);

            for (let i = list.length - 1; i >= 0; i--) {
                createTodo(list[i]);
            }
        } catch (e) {
            console.error(e);
        }
    }

    // 4. กดปุ่ม New
    $("#new_btn").click(function () {
        const text = prompt("Enter a new TO DO:");
        if (text && text.trim() !== "") {
            createTodo(text.trim());
            saveList();
        }
    });

    // โหลดข้อมูลเก่าทันทีที่ DOM พร้อมทำงาน
    loadList();
});
