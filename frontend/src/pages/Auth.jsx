import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Auth() {
  const location = useLocation();
  const [mode, setMode] = useState(location.pathname === '/signup' ? 'signup' : 'login');

  return (
    <section className="flex min-h-[calc(100svh-5rem)] items-center justify-center px-4 py-8 md:min-h-screen md:px-6 md:py-12">
      <div className="w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm md:p-8">
        <Link to="/" className="font-display text-sm italic text-forest">TravelPartner</Link>
        <h1 className="mt-5 font-display text-3xl italic text-forest">{mode === 'signup' ? 'Create your account' : 'Welcome back'}</h1>
        <p className="mt-2 text-sm text-neutral-600">{mode === 'signup' ? 'Sign up to plan your next mountain escape.' : 'Log in to continue planning your journey.'}</p>
        <div className="mt-6 grid grid-cols-2 rounded-lg bg-cream p-1 text-sm">
          {['login', 'signup'].map((item) => <button key={item} onClick={() => setMode(item)} className={`rounded-md py-2 capitalize ${mode === item ? 'bg-white font-medium text-forest shadow-sm' : 'text-neutral-500'}`}>{item === 'signup' ? 'Sign up' : 'Log in'}</button>)}
        </div>
        <form className="mt-6 space-y-4" onSubmit={(event) => event.preventDefault()}>
          {mode === 'signup' && <label className="block text-sm text-forest">Full name<input required autoComplete="name" placeholder="Your name" className="mt-1.5 w-full rounded-lg border border-neutral-300 px-3 py-2.5 outline-none focus:border-gold" /></label>}
          <label className="block text-sm text-forest">Email<input required type="email" autoComplete="email" placeholder="you@example.com" className="mt-1.5 w-full rounded-lg border border-neutral-300 px-3 py-2.5 outline-none focus:border-gold" /></label>
          <label className="block text-sm text-forest">Password<input required type="password" autoComplete={mode === 'signup' ? 'new-password' : 'current-password'} placeholder="Enter your password" className="mt-1.5 w-full rounded-lg border border-neutral-300 px-3 py-2.5 outline-none focus:border-gold" /></label>
          <button type="submit" className="w-full rounded-lg bg-forest py-3 text-sm font-medium text-cream transition hover:bg-forest-light">{mode === 'signup' ? 'Create account' : 'Log in'}</button>
        </form>
        <p className="mt-5 text-center text-xs text-neutral-500">{mode === 'signup' ? 'Already have an account?' : 'New to TravelPartner?'}{' '}
          <button onClick={() => setMode(mode === 'signup' ? 'login' : 'signup')} className="font-medium text-forest underline underline-offset-2">{mode === 'signup' ? 'Log in' : 'Sign up'}</button>
        </p>
      </div>
    </section>
  );
}
