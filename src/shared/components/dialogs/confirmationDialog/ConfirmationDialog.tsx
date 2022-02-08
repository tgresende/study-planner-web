import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { FunctionComponent } from "react";

interface ISimpleDialogProps {
  onAccept: Function;
  onCancel: Function;
  open: boolean;
  message: string;
  title: string;
}

export const ConfirmationDialog: FunctionComponent<ISimpleDialogProps> = (
  props
) => {
  const { onAccept, onCancel, open, title, message } = props;

  const accept = () => onAccept();
  const cancel = () => onCancel();

  return (
    <Dialog
      open={open}
      onClose={cancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={cancel}>Cancelar</Button>
        <Button onClick={accept} autoFocus>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
