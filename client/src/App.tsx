import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { fetchData } from './redux/auth/authSlice';
import { AppDispatch, RootState } from './redux/store';
import { ActivationPage, HomePage, LoginPage, SignupPage, ProductPage, Top100Page, PromotionPage, FaqPage, ProductDetailPage, CheckOutPage, PaymentPage, ProfilePage, OrderSuccessPage } from "./routes";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/activation/:activationToken' element={<ActivationPage />} />
        <Route path='/product/' element={<ProductPage />} />
        <Route path='/product/:productId' element={<ProductDetailPage />} />
        <Route path='/top100/' element={<Top100Page />} />
        <Route path='/promotion/' element={<PromotionPage />} />
        <Route path='/faq/' element={<FaqPage />} />
        <Route path='/checkout/' element={<CheckOutPage />} />
        <Route path='/payment/' element={<PaymentPage />} />
        <Route path='/order/success/:id' element={<OrderSuccessPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
      <ToastContainer
        position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false}
        closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"
      />
    </BrowserRouter>
  )
}

export default App;
