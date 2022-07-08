import { Breadcrumb, Button, Card, Col, InputNumber, Layout, Menu, Pagination, Rate, Row, Tabs } from "antd";
import { Link, useNavigate } from "react-router-dom";

const SearchProduct = () => {
    const { Content, Sider } = Layout;
    const { TabPane } = Tabs;
    const navigation = useNavigate();

    const onChange = (value) => {
        console.log('changed', value);
    };
    const onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
    };

    return (
        <div>
            <div className='body-content mt-4'>
                <Breadcrumb>
                    <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item>kết quả tìm kiếm</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='body-content mt-2'>
                <Content>
                    <Layout
                        className="site-layout-background"
                    >
                        <Sider className="site-layout-background p-3" width={250} theme={'light'}>
                            <h6 className="ps-2">Category</h6>
                            <ul
                                style={{
                                    listStyle: 'none'
                                }}
                                className='p-1'
                            >
                                <li>aaaa</li>
                            </ul>
                            <hr />
                            <h6 className="ps-2">Đánh giá</h6>
                            <ul
                                style={{
                                    listStyle: 'none'
                                }}
                                className='p-1'
                            >
                                <li><Link className="menu-item" to={'#'}><Rate disabled defaultValue={5} /> từ 5 sao </Link></li>
                                <li><Link className="menu-item" to={'#'}><Rate disabled defaultValue={4} /> từ 4 sao</Link></li>
                                <li><Link className="menu-item" to={'#'}><Rate disabled defaultValue={3} /> từ 3 sao</Link></li>
                            </ul>
                            <hr />
                            <h6 className="ps-2">Giá</h6>
                            <ul
                                style={{
                                    listStyle: 'none'
                                }}
                                className='p-1'
                            >
                                <li ><Button shape="round">Dưới 1.000.000</Button></li>
                                <li className="mt-2"><Button shape="round" >Từ 1.000.000 đến 2.500.000</Button></li>
                                <li className="mt-2"><Button shape="round" >Từ 2.500.000 đến 7.000.000</Button></li>
                                <li className="mt-2"><Button shape="round" >Trên 7.000.000</Button></li>
                                <li className="mt-2 ps-1">
                                    <span>Chọn khoảng giá</span>
                                </li>
                                <li className="mt-2">
                                    <InputNumber min={0} max={10} defaultValue={3} onChange={onChange} />
                                    &nbsp;&ndash;&nbsp;
                                    <InputNumber min={0} max={10} defaultValue={3} onChange={onChange} />
                                </li>
                                <li className="mt-2"><button className='btn btn-sm btn-outline-primary'>Áp dụng</button></li>
                            </ul>
                        </Sider>
                        <Content
                            className='bg-white'
                            style={{
                                padding: '0 24px',
                                minHeight: 280,
                            }}
                        >
                            <h5 className="pt-3">Kết quả tìm kiếm cho </h5>
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="Phổ biến" key="1">
                                    <Row gutter={16}>
                                        {new Array(20).fill(null).map((_, product) => (
                                            <Col key={product} span={4} xs={24} lg={6} md={8} sm={12}>
                                                <Link to={'/product/productdetail'} style={{ textDecoration: 'none' }}>
                                                    <Card
                                                        className="m-1"
                                                        hoverable
                                                        style={{ width: "auto", maxWidth: 240 }}
                                                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                                        bodyStyle={{ padding: 10 }}
                                                    >
                                                        <div>
                                                            <div className="product-title">
                                                                Thiên Tài Bên Trái,  Kẻ Điên Bên Phải (Tái Bản)
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <Rate allowHalf disabled={true} defaultValue={Math.floor(Math.random() * 6)} style={{ fontSize: 14 }} />
                                                            <span className="me-2 ms-2 text-muted">|</span>
                                                            <span>sale {Math.floor(Math.random() * 2001)}</span>
                                                        </div>
                                                        <div>
                                                            <span style={{ fontSize: 16 }}>125.300 &#8363;</span>
                                                            <span className="me-2 ms-2 price-sale"> -49%</span>
                                                        </div>
                                                    </Card>
                                                </Link>
                                            </Col>
                                        ))}
                                    </Row>
                                    <Pagination
                                        showSizeChanger
                                        onShowSizeChange={onShowSizeChange}
                                        defaultCurrent={1}
                                        total={500}
                                        className='pagination justify-content-end m-3'
                                    />
                                </TabPane>
                                <TabPane tab="Bán chạy" key="2">
                                </TabPane>
                                <TabPane tab="Hàng mới" key="3">
                                </TabPane>
                                <TabPane tab="Giá thấp" key="4">
                                </TabPane>
                                <TabPane tab="Giá cao" key="5">
                                </TabPane>
                            </Tabs>
                        </Content>
                    </Layout>
                </Content>
            </div>
        </div >
    );
}

export default SearchProduct;