"use client"
import { createContext, useContext } from "react"
import SettingsNavMenu from "../layout/settingsNav"
import Image, { StaticImageData } from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { capitalizeEachWord, cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { H2, Small, H3, Muted } from "../ui/typography"
import { Separator } from "../ui/separator"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencil } from "@fortawesome/free-solid-svg-icons"
import { TUserSessionContext, UserSessionContext } from "./userProvider"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { createSupbaseClient } from "@/lib/supabase/client"
import { useTheme } from "next-themes"

import LightBannerPhoto from "../../../public/defaults/default-profile-bg-light.jpg"
import DarkBannerPhoto from "../../../public/defaults/default-profile-bg-dark.jpg"

type TSettingsContext = {}

export const SettingsContext = createContext<Partial<TSettingsContext>>({})

export default function SettingsProvider({ children }: { children: React.ReactNode }) {
  const { profile } = useContext(UserSessionContext) as TUserSessionContext
  const { resolvedTheme } = useTheme()
  const router = useRouter()
  
  console.log(useTheme())
  // Dont render page until an attempt to fetch the profile is made
  if (profile === undefined) {
    return

  // If the profile is null then an attempt has been made, redirect to login
  } else if (profile === null) {
    router.push('/login')
    return
  }

  const { avatar, banner, bio, name, username, user_id, profile_id } = profile

  const capitalized = capitalizeEachWord(name);
  const initials = extractFirstLetters(capitalized);


  function extractFirstLetters(input: string | null): string {
    if (!input) return '';
    return input.split(' ').map(word => word[0]).join('');
  }

  const UserBanner = ({ src }: { src: string | StaticImageData }) => (
    <>
    <div className="w-full h-full bg-black/45 z-10 absolute hidden group-hover:table-cell"></div>
    <Button size="lg" variant='outline' className="-translate-y-1 ml-2 absolute top-[45%] right-[40%] z-20 hidden group-hover:table-cell">Edit Banner <FontAwesomeIcon icon={faPencil} /></Button>
    <Image
      src={src}
      alt={`Banner for ${username}`}
      sizes="100vw"
      objectPosition="center center"
      quality={100}
      className={cn([
        'object-cover object-center',
        '',
        ''
      ])}
    />
    </>
  )
  
  return (
    <SettingsContext.Provider value={{}}>
      <div className="container max-w-screen-2xl">
        <div className="h-[250px] overflow-hidden relative w-full group">
          {banner !== null && <UserBanner src={banner} />}
          {banner === null && <UserBanner src={resolvedTheme === "dark" ? DarkBannerPhoto : LightBannerPhoto} />}
        </div>
        <div>
          <div className="flex flex-row p-4">
            <div className="flex flex-row w-full h-[106px]">
              <Avatar className="w-[180px] h-[180px] -translate-y-[106px] relative group z-10">
                <AvatarImage src={avatar ?? ""} alt={`@${username}`} />
                <div className="w-full h-full bg-black/45 z-10 absolute hidden group-hover:table-cell"></div>
                <Button size="icon" variant='outline' className="-translate-y-1 ml-2 absolute top-[45%] right-[40%] z-20 hidden group-hover:table-cell"><FontAwesomeIcon icon={faPencil} /></Button>
                <AvatarFallback>{initials.length > 0 ? initials : "YN"}</AvatarFallback>
              </Avatar>
              <div className="ml-8">
                <H2 classNames="pb-0 w-full">{name ?? "Your name"}</H2>
                <Small classNames="text-muted-foreground">{username ?? "Your Username"}</Small>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <Button variant="secondary"><Link href={`/profile/${profile_id}`}>View Profile</Link></Button>
            </div>
          </div>
          <H3>Settings</H3>
          <Muted>Manage your account settings and app preferences</Muted>
        </div>
      </div>
      <div className="container max-w-screen-2xl">
        <Separator className="my-4 w-full" />
      </div>
      <div className="grid grid-cols-12 w-full container max-w-screen-2xl h-full">
        <SettingsNavMenu />
        <Separator className="my-4 mx-auto h-full" orientation="vertical" />
        {children}
      </div>
    </SettingsContext.Provider>
  )
}


