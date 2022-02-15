export function getStatusName(status:number):"Ativo"|"Concluído"{
    if (status === 1) return "Ativo"
    return "Concluído";
}