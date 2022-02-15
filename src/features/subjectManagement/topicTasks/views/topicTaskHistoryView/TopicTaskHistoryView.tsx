import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import {
  getAllTopicTasks,
  IGetAllTopicTaskUseCaseApiResponseModel,
} from "../../../../../shared/api/getAllTopicTasksUseCaseApi/getAllTopicTasksUseCaseApi";
import { getStatusName } from "../../../../../shared/functions/topicTaskFunctions/topicTaskFunctions";
import { getDateBrazilFormat } from "../../../../../shared/utils/date";

const TopicTaskHistoryView: React.FunctionComponent<{ topicId: number }> = ({
  topicId,
}) => {
  const [topicTasks, setTopicTasks] = React.useState<
    IGetAllTopicTaskUseCaseApiResponseModel[] | []
  >([]);

  React.useEffect(() => {
    getHistory();
  }, []);

  async function getHistory(): Promise<void> {
    const tasks = await getAllTopicTasks({ topicId });
    setTopicTasks(tasks);
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: 1200 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Status</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Ação</TableCell>
            <TableCell align="right">Fonte</TableCell>
            <TableCell align="right">Descrição</TableCell>
            <TableCell align="right">Revisão</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {topicTasks.map((task) => (
            <TableRow
              key={task.topicTaskId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{getStatusName(task.status)}</TableCell>
              <TableCell align="right">
                {getDateBrazilFormat(task.dateTimestamp)}
              </TableCell>
              <TableCell align="right">{task.action}</TableCell>
              <TableCell align="right">{task.actionSource}</TableCell>
              <TableCell align="right">{task.actionDescription}</TableCell>
              <TableCell align="right">{task.revisionItem}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TopicTaskHistoryView;
