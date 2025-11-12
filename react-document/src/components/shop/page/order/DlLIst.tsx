import React from 'react';

interface DlListProps {
  term: string;
  description: string | number;
}

export const DlLIst = ({ term, description }: DlListProps) => {
  return (
    <dl>
      <dt>{term}</dt>
      <dd>{description}</dd>
    </dl>
  );
};
