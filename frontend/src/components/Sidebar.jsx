import { NavLink } from 'react-router-dom';
import {
  TbInfoCircle, TbMapPin, TbMountain, TbBriefcase, TbPhoto,
  TbCalendarCheck, TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand, TbLogin, TbHome,
} from 'react-icons/tb';

const navItems = [
  { to: '/about', label: 'About', icon: TbInfoCircle },
  { to: '/almora', label: 'Almora', icon: TbMapPin },
  { to: '/nainital', label: 'Nainital', icon: TbMountain },
  { to: '/custom-packages', label: 'Custom packages', icon: TbBriefcase },
  { to: '/gallery', label: 'Gallery', icon: TbPhoto },
];
const mobileItems = [
  { to: '/', label: 'Home', icon: TbHome },
  { to: '/almora', label: 'Almora', icon: TbMapPin },
  { to: '/nainital', label: 'Nainital', icon: TbMountain },
  { to: '/custom-packages', label: 'Custom', icon: TbBriefcase },
  { to: '/gallery', label: 'Gallery', icon: TbPhoto },
  { to: '/booking', label: 'Booking', icon: TbCalendarCheck },
  { to: '/login', label: 'Account', icon: TbLogin },
];

export default function Sidebar({ collapsed, onToggle }) {
  return (
    <>
    <aside className={`sticky top-0 hidden h-screen shrink-0 flex-col bg-forest text-cream transition-[width] duration-200 md:flex ${collapsed ? 'w-16 px-2' : 'w-56 px-3'}`}>
      <div className={`flex items-center py-5 ${collapsed ? 'justify-center' : 'justify-between px-2'}`}>
        {!collapsed && <NavLink to="/" className="text-gold text-xl font-display italic">TravelPartner</NavLink>}
        <button onClick={onToggle} aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'} title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'} className="rounded-md p-1.5 text-cream/80 hover:bg-forest-light hover:text-gold">
          {collapsed ? <TbLayoutSidebarLeftExpand size={20} /> : <TbLayoutSidebarLeftCollapse size={20} />}
        </button>
      </div>

      {collapsed && <NavLink to="/" title="TravelPartner" aria-label="TravelPartner home" className="mb-4 flex justify-center text-lg font-display italic text-gold">T</NavLink>}

      <nav className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} title={collapsed ? label : undefined} aria-label={collapsed ? label : undefined}
            className={({ isActive }) => `flex items-center rounded-lg py-2.5 text-sm transition-colors ${collapsed ? 'justify-center px-0' : 'gap-2.5 px-3'} ${isActive ? 'bg-forest-light text-gold font-medium' : 'text-cream/90 hover:bg-forest-light/60'}`}>
            <Icon size={19} />{!collapsed && <span>{label}</span>}
          </NavLink>
        ))}
        <NavLink to="/login" title={collapsed ? 'Sign up / Log in' : undefined} aria-label={collapsed ? 'Sign up or log in' : undefined}
          className={({ isActive }) => `flex items-center rounded-lg py-2.5 text-sm transition-colors ${collapsed ? 'justify-center px-0' : 'gap-2.5 px-3'} ${isActive ? 'bg-forest-light text-gold font-medium' : 'text-cream/90 hover:bg-forest-light/60'}`}>
          <TbLogin size={19} />{!collapsed && <span>Sign up / Log in</span>}
        </NavLink>
      </nav>

      <NavLink to="/booking" title={collapsed ? 'Booking' : undefined} aria-label={collapsed ? 'Booking' : undefined}
        className={`my-3 flex items-center rounded-lg bg-gold py-2.5 text-sm font-medium text-forest transition hover:brightness-95 ${collapsed ? 'justify-center px-0' : 'gap-2.5 px-3'}`}>
        <TbCalendarCheck size={19} />{!collapsed && <span>Booking</span>}
      </NavLink>
    </aside>
    <nav aria-label="Main navigation" className="mobile-nav fixed inset-x-0 bottom-0 z-50 flex items-stretch justify-around border-t border-white/10 bg-forest/95 px-1 pt-2 text-cream shadow-[0_-8px_24px_rgba(0,0,0,0.16)] backdrop-blur-lg md:hidden">
      {mobileItems.map(({ to, label, icon: Icon }) => (
        <NavLink key={to} to={to} end={to === '/'} aria-label={label}
          className={({ isActive }) => `flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-lg px-0.5 text-[10px] leading-none transition-colors ${isActive ? 'text-gold' : 'text-cream/65'}`}>
          {({ isActive }) => <><Icon size={21} strokeWidth={isActive ? 2.3 : 1.8} /><span className="max-w-full truncate">{label === 'Custom packages' ? 'Custom' : label}</span></>}
        </NavLink>
      ))}
    </nav>
    </>
  );
}
