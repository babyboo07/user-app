import React, { useEffect, useState } from 'react';
import { Avatar, Layout, Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faHeart, faLocationDot, faTruckFast, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { faRocketchat } from '@fortawesome/free-brands-svg-icons';
import { useSelector } from 'react-redux';
import { getAuthSelector } from "../Redux/auth/selectors";
import siteConfig from '../siteConfig';
const { Sider } = Layout;

const SideBar = (props) => {
    const auth = useSelector(getAuthSelector);
    const [user, setUser] = useState(null);
    const location = useLocation();

    useEffect(() => {
        setUser(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null)
    }, [auth])

    let locationSplit = location.pathname.split("/");
    return (
        <div>
            <div className='d-inline-flex mt-1'>
                <Avatar style={{ width: 56, height: 56 }} alt="Remy Sharp" src={siteConfig.apiRoot + user?.imgPath} />
                <div className=''>
                    <p className='mb-0 ms-1 product-sell'>Tài khoản của</p>
                    <p className='m-1'>{user?.fullName}</p>
                </div>
            </div>
            <Sider width={200} collapsed={props.isCollapse} className="site-layout-background mt-2 me-2">
                <Menu theme="light"
                    style={{
                        height: '100%',
                        borderRight: 0,
                        backgroundColor: '#f0f2f5',
                    }}
                    mode="inline"
                    id="sidebar"
                    selectedKeys={[locationSplit.length >= 1 ? locationSplit[locationSplit.length - 2].toLocaleLowerCase() : '']}
                >
                    <Menu.Item key="userdetail">
                        <NavLink to={'/user/userdetail/'+ user?.id} style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faUserAstronaut} className='pe-2' />
                            <span>Thông tin tài khoản</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="myorder">
                        <NavLink to={"/user/myorder/"+ user?.id} style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faBox} className='pe-2' />
                            <span>Quản lý đơn hàng</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="address">
                        <NavLink to={"/user/address/"+ user?.id} style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faLocationDot} className='pe-2' />
                            <span>Số địa chỉ</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="productlover" >
                        <NavLink to={"/user/productlover/"+ user?.id} style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faHeart} className='pe-2' />
                            <span>Sản phẩm yêu thích</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="productevaluate">
                        <NavLink to={"/user/productevaluate/"+ user?.id} style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faRocketchat} className='pe-2' />
                            <span>Nhận xét của tui</span>
                        </NavLink>
                    </Menu.Item>
                </Menu>
            </Sider>
        </div>
    );
}

export default SideBar;