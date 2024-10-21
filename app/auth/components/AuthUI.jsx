"use client";

import useHydrate from "@/hooks/useHydrate";
import { createSupabaseBrowserClient } from "@/lib/client/supabase";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect, useState } from "react";

export default function AuthUI() {
  const [user, setUser] = useState();
  const supabase = createSupabaseBrowserClient();
  const isMount = useHydrate();

  const getUserInfo = async () => {
    const result = await supabase.auth.getUser();
    console.log(result);
    if (result?.data?.user) setUser(result.data.user);
    console.log(result.data.user.email);
  };

  useEffect(() => {
    getUserInfo();
  });
  if (!isMount) return null;
  return (
    <section className="w-full">
      <div>{user ? `로그인 됨 ${user?.email}님` : "로그아웃됨"}</div>
      <div className="mx-auto max-w-[500px]">
        <Auth
          redirectTo={process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO}
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          onlyThirdPartyProviders
          providers={["google", "github"]}
        />
      </div>
    </section>
  );
}
