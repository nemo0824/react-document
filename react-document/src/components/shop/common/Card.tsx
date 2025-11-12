import React from 'react';
import { DlLIst } from '../page/order/DlLIst';

interface CardProps {
  header?: React.ReactNode;
  data: { term: string; description: string | number }[];
  footer?: React.ReactNode;
}

export const Card = ({ data = [], footer, header }: CardProps) => {
  return (
    <article className="mt-4 bg-white px-4 py-1">
      <header>{header}</header>
      <main>
        {data.map((list) => (
          <DlLIst
            key={`${list.term}-${list.description}`}
            term={list.term}
            description={list.description}
          />
        ))}
      </main>
      <footer>{footer}</footer>
    </article>
  );
};
