function getDateTime() {
    const currentDate = new Date();
    
    const option = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };

    const days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];

    let dd = currentDate.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = currentDate.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = currentDate.getFullYear();
    if (yy < 10) yy = '0' + yy;

    let weekDay = days[currentDate.getDay()];

    const finalDate = yy + '.' + dd + '.' + mm;
    const finalTime = currentDate.toLocaleTimeString('Ru-ru', option);
    
    return weekDay + ' '  + finalDate + ' ' + finalTime;
}