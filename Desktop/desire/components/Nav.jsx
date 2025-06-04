import Link from 'next/link';
import { useContext } from 'react';
import { CursorContext } from './CursorContent';
import { usePathname } from 'next/navigation';


const links = {
    href: '/',
    name: "Home"
}


const Nav = () => {
  return (
    <div>Nav</div>
  )
}

export default Nav