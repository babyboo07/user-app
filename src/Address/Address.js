import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Layout } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAddress } from "../Redux/Address/actions";
import { getAddressSelector } from "../Redux/Address/selectors";

const Address = () => {
  const { Content } = Layout;
  const { id } = useParams();
  const dispatch = useDispatch();
  const addressSelector = useSelector(getAddressSelector);
  const { addressuser } = addressSelector;

  useEffect(() => {
    dispatch(getAddress({ id: id }));
  }, []);

  return (
    <div className="ms-2 p-3">
      <div className="body-content mt-1">
        <h4 className="fw-light p-0">Sổ địa chỉ</h4>
      </div>
      <div className="body-content">
        <Content
          style={{
            padding: "10px",
          }}
        >
          <div className="d-flex address-new">
            <Link to={"/user/address/add/"+id} style={{ textDecoration: "none" }}>
              <FontAwesomeIcon className="pe-1" icon={faPlus} />
              <span>Thêm địa chỉ mới</span>
            </Link>
          </div>
          {addressuser.map((p) => {
            return (
              <div key={p.id} className="bg-white row m-1 p-1 mt-1" style={{ fontSize: "15px" }}>
                <div className="col row d-flex">
                  <div>
                    <span className="me-2">{p.receiverName}</span>
                    <span className="align-items-center" style={{ color: "rgb(38, 188, 78)" }}>
                      <FontAwesomeIcon icon={faCircleCheck} /> Địa chỉ mặc định
                    </span>
                  </div>
                  <div className="pt-1">
                    <span className="text-muted">Địa chỉ: </span>
                    <span>{p.address_user}</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-muted">Số điện thoại: </span>
                    <span>{p.phoneNumber}</span>
                  </div>
                </div>
                <div className="col">
                  <Link
                    className="float-end"
                    style={{ textDecoration: "none" }}
                    to={"/user/address/edit/" + p.id}
                  >
                    Chỉnh sửa
                  </Link>
                </div>
              </div>
            );
          })}
        </Content>
      </div>
    </div>
  );
};

export default Address;
