function whitespace(c)
{
	return " ".repeat(c)
}

function setw(str, l){
	if(str.length >= l)
		return str
	else
		return whitespace(l - str.length) + str
}

function is_leap(y)
{
	return y % 4 == 0 && y % 100 != 0 || y % 400 == 0
}

function DaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function GetWeekday(date){
	return (date.getDay() + 6) % 7
}

function GetFirstWeekday(month, year){
	return GetWeekday(new Date(year, month, 1))
}

function MakeCalendar(date){
	let array_of_array = [["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"]]

	let wd = GetFirstWeekday(date.getMonth(), date.getFullYear())

	let thisday = date.getDate()
	
	let temp_array = []

	for(let i = 0; i < wd; i++)
		temp_array.push("")

	for(let i = 1; i <= DaysInMonth(date.getMonth() + 1, date.getFullYear()); i++) {
		temp_array.push(i)
		
		wd = (wd + 1) % 7;
		
		if(wd == 0 || i == DaysInMonth(date.getMonth() + 1, date.getFullYear())){
			array_of_array.push(temp_array)
			temp_array = []
		}
	}

	let s = "<table class=\"calendar_table\">"
	
	for(let i = 0; i < array_of_array.length; i++){
		let row = "<tr>"
		for(let j = 0; j < array_of_array[i].length; j++){
			if(array_of_array[i][j] == thisday)
				row += ("<td style=\"color: red;\">" + array_of_array[i][j] + "</td>")
			else
				row += ("<td>" + array_of_array[i][j] + "</td>")	
		}
		row += "</tr>"

		s += row
	}

	s += "</table>"

	return s
}