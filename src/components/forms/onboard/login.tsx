"use client"

import { UserSessionContext, TUserSessionContext } from "@/components/context/userProvider";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Lead, Small } from "@/components/ui/typography";
import { useToast } from "@/components/ui/use-toast";
import { loginSchema } from "@/lib/schemas";
import { createSupbaseClient } from "@/lib/supabase/client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {
  isFromRegister: boolean
}
export default function LoginForm({ isFromRegister }: Props) {
  const [error, setError] = useState<null | string>(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const { toast } = useToast()
  const supabase = createSupbaseClient()

  useEffect(() => {
    if (isFromRegister) {
      toast({
        title: "Welcome!",
        description: "You have successfully registered! Please login to continue.",
      })
    }
  }, [])

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setLoading(true)

    toast({
      title: "Signing In",
    })

    const { email, password } = values
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      toast({
        title: "Uh oh! Something went wrong!",
        description: "Please try again later.",
      })

      setLoading(false)
      return
    }
    
    toast({
      title: "Success! You're logged in!",
    })

    router.push(`/`)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} >
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              const isValid = form.getFieldState("email").invalid === false

              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email@mail.com" type="email" {...field} ringPrimary={isValid === false} ringSuccess={isValid === true} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              const isValid = form.getFieldState("password").invalid === false

              return (
                <div className="space-y-2">
                  <div className="flex flex-row ">
                    <FormLabel>Password</FormLabel>
                    <Small classNames="ml-auto text-xs"><Link href="/forgot" className=" text-primary">Forgot password?</Link></Small>
                  </div>
                  <FormItem className="">
                    <FormControl>
                      <Input placeholder="••••••••" {...field} type="password" ringPrimary={isValid === false} ringSuccess={isValid === true} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>

              )
            }}
          />
          <Button type="submit" className="w-full" disabled={loading === true || submitted === true}>Login</Button>
        </div>

        <Small classNames="text-center w-full font-light block py-4">Need an account? <Link href="/register" className=" text-primary">Sign up</Link></Small>
      </form>
    </Form>
  )
}