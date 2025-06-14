import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "celestia-ui-kit-v2";
import { Switch } from "celestia-ui-kit-v2";
import { Controller, useForm } from "react-hook-form";

import { Categories } from "../../../app/types/types";
import { createExpense } from "../../../features/expense/create-expense";
import { Input } from "../../../shared/Input/Input";
import styles from "./AddExpense.module.scss";

type Expenses = {
  name: string;
  category: Categories;
  cost: number;
  paid: boolean;
  priority: string;
  date: string;
};

export const AddExpenseForm = () => {
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useForm<Expenses>({
    defaultValues: {
      name: "",
      category: "Bills",
      cost: 100,
      paid: false,
      priority: "low",
    },
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createExpense,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
  });

  const onSubmit = (data: Expenses) => {
    mutation.mutate({
      ...data,
      date: new Date().toISOString(),
    });

    reset();
  };

  return (
    <form
      className={styles["add-expense-form"]}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="name"
        control={control}
        rules={{ required: "Name is required" }}
        render={({ field }) => (
          <Input type="text" label="Name" hasError={!!errors.name} {...field} />
        )}
      />
      {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      <Input
        type="text"
        label="Category"
        hasError={!!errors.category}
        {...register("category", { required: "Category is required" })}
      />
      {errors.category && (
        <p className={styles.error}>{errors.category.message}</p>
      )}
      <Input
        type="number"
        label="Cost"
        hasError={!!errors.cost}
        {...register("cost", {
          required: "Cost is required",
          valueAsNumber: true,
        })}
      />
      {errors.cost && <p className={styles.error}>{errors.cost.message}</p>}
      <Switch
        size="m"
        theme="light"
        onChange={() => console.log(1)}
        label="Paid"
        labelPosition="left"
      />
      <Input
        type="text"
        label="Priority"
        hasError={!!errors.priority}
        {...register("priority", { required: "Priority is required" })}
      />
      {errors.priority && (
        <p className={styles.error}>{errors.priority.message}</p>
      )}
      <Button
        size="small"
        variant="primary"
        title="Add expense"
        className={styles["add-expense-form__button"]}
      ></Button>
    </form>
  );
};
