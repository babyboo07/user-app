import { Card, Carousel, Col, Rate, Row } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCateSelector } from "../Redux/category/selectors";
import { getParentCate } from "../Redux/category/actions";
import { getProductSelector } from "../Redux/product/selectors";
import { getProduct } from "../Redux/product/actions";
import siteConfig from "../siteConfig"
import defaultImg from "../Image/Notfound.jpg"

const gridStyle = {
    width: '20%',
    textAlign: 'center',
};

const Home = () => {
    const dispatch = useDispatch();
    const cateData = useSelector(getCateSelector);
    const { parentCate } = cateData;
    const productData = useSelector(getProductSelector);
    const { product } = productData;

    useEffect(() => {
        dispatch(getParentCate());
        dispatch(getProduct());
    }, [])


    return (
        <div>
            <div className="bg-white">
                <div >
                    <Carousel autoplay className="p-3 d-flex" style={{ margin: '0 auto', width: '1200px' }} >
                        <div className="px-5 w-100">
                            <img alt="img" src="https://salt.tikicdn.com/cache/w1080/ts/banner/bc/1b/18/f6604fc55cab2c6b9e78f158ab0be07e.jpg.webp" width={"100%"} height={'300px'} />
                        </div>
                        <div className="px-5">
                            <img alt="img" width={"100%"} height={'300px'} src="https://salt.tikicdn.com/cache/w1080/ts/banner/da/c8/32/45a9488c71e083948a3b151351727912.png" />
                        </div>
                        <div className="px-5">
                            <img alt="img" width={"100%"} height={'300px'} src="https://salt.tikicdn.com/cache/w1080/ts/banner/ce/cb/1d/7de641b4f662612ad3f8aa48173e6516.png.webp" />
                        </div>
                        <div className="px-5">
                            <img alt="img" width={"100%"} height={'300px'} src="https://salt.tikicdn.com/cache/w1080/ts/banner/cb/60/a4/c13e7591f0e839e39f220c4b3fec89a4.png.webp" />
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className="pt-3" style={{ maxWidth: '1200px', margin: '0 auto' }}>

                <Card title="Danh Mục Nổi Bật">
                    {parentCate.filter((item) => item.level === 1).map((parentCate, index) => (
                        <Card.Grid key={index} style={gridStyle}>
                            <Link className="text-body" style={{ textDecoration: 'none' }} to={'/product/searchProduct'}>
                                <p className="m-0">{parentCate.cateName}</p>
                            </Link>
                        </Card.Grid>
                    ))}
                </Card>
            </div>

            <div className="pt-3" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <Card title="Gợi Ý Hôm Nay">
                    <Row gutter={16}>
                        {product.map((product, index) => (
                            <Col key={index} span={4} xs={24} lg={6} md={8} sm={12}>
                                <Link to={`/product/productdetail/${ product.id}`} style={{ textDecoration: 'none' }}>
                                    <Card
                                        className="m-1"
                                        hoverable
                                        style={{ width: "auto", maxWidth: 240, height: 330 }}
                                        cover={product.path ? 
                                            <img width={240} height={240} alt="example" src={siteConfig.apiRoot + product.path} />:
                                            <img width={240} height={240} alt="example" src={defaultImg}/>
                                        }
                                        bodyStyle={{ padding: 8 }}
                                    >
                                        <div>
                                            <div className="product-title">
                                                {product.name}
                                            </div>
                                        </div>
                                        <div>
                                            <Rate allowHalf disabled={true} defaultValue={product.evaluate} style={{ fontSize: 14 }} />
                                            <span className="me-2 ms-2 text-muted">|</span>
                                            <span>Đã bán {Math.floor(Math.random() * 2001)}</span>
                                        </div>
                                        <div>
                                            <span style={{ fontSize: 16 }}>{(product.price * (100 - product.discount) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} &#8363;</span>
                                            <span className="me-2 ms-2 price-sale"> -{product.discount}%</span>
                                        </div>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Card>
            </div>
        </div>
    );
}

export default Home;