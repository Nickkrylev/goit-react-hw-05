import { Outlet, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './SharedLayout.module.css';

const getNavLinkClassName = ({ isActive }) => 
  clsx(css.navLink, { [css.active]: isActive });

export const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink className={getNavLinkClassName} to="/">Home</NavLink>
          <NavLink className={getNavLinkClassName} to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main className={css.main}>
        <Outlet />
      </main>
    </>
  );
};
