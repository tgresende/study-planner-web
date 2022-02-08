import { Dialog, DialogTitle } from "@mui/material";
import { FunctionComponent } from "react";

interface ISimpleDialogProps {
  onClose?: Function;
  open: boolean;
  childComponent: React.ReactNode;
}

export const SimpleDialog: FunctionComponent<ISimpleDialogProps> = (props) => {
  const { onClose = () => null, open, childComponent } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      {childComponent}
    </Dialog>
  );
};
