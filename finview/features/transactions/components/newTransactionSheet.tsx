import { z } from "zod";
import { Loader } from "lucide-react";

import { TransactionForm } from "@/features/transactions/components/transactionForm";
import { useNewTransaction } from "@/features/transactions/hooks/useNewTransaction";
import { useCreateTransaction } from "@/features/transactions/api/useCreateTransaction";

import { useGetAccounts } from "@/features/accounts/api/useGetAccounts";
import { useCreateAccount } from "@/features/accounts/api/useCreateAccount";

import { insertTransactionSchema } from "@/db/schema";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const formSchema = insertTransactionSchema.omit({
  id: true,
});

type FormValues = z.input<typeof formSchema>;

export const NewTransactionSheet = () => {
  const { isOpen, onClose } = useNewTransaction();

  const createMutation = useCreateTransaction();

  const accountQuery = useGetAccounts();
  const accountMutation = useCreateAccount();
  const onCreateAccount = (name: string) => accountMutation.mutate({
    name
  });
  const accountOptions = (accountQuery.data ?? []).map((account) => ({
    label: account.name,
    value: account.id,
  }));

  const isPending =
    createMutation.isPending ||
    accountMutation.isPending;

  const isLoading = accountQuery.isLoading;

  const onSubmit = (values: FormValues) => {
    createMutation.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>
            New Transaction
          </SheetTitle>
          <SheetDescription>
            Add a new transaction
          </SheetDescription>
        </SheetHeader>
        {isLoading
          ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader className="size-4 text-muted-foreground animate-spin" />
            </div>
          )
          : (
            <TransactionForm
              onSubmit={onSubmit}
              disabled={isPending}
              accountOptions={accountOptions}
              onCreateAccount={onCreateAccount}
            />
          )
        }
      </SheetContent>
    </Sheet>
  );
};
