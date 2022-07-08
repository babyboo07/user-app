import { ExclamationCircleOutlined } from "@ant-design/icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Checkbox, Form, Image, InputNumber, Layout, message, Modal } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteCart, showCart } from "../Redux/cart/actions";
import { getCartSelector } from "../Redux/cart/selectors";
import siteConfig from "../siteConfig";
import defaultImg from "../Image/Notfound.jpg";

const Cart = () => {
  const { Content } = Layout;
  const { confirm } = Modal;
  const [checkAll, setCheckAll] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const cartSelector = useSelector(getCartSelector);
  const { detailCart } = cartSelector;

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    dispatch(showCart({ id: id }));
  }, []);

  useEffect(() => {
    setProductList(detailCart);
  }, [detailCart]);

  // console.log(cartSelector)

  const updateOrderList = (isChecked, item) => {
    let orderList =
      localStorage.getItem("orderList") !== null
        ? JSON.parse(localStorage.getItem("orderList"))
        : [];

    if (isChecked) {
      //add to localSt
      const existItem = orderList.filter((obj) => obj.id === item.id);
      if (existItem.length) {
        orderList = orderList.map((obj) => {
          if (obj.id === item.id) {
            obj.cartQty += item.cartQty;
          }
          return obj;
        });
      } else {
        orderList.push(item);
      }
    } else {
      // remove item in cart
      orderList = orderList.filter((obj) => obj.id !== item.id);
    }

    localStorage.setItem("orderList", JSON.stringify(orderList));
  };

  const onChange = (e, item) => {
    let list = [...productList];
    const isChecked = e.target.checked;
    // console.log(item);
    list = list.map((p) => {
      if (p.id === item.id) {
        p.isChecked = isChecked;
      }
      return p;
    });

    updateOrderList(isChecked, item);
    localStorage.setItem("detailCart", detailCart);

    setCheckAll(list.filter((p) => !p.isChecked).length === 0);
    setProductList(list);
  };

  const onCheckAllChange = (e) => {
    let list = [...productList];
    const isChecked = e.target.checked;
    list = list.map((p) => {
      p.isChecked = isChecked;

      updateOrderList(isChecked, p);
      return p;
    });

    setProductList(list);
    setCheckAll(isChecked);
  };

  const showDeleteConfirm = (p) => {
    confirm({
      title: "Xóa sản phẩm",
      icon: <ExclamationCircleOutlined />,
      content: "Bạn có chắc xóa sản phẩm này khỏi giỏ hàng không ?",
      okText: "Xác nhận",
      okType: "danger",
      cancelText: "Hủy",

      onOk() {
        dispatch(deleteCart({ id: p, userId: id }));
      },

      onCancel() {
        message.error("Sản phẩm không được xóa ra khỏi giỏ hàng");
      },
    });
  };

  return (
    <div className="p-3">
      <div className="body-content mt-4">
        <h4 className="mb-3">Giỏ hàng</h4>
      </div>
      <div className="body-content mt-2">
        <Content>
          <Layout className="site-layout-background">
            <Content
              className="bg-white"
              style={{
                padding: "16px",
              }}
            >
              <div className="row align-items-center">
                <div className="col-6">
                  <Checkbox onChange={onCheckAllChange} checked={checkAll}>
                    Tất cả ({productList.length} sản phẩm)
                  </Checkbox>
                </div>
                <div className=" col " style={{ fontSize: "14px" }}>
                  <span>Đơn hàng</span>
                </div>
                <div className=" col" style={{ fontSize: "14px" }}>
                  <span>Số lượng</span>
                </div>
                <div className=" col" style={{ fontSize: "14px" }}>
                  <span>Thành tiền</span>
                </div>
                <div className=" col-1">
                  <span>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>
            </Content>
            {productList &&
              productList.map((p) => {
                return (
                  <Content
                    className="bg-white mt-4"
                    key={p.cartId}
                    style={{
                      padding: "16px",
                    }}
                  >
                    <div className="row align-items-center" style={{ fontSize: "14px" }}>
                      <div className="col-6">
                        <Checkbox
                          className="p-1"
                          checked={p.isChecked}
                          onChange={(e) => {
                            onChange(e, p);
                          }}
                        />
                        {p.path ? (
                          <Image
                            className="pe-1"
                            width={80}
                            height={80}
                            src={siteConfig.apiRoot + p.path}
                          />
                        ) : (
                          <Image
                            className="pe-1"
                            width={80}
                            height={80}
                            alt="example"
                            src={defaultImg}
                          />
                        )}
                        <a>{p.name}</a>
                      </div>
                      <div className=" col ">
                        <span>
                          {((p.price * (100 - p.discount)) / 100)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          &#8363;{" "}
                        </span>
                        <span
                          className="text-decoration-line-through"
                          style={{ color: "rgb(153, 153, 153)" }}
                        >
                          {p.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}&#8363;
                        </span>
                      </div>
                      <div className=" col">
                        <InputNumber min={1} max={10} value={p.cartQty} />
                      </div>
                      <div className=" col">
                        <span>
                          {(((p.price * (100 - p.discount)) / 100) * p.cartQty)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          &#8363;
                        </span>
                      </div>
                      <div className="col-1 fs-6">
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => showDeleteConfirm(p.cartId)}
                        >
                          <FontAwesomeIcon icon={faTrashCan} />
                        </span>
                      </div>
                    </div>
                  </Content>
                );
              })}
            <Form className="pt-3">
              <Form.Item>
                <Button href={"/order/" + id} size="large" block type="primary" danger>
                  Mua Hàng
                </Button>
              </Form.Item>
            </Form>
          </Layout>
        </Content>
      </div>
    </div>
  );
};

export default Cart;
