import { Dialog, DialogTitle } from "@mui/material";
import { FunctionComponent } from "react";

interface ISimpleDialogProps {
  onClose: Function;
  open: boolean;
  childComponent: React.ReactNode;
  title: string;
}

export const SimpleDialog: FunctionComponent<ISimpleDialogProps> = (props) => {
  const { onClose, open, childComponent, title } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      {childComponent}
    </Dialog>
  );
};
