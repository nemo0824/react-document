import { Title } from './components/shop/common/Title';
import { Button } from './components/shop/common/Button';

function App() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-sm min-h-screen mx-aut shadow-sm">
        <Title>상품 목록</Title>
        <Button
          onClick={() => {
            console.log('click');
          }}
          size="sm"
          style="primary"
        >
          구매버튼
        </Button>
      </div>
    </div>
  );
}

export default App;
