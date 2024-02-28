"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { use, useContext, useState } from "react";
import { z } from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import SettingsHeader from "./header";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { ProfileFormSchema, profileFormSchema } from "@/lib/schemas";
import { Tables } from "../../../../types/supabase";
import { UserSessionContext, TUserSessionContext } from "@/components/context/userProvider";
import avatar from "@/components/misc/avatar";

interface ProfileSettingsData extends Omit<Tables<'profile'>, 'created_on' | 'email' | 'last_logon' | 'user_id'> {}

export default function ProfileForm() {
  const [mode, setMode] = useState<'edit' | 'view'>('view')

  const { profile } = useContext(UserSessionContext) as TUserSessionContext
  const form = useForm<ProfileFormSchema>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: profile?.name ?? "",
      username: profile?.username ?? "",
      avatar: profile?.avatar ?? "",
      bio: profile?.bio ?? "",
      banner: profile?.banner ?? "",
    },
  });

  function onSubmit(values: ProfileFormSchema) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <SettingsHeader mode={mode} setMode={setMode} title="Profile Info" subtitle="Update your personal info here" />
        <Separator className="w-full my-8" />
        <div className="space-y-8">
          <div className="grid grid-cols-12 w-full">
            <div className="col-span-5 w-full">
              <FormLabel>Name</FormLabel>
              <FormDescription>
                What you want to be called by others.
              </FormDescription>
            </div>
            <div className="col-span-7 flex flex-col w-full gap-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-row">
                      <div className="w-[70%] ml-auto">
                        <FormControl>
                          <Input placeholder="shadcn" {...field} disabled={mode === 'view'} />
                        </FormControl>
                        <FormDescription className="pt-2">
                          {field.value.length} / 50
                        </FormDescription>
                        <FormMessage />
                      </div>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="grid grid-cols-12 w-full">
            <div className="col-span-5 w-full">
              <FormLabel>Username</FormLabel>
              <FormDescription>
                How others will uniquely identify you as
              </FormDescription>
            </div>
            <div className="col-span-7 flex flex-col w-full gap-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-row">
                      <div className="w-[70%] ml-auto">
                        <FormControl>
                          <Input placeholder="@username" {...field} disabled={mode === 'view'} />
                        </FormControl>
                        <FormDescription className="pt-2">
                          Must be unique and can only contain letters, numbers, and underscores.
                        </FormDescription>
                        <FormMessage />
                      </div>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="grid grid-cols-12 w-full">
            <div className="col-span-5 w-full">
              <FormLabel>Bio</FormLabel>
              <FormDescription>
                Your chance to talk about your self.
              </FormDescription>
            </div>
            <div className="col-span-7 flex flex-col w-full gap-y-8">
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-row">
                      <div className="w-[70%] ml-auto">
                        <FormControl>
                          <Textarea placeholder="Talk about  " {...field} disabled={mode === 'view'} rows={6}/>
                        </FormControl>
                        <FormDescription className="pt-2">
                          {field.value.length} / 160
                        </FormDescription>
                        <FormMessage />
                      </div>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <Separator className="w-full my-8" />
      </form>

    </Form>
  )
}