import Avatar from 'react-avatar';
import { cn } from '@/lib/utils';
import { Logo } from '@/assets/Logo';
import { APP_SIDEBAR } from '@/constants';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { LogOutIcon } from 'lucide-react';
import { UserMenu } from '@/components/UserMenu';

export const AppSidebar = () => {
  const { isMobile } = useSidebar();

  console.log(window.innerWidth);
  console.log(isMobile);
  return (
    <Sidebar
      variant='floating'
      collapsible='icon'
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className='px-0.5 max-lg:p-2'>
            <Logo variant={isMobile ? 'default' : 'icon'} />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {APP_SIDEBAR.primaryNav.map((item) => (
                <SidebarMenuItem
                  tootlip={item.title}
                  key={item.title}
                >
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.Icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* sds */}
        {isMobile && (
          <SidebarGroup className='mt-auto'>
            <SidebarGroupContent>
              <SidebarMenu>
                {APP_SIDEBAR.secondaryNav.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tootlip={item.title}
                      asChild
                    >
                      <a href={item.url}>
                        <item.Icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter className={cn(isMobile && 'border-t')}>
        <SidebarMenu>
          <SidebarMenuItem className={cn(isMobile && 'p-2')}>
            {isMobile ? (
              <div className='flex justify-between items-start gap-2'>
                <div className='grid grid-cols-[max-content_minmax(0,1fr)] items-center gap-2'>
                  <div className='relative'>
                    <Avatar
                      src={APP_SIDEBAR.curProfile.src}
                      size='36px'
                      round='8px'
                    />

                    <div className='absolute bottom-0 right-0 size-2 rounded-full bg-emerald-500 dark:bg-emerald-400 ring-sidebar ring-1'></div>
                  </div>
                  <div>
                    <h3 className='text-sm font-semibold'>
                      {APP_SIDEBAR.curProfile.name}
                    </h3>
                    <p className='text-sm text-muted-foreground truncate'>
                      {APP_SIDEBAR.curProfile.email}
                    </p>
                  </div>
                </div>
                <Button
                  variant='ghost'
                  size='icon-sm'
                  aria-label='Logout'
                >
                  <LogOutIcon />
                </Button>
              </div>
            ) : (
              <UserMenu />
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
