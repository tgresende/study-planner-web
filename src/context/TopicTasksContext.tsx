import React from 'react';

export interface ITopicTask {
	action: string;
	topicId: number;
	topicTaskId: number;
	actionDescription: string;
	actionSource: string;
}

export type TopicTasksContextType = {
	topicTasks: ITopicTask[],
	setTopicTasksList: (list:any[]) => void,
};

const defaultState = {
	topicTasks: [],
	setTopicTasksList: ()=>null,
};

export const TopicTasksContext = React.createContext<TopicTasksContextType>(defaultState);

const TopicTasksProvider: React.FC = ({ children }) => {
	const [topicTasks, setTopicTasks] = React.useState<ITopicTask[]>([]);

	const setTopicTasksList = (list:ITopicTask[]) =>{
		setTopicTasks(list);
	}

	return (
		<TopicTasksContext.Provider value={{
			topicTasks: topicTasks,
			setTopicTasksList: setTopicTasksList,
		}}>
			{children}
		</TopicTasksContext.Provider>
	);

}

export default TopicTasksProvider;
