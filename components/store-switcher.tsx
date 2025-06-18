'use client'

import { Popover, PopoverTriggerProps } from "@radix-ui/react-popover";
import { PopoverTrigger } from "./ui/popover";
import { Store } from "@/lib/generated/prisma";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import { Store as StoreIcon } from "lucide-react";

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
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
            <Button>
                <StoreIcon className="mr-2 h-4 w-4"></StoreIcon>
            </Button>
            </PopoverTrigger>
        </Popover>
    );
}

export default StoreSwitcher;