'server-only'

import CreateNewUserButtonComponent from "./create-new-user-button-component";
import UsersTableComponent from "./users-table-component";

export default async function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center mx-auto">Postgres and Drizzle in Next.js</h1>

        <UsersTableComponent />

        <div className="flex gap-4 items-center flex-col sm:flex-row mx-auto">
          <CreateNewUserButtonComponent />
         
        </div>
      </main>
    </div>
  );
}
