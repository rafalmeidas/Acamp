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
    console.log(dateForm);
    
    let date: any = new Date(dateForm);
    console.log(date);
    
    let actualDate: any = new Date();
    let diffMilissegundos = actualDate - date;
    let diffSegundos = diffMilissegundos / 1000;
    let diffMinutos = diffSegundos / 60;
    let diffHoras = diffMinutos / 60;
    let diffDias = diffHoras / 24;
    let diffMeses = diffDias / 30;

    if(diffHoras < 24){ 
        return (`${diffHoras} Horas`);
    }
    return (`${diffMinutos} minutos`);

}