import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Header from '../layout/Header';
import Home from '../Home/Home';
import UserLayout from '../layout/UserLayout';
import SearchProduct from '../Product/SearchProduct';
import ProductDetail from '../Product/ProductDetail';
import MyOrder from '../User/MyOrder';
import UserDetail from '../User/UserDetail';
import ProductEvaluate from '../User/ProductEvaluate';
import Cart from '../User/Cart';
import Order from '../Order/Order';
import Phone from '../User/Phone';
import Email from '../User/Email';
import Password from '../User/Passwork';
import ReturnTracking from '../User/ReturnTracking';
import Address from '../Address/Address';
import Create from '../Address/Create';
import Edit from '../Address/Edit';
import ProductLover from '../User/ProductLover';
const { Content, Footer } = Layout;

const Normallayout = () => {
    return(
        <Layout className="layout">
        <Header />
          <Content>
            <div className="site-layout-content">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product/productdetail/:id' element={<ProductDetail />} />
                <Route path='/product/searchProduct' element={<SearchProduct />} />
                <Route path='/user/cart/:id' element={<Cart />} />
              </Routes>
              <Routes>
                <Route path='/user/myorder/:id' element={<UserLayout><MyOrder /></UserLayout>} />
                <Route path='/user/userdetail/:id' element={<UserLayout><UserDetail /></UserLayout>} />
                <Route path='/user/productevaluate/:is' element={<UserLayout><ProductEvaluate /></UserLayout>} />
                <Route path='/user/edit/phone/:id' element={<UserLayout><Phone /></UserLayout>} />
                <Route path='/user/edit/email/:id' element={<UserLayout><Email /></UserLayout>} />
                <Route path='/user/edit/password/:id' element={<UserLayout><Password /></UserLayout>} />
                <Route path='/user/return-tracking/:id' element={<UserLayout><ReturnTracking /></UserLayout>} />
                <Route path='/user/address/:id' element={<UserLayout><Address /></UserLayout>} />
                <Route path='/user/address/add/:id' element={<UserLayout><Create /></UserLayout>} />
                <Route path='/user/address/edit/:id' element={<UserLayout><Edit /></UserLayout>} />
                <Route path='/user/productlover/:id' element={<UserLayout><ProductLover /></UserLayout>} />
              </Routes>
            </div>
          </Content>
        <Footer style={{ textAlign: 'center' }}>Ecommerce ©2022 Created by Babyboo with <FontAwesomeIcon icon={faHeart} color={"red"} /></Footer>
      </Layout>
    )
}

export default Normallayout;