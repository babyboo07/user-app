import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Layout, Radio, Space } from "antd";
import { formatCountdown } from "antd/lib/statistic/utils";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { parse } from "uuid";
import { addPurchasedProduct } from "../Redux/PurchasedProduct/actions";
import siteConfig from "../siteConfig";

const Order = () => {
  const { Header, Sider, Content } = Layout;
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [orderList, setOrderList] = useState();
  const [user, setUser] = useState();
  const navigate = useNavigate();
  var price = 0;
  const orderDate = new Date();
  const weekday = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ Nhật"];
  const deliveryDate =
    weekday[orderDate.getDay()] +
    ", " +
    (orderDate.getDate() + 3) +
    "/" +
    (1 + orderDate.getMonth()).toString();

  {
    orderList?.map((p) => (price += parseInt((p.price * (100 - p.discount)) / 100) * p.cartQty));
  }

  useEffect(
    () =>
      setOrderList(
        localStorage.getItem("orderList") ? JSON.parse(localStorage.getItem("orderList")) : null
      ),
    []
  );
  useEffect(
    () => setUser(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null),
    []
  );

  const onClickPay = (data) => {
    const orderData = data[0];
    orderData.userId = parseInt(id);
    orderData.status = 1;
    console.log(orderData);
    // if(orderData.orderDiscount = null){
    //   orderData.orderDiscount = 0;
    // }
    dispatch(addPurchasedProduct(orderData, navigate, "/"));
  };

  const onChangePay = (e) => {
    // console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <Layout>
      <Header className="bg-white row" style={{ height: "auto" }}>
        <div className="d-flex align-items-center col">
          <a href="/" className="mb-3">
            <img
              alt="logo"
              style={{ width: 60, height: 40 }}
              src="https://salt.tikicdn.com/ts/upload/1c/11/e6/d8211526b5bdc67aaaef2af9e8cf7dc8.png"
            />
          </a>
          <span className="divider"></span>
          <span className="fs-3 text-primary">Thanh toán</span>
        </div>
        <div className="col pt-2">
          <img
            className="float-end"
            alt="hotline"
            style={{ height: 60 }}
            src="https://salt.tikicdn.com/ts/upload/ae/b1/ea/65e64a529e4ff888c875129d3b11ff29.png"
          />
        </div>
      </Header>
      <Content
        style={{
          padding: "0 200px",
        }}
      >
        <Layout
          className="site-layout-background"
          style={{
            padding: "24px 0",
          }}
        >
          <Content>
            <Content
              className="bg-white "
              style={{
                padding: "24px",
                borderRadius: "0.75rem",
              }}
            >
              <h5 className="pt-2">Chọn hình thức giao hàng</h5>
              <div className="shipping-list d-flex align-items-center ">
                <Radio defaultChecked>
                  <img
                    className="mb-2"
                    height={20}
                    src="https://salt.tikicdn.com/ts/upload/2a/47/46/0e038f5927f3af308b4500e5b243bcf6.png"
                  />
                  <span className="ps-1  ">Giao Tiết Kiệm</span>
                </Radio>
              </div>
              <div className="shipping-item p-4 mt-5">
                <div className="d-flex align-items-center">
                  <div
                    className="d-flex p-2"
                    style={{
                      top: 0,
                      position: "absolute",
                      transform: "translateY(-50%)",
                      background: "#fff",
                    }}
                  >
                    <div
                      className="package-title me-1"
                      style={{
                        background: "rgb(239, 255, 244)",
                        border: "1px solid rgb(183, 239, 195)",
                        borderRadius: "6px",
                        padding: "4px 8px",
                      }}
                    >
                      <img
                        alt="tiki"
                        width="24"
                        height="24"
                        src="https://salt.tikicdn.com/ts/upload/ad/b7/93/7094a85d0b6d299f30ed89b03511deb9.png"
                      />
                      <span style={{ color: "rgb(16 181 104)" }}>Gói</span>
                    </div>
                    <span
                      className="package-leadTime"
                      style={{ padding: "4px", color: "rgb(16 181 104)" }}
                    >
                      Giao vào {deliveryDate}
                    </span>
                  </div>
                  <div className="align-items-center d-flex align-items-center justify-content-between w-100">
                    <div>
                      <img
                        alt="tiki"
                        className="mb-2"
                        height={20}
                        src="https://salt.tikicdn.com/ts/upload/2a/47/46/0e038f5927f3af308b4500e5b243bcf6.png"
                      />
                      <span className="ms-2">Giao Tiết Kiệm</span>
                    </div>
                    <div className="align-items-end">
                      <span>10.000 &#8363;</span>
                    </div>
                  </div>
                </div>
                {orderList?.map((p) => (
                  <div className="row">
                    <div className="col d-flex m-0 mt-2">
                      <div className="me-2">
                        <img alt="tiki" width={60} height={60} src={siteConfig.apiRoot + p.path} />
                      </div>
                      <div className="order-product" style={{ width: "50%" }}>
                        <span>{p.name}</span>
                        <div className="text-muted">
                          <span>SL:x{p.cartQty}</span>
                        </div>
                      </div>
                      <div className="col text-muted d-flex justify-content-end">
                        <span>
                          {(((p.price * (100 - p.discount)) / 100) * p.cartQty)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                          &#8363;
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Content>
            <Content
              className="bg-white mt-4"
              style={{
                padding: "24px",
                borderRadius: "0.75rem",
              }}
            >
              <h5>Chọn hình thức thanh toán</h5>
              <Radio.Group onChange={onChangePay} value={value}>
                <Space direction="vertical">
                  <Radio value={1}>
                    <img
                      alt="hand"
                      className="p-2"
                      src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-cod.svg"
                    />
                    Thanh toán tiền mặt khi nhận hàng
                  </Radio>
                  <Radio value={2}>
                    <img
                      alt="momo"
                      className="p-1"
                      src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-momo.svg"
                    />
                    Thanh toán bằng ví MOMO
                  </Radio>
                </Space>
              </Radio.Group>
            </Content>
          </Content>
          <div className="ps-4">
            <Sider
              className="site-layout-background bg-white"
              style={{
                padding: "10px",
              }}
              width={320}
            >
              <div className="d-flex justify-content-between p-1">
                <span className="text-muted p-1">Giao tới</span>
                <Link
                  to={"#"}
                  className="p-1"
                  style={{ fontSize: "small", textDecoration: "none" }}
                >
                  Thay đổi
                </Link>
              </div>

              <div
                className="d-flex align-items-center ps-2 fw-bolder"
                style={{
                  fontSize: "15px",
                }}
              >
                <span>Pham Ngoc Mai</span>
                <i className="address-i"></i>
                <span>0986855402</span>
              </div>
              <div
                className="text-muted mx-2"
                style={{
                  fontSize: "15px",
                }}
              >
                361 nguyễn khang, Phường Yên Hoà, Quận Cầu Giấy, Hà Nội
              </div>
            </Sider>
            <Sider
              className="site-layout-background bg-white mt-2"
              style={{
                padding: "10px",
              }}
              width={320}
            >
              <div className="d-flex justify-content-between p-1">
                <span>Đơn hàng</span>
                <Link
                  className="p-1"
                  to={`/user/cart/${id}`}
                  style={{ fontSize: "small", textDecoration: "none" }}
                >
                  Thay đổi
                </Link>
              </div>
              <div style={{ fontSize: "15px" }}>
                <span>1 sản phẩm.</span>
                <a className="ms-2" style={{ textDecoration: "none" }}>
                  Thông tin chi tiết <FontAwesomeIcon icon={faAngleDown} />
                </a>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <span className="text-muted">Tạm tính</span>
                <span>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} &#8363;</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="text-muted">Phí vận chuyển</span>
                <span>10.000 &#8363;</span>
              </div>
              <hr />
              <div className="row">
                <div className="col">
                  <span className="text-muted w-100">Tổng tiền</span>
                </div>
                <div className="col">
                  <span className="fs-4 text-danger float-end">
                    {(price + 10000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} &#8363;
                  </span>
                </div>
                <span className="text-end text-muted" style={{ fontSize: "small" }}>
                  (Đã bao gồm VAT nếu có)
                </span>
              </div>
              <Button
                onClick={() => onClickPay(orderList)}
                className="mt-3"
                size="large"
                block
                type="primary"
                danger
              >
                {" "}
                Đặt hàng
              </Button>
            </Sider>
          </div>
        </Layout>
      </Content>
    </Layout>
  );
};

export default Order;
