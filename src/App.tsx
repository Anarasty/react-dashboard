import { Button } from '@/components/ui/button';
import { ThemeProvider } from '@/components/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <div className='flex min-h-svh flex-col items-center justify-center'>
        <Button>Click me</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
