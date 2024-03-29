import RecoverPasswordForm from "@/components/forms/onboard/recover";
import Title from "@/components/reusables/title";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function Page() {
  // const supabase = await createSupabaseServerClient()
  // const { data: { session }, error } = await supabase.auth.getSession()

  // if (session) {
  //   redirect(`/account/${session.user.id}`)
  // }
  
  return (
    <div className="container max-w-[400px] min-h-[calc(100vh_-_57px)] flex flex-col justify-center items center h-full">
      <Title
        title='Password Recovery?'
        subTitle='Get access back to your account by resetting your password.'
        center
      />
      <RecoverPasswordForm />
    </div>
  )
}

