"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord, faGoogle } from "@fortawesome/free-brands-svg-icons";

import { Button } from "../ui/button";
import { baseURL } from "@/lib/constants";
import { createSupbaseClient } from "@/lib/supabase/client";

export default function OnboardingOauth() {
  const supabase = createSupbaseClient()

  async function handleOAuthSignIn(e: any, provider: "discord" | "google" | "twitter") {
    e.preventDefault()

    await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: `${baseURL}/auth/confirm/callback`
      } 
    })
  }

  return (
    <div className="flex flex-row w-full gap-x-4 pb-3 pt-2">
      <Button variant="outline" size="icon" className="w-full">
        <FontAwesomeIcon icon={faTwitter} onClick={(e) => handleOAuthSignIn(e, 'twitter')} />
      </Button>
      <Button variant="outline" size="icon" className="w-full">
        <FontAwesomeIcon icon={faDiscord} onClick={(e) => handleOAuthSignIn(e, 'discord')} />
      </Button>
      <Button variant="outline" size="icon" className="w-full">
        <FontAwesomeIcon icon={faGoogle} onClick={(e) => handleOAuthSignIn(e, 'google')} />
      </Button>
    </div>
  )
}