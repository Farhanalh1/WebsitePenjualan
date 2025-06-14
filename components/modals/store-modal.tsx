'use client'

import * as z from 'zod'
import { useStoreModal } from "@/hooks/use-store-modal";
import Modal from "../ui/modal";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";  

const formSchema = z.object({
    name: z.string().min(1),
});

const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name: "",
    },
})

const onSubmit= async (values: z.infer<typeof formSchema>) => {
    //TODO Buat Toko
    console.log(values)
}

export const StoreModal = () => {
    const storeModal = useStoreModal();
    return (
        <Modal
            title="Buat Store"
            description="Tambahkan Store untu membuat produk dan kategori"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            Store Form
        </Modal>
    )
}