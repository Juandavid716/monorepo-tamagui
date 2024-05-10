import Head from 'next/head'

import { Nav } from 'app/components/Navbar/Nav'
import SignIn  from 'app/features/sign-in/signIn'


export default function Page() {
  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <SignIn />
    </>
  )
}
