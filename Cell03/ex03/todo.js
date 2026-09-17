const ftList = document.getElementById("ft_list");
const newBtn = document.getElementById("new_btn");

//สร้างกล่องข้อความ TO DO
function createTodo(text) {
    const item = document.createElement("div");
    item.textContent = text;

    item.addEventListener("click", () => {
        if (confirm("Do you really want to delete this TO DO?")) {
            item.remove();
            saveList();
        }
    });

    ftList.prepend(item);
}

//เซฟข้อความทั้งหมดลง Cookie
function saveList() {
    const list = [];
    const items = ftList.querySelectorAll("div");

    items.forEach(div => {
        list.push(div.textContent);
    });

    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(list)) + ";path=/;max-age=604800";
}

//ดึงข้อมูลจาก Cookie ตอนเปิดหน้าเว็บ
function loadList() {
    const allCookies = document.cookie.split("; ");
    const todoCookie = allCookies.find(row => row.startsWith("todos="));

    if (!todoCookie) return;

    const jsonString = decodeURIComponent(todoCookie.replace("todos=", ""));
    const list = JSON.parse(jsonString);

    for (let i = list.length - 1; i >= 0; i--) {
        createTodo(list[i]);
    }
}

//กดปุ่ม New
newBtn.addEventListener("click", () => {
    const text = prompt("Enter a new TO DO:");
    if (text && text.trim() !== "") {
        createTodo(text.trim());
        saveList();
    }
});

window.addEventListener("load", loadList);
