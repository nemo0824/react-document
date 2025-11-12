import React, { useEffect, useState } from 'react';
import { fetchMockBooks } from '../../../../mock/bookApi';
import type { BookType } from '../../../../mock/bookApi';
import { Layout } from '../../layout/Layout';
import { Title } from '../../common/Title';
import { Navbar } from '../../common/Navbar';
import { ProductCard } from './ProductCard';

export const ProductPage = () => {
  const [books, setBooks] = useState<BookType[]>([]);
  const getBooks = async () => {
    try {
      const data = await fetchMockBooks();
      setBooks(data);
    } catch (err: unknown) {
      console.error('error', err);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <Layout header={<Title>상품 메뉴입니다</Title>} footer={<Navbar />}>
      <div className="mt-4 space-y-4">
        {books.map((book) => (
          <ProductCard
            key={book.id}
            book={book}
            onClick={() => console.log('clicked')}
          />
        ))}
      </div>
    </Layout>
  );
};
