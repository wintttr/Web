function AddToTable(table){
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

function RemFromTable(table){
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