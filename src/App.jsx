import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductDetail from './components/ProductDetail';
import PageNotFound from './pages/PageNotFound';
import CartPage from './pages/CartPage';
import CheckOutPage from './pages/CheckOutPage';
import { CartProvider } from './components/CartContext';
import EmptyCartPage from './pages/EmptyCartPage';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="productspage" element={<ProductsPage />} />
        <Route path="productdetail" element={<ProductDetailPage />} />
        <Route path="product-detail/:productId" element={<ProductDetail />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckOutPage />} />
        <Route path="emptycart" element={<EmptyCartPage />} />
        {/* catch all route */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
