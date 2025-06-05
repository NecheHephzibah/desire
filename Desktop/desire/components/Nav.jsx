import Link from 'next/link';
import { useContext } from 'react';
import { CursorContext } from './CursorContent';
import { usePathname } from 'next/navigation';


const links = [
  {
      href: '/',
      name: "Home"
  },
  {
      href: '/about',
      name: "About"
  },
  {
      href: '/treatments',
      name: "Treatments"
  },
  {
      href: '/contact',
      name: "Contact"
  },
];


const Nav = () => {
  const pathname = usePathname();

  return <nav>
    <div className='container mx-auto flex gap-6'>
      {links.map((link, index) => (
        <Link key={index} href={link.href} className={`${pathname === link.href && "border-b-2 border-accent"}
        capitalize text-lg font-semibold px-4 py-2 hover:bg-gray-200 transition-colors duration-300`} >
          {link.name}
        </Link>
      ))}
    </div>
  </nav>

  

}

export default Nav