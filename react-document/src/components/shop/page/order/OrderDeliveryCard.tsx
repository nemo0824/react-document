import React from 'react';
import type { OrderProps } from './OrderPage';
import { Card } from '../../common/Card';

interface OrderDeliveryProps {
  order: Pick<
    OrderProps,
    'deliveryAddress' | 'deliveryContact' | 'messageToShop' | 'messageToRider'
  >;
}

export const OrderDeliveryCard = ({ order }: OrderDeliveryProps) => {
  const { deliveryAddress, deliveryContact, messageToRider, messageToShop } =
    order;
  return (
    <Card
      data={[
        { term: '배달주소', description: deliveryAddress },
        { term: '전화번호', description: deliveryContact },
        { term: '가게사장님꼐', description: messageToShop },
        { term: '라이더님께', description: messageToRider },
      ]}
    ></Card>
  );
};
