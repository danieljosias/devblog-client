import Routes from './routes/index'
import { GlobalStyle }  from './styles/global'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Routes />
      <ToastContainer/>
    </div>
  );
}
export default App;
