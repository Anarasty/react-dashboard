import type { ColumnDef } from '@tanstack/react-table';

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
