import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Sidebar } from './components/layout/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { Students } from './pages/Students';
import { Policies } from './pages/Policies';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';
import { Login } from './pages/Login';
import { useNavigate } from 'react-router-dom';

// Layout wrapper for authenticated routes
function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background text-on-background">
      <Sidebar />
      <div className="flex-1 md:ml-64 flex flex-col min-w-0">
        {children}
      </div>
    </div>
  );
}

export default function App() {
  // Simple auth state for demo purposes
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={
          isAuthenticated ? <Navigate to="/app" /> : <Login onLogin={() => setIsAuthenticated(true)} />
        } />
        
        {/* Protected App Routes */}
        <Route path="/app" element={
          isAuthenticated ? (
            <AuthenticatedLayout>
              <Dashboard />
            </AuthenticatedLayout>
          ) : <Navigate to="/login" />
        } />
        <Route path="/app/estudantes" element={
          isAuthenticated ? (
            <AuthenticatedLayout>
              <Students />
            </AuthenticatedLayout>
          ) : <Navigate to="/login" />
        } />
        <Route path="/app/politicas" element={
          isAuthenticated ? (
            <AuthenticatedLayout>
              <Policies />
            </AuthenticatedLayout>
          ) : <Navigate to="/login" />
        } />
        <Route path="/app/relatorios" element={
          isAuthenticated ? (
            <AuthenticatedLayout>
              <Reports />
            </AuthenticatedLayout>
          ) : <Navigate to="/login" />
        } />
        <Route path="/app/configuracoes" element={
          isAuthenticated ? (
            <AuthenticatedLayout>
              <Settings />
            </AuthenticatedLayout>
          ) : <Navigate to="/login" />
        } />
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
