import type { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from './ui/checkbox';

type VendorCategories =
  | 'Active'
  | 'Inactive'
  | 'Database access'
  | 'Salesforce'
  | 'Business data'
  | 'Customer data'
  | 'Financials'
  | 'SOC2'
  | 'Legal';

export type Vendor = {
  src: string;
  name: string;
  website: string;
  rating: number;
  ratingGrowthPercent: number;
  lastAssessed: string;
  categories: VendorCategories[];
};

export const columns: ColumnDef<Vendor>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: 'Vendor',
  },
  {
    accessorKey: 'rating',
    header: 'Vendor',
  },
  {
    accessorKey: 'lastAssessed',
    header: 'Last assessed',
  },
  {
    accessorKey: 'categories',
    header: 'Categories',
  },
];
