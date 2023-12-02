import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import {navLinks} from '../constants'

const Nav = () => {
  return (
    <header className="padding-x padding-y absolute z-10 w-full"> 
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img 
                src={headerLogo}
                alt='header Nike logo'
                width={130}
                height={30}
                />
            </a>
            
            <ul className='flex-1 flex justify-center gap-16 max-lg:hidden items-center'>
            {navLinks.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                <a href={href} className='font-montserrat leading-normal text-lg text-slate-gray'>{label}</a>
                </li>
            ))}
            </ul>
            <img 
              src={hamburger}
              height={25}
              width={25}
              className='flex shrink md:hidden'
            />
        </nav>
    </header>
  )
}

export default Nav