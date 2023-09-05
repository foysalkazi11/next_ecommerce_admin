"use client";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <Modal
      title="Modal"
      description="Description"
      isModalOpen={true}
      onCloseModal={() => {}}
    >
      Children
    </Modal>
  );
}
