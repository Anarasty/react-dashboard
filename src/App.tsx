import { ThemeProvider } from '@/components/ThemeProvider';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { Header } from '@/components/Header';
import { Page, PageHeader } from '@/components/Page';
import { DashboardCard } from '@/components/DashboardCard';
import { AppBarChart } from '@/components/AppBarChart';
import { AppRadialChart2 } from './components/AppRadialChart2';
import { TrendingUpIcon } from 'lucide-react';
import { DashboardTable } from '@/components/DashboardTable';
import { TooltipProvider } from './components/ui/tooltip';

function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <SidebarProvider open={false}>
          <AppSidebar />
          <SidebarInset>
            <Header />

            <main>
              <Page>
                <PageHeader />

                <div className='grid gap-6 py-8 md:grid-cols-[1fr_360px]'>
                  <DashboardCard
                    title='Vendor breakdown'
                    description='Keep track of vendors and their security ratings.'
                    buttonText='View full report'
                  >
                    <AppBarChart />
                  </DashboardCard>

                  <DashboardCard
                    title='Vendor monitored'
                    description="You're using 80% of available spots."
                    buttonText='Upgrade plan'
                  >
                    <div className='flex justify-between items-start'>
                      <AppRadialChart2 />
                      <div className='flex items-center gap-2'>
                        <TrendingUpIcon
                          size={20}
                          className='text-chart-3'
                        />
                        <span className='text-chart-3'>10%</span>
                      </div>
                    </div>

                    <div className='mt-6 lg:mt-8'>
                      <p className='font-medium'>
                        You've almost reached your limit
                      </p>
                      <p className='text-muted-foreground'>
                        You have used 80$ of your available spots. Upgrade plan
                        to monitor more vendors.
                      </p>
                    </div>
                  </DashboardCard>
                </div>

                <DashboardTable />
              </Page>
            </main>
          </SidebarInset>
        </SidebarProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
