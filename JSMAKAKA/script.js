var rotor = 0
var scl = 1


function generateButtons() {
    let buttons = document.getElementsByClassName('collapsible_button')

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
                let content = this.nextElementSibling
                content.classList.toggle("content_showed")
            }
        )
    }
}

function sleep(milliseconds) {
    const date = Date.now()
    let currentDate = null
    do {
      currentDate = Date.now()
    } while (currentDate - date < milliseconds)
  }

function animate(an_block){
    rotor += 180
    
    if(scl == 1)
        scl = 1.5
    else
        scl = 1

    an_block.style.transform = "rotate(" + rotor + "deg)"
    an_block.style.scale = scl
    an_block.style.transition = "all .2s ease-in"
}

function DrawCalendar(date) {
    calendar = document.getElementsByClassName('calendar')[0]
    calendar.innerHTML = MakeCalendar(date)
}

function AddToTable(){
    let table = document.getElementById("table_task_5")

    let x = null
    while((x = prompt("Введите текст для добавления в таблицу")) != null){
        // Если строка пустая или состоит из whitespace символов
        if(!x.trim()){
            alert("Низя!")
            continue
        }

        let tr = document.createElement("tr")
        let td = document.createElement("td")
        td.innerHTML = x
        tr.append(td)
        table.append(tr)
    }
}

function RemFromTable(){
    let table = document.getElementById("table_task_5")

    let willBeDeleted = []
    let trs = table.querySelectorAll("tr")

    for(let tr of trs){
        let td = tr.querySelector("td")
        if(confirm(`Строка содержит: ${td.innerHTML}. Удаляем?`))
            willBeDeleted.push(tr)
    }

    for(let tr of willBeDeleted)
        tr.remove()
}

window.onload = () => {
    let vis = false
    let an = 0
    rotor = 0
    scl = 1
    generateButtons()

    date_input = document.getElementById('date_input')
    date_input.valueAsDate = new Date(Date.now())
    DrawCalendar(date_input.valueAsDate)

    date_input.addEventListener("change", (event) => {
        DrawCalendar(event.target.valueAsDate)
    });

    let values = ["Значение 1", "Значение 2", "Значение 3", "Значение 4", "Значение 5"]
    let global_counter = 0;

    let par_1 = document.getElementById("par_1")
    let par_2 = document.getElementById("par_2")

    par_1.addEventListener("mouseover", () => {
        par_1.innerHTML = values[global_counter]
        global_counter = (global_counter + 1) % values.length
    })

    par_2.addEventListener("mouseover", () => {
        par_2.innerHTML = values[global_counter]
        global_counter = (global_counter + 1) % values.length
    })

    let menu = document.getElementById("menu")

    menu.addEventListener("click", () => {
        document.getElementById("menu_items").style.display = "block"
    })

    let handlers = {
        task_button_1: () => {
            dateTime.innerHTML = getDateTime()
        },
        
        task_button_2: () => {
		},

        task_button_3: () => {
            forms_count.innerHTML = "Число форм: " + document.querySelectorAll('form').length
        },

        task_button_4: () => {
            if(!vis){
                vis = !vis

                an = setInterval(() => {animate(block)}, 400)
            }
            else{
                vis = !vis

                clearInterval(an)
            }
        },

        add_to_table: AddToTable,
        rem_from_table: RemFromTable,
    }

    for(butt in handlers){
        document.getElementById(butt).addEventListener("click", handlers[butt])
    }
}