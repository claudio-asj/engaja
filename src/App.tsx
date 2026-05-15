import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Sidebar } from './components/layout/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { Students } from './pages/Students';
import { Policies } from './pages/Policies';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';
import { Login } from './pages/Login';
import { LayoutProvider } from './components/layout/LayoutContext';

// Layout wrapper for authenticated routes
function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <LayoutProvider
      value={{
        isMobileMenuOpen,
        openMobileMenu: () => setIsMobileMenuOpen(true),
        closeMobileMenu: () => setIsMobileMenuOpen(false),
        toggleMobileMenu: () => setIsMobileMenuOpen((current) => !current),
      }}
    >
      <div className="flex min-h-screen bg-background text-on-background">
        <Sidebar />
        <div className="flex min-h-screen min-w-0 flex-1 flex-col md:ml-[17.5rem]">
          {children}
        </div>
      </div>
    </LayoutProvider>
  );
}

export default function App() {
  // Simple auth state for demo purposes
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <HashRouter>
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
    </HashRouter>
  );
}
