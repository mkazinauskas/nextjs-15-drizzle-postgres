import { db } from "@/server/db/db";
import { usersTable } from "@/server/db/system-schema";

export default async function UsersTableComponent() {
    const users = await db.select().from(usersTable).orderBy(usersTable.createdAt)

    if (users.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <h1 className="text-4xl font-bold">No users yet</h1>
                <p className="text-center">
                    Create a new user by clicking the button below
                </p>
            </div>
        )
    }

    return (
        <table className="table-fixed stripe hover">
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Created at</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.uuid}>
                        <td>{user.email}</td>
                        <td>{new Date(user.createdAt).toLocaleString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}