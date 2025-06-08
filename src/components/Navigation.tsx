import { Link, useRouterState } from '@tanstack/react-router'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu'

export function Navigation() {
  const currentPath = useRouterState({ select: state => state.location.pathname });

  // Helper to check if a path is active
  const isActive = (path: string) => currentPath === path;

  // Helper for dropdowns (checks if currentPath starts with the base path)
  const isDropdownActive = (base: string) => currentPath.startsWith(base);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link
            to="/"
            className={navigationMenuTriggerStyle({
              className: isActive('/') ? 'text-violet-400 underline underline-offset-4' : ''
            })}
          >
            Home
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link
            to="/about"
            className={navigationMenuTriggerStyle({
              className: isActive('/about') ? 'text-violet-400 underline underline-offset-4' : ''
            })}
          >
            About
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className={isDropdownActive('/services') ? 'text-violet-400 underline underline-offset-4' : ''}>
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/services/obstetrics"
                    className={
                      'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-violet-400 focus:text-violet-400'
                    }
                  >
                    <div className={
                      'text-sm font-medium leading-none' +
                      (isActive('/services/obstetrics') ? ' text-violet-400 underline underline-offset-4' : '')
                    }>Obstetrics</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Comprehensive obstetric care and support
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/services/gynaecology"
                    className={
                      'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-violet-400 focus:text-violet-400'
                    }
                  >
                    <div className={
                      'text-sm font-medium leading-none' +
                      (isActive('/services/gynaecology') ? ' text-violet-400 underline underline-offset-4' : '')
                    }>Gynaecology</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Expert gynaecological services and care
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/services/fertility"
                    className={
                      'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-violet-400 focus:text-violet-400'
                    }
                  >
                    <div className={
                      'text-sm font-medium leading-none' +
                      (isActive('/services/fertility') ? ' text-violet-400 underline underline-offset-4' : '')
                    }>Fertility</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Fertility and reproductive health services
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className={isDropdownActive('/info') ? 'text-violet-400 underline underline-offset-4' : ''}>
            Info
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/info/appointments"
                    className={
                      'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-violet-400 focus:text-violet-400'
                    }
                  >
                    <div className={
                      'text-sm font-medium leading-none' +
                      (isActive('/info/appointments') ? ' text-violet-400 underline underline-offset-4' : '')
                    }>Appointments</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Appointment information and booking
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/info/fees"
                    className={
                      'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-violet-400 focus:text-violet-400'
                    }
                  >
                    <div className={
                      'text-sm font-medium leading-none' +
                      (isActive('/info/fees') ? ' text-violet-400 underline underline-offset-4' : '')
                    }>Fees</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Fee information and payment details
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/info/useful-links"
                    className={
                      'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-violet-400 focus:text-violet-400'
                    }
                  >
                    <div className={
                      'text-sm font-medium leading-none' +
                      (isActive('/info/useful-links') ? ' text-violet-400 underline underline-offset-4' : '')
                    }>Useful Links</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Helpful resources and links
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link
            to="/contact"
            className={navigationMenuTriggerStyle({
              className: isActive('/contact') ? 'text-violet-400 underline underline-offset-4' : ''
            })}
          >
            Contact
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
