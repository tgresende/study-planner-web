
export function calcScoreTopic(correctQuestions:number, doneQuestions:number):"A"|"B"|"C"{

    const performance = correctQuestions*100/doneQuestions;

    if (performance >=80)
        return "A";
    
    if (performance >= 60)
        return "B";

    return "C";
}