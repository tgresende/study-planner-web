import { ITopic } from "../../../../../context/TopicsContext";


export function generateNewCycle(
    topicScoreB : ITopic | null, 
    topicScoreC : ITopic | null,
    topicsScoreA : ITopic[] | []) : ITopic[]|[]{
    
    if (topicsScoreA.length === 0)
        return generateCycleTopicsBC(topicScoreB, topicScoreC);

    if (topicScoreB === null)
        return generateCycleTopicsAC(topicsScoreA, topicScoreC);

    if (topicScoreC === null)
        return generateCycleTopicsAB(topicsScoreA, topicScoreB);

    return generateCycleTopicsABC(topicsScoreA, topicScoreB, topicScoreC);
}


const generateCycleTopicsAC = (
    topicsScoreA : ITopic[], 
    topicScoreC : ITopic | null
): ITopic[] => topicScoreC ? [...topicsScoreA, topicScoreC] : topicsScoreA;  

const generateCycleTopicsABC = (
    topicsScoreA : ITopic[], 
    topicScoreB : ITopic,
    topicScoreC : ITopic
): ITopic[] => {

    if (topicScoreB===null)
        return topicsScoreA;

    let topics:ITopic[] = [];
    
    topicsScoreA.forEach(topic => {
        topics.push(topic);
        topics.push(topicScoreB);
    });

    topics.pop();
    topics.push(topicScoreC);

    return topics;
}


const generateCycleTopicsAB = (
    topicsScoreA : ITopic[], 
    topicScoreB : ITopic | null
): ITopic[] => {

    if (topicScoreB===null)
        return topicsScoreA;

    let topics:ITopic[] = [];
    
    topicsScoreA.forEach(topic => {
        topics.push(topic);
        topics.push(topicScoreB);
    });

    return topics;
}

function generateCycleTopicsBC(
    topicScoreB : ITopic | null, 
    topicScoreC : ITopic | null
): ITopic[] | []
{
    if (topicScoreB === null)
        return topicScoreC ? [topicScoreC] : [];

    if (topicScoreC === null)
        return topicScoreB ? [topicScoreB] : [];

    return [topicScoreB, topicScoreC];
}