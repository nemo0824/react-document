import React from 'react';
import { Layout } from '../../layout/Layout';
import { Title } from '../../common/Title';
import { Navbar } from '../../common/Navbar';
import { OrderStatusCard } from './OrderStatusCard';
import { OrderDeliveryCard } from './OrderDeliveryCard';
import { OrderPaymentCard } from './OrderPaymentCard';

const fakeOrder = {
  id: 'CACDA420',
  orderDate: '2023. 5. 13. 오후 1:37:51',
  status: '배달을 완료했어요',
  name: '짜장면',
  totalPrice: 7000,
  paymentMethod: '마이페이',
  productPrice: 6000,
  deliveryPrice: 3000,
  discountPrice: 2000,
  deliveryAddress: '서울특별시 송파구 잠실동 1번지',
  deliveryContact: '010-1111-2222',
  messageToShop: '포크는 주지 마세요',
  messageToRider: '안전하게 오세요',
};

export interface OrderProps {
  id: string;
  orderDate: string;
  status: string;
  name: string;
  totalPrice: number;
  paymentMethod: string;
  productPrice: number;
  deliveryPrice: number;
  discountPrice: number;
  deliveryAddress: string;
  deliveryContact: string;
  messageToShop: string;
  messageToRider: string;
}

export const OrderPage = () => {
  return (
    <Layout header={<Title>주문내역</Title>} footer={<Navbar />}>
      <OrderStatusCard order={fakeOrder} />
      <OrderPaymentCard order={fakeOrder} />
      <OrderDeliveryCard order={fakeOrder} />
    </Layout>
  );
};
