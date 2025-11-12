import React from 'react';
import { Card } from '../../common/Card';
import { Button } from '../../common/Button';
import type { OrderProps } from './OrderPage';

interface OrderStatusProps {
  order: Pick<OrderProps, 'status' | 'name' | 'orderDate' | 'id'>;
}

export const OrderStatusCard = ({ order }: OrderStatusProps) => {
  const { status, name, orderDate, id } = order;
  return (
    <Card
      header={
        <>
          <strong>{status}</strong>
          <br />
          {name}
        </>
      }
      data={[
        { term: '주문일시', description: orderDate },
        { term: '주문번호', description: id },
      ]}
      footer={
        <div className="flex gap-2">
          <Button size="sm">전화</Button>
          <Button size="sm">가게보기</Button>
        </div>
      }
    ></Card>
  );
};
