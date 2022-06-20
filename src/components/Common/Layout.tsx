import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

export interface LayoutProps {}

export function Layout(props: LayoutProps) {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
