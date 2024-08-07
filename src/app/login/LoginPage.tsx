import { SocialLoginButton } from "@/component/login";
import { DefaultLayout } from "@/layout/DefaultLayout";
import { css } from "@emotion/react";
import { ButtonProvider } from "@/component/common/button";

export function LoginPage() {
  return (
    <DefaultLayout appBarVisible={false}>
      <ButtonProvider>
        <SocialLoginButton type="kakao" handler={kakaoLogin} />
        <div
          css={css`
            width: 100%;
            height: 0.8rem;
          `}
        ></div>
        <SocialLoginButton type="google" handler={googleLogin} />
      </ButtonProvider>
    </DefaultLayout>
  );
}

function kakaoLogin() {
  const REST_API_KEY = import.meta.env.VITE_REST_API_KEY as string;
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI as string;
  const link = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
  window.location.href = link;
}

function googleLogin() {
  console.log("구글 로그인 시도");
}