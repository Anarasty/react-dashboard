import { VENDOR_MOVEMENTS } from '@/constants';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlusIcon, UploadCloudIcon } from 'lucide-react';
import { DataTable } from '@/components/DataTable';
import { columns } from '@/components/Columns';

export const DashboardTable = () => {
  return (
    <div className='grid grid-cols-1 lg:border lg:rounded-xl'>
      <div className='flex max-md:flex-col justify-between gap-4 md:items-center lg:py-5 lg:px-6 lg:border-b'>
        <div>
          <div className='flex items-center gap-2'>
            <h3 className='text-lg font-semibold'>Vendor movements</h3>
            <Badge
              variant='outline'
              className='max-lg:hidden'
            >
              240 Vendors
            </Badge>
          </div>

          <p className='text-sm text-muted-foreground'>
            Keep track of vendors and their security raitings.
          </p>
        </div>

        <div className='flex items-center gap-3'>
          <Button variant='outline'>
            <UploadCloudIcon />
            <span>Import</span>
          </Button>
          <Button>
            <PlusIcon />
            <span>Add vendors</span>
          </Button>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={VENDOR_MOVEMENTS}
      />
    </div>
  );
};
