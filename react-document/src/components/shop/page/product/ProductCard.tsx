import React from 'react';
import type { BookType } from '../../../../mock/bookApi';
import { Button } from '../../common/Button';

interface ProductCardProps {
  book: BookType;
  onClick?: () => void;
}

export const ProductCard = ({ book, onClick }: ProductCardProps) => {
  return (
    <article className="w-full flex rounded shadow bg-white">
      <div className="w-3/4 flex flex-col px-2">
        <h1>{book.title}</h1>
        <h2>{book.subTitle}</h2>
        <p>
          {book.author} | {book.publisher}
        </p>
        <div className="mt-auto">
          {onClick && (
            <Button onClick={onClick} size="sm" styleColor="primary">
              구매버튼
            </Button>
          )}
        </div>
      </div>
      <div className="w-1/4">
        <img src={book.coverImgUrl} alt={book.title}></img>
      </div>
    </article>
  );
};
