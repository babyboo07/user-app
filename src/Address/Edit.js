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
          <h4 className="fw-light p-0">Ch???nh s???a ?????a ch???</h4>
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
                label="H??? v?? t??n"
                name="receiverName"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input placeholder="Nh???p h??? v?? t??n" />
              </Form.Item>

              <Form.Item
                label="S??? ??i???n tho???i"
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: "H??y nh???p s??? ??i???n tho???i c???a ng?????i nh???n h??ng!",
                  },
                  {
                    pattern: new RegExp(/(0[3|5|7|8|9])+([0-9]{8})\b/),
                    message: "S??? ??i???n tho???i kh??ng ????ng v???i ?????nh d???ng",
                  },
                ]}
              >
                <Input placeholder="Nh???p s??? ??i???n tho???i" />
              </Form.Item>
              <Form.Item
                label="T???nh/Th??nh ph???"
                name="provinces"
                rules={[
                  {
                    required: true,
                    message: "H??y ch???n th??nh ph??? b???n mu???n giao h??ng!",
                  },
                ]}
                getValueFromEvent={(e) => {
                  let proObj = provinces.filter((item) => item.code === e);
                  return proObj[0].name;
                }}
              >
                <Select
                  placeholder="Ch???n T???nh/Th??nh ph???"
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
                label="Qu???n huy???n"
                name="districts"
                rules={[
                  {
                    required: true,
                    message: "H??y ch???n Qu???n Huy???n b???n mu???n giao h??ng!",
                  },
                ]}
                getValueFromEvent={(e) => {
                  let proObj = districts.filter((item) => item.code === e);
                  return proObj[0].name;
                }}
              >
                <Select
                  placeholder="Ch???n Qu???n Huy???n"
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
                label="Ph?????ng x??"
                name="wards"
                rules={[
                  {
                    required: true,
                    message: "H??y ch???n Ph?????ng X?? b???n mu???n giao h??ng!",
                  },
                ]}
                getValueFromEvent={(e) => {
                  let proObj = wards.filter((item) => item.code === e);
                  return proObj[0].name;
                }}
              >
                <Select placeholder="Ch???n Ph?????ng X??" onChange={handleChangeWard} value={ward}>
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

              <Form.Item label="?????a ch???" name='houseNumber'>
                <Input.TextArea placeholder="Nh???p ?????a ch???" />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 3,
                  span: 9,
                }}
              >
                <Checkbox>?????t l??m ?????a ch??? m???c ?????nh</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 3,
                  span: 9,
                }}
              >
                <Button size="large" className=" btn btn-warning" htmlType="submit">
                  C???p nh???t
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
