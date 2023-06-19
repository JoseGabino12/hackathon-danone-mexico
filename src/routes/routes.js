import Home from '../views/home/Home'
import Products from '../views/products/Products'
import Product from '../views/product/Product'
import Diary from '../views/diary/Diary'
import User from '../views/user/User'

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
    Component: Diary
  },
  {
    name: 'user',
    path: '/user',
    Component: User
  },
  {
    name: 'contact',
    path: '/contact',
    Component: Home
  }
]

export default routes