import { ProductPage } from './components/shop/page/product/ProductPage';
import { OrderPage } from './components/shop/page/order/OrderPage';
import { CartPage } from './components/shop/page/cart/CartPage';
function App() {
  const { pathname } = window.location;
  return (
    <>
      {pathname === '/order' && <OrderPage />}
      {pathname === '/cart' && <CartPage />}
      {!['/order', '/cart'].includes(pathname) && <ProductPage />}
    </>
  );
}

export default App;
