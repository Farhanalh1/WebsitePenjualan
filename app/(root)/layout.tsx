import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import db from "@/lib/db";

export default async function SetupLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const {userId} = await auth()   
    if  (!userId) {
        redirect("Sign-in")
    }

    const store = await db.store.findFirst({
        where: {
            userId
        }
    })

    if (store) {
        redirect( `/${store.id}`)
    }

    return (
        <>
        {children}
        </>
    )
}