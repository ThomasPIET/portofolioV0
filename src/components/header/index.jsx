'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';
import styles from './style.module.css';

export default function Header() {
  const pathname = usePathname();
  const isContactPage = pathname === '/contact' || pathname === '/about';

  return (
    <div className={isContactPage ? styles.containerHeaderContact : styles.containerHeader}>
      <div className={styles.headerLeft}>
        <Link className={ isContactPage ? styles.headerLinkContact : styles.headerLink} scroll={false} href="/">
          Home
        </Link>
        <Link className={ isContactPage ? styles.headerLinkContact : styles.headerLink} scroll={false} href="/about">
          About
        </Link>
        <Link className={ isContactPage ? styles.headerLinkContact : styles.headerLink} scroll={false} href="/contact">
          Contact
        </Link>
      </div>
      <p className={isContactPage ? styles.headerRightContact : styles.headerRight}>
        Thomas PIET
      </p>
    </div>
  );
}
