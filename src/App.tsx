import { ThemeProvider } from '@/components/ThemeProvider';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { Header } from '@/components/Header';

function App() {
  return (
    <ThemeProvider>
      <SidebarProvider >
        <AppSidebar />
        <SidebarInset>
          <Header />
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
