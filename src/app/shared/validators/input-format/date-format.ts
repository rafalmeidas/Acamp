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