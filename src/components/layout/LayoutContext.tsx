import React from 'react';

type LayoutContextValue = {
  isMobileMenuOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleMobileMenu: () => void;
};

const LayoutContext = React.createContext<LayoutContextValue | null>(null);

export function LayoutProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: LayoutContextValue;
}) {
  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
}

export function useLayout() {
  const context = React.useContext(LayoutContext);

  if (!context) {
    throw new Error('useLayout must be used within LayoutProvider');
  }

  return context;
}
