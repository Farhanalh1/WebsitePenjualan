'use client'

import { Store } from "@prisma/client"
import { Heading } from "lucide-react"

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