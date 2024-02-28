"use client"

import Link from "next/link";
import { ListItem, NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { Large } from "../ui/typography";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../ui/modeToggle";
import MobleNav from "./mobileNav";
import NotificationSheet from "../sheets/notifications";
import Avatar from "../misc/avatar";
import { Tables } from "../../../types/supabase";

type Props = {
  pathname: string,
  profile: Tables<'profile'> | null | undefined
}

export default function Navbar({ pathname, profile }: Props) {
  function isActive(path: '/' | '/about') {
    return path === pathname
  }

  function isActiveSub(path: '/auth' | '/presets') {
    return pathname.startsWith(path)
  }

  if (profile === undefined) return

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex flex-row container h-14 max-w-screen-2xl items-center">
        <div>
          <Large>
            HyperSets
          </Large>
        </div>
        <ModeToggle />

        <MobleNav pathname={pathname} />
        <NavigationMenu className="hidden md:table-cell">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href={'/'} legacyBehavior passHref>
                <NavigationMenuLink active={isActive('/')} className={cn([
                  navigationMenuTriggerStyle(),
                ])}>
                  Home
                </NavigationMenuLink>
              </Link>

            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={'/presets'} legacyBehavior passHref>
                <NavigationMenuLink active={isActiveSub("/presets")} className={cn([
                  navigationMenuTriggerStyle(),
                ])}>
                  Presets
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={'/about'} legacyBehavior passHref>
                <NavigationMenuLink active={isActive('/about')} className={cn([
                  navigationMenuTriggerStyle()
                ])}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {profile === null && <NavigationMenuItem>
              <Link href={'/login'} legacyBehavior passHref>
                <NavigationMenuLink active={isActiveSub("/auth")} className={cn([
                  navigationMenuTriggerStyle(),
                ])}>
                  Sign In
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>}
            {profile !== null && (
              <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <Avatar
                      avatar={profile.avatar}
                      name={profile.name}
                      username={profile.username}
                      classNames="w-[30px] h-[30px] mr-2"
                    />{profile.name ? profile.name : "Mystery User"}</NavigationMenuTrigger>
                  <NavigationMenuContent className="" >
                    <ul>
                      <li>
                        <ListItem href={`/profile/${profile.profile_id}`} title="My Profile"></ListItem>
                      </li>
                      <li>
                        <ListItem href="/settings" title="Settings" />
                      </li>
                    </ul>
                  </NavigationMenuContent>
              </NavigationMenuItem>)}
          </NavigationMenuList>
        </NavigationMenu>
        {profile !== null && <NotificationSheet profile_id={profile.profile_id} />}
      </div>
    </header>
  )
}