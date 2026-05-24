import { ThemeProvider } from '@/components/ThemeProvider';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { Header } from '@/components/Header';
import { Page, PageHeader } from '@/components/Page';
import { DashboardCard } from '@/components/DashboardCard';
import { AppBarChart } from '@/components/AppBarChart';

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
              </div>
            </Page>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
