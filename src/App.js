import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Header  from './components/header';
import Login from './components/Login/login';
import SignUp from './components/SignUP/signUP'
import BuyerSignup from './components/SignUP/buyerSignup';
function App() {
  return (
    
    <>
    <BrowserRouter>
     <Header/>
    <Routes>
      <Route path="/" element={<h1>Wellcome To Car Service</h1>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/signup/buyer" element={<BuyerSignup/>}/>
    </Routes>
   
    </BrowserRouter>
    </>
      
  );
}

export default App;
