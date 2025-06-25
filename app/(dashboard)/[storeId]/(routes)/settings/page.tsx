import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

interface SettingsPageProps {
    params: {
        storeId: string;
    }
}

const SettingsPage: React.FC<SettingsPageProps> = async ({
    params
}) => {

    const {userId} = auth()

    if (!userId) {
        redirect('/sign-in')
    }

    const store = await db.store.findFirst({
        where:{
            id: params.storeId,
            userId
        }
    })

    if (!store) {
        redirect('/')
    }

    return(
        <div>
            Ini Page Setting
        </div>
    );
}
export default SettingsPage;