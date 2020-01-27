import React from 'react';
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Employees = React.lazy(() => import('./views/Employees'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path:'/admin/employees', name: "Employees", component: Employees}
];

export default routes;
