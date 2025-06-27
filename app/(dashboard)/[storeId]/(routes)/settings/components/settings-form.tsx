'use client'

import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Store } from "@prisma/client"
import { Trash } from "lucide-react"

interface SettingsFormProps {
    initialData: Store
}

export const Settingsform: React.FC<SettingsFormProps> = ({
    initialData
}) => {
    return (
        <div className=" flex items-center justify-between">
            <Heading
            title="Settings"
            description="Atur Toko"
            />
            <Button
            >
                <Trash className="h-4 w-4" />
            </Button>
        </div>
    )
}