import { Button, Checkbox, Form, Input, Layout, Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  detailAddress,
  editAddress,
  getDistricts,
  getProvinces,
  getWards,
} from "../Redux/Address/actions";
import { getAddressSelector } from "../Redux/Address/selectors";

const Edit = () => {
  const { Content } = Layout;
  const { Option } = Select;
  const dispatch = useDispatch();
  const { id } = useParams();
  const addressData = useSelector(getAddressSelector);
  const { addressdetails } = addressData;
  let addressDetail = addressdetails ? { ...addressdetails } : null;
  const [address, setAddress] = useState(null);
  const navigate= useNavigate();
  const { provinces, districts, wards } = addressData;
  const [province, setProvince] = useState(null);
  const [district, setDistrict] = useState(null);
  const [ward, setWard] = useState(null);

  useEffect(() => {
    if (addressdetails.length > 0) {
      setAddress(addressdetails[0]);
    }
  }, [addressdetails]);

  useEffect(() => {
    dispatch(detailAddress({ id: id }));
    dispatch(getProvinces());
  }, []);

  useEffect(() => {}, [districts]);

  const onFinish = (values) => {
    const addressUser =
      values.houseNumber + "," + values.wards + "," + values.districts + "," + values.provinces;
    values.userId = address.userId;
    values.address_user = addressUser;
    values.id = id;
    dispatch(editAddress(values,navigate));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChangeCity = (value) => {
    setProvince(value);
    setDistrict(null);
    setWard(null);
    dispatch(getDistricts(value));
  };

  const handleChangeDistrict = (value) => {
    setDistrict(value);
    setWard(null);
    dispatch(getWards(value));
  };

  const handleChangeWard = (value) => {
    setWard(value);
  };

  const renderForm = () => {
    if (!address) return;

    return (
      <div className="ms-2">
        <div className="body-content mt-1">
          <h4 className="fw-light p-0">Chỉnh sửa địa chỉ</h4>
        </div>
        <div className="body-content bg-white mt-2">
          <Content
            style={{
              padding: "24px",
            }}
          >
            <Form
              name="basic"
              labelCol={{
                span: 3,
              }}
              wrapperCol={{
                span: 9,
              }}
              initialValues={address}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Họ và tên"
                name="receiverName"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input placeholder="Nhập họ và tên" />
              </Form.Item>

              <Form.Item
                label="Số điện thoại"
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Hãy nhập số điện thoại của người nhận hàng!",
                  },
                  {
                    pattern: new RegExp(/(0[3|5|7|8|9])+([0-9]{8})\b/),
                    message: "Số điện thoại không đúng với định dạng",
                  },
                ]}
              >
                <Input placeholder="Nhập số điện thoại" />
              </Form.Item>
              <Form.Item
                label="Tỉnh/Thành phố"
                name="provinces"
                rules={[
                  {
                    required: true,
                    message: "Hãy chọn thành phố bạn muốn giao hàng!",
                  },
                ]}
                getValueFromEvent={(e) => {
                  let proObj = provinces.filter((item) => item.code === e);
                  return proObj[0].name;
                }}
              >
                <Select
                  placeholder="Chọn Tỉnh/Thành phố"
                  onChange={handleChangeCity}
                  value={province}
                >
                  {provinces ? (
                    provinces.map((d) => {
                      return (
                        <Option key={d.code} value={d.code}>
                          {d.name}
                        </Option>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </Select>
              </Form.Item>

              <Form.Item
                label="Quận huyện"
                name="districts"
                rules={[
                  {
                    required: true,
                    message: "Hãy chọn Quận Huyện bạn muốn giao hàng!",
                  },
                ]}
                getValueFromEvent={(e) => {
                  let proObj = districts.filter((item) => item.code === e);
                  return proObj[0].name;
                }}
              >
                <Select
                  placeholder="Chọn Quận Huyện"
                  onChange={handleChangeDistrict}
                  value={district}
                >
                  {districts &&
                    districts.map((d) => {
                      return (
                        <Option key={d.code} value={d.code}>
                          {d.name}
                        </Option>
                      );
                    })}
                </Select>
              </Form.Item>

              <Form.Item
                label="Phường xã"
                name="wards"
                rules={[
                  {
                    required: true,
                    message: "Hãy chọn Phường Xã bạn muốn giao hàng!",
                  },
                ]}
                getValueFromEvent={(e) => {
                  let proObj = wards.filter((item) => item.code === e);
                  return proObj[0].name;
                }}
              >
                <Select placeholder="Chọn Phường Xã" onChange={handleChangeWard} value={ward}>
                  {wards &&
                    wards.map((d) => {
                      return (
                        <Option key={d.code} value={d.code}>
                          {d.name}
                        </Option>
                      );
                    })}
                </Select>
              </Form.Item>

              <Form.Item label="Địa chỉ" name='houseNumber'>
                <Input.TextArea placeholder="Nhập địa chỉ" />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 3,
                  span: 9,
                }}
              >
                <Checkbox>Đặt làm địa chỉ mặc định</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 3,
                  span: 9,
                }}
              >
                <Button size="large" className=" btn btn-warning" htmlType="submit">
                  Cập nhật
                </Button>
              </Form.Item>
            </Form>
          </Content>
        </div>
      </div>
    );
  };

  return <div>{renderForm()}</div>;
};

export default Edit;
