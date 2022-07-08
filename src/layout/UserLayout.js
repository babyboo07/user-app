import React from 'react';
import { Breadcrumb, Layout} from 'antd';
import SideBar from './SideBar';
import { Content } from 'antd/lib/layout/layout';

const UserLayout = (props) => {
    return (
        <div className='bg-light body-content mt-2'>
            <Layout>
                <Breadcrumb>
                    <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item>Đơn hàng của tôi</Breadcrumb.Item>
                </Breadcrumb>
            </Layout>
            <Layout>
                <SideBar />
                <Content>
                    {props.children}
                </Content>
            </Layout>
        </div>
    );
}

export default UserLayout;