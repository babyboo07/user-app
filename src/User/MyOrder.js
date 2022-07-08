import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Image } from "antd";
import { Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Input } from "antd";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPurchasedProSelector } from "../Redux/PurchasedProduct/selectors";
import { getAllOrders, getPurchasedProduct } from "../Redux/PurchasedProduct/actions";
import siteConfig from "../siteConfig";
import defaultImg from "../Image/Notfound.jpg";

const MyOrder = () => {
  const [value, setValue] = useState("0");
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getAllPurchasedpro = useSelector(getPurchasedProSelector);
  const { order , purchasedPro } = getAllPurchasedpro;
  const orderTitle = ["Tất cả đơn", "Đang xử lý", "Đang vận chuyển", "Đã giao hàng thành công", "Đã hủy" , "Hoàn trả"];
  const [item, setItem] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if(newValue == 0){
      dispatch(getAllOrders({id:id}))
    }
    dispatch(getPurchasedProduct({ userId: id, status: newValue}))
  };

  useEffect(() => {
    if(value == "0" && order?.length > 0){
      setItem(order);
      return;
    }
    setItem(purchasedPro);  
  },[getAllPurchasedpro]);

  useEffect(() => {
    if(value == "0" && order?.length > 0){
      setItem(order);
      return;
    }
    setItem(purchasedPro);  
  },[value]);

  const onClickAddcart=()=>{

  }

  return (
    <div className="ms-2 p-3">
      <div className="body-content mt-1 ">
        <h4 className="fw-light">Đơn hàng của tôi</h4>
      </div>
      <div>
        <div>
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
              centered
            >
              <Tab value="0" label="Tất cả đơn" />
              <Tab value="1" label="Đang xử lý" />
              <Tab value="2" label="Đang vận chuyển" />
              <Tab value="3" label="Đã giao" />
              <Tab value="4" label="Đã hủy" />
              <Tab value="5" label="Hoàn trả" />
            </Tabs>
          </Box>
        </div>

        <div>
          <Input
            size="large"
            placeholder="Tìm đơn hàng theo mã đơn hàng, nhà bán và tên sản phẩm"
            prefix={<FontAwesomeIcon icon={faMagnifyingGlass} color={"#cecece"} />}
          />
        </div>
      </div>
      <div className="site-card-border-less-wrapper">
        {item.length > 0 && item.map((p) => (
          <Card key={p.orderId} size="small" className="mt-2" title={orderTitle[p.status]}>
            <div className="row col-12">
              <div className="col-6 ">
                <div className="d-inline-flex">
                  {p.path ? (
                    <Image width={100} height={100} src={siteConfig.apiRoot + p.path} />
                  ) : (
                    <Image width={100} height={100} src={defaultImg} />
                  )}
                  <div className="m-1">
                    <span>{p.name}</span>
                    <br />
                    <span>
                      <FontAwesomeIcon icon={faHouse} color={"#cecece"} /> Shop
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6 ">
                <span className="d-flex justify-content-end pt-1">
                  {(((p.price * (100 - p.discount)) / 100) * p.orderQty)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  &#8363;
                </span>
              </div>
            </div>
            <hr></hr>
            <div className="float-end">
              <h6 className="ms-3" style={{ fontWeight: "inherit" }}>
                TỔNG TIỀN:{" "}
                <span>
                  {(((p.price * (100 - p.discount)) / 100) * p.orderQty + 10000)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  &#8363;
                </span>
              </h6>
              <Button className="btn-outline-info m-1" onClick={()=>navigate('/product/productdetail/'+p.productId)}>Mua lại</Button>
              <Button className="btn-outline-info m-1" onClick={()=>navigate('/user/productevaluate/'+p.userId)}>Đánh giá</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default MyOrder;
