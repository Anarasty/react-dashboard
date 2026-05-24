import { ThemeProvider } from '@/components/ThemeProvider';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';

function App() {
  return (
    <ThemeProvider>
      <SidebarProvider open={true}>
        <AppSidebar/>
        <SidebarInset></SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
