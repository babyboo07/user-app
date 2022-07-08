import { HeartOutlined } from "@ant-design/icons";
import { Rating } from "@mui/material";
import { Breadcrumb, Button, Card, Col, Form, Image, InputNumber, Layout, Rate, Row } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetailProduct, getProduct } from "../Redux/product/actions";
import { getProductSelector } from "../Redux/product/selectors";
import siteConfig from "../siteConfig";
import defaultImg from "../Image/Notfound.jpg";
import { addCart } from "../Redux/cart/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { getProductLoverSelector } from "../Redux/productLover/selectors";
import { addProductLover, deleteProductLover } from "../Redux/productLover/actions";
import { getAuthSelector } from "../Redux/auth/selectors";
import { authenticate } from "../Redux/auth/actions";

const ProductDetail = () => {
  const { Content, Sider } = Layout;
  const { id } = useParams();
  const dispatch = useDispatch();
  const productData = useSelector(getProductSelector);
  const { detailProduct } = productData;
  const [img, setImg] = useState(defaultImg);
  const { product } = productData;
  const [formData, setFormData] = useState({ userId: 0, productId: id, cartQty: 1 });
  const lover = useSelector(getProductLoverSelector);
  const [user, setUser] = useState(null);
  const [isLover, setIsLover] = useState(false);
  const auth = useSelector(getAuthSelector);

  useEffect(() => {
    setUser(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null);
    dispatch(getDetailProduct({ id: id }));
    dispatch(getProduct());
    setFormData({ ...formData, userId: user?.id });
  }, [id]);

  useEffect(() => {
    if (detailProduct?.images.length) {
      setImg(detailProduct?.images[0].path);
    }
    if (user && detailProduct && user.id == detailProduct?.userId) {
      setIsLover(true);
    }
  }, [detailProduct]);

  const onClickLover = (userId, productId) => {
    const lovers = { userId: userId, productId: productId };
    dispatch(addProductLover(lovers));
  };

  const onClickUnLove = (userId, proLoverId) => {
    const unlovers = { userId: userId, proLoverId: proLoverId };
    // console.log(unlovers)
    dispatch(deleteProductLover(unlovers));
  };

  const addCarts = (data) => {
    data.userId = user?.id;
    data.productId = id;
    dispatch(addCart(data));
  };

  return (
    <div>
      {detailProduct ? (
        <>
          <div className="body-content mt-4">
            <Breadcrumb>
              <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
              <Breadcrumb.Item>{detailProduct.cateName}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="body-content mt-2">
            <Content>
              <Layout className="site-layout-background">
                <Sider className="site-layout-background p-3" width={420} theme={"light"}>
                  <div>
                    {detailProduct.images.length ? (
                      <Image
                        width={400}
                        height={400}
                        alt="example"
                        src={siteConfig.apiRoot + img}
                      />
                    ) : (
                      <img width={400} height={400} alt="example" src={defaultImg} />
                    )}
                    {detailProduct.images !== undefined && detailProduct.images && (
                      <ul className="fileList">
                        {detailProduct.images.map((i) => {
                          return (
                            <li key={i.id} className="fileItem p-1" onClick={() => setImg(i.path)}>
                              <img
                                width={400}
                                height={400}
                                src={siteConfig.apiRoot + i.path}
                                alt={"Product image"}
                              />
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </Sider>
                <Content
                  className="bg-white"
                  style={{
                    padding: "16px",
                    minHeight: 280,
                  }}
                >
                  <div>
                    <p className="product-name m-0">{detailProduct.name}</p>
                    <div className="d-flex">
                      <div className="d-flex align-items-center">
                        <Rating
                          name="read-only"
                          className="me-2"
                          value={detailProduct.evaluate}
                          readOnly
                          size="small"
                        />
                        <span className="product-sell me-2">
                          (Xem <span>3</span> đánh giá)
                        </span>
                        <span className="product-sell me-2">
                          Đã bán <span>3</span>
                        </span>
                      </div>
                      {isLover ? (
                        <FontAwesomeIcon
                          className="d-flex flex-row-reverse"
                          style={{ fontSize: "large", cursor: "pointer" }}
                          icon={faHeart}
                          color={"red"}
                          onClick={() => onClickUnLove(user?.id, detailProduct.proLoverId)}
                        />
                      ) : (
                        <HeartOutlined
                          className="d-flex flex-row-reverse"
                          style={{ fontSize: "large", cursor: "pointer" }}
                          onClick={() => onClickLover(user?.id, detailProduct.id)}
                        />
                      )}
                    </div>
                  </div>
                  <div className="mt-2">
                    <span style={{ fontSize: "large" }}>
                      {((detailProduct.price * (100 - detailProduct.discount)) / 100)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      &#8363;
                    </span>
                  </div>
                  <hr />
                  <div>
                    <Form layout="vertical" initialValues={formData} onFinish={addCarts}>
                      <Form.Item name="cartQty" label="Số lượng :">
                        <InputNumber
                          min={1}
                          max={20}
                          onChange={(value) => setFormData({ ...formData, cartQty: value })}
                        />
                      </Form.Item>

                      <Form.Item>
                        {auth.isAuth ? (
                          <Button
                            block
                            htmlType="submit"
                            // onClick={addCarts}
                            type="danger"
                            size="large"
                            style={{ width: "30%" }}
                          >
                            Chọn Mua
                          </Button>
                        ) : (
                          <Button
                            block
                            disabled
                            htmlType="submit"
                            // onClick={addCarts}
                            type="danger"
                            size="large"
                            style={{ width: "30%" }}
                          >
                            Chọn Mua
                          </Button>
                        )}
                      </Form.Item>
                    </Form>
                  </div>
                </Content>
              </Layout>
            </Content>
          </div>
        </>
      ) : null}
      <div className="body-content pt-3">
        <Content
          className="bg-white"
          style={{
            padding: "16px",
          }}
        >
          <h5>Sản phẩm tương tự</h5>

          <Row gutter={16}>
            {product.map((product, index) => (
              <Col key={index} span={4} xs={24} lg={6} md={8} sm={12}>
                <Link
                  to={`/product/productdetail/${product.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    className="m-1"
                    hoverable
                    style={{ width: "auto", maxWidth: 240, height: 330 }}
                    cover={
                      product.path ? (
                        <img
                          width={240}
                          height={240}
                          alt="example"
                          src={siteConfig.apiRoot + product.path}
                        />
                      ) : (
                        <img width={240} height={240} alt="example" src={defaultImg} />
                      )
                    }
                    bodyStyle={{ padding: 8 }}
                  >
                    <div>
                      <div className="product-title">{product.name}</div>
                    </div>
                    <div>
                      <Rate
                        allowHalf
                        disabled={true}
                        defaultValue={product.evaluate}
                        style={{ fontSize: 14 }}
                      />
                      <span className="me-2 ms-2 text-muted">|</span>
                      <span>Đã bán {Math.floor(Math.random() * 2001)}</span>
                    </div>
                    <div>
                      <span style={{ fontSize: 16 }}>
                        {((product.price * (100 - product.discount)) / 100)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                        &#8363;
                      </span>
                      <span className="me-2 ms-2 price-sale"> -{product.discount}%</span>
                    </div>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Content>
      </div>
    </div>
  );
};

export default ProductDetail;
