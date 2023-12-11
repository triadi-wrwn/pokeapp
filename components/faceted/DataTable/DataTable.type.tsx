import { ColumnDef } from "@tanstack/react-table";

export type DataTableProps<TData, TValue> = {
  data: TData[];
  columns: ColumnDef<TData, TValue>[];
  next: string | null;
  previous: string | null;
  total: number;
};
