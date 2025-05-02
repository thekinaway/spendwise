import { Header } from '../widgets/header/Header';

import './styles/main.scss'
import '../../node_modules/celestia-ui-kit-v2/dist/celestia-ui-kit-v2.css'
import { Home } from '../pages/expenses/Home';
import { Layout } from './providers/Layout';

const App: React.FC = () => {
  return (
    <>
    <Header />
    <Layout>
      <div>
      <Home />

      </div>
    </Layout>
    </>
  )
}

export default App;
