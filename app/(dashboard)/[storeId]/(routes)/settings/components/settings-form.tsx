'use client'

import { Store } from "@prisma/client"

interface SettingsFormProps {
    initialData: Store
}

export const Settingsform: React.FC<SettingsFormProps> = ({
    initialData
}) => {
    return (
        <div>
            Ini Settings Form
        </div>
    )
}