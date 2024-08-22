import { FC } from 'react';

interface HelloProps {
  name: string;
}

export const Hello: FC<HelloProps> = ({ name }) => {
  return <div>Hello, {name}! how are you</div>;
};