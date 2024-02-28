"use client"

import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { NotificationsFormSchema } from "@/lib/schemas";

import { Form } from "@/components/ui/form"
import { Separator } from "@/components/ui/separator";

import SettingsHeader from "./header";
import { NotificationsFormField } from "./form-fields";
import { notificationsFieldDataGroup } from "./field-data";
import { Tables } from "../../../../types/supabase";
import { createSupbaseClient } from "@/lib/supabase/client";
import { UserSessionContext, TUserSessionContext } from "@/components/context/userProvider";
import { Session } from "@supabase/supabase-js";

export default function NotificationsForm() {
  const [mode, setMode] = useState<'edit' | 'view'>('view')
  const supabase = createSupbaseClient()
  const { session } = useContext(UserSessionContext) as TUserSessionContext

  const form = useForm<NotificationsFormSchema>({
    resolver: zodResolver(NotificationsFormSchema),
    defaultValues: {
      push: undefined,
      email: undefined,
      comments: undefined,
      likes: undefined,
      downloads: undefined,
      muted: [],
    },
  });

  useEffect(() => {
    async function fetchNotificationsPrefrences(session: Session) {
      const { data, error } = await supabase
        .from('notifications_prefrences')
        .select('*')
        .eq('user_id', session.user.id)
        .single()

      
      if (!data) {
        return
      }

      form.reset({
        push: data.push_notifications,
        email: data.email_notifications,
        comments: data.comment_notifications,
        likes: data.like_notifications,
        downloads: data.download_notifications,
      })
    }

    if (session !== null)
      fetchNotificationsPrefrences(session)
  }, [])

  function onSubmit(values: NotificationsFormSchema) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <SettingsHeader mode={mode} setMode={setMode} title="Notifications" subtitle="Update your notification settings here" />
        <Separator className="w-full my-8" />
        <div className="space-y-8">
          { notificationsFieldDataGroup.general.map((field, index) => <NotificationsFormField 
              key={index} 
              control={form.control} 
              mode={mode} 
              data={field} 
            />)
          }
        </div>
        <Separator className="w-full my-8" />
        <div className="space-y-8">
          { notificationsFieldDataGroup.interactions.map((field, index) => <NotificationsFormField key={index} control={form.control} mode={mode} data={field} />)}
        </div>
        <Separator className="w-full my-8" />
      </form>
    </Form >
  )
}