"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type ModalProps = {
  isModalOpen?: boolean;
  onCloseModal?: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  isModalOpen = false,
  onCloseModal = () => {},
  description = "",
  title = "",
  children,
}) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onCloseModal();
    }
  };
  return (
    <Dialog open={isModalOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
