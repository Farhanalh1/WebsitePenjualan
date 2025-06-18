'use client'

import { Popover, PopoverTriggerProps } from "@radix-ui/react-popover";
import { PopoverTrigger } from "./ui/popover";
import { Store } from "@/lib/generated/prisma";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

type PopOverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface StoreSwitcherProps extends PopoverTriggerProps {
    items: Store[];
}

const StoreSwitcher = ({
    className,
    items = []
}: StoreSwitcherProps) => {
    const storeModal = useStoreModal();
    const params = useParams<{storeId:string}>();
    const router = useRouter()

    const formattedItems = items.map((item) => ({
        label: item.name,
        value: item.id

    }))

    const currentStore = formattedItems.find((item) => item.value === params.storeId)

    const [open, setOpen] = useState(false)

    const onStoreSelect = (store:{value: string, label: string}) => {
        setOpen(false);
        router.push(`/${store.value}`)


    }

    return (
        <div>
            Store Switcher new
        </div>
    );
}

export default StoreSwitcher;