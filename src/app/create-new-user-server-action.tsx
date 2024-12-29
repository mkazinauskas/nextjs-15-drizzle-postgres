'use server'

import { db } from "@/server/db/db"
import { usersTable } from "@/server/db/system-schema"
import { randomBytes } from "crypto"
import { permanentRedirect } from "next/navigation"

export async function createNewUserAction() {
    const newEmail = `${randomBytes(16).toString('hex')}@example.com`

    await db.insert(usersTable).values({
        email: newEmail,
    })

    return permanentRedirect(`/`)
}