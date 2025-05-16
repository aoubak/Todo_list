const input = document.getElementById('input');
const addbtn = document.getElementById('add');
const error = document.getElementById("error_display");
const listContainer = document.getElementById('list_container');


const typing_container = document.querySelector(".typing_container");
let typing = document.getElementById("typing");


input.addEventListener('keyup', () => {
    if (input.value == "") {
         typing.style.display = "none";
    } else {
        typing.textContent = input.value;
        typing.style.padding = "5px";
        typing.style.background = "#ffffff2c";
        typing.style.display = "inline-block";
        typing.style.whiteSpace = "nowrap";
        typing.style.borderRadius = "5px";
    }

})



addbtn.addEventListener('click', () => {
    typing.style.display = "none";
    if (input.value == "") {
        error.classList.add("active");

        setTimeout(() => {
            error.classList.remove("active");
        }, 3000);

    } else if (input.value !== "") {
        error.classList.remove("active");
        const div = document.createElement("div");
        div.className = "list_display";

        const p = document.createElement("p");
        p.id = "list_content";

        p.textContent = input.value;
        input.value = "";

        const span = document.createElement("span");
        span.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

        div.appendChild(p);
        div.appendChild(span);
        listContainer.appendChild(div);

        div.addEventListener('click', () => {
            if (p.style.textDecoration == "line-through") {
                
                    p.style.textDecoration = "wavy";
                    p.style.opacity = "100%";
               
            } else {
                p.style.textDecoration = "line-through"
                p.style.opacity = "30%"
            }

        })

        span.addEventListener('click', () => {
            listContainer.removeChild(div);
        })

    }


});

