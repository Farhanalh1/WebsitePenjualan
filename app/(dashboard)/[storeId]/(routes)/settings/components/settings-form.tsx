'use client'

import { Heading } from "@/components/ui/heading"
import { Store } from "@prisma/client"

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
        </div>
    )
}