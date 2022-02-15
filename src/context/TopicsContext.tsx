import React from 'react';

export interface ITopic {
	topicId: number,
    topicName: string,
    topicAnotations: string,
    totalCorrectQuestion: number,
    totalDoneQuestion: number
  }

export type TopicsContextType = {
	topics: ITopic[],
	setTopicsList: (list:any[]) => void,
};

const defaultState = {
	topics: [],
	setTopicsList: ()=>null,
};

export const TopicsContext = React.createContext<TopicsContextType>(defaultState);

const TopicsProvider: React.FC = ({ children }) => {
	const [topics, setTopics] = React.useState<ITopic[]>([]);

	const setTopicsList = (list:ITopic[]) =>{
		setTopics(list);
	}

	return (
		<TopicsContext.Provider value={{
			topics: topics,
			setTopicsList: setTopicsList,
		}}>
			{children}
		</TopicsContext.Provider>
	);

}

export default TopicsProvider;
