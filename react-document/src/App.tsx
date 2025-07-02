import { Title } from './components/shop/common/Title';
import { Button } from './components/shop/common/Button';
import { Navbar } from './components/shop/common/Navbar';
import { Layout } from './components/shop/common/layout';
function App() {
  return (
    <div className="flex justify-center items-center">
      <Layout header={<Title>wpahr</Title>} footer={<Navbar />}>
        <Button
          onClick={() => {
            console.log('click');
          }}
          size="sm"
          style="primary"
        >
          구매버튼
        </Button>
      </Layout>
    </div>
  );
}

export default App;
