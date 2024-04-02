import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"
import {auth} from "@/app/(home)/auth";


export default async function Home() {
    const session = await auth()

    return (
        <main className="p-24">
            main page
            <div>Access Token: {JSON.stringify(session?.user.name)}</div>
        </main>
    );
}
