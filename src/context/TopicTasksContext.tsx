import React from 'react';

export interface ITopicTask {
	topicTaskId: number;
	topicName: string;
	topicId: number;
	action: string;
	actionDescription: string;
	actionSource: string;
}

export type TopicTasksContextType = {
	topicTasks: ITopicTask[],
	setTopicTasksList: (list:any[]) => void,
	updateTopicTask: (topicTask:ITopicTask) => void,
	deleteTopicTask: (topicTaskId:number) => void
};

const defaultState = {
	topicTasks: [],
	setTopicTasksList: ()=>null,
	updateTopicTask: ()=>null,
	deleteTopicTask: ()=>null,
};

export const TopicTasksContext = React.createContext<TopicTasksContextType>(defaultState);

const TopicTasksProvider: React.FC = ({ children }) => {
	const [topicTasks, setTopicTasks] = React.useState<ITopicTask[]>([]);

	const setTopicTasksList = (list:ITopicTask[]) =>{
		setTopicTasks(list);
	}

	const updateTopicTask = (topicTask:ITopicTask) =>{
		const topicTaskIndex = topicTasks.findIndex(item => item.topicTaskId == topicTask.topicTaskId);
		let newTopicTasks = [...topicTasks]
		newTopicTasks[topicTaskIndex] = topicTask;

		setTopicTasks(newTopicTasks);
	}

	const deleteTopicTask = (topicTaskId:number) =>{
		const newTopicTasks = topicTasks.filter(item => item.topicTaskId !== topicTaskId);
		setTopicTasks(newTopicTasks);
	}

	return (
		<TopicTasksContext.Provider value={{
			topicTasks: topicTasks,
			setTopicTasksList: setTopicTasksList,
			updateTopicTask: updateTopicTask,
			deleteTopicTask: deleteTopicTask
		}}>
			{children}
		</TopicTasksContext.Provider>
	);

}

export default TopicTasksProvider;
