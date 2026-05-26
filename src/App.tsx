import { ThemeProvider } from '@/components/ThemeProvider';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { Header } from '@/components/Header';
import { Page, PageHeader } from '@/components/Page';
import { DashboardCard } from '@/components/DashboardCard';
import { AppBarChart } from '@/components/AppBarChart';
import { AppRadialChart2 } from './components/AppRadialChart2';

function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Header />

          <main>
            <Page>
              <PageHeader />

              <div className=''>
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
                  <AppRadialChart2/>
                </DashboardCard>
              </div>
            </Page>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
