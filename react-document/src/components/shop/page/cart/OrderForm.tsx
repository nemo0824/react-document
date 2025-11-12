import React from 'react';
import { FormControl } from '../../common/FormControl';

export const OrderForm = () => {
  return (
    // form name.  htmlFor id
    <form>
      <FormControl htmlFor="deliveryAddress" label="주소" required={true}>
        <input
          type="text"
          name="deliveryAddress"
          id="deliveryAddress"
          placeholder="배달받을 주소를 입력하세요"
          required
          autoFocus
        />
      </FormControl>
      <FormControl htmlFor="deliveryContact" label="연락처" required={true}>
        <input
          type="text"
          name="deliveryContact"
          id="deliveryContact"
          placeholder="연락처를 입력하세요"
          pattern="^\d{2,3}-\d{3,4}-\d{4}$"
          required
        />
      </FormControl>
      <FormControl htmlFor="paymentMethod" label="결제방법" required={true}>
        <select name="paymentMethod" id="paymentMethod" value="">
          <option value="마이페이">마이페이</option>
          <option value="만나서 결제">만나서 결제</option>
        </select>
      </FormControl>
      <FormControl htmlFor="messageToShop" label="가게사장님께">
        <textarea name="messageToShop" id="messageToShop"></textarea>
      </FormControl>
      <FormControl label="라이더님께" htmlFor="messageToRider">
        <textarea name="messageToRider" id="messageToRider"></textarea>
      </FormControl>
    </form>
  );
};
