"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useNewAccount } from "@/features/accounts/store/useNewAccount";
import { Payment, columns } from "./columns";
import { DataTable } from "@/components/data-table";

const a : Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },{
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "k@example.com",
      },
    // ...
  ]



const AccountsPage = () => {
    const { onOpen } = useNewAccount();

    return (
        <div className="px-10 max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
            <Card>
                <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
                    <CardTitle className="text-xl">
                        Account
                    </CardTitle>
                    <Button onClick={onOpen}>
                        New
                    </Button>
                </CardHeader>
                <CardContent>
                    <DataTable columns={columns} data={a} onDelete={() => {}} filterKey="email"></DataTable>
                </CardContent>
            </Card>
        </div>
    )
}

export default AccountsPage;