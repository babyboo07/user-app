import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Layout } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Order from '../Order/Order';

const { Content, Footer } = Layout;

const OrderList = () => {
    return (
        <Layout className="layout">
            <Content>
                <div className='site-layout-content'>
                    <Routes>
                        <Route path='/orderlist' element={<Order />} />
                    </Routes>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ecommerce ©2022 Created by Babyboo with <FontAwesomeIcon icon={faHeart} color={"red"} /></Footer>
        </Layout>
    )
}

export default OrderList;