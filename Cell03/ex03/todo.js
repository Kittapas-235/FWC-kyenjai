const ftList = document.getElementById("ft_list");
const newBtn = document.getElementById("new_btn");

// ฟังก์ชันเซฟรายการทั้งหมดลง Cookie
function saveToCookie() {
    const todos = [];
    const items = ftList.querySelectorAll("div");
    items.forEach(item => {
        todos.push(item.textContent);
    });

    const d = new Date();
    d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + ";expires=" + d.toUTCString() + ";path=/";
}

function loadFromCookie() {
    const cookies = document.cookie.split(";");
    for (let c of cookies) {
        c = c.trim();
        if (c.startsWith("todos=")) {
            const raw = c.substring("todos=".length);
            try {
                const todos = JSON.parse(decodeURIComponent(raw));
                for (let i = todos.length - 1; i >= 0; i--) {
                    addTodo(todos[i], false);
                }
            } catch (e) {
                console.error(e);
            }
            break;
        }
    }
}

// สร้างกล่องข้อความ TO DO
function addTodo(text, save = true) {
    const todoDiv = document.createElement("div");
    todoDiv.textContent = text;

    todoDiv.addEventListener("click", () => {
        if (confirm("Do you really want to delete this TO DO?")) {
            todoDiv.remove();
            saveToCookie();
        }
    });

    ftList.prepend(todoDiv);

    if (save) {
        saveToCookie();
    }
}

// คลิกปุ่ม New
newBtn.addEventListener("click", () => {
    const text = prompt("Enter a new TO DO:");
    if (text !== null && text.trim() !== "") {
        addTodo(text.trim());
    }
});

window.addEventListener("load", loadFromCookie);