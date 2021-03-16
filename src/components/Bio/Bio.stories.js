/* eslint-disable jsx-a11y/aria-role */
import React from 'react';
import Bio from './Bio';

export default {
  title: 'Components/Bio',
  component: Bio,
};

const Template = () => (
  <Bio
    headshot="https://i.pravatar.cc/400?img=51"
    name="Colby Fayock"
    tagline="Helping others to learn by doing!"
    role="Developer Advocate @ Applitools"
  />
);

export const Default = Template.bind({});
