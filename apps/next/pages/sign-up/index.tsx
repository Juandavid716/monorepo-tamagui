'use client';

import Head from 'next/head'
import SignUp from 'app/features/sign-up/SignUp';

export default function Page() {
    return (
      <>
        <Head>
          <title>Sign Up</title>
        </Head>
     
        <SignUp />
      </>
    )
  }
  