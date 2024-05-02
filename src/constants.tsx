import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" color='white' />,
  },
  {
    title: 'My Projects',
    path: '/projects',
    icon: <Icon icon="lucide:user" width="24" height="24" color='white' />,
   
  },
  {
    title: 'My Wallet',
    path: '/wallet',
    icon: <Icon icon="lucide:mail" width="24" height="24" color='white' />,
  },
  {
    title: 'Account',
    path: '/Account',
    icon: <Icon icon="lucide:settings" width="24" height="24" color='white' />,
  
  },
  // {
  //   title: 'Filesdocument',
  //   path: '/document',
  //   icon: <Icon icon="lucide:help-circle" width="24" height="24" color='white' />,
  // },


 

  {
    title: 'Setting',
    path: '/document',
    icon: <Icon icon="lucide:circle-user-round" width="24" height="24" color='white' />,
  },

  {
    title: 'Support faq',
    path: '/document',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" color='white' />,
  },


];
