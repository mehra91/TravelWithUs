import Sidebar from './Sidebar.jsx';
import { useState } from 'react';

export default function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex min-h-screen min-w-0 bg-cream">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((value) => !value)} />
      <main className="min-w-0 flex-1 pb-20 md:pb-0">{children}</main>
    </div>
  );
}
