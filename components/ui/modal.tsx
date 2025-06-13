'use client'

import { title } from "process";
import { Dialog, DialogClose } from "./dialog";

interface ModalProps {
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode
}

const Modal = ({title, description, isOpen, onClose, children} :
ModalProps) => {

    const onChange = (open: boolean) => {
            if (!open) {
                onClose()
            }
        }

return (
    <Dialog open={isOpen} onOpenChange={onChange}>

    </Dialog>
)
    }