import { LockOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Avatar } from "@mui/material";
import { Button, DatePicker, Form, Input, Layout, Radio } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAuthSelector } from "../Redux/auth/selectors";
import { editUser, showUser, showUserFailure } from "../Redux/User/actions";
import { getUserSelector } from "../Redux/User/selectors";
import siteConfig from "../siteConfig";

const UserDetail = () => {
    const { Content } = Layout;
    const navigation = useNavigate();
    const [img, setImg] = useState([]);
    const dispatch = useDispatch();
    const userSelector = useSelector(getUserSelector);
    const { detailUser } = userSelector;
    const auth = useSelector(getAuthSelector);
    const [user, setUser] = useState(null);
    const { id } = useParams();

    const tailLayout = {
        wrapperCol: { offset: 14, span: 16 },
    };

    useEffect(() => {
        setUser(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null)
    }, [auth])

    useEffect(() => {
        dispatch(showUser({ id: id }))
        return () => {
            dispatch(showUserFailure())
        }
    }, [])

    const onFinish = (values) => {
        values.email = user?.email;
        values.phone = user?.phone;
        values.address = user?.address;
        values.roleId = user?.roleId;
        values.id = id;
        dispatch(editUser(values))
    }
    useEffect(() => {
        if (detailUser) {
            setImg(siteConfig.apiRoot + detailUser.imgPath);
        }
    }, [detailUser])

    let userDetail = detailUser ? { ...detailUser } : null;

    if (userDetail) {
        userDetail.dob = moment(userDetail.dob);
    }

    return (
        <div className="ms-2 p-3">
            <div className='body-content mt-1 '>
                <h4 className="fw-light">Thông tin tài khoản</h4>
            </div>
            <div className='body-content mt-2'>
                <Content>
                    <div
                        className="site-layout-background row bg-white m-0 p-2"
                    >
                        <div className="col-7">
                            <h6 className="fw-normal">Thông tin tài khoản</h6>
                            {userDetail ?
                                <div>
                                    <div className='row'>
                                        <Avatar alt={userDetail.fullName} className="col-4" sx={{ width: 150, height: 150 }} src={siteConfig.apiRoot + userDetail.imgPath} />
                                        <Form
                                            name="basic"
                                            className="col-8 p-0 px-2"
                                            initialValues={userDetail}
                                            autoComplete="off"
                                            onFinish={onFinish}
                                            labelCol={{
                                                span: 6,
                                            }}
                                            wrapperCol={{
                                                span: 18,
                                            }}
                                        >
                                            <Form.Item
                                                label="Họ &amp; tên"
                                                name='fullName'
                                            >
                                                <Input size={'middle'} />
                                            </Form.Item>
                                            <Form.Item
                                                label="Ngày sinh"
                                                name='dob'
                                                className="ps-2"
                                            >
                                                <DatePicker size={'middle'} />
                                            </Form.Item>
                                            <Form.Item
                                                label='Giới tính'
                                                name='gender'
                                            >
                                                <Radio.Group className="d-flex justify-content-evenly">
                                                    <Radio value={1}>Nữ</Radio>
                                                    <Radio value={2}>Nam</Radio>
                                                    <Radio value={3}>Khác</Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                            <Form.Item {...tailLayout} >
                                                <Button type="primary" htmlType="submit" >
                                                    Lưu thay đổi
                                                </Button>
                                            </Form.Item>
                                        </Form>
                                    </div>
                                </div> : null
                            }
                        </div>
                        <div className="col-5" style={{ borderLeft: '1px solid #cecece' }}>
                            <h6 className="pt-1 fw-normal">Số điện thoại và Email</h6>
                            <div className="p-3 pt-1">
                                <div className="row d-flex align-items-center">
                                    <div className="col-7 d-flex align-items-center">
                                        <div>
                                            <PhoneOutlined className="me-2" style={{ fontSize: '28px', color: '#cecece' }} />
                                        </div>
                                        <div>
                                            <p className="mb-0" style={{ fontSize: '14px' }}>Số điện thoại</p>
                                            {userDetail?.phone ?
                                                <p className="mb-0" style={{ fontSize: '14px' }}>{userDetail.phone}</p> :
                                                <p className="mb-0" style={{ fontSize: '14px' }}>Thêm số điện thoại</p>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <Link to={`/user/edit/phone/${user?.id}`}>
                                            <Button className="float-end rounded" ghost type="primary">Cập nhật</Button>
                                        </Link>
                                    </div>
                                </div>
                                <hr />
                                <div className="row d-flex align-items-center">
                                    <div className="col-7 d-flex align-items-center">
                                        <div>
                                            <MailOutlined className="me-2" style={{ fontSize: '28px', color: '#cecece' }} />
                                        </div>
                                        <div>
                                            <p className="mb-0" style={{ fontSize: '14px' }}>Địa chỉ email</p>
                                            {userDetail?.email ?
                                                <p className="mb-0" style={{ fontSize: '14px' }}>{userDetail?.email}</p> :
                                                <p className="mb-0" style={{ fontSize: '14px' }}>Thêm email</p>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <Link to={`/user/edit/email/${user?.id}`}>
                                            <Button className="float-end rounded" ghost type="primary">Cập nhật</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <h6 className="fw-normal">Bảo mật</h6>
                            <div className="row p-3 pt-0 d-flex align-items-center">
                                <div className="col-7 d-flex align-items-center">
                                    <div>
                                        <LockOutlined className="me-2" style={{ fontSize: '28px', color: '#cecece' }} />
                                    </div>
                                    <div>
                                        <p className="mb-0" style={{ fontSize: '14px' }}>Đổi mật khẩu</p>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <Link to={`/user/edit/password/${user?.id}`}>
                                        <Button className="float-end rounded" ghost type="primary">Cập nhật</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
            </div>
        </div >
    );
}

export default UserDetail;