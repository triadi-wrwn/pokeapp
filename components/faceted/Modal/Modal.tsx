'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ModalProps } from './Modal.type';

const Modal = (props: ModalProps) => {
  const { trigger, open, title, subtitle, children, openChange } = props;
  return (
    <Dialog open={open} onOpenChange={openChange}>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className="bg-gradient-to-r from-rose-100 to-teal-100">
        <DialogHeader>
          <DialogTitle className="text-center">{title}</DialogTitle>
          <DialogDescription>{subtitle}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
