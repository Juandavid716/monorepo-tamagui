import { Fragment } from 'react';
import { SizableText, Card, H2, Paragraph, XStack, YStack } from 'tamagui';

export function PostCard({ posts }) {
  return (
    <YStack gap="$3" mt={20}>
      {posts.map(post => (
        <Card elevate size="$4" mt={8} mb={8}>
          <Card.Header padded>
            <H2>{post.title}</H2>
            <Paragraph theme="alt2">{post.body}</Paragraph>
          </Card.Header>

          <Card.Footer padded flexDirection='column'>
            <XStack flex={1} />
            <SizableText theme="alt2" size="$3">
             Comments: {post.count}
            </SizableText>
          </Card.Footer>
        </Card>
      ))}
    </YStack>
  );
}
