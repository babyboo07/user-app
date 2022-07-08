import { message, Modal, Rate } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductLoverSelector } from "../Redux/productLover/selectors";
import { useEffect, useState } from "react";
import { deleteProductLover, getProductLover } from "../Redux/productLover/actions";
import siteConfig from "../siteConfig";
import defaultImg from "../Image/Notfound.jpg";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const ProductLover = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const proLoverSelector = useSelector(getProductLoverSelector);
  const { productLover } = proLoverSelector;
  const [proLover, setProLover] = useState();
  const { confirm } = Modal;

  useEffect(() => {
    dispatch(getProductLover({ id: id }));
  }, []);

  useEffect(() => {
    setProLover(productLover);
  }, [productLover]);
  
  const showDeleteConfirm = (p) => {
    confirm({
      title: "Xóa sản phẩm",
      icon: <ExclamationCircleOutlined />,
      content: "Bạn có chắc xóa sản phẩm này khỏi yêu thích không ?",
      okText: "Xác nhận",
      okType: "danger",
      cancelText: "Hủy",

      onOk() {
        dispatch(deleteProductLover({ proLoverId: p ,  userId: id}));
      },

      onCancel() {
        message.error("Sản phẩm không được xóa ra khỏi yêu thích");
      },
    });
  };

  return (
    <div className="ms-2 p-3">
      <div className="body-content mt-1 ">
        <h4 className="fw-light">Danh sách yêu thích({productLover.length})</h4>
      </div>
      {proLover &&
        proLover.map((p) => {
          return (
            <div className="body-content mt-2" key={p.proLoverId}>
              <div className="bg-white p-1">
                <ul className="m-0 p-0">
                  <li className="item" >
                    <button value={p.proLoverId} className="btn-delete" onClick={()=>showDeleteConfirm(p.proLoverId)} >
                      <FontAwesomeIcon icon={faXmark}/>
                    </button>
                    <Link to={`/product/productdetail/${p.id}`} style={{ textDecoration: "none" }}>
                      <div className="d-inline-flex">
                        <div>
                          {p.path ? (
                            <img
                              width={130}
                              height={130}
                              className="img-productlover"
                              alt="product-lover"
                              src={siteConfig.apiRoot + p.path}
                            />
                          ) : (
                            <img
                              width={130}
                              height={130}
                              className="img-productlover"
                              alt="product-lover"
                              src={defaultImg}
                            />
                          )}
                        </div>
                        <div>
                          <span className="productlover-name">{p.name}</span>
                          <span style={{ fontSize: "12px" }}>
                            <Rate style={{ fontSize: "14px" }} value={5} /> (1832 nhận xét)
                          </span>
                        </div>
                      </div>
                      <div className="footer float-end">
                        <div className="price has-discount ">
                          {((p.price * (100 - p.discount)) / 100)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          &#8363;
                        </div>
                        <div className="wrap">
                          <div className="list-price">
                            {p.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}&#8363;
                          </div>
                          <div className="discount">-{p.discount}%</div>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductLover;
