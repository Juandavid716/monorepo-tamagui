import React from 'react';
import Link from 'next/link';
import { signOut, useSession } from "next-auth/react"

import { Button, XStack, YStack } from '@my/ui';
import { styles } from './Nav.styles';
import { useLink } from 'solito/link';

export function Nav() {
  const { data: session } = useSession()

  const isLoggedIn = !!session;

  const signInLink = useLink({
    href: '/sign-in',
  });

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        {isLoggedIn && (
          <Link href="/dashboard" passHref>
            <span style={styles.logoLink}>Dashboard</span>
          </Link>
        )}
      </div>
      <div style={styles.links}>
        {isLoggedIn ? (
          <XStack>
            <Button onPress={() => signOut({ callbackUrl: '/' })} >Sign out</Button>
          </XStack>
        ) : (
          <XStack>
            <Button {...signInLink}>Sign in</Button>
          </XStack>
        )}
      </div>
    </nav>
  );
}
