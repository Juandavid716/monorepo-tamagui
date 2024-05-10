import React from 'react';
import Link from 'next/link';

import { Button, XStack, YStack } from '@my/ui';

import { styles } from './Nav.styles';
import { useLink } from 'solito/link';

export function Nav() {
  const isLoggedIn = true;

  const signInLink = useLink({
    href: '/sign-in',
  });

  const signOutLink = useLink({
    href: '/sign-out',
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
            <Button {...signOutLink}>Sign out</Button>
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
