import {
  MdDashboard, MdShoppingCart, MdPeople, MdAssignment, MdTravelExplore, MdChat, MdEmail, MdEvent,
  MdViewKanban, MdInsertDriveFile, MdCalendarToday, MdPages, MdList, MdTableChart,
  MdBarChart, MdWidgets, MdHelpOutline, MdSettings, MdMenuBook
} from 'react-icons/md';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';

export const sidebarData = [
  {
    title: 'Dashboard',
    links: [
      { to: '/dashboard', icon: <MdDashboard />, label: 'Dashboard Home' }
    ]
  },
  {
    title: 'Applications',
    links: [
      { to: '/ecommerce', icon: <MdShoppingCart />, label: 'Ecommerce' },
      { to: '/crm', icon: <MdPeople />, label: 'CRM' },
      { to: '/projects', icon: <MdAssignment />, label: 'Project Mgmt' },
      { to: '/travel', icon: <MdTravelExplore />, label: 'Travel Agency' },
      { to: '/chat', icon: <MdChat />, label: 'Chat' },
      { to: '/dashboard/email', icon: <MdEmail />, label: 'Email' },
      { to: '/events', icon: <MdEvent />, label: 'Events' },
      { to: '/kanban', icon: <MdViewKanban />, label: 'Kanban' },
      { to: '/social', icon: <AiOutlineAppstoreAdd />, label: 'Social' },
      { to: '/files', icon: <MdInsertDriveFile />, label: 'File Manager' },
      { to: '/calendar', icon: <MdCalendarToday />, label: 'Calendar' }
    ]
  },
  {
    title: 'Pages',
    dropdown: true,
    links: [
      { to: '/starter', icon: <MdPages />, label: 'Starter' },
      { to: '/faq', icon: <MdPages />, label: 'FAQ' },
      { to: '/landing', icon: <MdPages />, label: 'Landing' },
      { to: '/pricing', icon: <MdPages />, label: 'Pricing' },
      { to: '/notifications', icon: <MdPages />, label: 'Notifications' }
    ]
  },
  {
    title: 'Modules',
    dropdown: true,
    links: [
      { to: '/forms', icon: <MdList />, label: 'Forms' },
      { to: '/tables', icon: <MdTableChart />, label: 'Tables' },
      { to: '/charts', icon: <MdBarChart />, label: 'Charts' },
      { to: '/components', icon: <MdWidgets />, label: 'Components' },
      { to: '/widgets', icon: <MdWidgets />, label: 'Widgets' }
    ]
  },
  {
    title: 'Authentication',
    links: [
      { to: '/login', icon: <MdPages />, label: 'Login' },
      { to: '/register', icon: <MdPages />, label: 'Register' },
      { to: '/forgot-password', icon: <MdPages />, label: 'Forgot Password' },
      { to: '/auth-settings', icon: <MdSettings />, label: 'Auth Settings' }
    ]
  },
  {
    title: 'Docs',
    links: [
      { to: '/getting-started', icon: <MdHelpOutline />, label: 'Getting Started' },
      { to: '/customization', icon: <MdSettings />, label: 'Customization' },
      { to: '/design-file', icon: <MdMenuBook />, label: 'Design File' },
      { to: '/changelog', icon: <MdMenuBook />, label: 'Changelog' }
    ]
  }
];
