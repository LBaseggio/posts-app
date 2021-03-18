import React from 'react';
import Post from './Post';

export default {
  title: 'Components/Post',
  component: Post,
};

const Template = () => (
  <Post
    content="This is the post prop CONTENT"
    date="15/03/2021"
    like="0"
  />
);
export const Default = Template.bind({});
