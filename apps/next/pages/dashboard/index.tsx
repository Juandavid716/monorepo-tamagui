import Head from 'next/head'

import { DashboardPage } from 'app/features/dashboard/page'
import { Nav } from 'app/components/Navbar/Nav'


export default function Page() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Nav/>
      <DashboardPage />
    </>
  )
}
