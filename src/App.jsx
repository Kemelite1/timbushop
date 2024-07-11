import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductDetail from './components/ProductDetail';




const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/productspage" element={<ProductsPage />} />
        <Route path="/productdetail" element={<ProductDetailPage />} />
        <Route path="/product-detail/:productId" element={<ProductDetail />} />
  
  
      </Route>
    )
  );
  
  return (
    <RouterProvider router={router} />
    
  );
}

export default App