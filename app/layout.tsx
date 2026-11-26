import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {title:'E-Food — Good food, good mood',description:'Fresh food, delivered with love.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}