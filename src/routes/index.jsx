import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Sidebar = lazy(() => import('../pages/Sidebar'));
const Login = lazy(() => import('../pages/Login'));
const DashboardLayoutBasic = lazy(() => import('../components/DashboardLayoutBasic'));
const NotFound = lazy(() => import('../pages/NotFound'));

export default function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Sidebar open={true} onClose={() => {}} /> {/* Sidebar displayed always */}
        <Routes>
          {/* Add routes as needed */}
          <Route path="/" element={<DashboardLayoutBasic />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
