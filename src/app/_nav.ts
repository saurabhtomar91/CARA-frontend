export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'Coming...'
    }
  },
  // cif panel  wadhva
  {
    name: 'CIF Panels',
    url: '/cif',
    icon: 'icon-briefcase',
    children: [
      {
        name: 'CIF Details',
        url: '/cif/details',
        icon: 'icon-mouse'
      },
      {
        name: 'CIF List',
        url: '/cif/list',
        icon: 'icon-mouse'
      },
      {
        name: 'CIF Verification',
        url: '/cif/verification',
        icon: 'icon-mouse'
      },
      {
        name: 'Pending Commodity',
        url: '/cif/pendingcommodity',
        icon: 'icon-mouse'
      }
    ]
  },
// Lab Panel wadhva
{
  name: 'LAB Panels',
  url: '/lab',
  icon: 'icon-chemistry',
  children: [
    {
      name: 'LAB Asst',
      url: '/lab/labAssistant',
      icon: 'icon-mouse'
    },
    {
      name: 'LAB Head',
      url: '/lab/head',
      icon: 'icon-mouse'
    },
  ]
},
// Operation Panel wadhva
{
  name: 'OPERATION Panels',
  url: '/operation',
  icon: 'icon-cursor',
  children: [
    {
      name: 'operation-Head',
      url: '/operation/operationHead',
      icon: 'icon-cursor'
    },
    {
      name: 'invoice',
      url: '/operation/invoice',
      icon: 'icon-list'
    },
    {
      name: 'invoice-History',
      url: '/operation/invoiceHistory',
      icon: 'icon-list'
    },
  ]
},
// Release Panel wadhva
{
  name: 'RELEASE Panels',
  url: '/release',
  icon: 'icon-cursor',
  children: [
    {
      name: 'Release Order List',
      url: '/release/releaseorderList',
      icon: 'icon-cursor'
    },
    {
      name: 'Ro Verification List',
      url: '/release/verificationList',
      icon: 'icon-list'
    },
    {
      name: 'Ro Approved List',
      url: '/release/approvedList',
      icon: 'icon-list'
    },
  ]
},
// Cwf Panel wadhva
{
  name: 'CWF Panels',
  url: '/cwf',
  icon: 'icon-cursor',
  children: [
    {
      name: 'CWF List',
      url: '/cwf/cwfList',
      icon: 'icon-cursor'
    },
  ]
},
// Account Panel wadhva
{
  name: 'ACCOUNT Panels',
  url: '/account',
  icon: 'icon-cursor',
  children: [
    {
      name: 'Receipt List',
      url: '/account/receiptList',
      icon: 'icon-cursor'
    },
    {
      name: 'Payment List',
      url: '/account/paymentList',
      icon: 'icon-cursor'
    },
  ]
},
// Survey Panel wadhva
{
  name: 'SURVEY Panels',
  url: '/survey',
  icon: 'icon-cursor',
  children: [
    {
      name: 'Survey List',
      url: '/survey/surveyList',
      icon: 'icon-cursor'
    },
  ]
},
// Super Admin Panel wadhva
{
  name: 'SUPER ADMIN Panels',
  url: '/superAdmin',
  icon: 'icon-cursor',
  children: [
    {
      name: 'Kisan List',
      url: '/superAdmin/KisanList',
      icon: 'icon-cursor'
    },
    {
      name: 'Trader List',
      url: '/superAdmin/TraderList',
      icon: 'icon-list'
    },
    {
      name: 'Mandi List',
      url: '/superAdmin/MandiList',
      icon: 'icon-list'
    },
    {
      name: 'Lab List',
      url: '/superAdmin/LabList',
      icon: 'icon-list'
    },
    {
      name: 'Product List',
      url: '/superAdmin/ProductList',
      icon: 'icon-list'
    },
    {
      name: 'Employee List',
      url: '/superAdmin/EmployeeList',
      icon: 'icon-list'
    },
    {
      name: 'Bank List',
      url: '/superAdmin/BankList',
      icon: 'icon-list'
    },
    {
      name: 'List Of State & City',
      url: '/superAdmin/ListOfState&City',
      icon: 'icon-list'
    },
    {
      name: 'Tab List',
      url: '/superAdmin/TabList',
      icon: 'icon-list'
    },
    {
      name: 'Activity Log',
      url: '/superAdmin/ActivityLog',
      icon: 'icon-list'
    },
    {
      name: 'Stock Data',
      url: '/superAdmin/StockData',
      icon: 'icon-list'
    },
    {
      name: 'AUM Daily Report',
      url: '/superAdmin/AUMDailyReport',
      icon: 'icon-list'
    },
  ]
},
// Others Panel wadhva
{
  name: 'OTHERS Panels',
  url: '/others',
  icon: 'icon-cursor',
  children: [
    {
      name: 'Lead Generation',
      url: '/others/leadGeneration',
      icon: 'icon-cursor'
    },
    {
      name: 'Published List',
      url: '/others/publishedList',
      icon: 'icon-cursor'
    },
    {
      name: 'History List',
      url: '/others/historyList',
      icon: 'icon-cursor'
    },
  ]
},
  {
    name: 'Base',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Carousels',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: 'Collapses',
        url: '/base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'Forms',
        url: '/base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Pagination',
        url: '/base/paginations',
        icon: 'icon-puzzle'
      },
      {
        name: 'Popovers',
        url: '/base/popovers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Progress',
        url: '/base/progress',
        icon: 'icon-puzzle'
      },
      {
        name: 'Switches',
        url: '/base/switches',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tables',
        url: '/base/tables',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tabs',
        url: '/base/tabs',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      },
      {
        name: 'Brand Buttons',
        url: '/buttons/brand-buttons',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Flags',
        url: '/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Font Awesome',
        url: '/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },

  // {
  //   name: 'Download CoreUI',
  //   url: 'http://coreui.io/angular/',
  //   icon: 'icon-cloud-download',
  //   class: 'mt-auto',
  //   variant: 'success'
  // },
  // {
  //   name: 'Try CoreUI PRO',
  //   url: 'http://coreui.io/pro/angular/',
  //   icon: 'icon-layers',
  //   variant: 'danger'
  // }
];
