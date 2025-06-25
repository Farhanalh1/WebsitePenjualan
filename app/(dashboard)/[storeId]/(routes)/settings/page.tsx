import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

interface SettingsPageProps {
    params: {
        storeId: string;
    }
}

const SettingsPage: React.FC<SettingsPageProps> = ({
    params
}) => {

    const {userId} = auth()

    if (!userId) {
        redirect('/sign-in')
    }

    return(
        <div>
            Ini Page Setting
        </div>
    );
}
export default SettingsPage;