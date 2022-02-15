
export function getDateBrazilFormat(timestamp : number):string{
    var date = new Date(timestamp*1000);
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
}