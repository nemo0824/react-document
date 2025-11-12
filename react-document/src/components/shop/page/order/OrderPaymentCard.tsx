import React from 'react';
import { Card } from '../../common/Card';
import type { OrderProps } from './OrderPage';

interface OrderPaymentProps {
  order: Pick<
    OrderProps,
    | 'totalPrice'
    | 'paymentMethod'
    | 'productPrice'
    | 'deliveryPrice'
    | 'discountPrice'
  >;
}

export const OrderPaymentCard = ({ order }: OrderPaymentProps) => {
  const {
    totalPrice,
    paymentMethod,
    productPrice,
    deliveryPrice,
    discountPrice,
  } = order;
  return (
    <Card
      header={
        <>
          <h2>총 결제금액 : {totalPrice}</h2>
          <h2>결제 방법 : {paymentMethod}</h2>
        </>
      }
      data={[
        { term: '메뉴가격', description: productPrice },
        { term: '배달료', description: deliveryPrice },
        { term: '할인금액', description: discountPrice },
      ]}
    ></Card>
  );
};
