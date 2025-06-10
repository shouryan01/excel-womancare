import { Link, useRouterState } from '@tanstack/react-router'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function Navigation() {
  const currentPath = useRouterState({ select: state => state.location.pathname });

  // Helper to check if a path is active
  const isActive = (path: string) => currentPath === path;

  // Helper for dropdowns (checks if currentPath starts with the base path)
  const isDropdownActive = (base: string) => currentPath.startsWith(base);

  return (
    <div className="flex justify-center">
      <NavigationMenu className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg border rounded-full px-2 py-1">
        <NavigationMenuList className="flex justify-center gap-1">
          <NavigationMenuItem>
            <Link
              to="/"
              className={navigationMenuTriggerStyle({
                className: isActive('/') ? 'bg-violet-400/20 text-violet-700 rounded-full px-4 py-2' : 'hover:bg-violet-400/10 rounded-full px-4 py-2 text-gray-800'
              })}
            >
              Home
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link
              to="/about"
              className={navigationMenuTriggerStyle({
                className: isActive('/about') ? 'bg-violet-400/20 text-violet-700 rounded-full px-4 py-2' : 'hover:bg-violet-400/10 rounded-full px-4 py-2 text-gray-800'
              })}
            >
              About Us
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger
                className={navigationMenuTriggerStyle({
                  className: isDropdownActive('/services') ? 'bg-violet-400/20 text-violet-700 rounded-full px-4 py-2' : 'hover:bg-violet-400/10 rounded-full px-4 py-2 text-gray-800'
                })}
              >
                Services
              </DropdownMenuTrigger>
              <DropdownMenuContent className="py-2 [&>*]:hover:bg-violet-400/10 [&>*]:focus:bg-violet-400/10">
                <DropdownMenuItem asChild className="py-3">
                  <Link
                    to="/services/gynaecology"
                    className={isActive('/services/gynaecology') ? 'bg-violet-400/20 text-violet-700 rounded-full px-4 py-2' : 'hover:bg-violet-400/10 rounded-full px-4 py-2 text-gray-800'}
                  >
                    Gynaecology
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="py-3">
                  <Link
                    to="/services/obstetrics"
                    className={isActive('/services/obstetrics') ? 'bg-violet-400/20 text-violet-700 rounded-full px-4 py-2' : 'hover:bg-violet-400/10 rounded-full px-4 py-2 text-gray-800'}
                  >
                    Obstetrics & Fertility
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger
                className={navigationMenuTriggerStyle({
                  className: isDropdownActive('/info') ? 'bg-violet-400/20 text-violet-700 rounded-full px-4 py-2' : 'hover:bg-violet-400/10 rounded-full px-4 py-2 text-gray-800'
                })}
              >
                Info
              </DropdownMenuTrigger>
              <DropdownMenuContent className="py-2 [&>*]:hover:bg-violet-400/10 [&>*]:focus:bg-violet-400/10">
                <DropdownMenuItem asChild className="py-3">
                  <Link
                    to="/info/appointments"
                    className={isActive('/info/appointments') ? 'bg-violet-400/20 text-violet-700 rounded-full px-4 py-2' : 'hover:bg-violet-400/10 rounded-full px-4 py-2 text-gray-800'}
                  >
                    Appointments
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="py-3">
                  <Link
                    to="/info/fees"
                    className={isActive('/info/fees') ? 'bg-violet-400/20 text-violet-700 rounded-full px-4 py-2' : 'hover:bg-violet-400/10 rounded-full px-4 py-2 text-gray-800'}
                  >
                    Fees
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="py-3">
                  <Link
                    to="/info/useful-links"
                    className={isActive('/info/useful-links') ? 'bg-violet-400/20 text-violet-700 rounded-full px-4 py-2' : 'hover:bg-violet-400/10 rounded-full px-4 py-2 text-gray-800'}
                  >
                    Useful Links
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link
              to="/contact"
              className={navigationMenuTriggerStyle({
                className: isActive('/contact') ? 'bg-violet-400/20 text-violet-700 rounded-full px-4 py-2' : 'hover:bg-violet-400/10 rounded-full px-4 py-2 text-gray-800'
              })}
            >
              Contact
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
