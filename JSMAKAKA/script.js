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

window.onload = () => {
    // Подготавливаем кнопочки
    generateButtons()

    // Задание 1 - датавремя
    setInterval(() => dateTime.innerHTML = getDateTime(), 1000)

    // Задание 2 - Календарь
    date_input.valueAsDate = new Date(Date.now())
    
    calendar.innerHTML = MakeCalendar(date_input.valueAsDate)
    date_input.addEventListener("change", (event) => {
        calendar.innerHTML = MakeCalendar(event.target.valueAsDate)
    });

    // Задание 3
    forms_count.innerHTML = `Число форм: ${document.querySelectorAll('form').length}`

    // Задание 4
    let rotor = new Rotor()

    let vis = false
    let an = 0

    task_button_4.addEventListener("click", () => {
        if(!vis){
            vis = !vis

            an = setInterval(() => { rotor.animate(block) }, 400)
        }
        else{
            vis = !vis

            clearInterval(an)
        }
    })

    // Задание 5
    add_to_table.addEventListener("click", () => AddToTable(table_task_5))
    rem_from_table.addEventListener("click", () => RemFromTable(table_task_5))

    // Задание 6
    let cycle = new CycleQueue(["Значение 1", "Значение 2", "Значение 3", "Значение 4", "Значение 5"])

    par_1.addEventListener("mouseover", () => {
        par_1.innerHTML = cycle.get_next()
    })

    par_2.addEventListener("mouseover", () => {
        par_2.innerHTML = cycle.get_next()
    })

    // Задание 7
    let y = 3

    menu.addEventListener("click", () => {
        menu_items.style.maxHeight = "100px"
        
    })

    for(let x of menu_items.getElementsByClassName("menu_item")){
        x.addEventListener("click", () => {
            x.style.maxHeight = 0
            
            y--
            if(y == 0){
                amamiarujanai.style.display = "block"
            }
        })
    }
}