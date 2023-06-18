import Home from '../views/home/Home'
import Products from '../views/products/Products'
import Product from '../views/product/Product'

const routes = [
  {
    name: 'home',
    path: '/',
    Component: Home
  },
  {
    name: 'products',
    path: '/products',
    Component: Products
  },
  {
    name: 'product',
    path: '/product/:id',
    Component: Product
  },
  {
    name: 'diary',
    path: '/diary',
    Component: Home
  },
  {
    name: 'user',
    path: '/user',
    Component: Home
  },
  {
    name: 'contact',
    path: '/contact',
    Component: Home
  }
]

export default routes