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
        }
    }

    for(butt in handlers){
        document.getElementById(butt).addEventListener("click", handlers[butt])
    }
}