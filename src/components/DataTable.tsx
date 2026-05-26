import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
} from '@tanstack/react-table';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';
import { useState } from 'react';
import { InputGroup, InputGroupInput } from './ui/input-group';

interface Props<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

type Filter = 'view-all' | 'monitored' | 'unmonitored';

export const DataTable = <Data, Value>({
  columns,
  data,
}: Props<Data, Value>) => {
  const [filter, setFilter] = useState<Filter>('view-all');
  const [columnFilters, setColumnFilers] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilers,
    state: {
      columnFilters,
    },
  });

  return (
    <div className=''>
      <div className=''>
        <ToggleGroup
          type='single'
          variant='outline'
          value={filter}
          onValueChange={(value: Filter) => setFilter(value)}
        >
          <ToggleGroupItem value='view-all'>View All</ToggleGroupItem>
          <ToggleGroupItem value='monitored'>Monitored</ToggleGroupItem>
          <ToggleGroupItem value='unmonitored'>Unmonitored</ToggleGroupItem>
        </ToggleGroup>

        <div className=''>
          <InputGroup>
            <InputGroupInput
              placeholder='Search'
              value={
                (table.getColumn('name')?.getFilterValue() as string) ?? ''
              }
              onChange={(event) =>
                table
                  .getColumn('name')
                  ?.setFilterValue(event.currentTarget.value)
              }
            />
          </InputGroup>
        </div>
      </div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className='h-24 text-center'
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
