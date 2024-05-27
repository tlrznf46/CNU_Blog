import { useEffect, useState } from 'react';
import { getPostList } from '../api';
import PostListItem from '../components/PostListItem';
import { IResponsePostList, TAG } from '../api/types';
import NoPostList from '../components/NoPostList';
import Post from './Post.tsx';
import useGetPostList from '../queries/useGetPostList.ts';

const list = [
  {
    post: {
      id: 1,
      title: '1번 게시글',
      contents: '내용',
      tag: TAG.REACT,
    },
  },
  {
    post: {
      id: 2,
      title: '2번 게시글',
      contents: '내용',
      tag: TAG.REACT,
    },
  },
  {
    post: {
      id: 3,
      title: '3번 게시글',
      contents: '내용',
      tag: TAG.REACT,
    },
  },
];

const Home = () => {
  const { data: postList = [], isError, isLoading } = useGetPostList();

  if (isLoading) {
    return <div>...불러오는 중...</div>;
  }

  if (postList.length === 0 || isError) {
    return <NoPostList />;
  }

  return (
    <div>
      {postList.map(item => (
        // eslint-disable-next-line react/jsx-key
        <PostListItem id={`${item.id}`} title={item.title} contents={item.contents} tag={item.tag} />
      ))}
    </div>
  );
};

export default Home;
