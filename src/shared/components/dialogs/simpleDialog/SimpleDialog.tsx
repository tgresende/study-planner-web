import { Dialog, DialogTitle, Typography } from "@mui/material";
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
    <Dialog
      onClose={handleClose}
      open={open}
      maxWidth={false}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DialogTitle>
        <Typography variant="h5" align="center">
          {title}
        </Typography>
      </DialogTitle>
      {childComponent}
    </Dialog>
  );
};
