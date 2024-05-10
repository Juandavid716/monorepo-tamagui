import Head from 'next/head'
import { Nav } from 'app/components/Navbar/Nav'
import { HomeScreen } from 'app/features/home/screen'

export default function Page() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Nav/>
      <HomeScreen />
    </>
  )
}
