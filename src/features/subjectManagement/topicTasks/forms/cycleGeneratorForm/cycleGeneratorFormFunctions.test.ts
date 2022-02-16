import { ITopic } from "../../../../../context/TopicsContext";
import { generateNewCycle } from "./cycleGeneratorFormFunctions";


describe('testing generateNewCycle',()=>{

    const topic_C : ITopic = {
        topicId: 1,
        topicName: "name c",
        topicAnotations: "anotation c",
        totalCorrectQuestion: 10,
        totalDoneQuestion: 10
    };

    const topic_B : ITopic = {
        topicId: 2,
        topicName: "name b",
        topicAnotations: "anotation b",
        totalCorrectQuestion: 10,
        totalDoneQuestion: 10
    };

    const ArrayTopic_A :ITopic[] = [
        {
            topicId: 3,
            topicName: "name a3",
            topicAnotations: "anotation a3",
            totalCorrectQuestion: 10,
            totalDoneQuestion: 10
        },
        {
            topicId: 4,
            topicName: "name a4",
            topicAnotations: "anotation a4",
            totalCorrectQuestion: 10,
            totalDoneQuestion: 10
        },
    ];

    test('testing generateNewCycle only A',()=>{
        const expected = ArrayTopic_A;
        const cycle = generateNewCycle(null, null, ArrayTopic_A);
        expect(cycle).toStrictEqual(expected)
    });

    test('testing generateNewCycle only B',()=>{
        const expected = [topic_B]
        const cycle = generateNewCycle(topic_B, null, []);
        expect(cycle).toStrictEqual(expected)
    });

    test('testing generateNewCycle only C',()=>{
        const expected = [topic_C]
        const cycle = generateNewCycle(null, topic_C, []);
        expect(cycle).toStrictEqual(expected)
    });

    test('testing generateNewCycle only A and B',()=>{
        const array = ArrayTopic_A;
        const expected = [array[0], topic_B, array[1], topic_B];
        const cycle = generateNewCycle(topic_B, null, ArrayTopic_A);
        expect(cycle).toStrictEqual(expected)
    });

    test('testing generateNewCycle only A and C',()=>{
        const expected = [...ArrayTopic_A, topic_C];
        const cycle = generateNewCycle(null, topic_C, ArrayTopic_A);
        expect(cycle).toStrictEqual(expected)
    });

    test('testing generateNewCycle only B and C',()=>{
        const expected = [topic_B, topic_C]
        const cycle = generateNewCycle(topic_B, topic_C, []);
        expect(cycle).toStrictEqual(expected)
    });

    test('testing generateNewCycle A, B and C',()=>{
        const array = ArrayTopic_A;
        const expected = [array[0], topic_B, array[1], topic_C];
        const cycle = generateNewCycle(topic_B, topic_C, ArrayTopic_A);
        expect(cycle).toStrictEqual(expected)
    });

    test('testing generateNewCycle none',()=>{
        const cycle = generateNewCycle(null, null, []);
        expect(cycle).toStrictEqual([])
    });
});