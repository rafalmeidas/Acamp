export function addZero(date): string {

    let newDate = new Date(date);

    let dateFormat: string = ((newDate.getFullYear()) + '-' + ((dateSetting(newDate.getMonth() + 1))) + '-' + (dateSetting(newDate.getDate())));

    return dateFormat;

}

function dateSetting(number) {
    if (number <= 9)
        return "0" + number;
    else
        return number;
}


export function updateDate(dateForm: any): string {

    var date: any = new Date(dateForm);

    var actualDate: any = new Date();
    var diffMilissegundos = actualDate - date;
    var diffSegundos = diffMilissegundos / 1000;
    var diffMinutos = diffSegundos / 60;
    var diffHoras = diffMinutos / 60;
    var diffDias = diffHoras / 24;
    var diffMeses = diffDias / 30;

    if(diffHoras < 24){ 
        return (`${Math.round(diffDias)} minuto(s)`);
    } else {
        return (`${Math.round(diffDias)} dia(s)`)
    }
}