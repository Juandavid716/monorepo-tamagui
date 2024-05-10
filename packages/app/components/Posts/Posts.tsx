import React, { useState } from 'react';
import { PostCard } from './PostCard';

import useSWR from 'swr';
import { Separator, YStack } from '@my/ui';
import { H1 } from '@my/ui';
import Pagination, { paginate } from '../Pagination';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

interface PostWithComments extends Post {
  count: number;
}

export function Posts() {
  const { data: posts, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

  const { data: comments } = useSWR('https://jsonplaceholder.typicode.com/comments', fetcher);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
 
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  if (error) return <div>Failed to load</div>;
  if (!posts || !comments) return <div>Loading...</div>;

  // Count appearance of each comment per post.
  const postIdCounts = comments?.reduce((acc, comment) => {
    const postId = comment.postId;
    acc[postId] = (acc[postId] || 0) + 1;
    return acc;
  }, {});

  // Iterate over posts and add count property
  const postsWithCount: PostWithComments[] = posts?.map((post: Post) => ({
    ...post,
    count: postIdCounts[post.id] || 0, // Set count to 0 if postId not found in postIdCounts
  }));

  const paginatedPosts = paginate(postsWithCount, currentPage, pageSize);

  return (
    <YStack alignSelf="center" mt={50} space={6}>
      <H1>Posts</H1>
      <Separator />
      <PostCard posts={paginatedPosts} />
      <Pagination
       items={postsWithCount.length} // 100
       currentPage={currentPage} // 1
       pageSize={pageSize} // 10
       onPageChange={onPageChange}
        />

    </YStack>
  );
}
