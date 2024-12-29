'use client'

import { createNewUserAction } from "./create-new-user-server-action"

export default function CreateNewUserButtonComponent() {
    return (
        <form action={createNewUserAction} >
            <button
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            >
                Generate a new User
            </button>
        </form>
    )
}
