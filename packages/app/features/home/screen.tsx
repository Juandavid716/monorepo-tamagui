import {
  Anchor,
  H1,
  Paragraph,
  Separator,
  YStack,
} from '@my/ui';

export function HomeScreen() {
  return (
    <YStack f={1} jc="center" ai="center" p="$4" gap="$4">
      <YStack gap="$4" bc="$background">
        <H1 ta="center">See random posts!</H1>
        <Paragraph ta="center">
          If you log in, you will see many post about interesting topics.
        </Paragraph>

        <Separator />
        <Paragraph ta="center">
          Made by{' '}
          <Anchor color="$color12" href="https://github.com/Juandavid716" target="_blank">
            @Juandavid716
          </Anchor>
        </Paragraph>
        <Paragraph ta="center">
          <Anchor
            color="$color12"
            href="https://github.com/Juandavid716/monorepo-tamagui"
            target="_blank"
            rel="noreferrer"
          >
            give it a ⭐️
          </Anchor>
        </Paragraph>
      </YStack>
    </YStack>
  );
}
