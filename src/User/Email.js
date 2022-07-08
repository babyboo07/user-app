import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, Input, Layout } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser, showUser } from "../Redux/User/actions";
import { getUserSelector } from "../Redux/User/selectors";

const Email = () => {

    const { Content } = Layout;
    const { id } = useParams();
    const userSelector = useSelector(getUserSelector);
    const { detailUser } = userSelector;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let userDetail = detailUser ? { ...detailUser } : null;

    useEffect(() => {
        dispatch(showUser({ id: id }))
    }, [])

    const onFinish = (value) => {
        value.fullName = userDetail.fullName;
        value.phone = userDetail.phone;
        value.roleId = userDetail.roleId;
        value.gender = userDetail.gender;
        value.id = id;
        dispatch(editUser(value,navigate,'/user/userdetail/'+id))
    }

    return (
        <div className="ms-2 p-3">
            <div className='body-content mt-1 '>
                <h4 className="fw-light">Cập nhật email</h4>
            </div>
            <div className='body-content mt-2'>
                <Content
                    className='bg-white d-flex justify-content-center'
                    style={{
                        padding: '24px',
                        borderRadius: '0.75rem',
                    }}>
                    {userDetail ?
                        <div className="form-phone ">
                            <Form
                                className="pb-0"
                                layout="vertical"
                                autoComplete="off"
                                initialValues={userDetail}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    label='Địa chỉ email'
                                    name='email'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Email không được để trống!',
                                        },
                                        {
                                            pattern: new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
                                            message: 'Email không đúng với định dạng'
                                        }
                                    ]}

                                >
                                    <Input prefix={<FontAwesomeIcon icon={faEnvelope} className='text-muted' />} type='email' placeholder="Nhập email" />
                                </Form.Item>
                                <Form.Item>
                                    <Button htmlType="submit" block type="primary">Lưu thay đổi</Button>
                                </Form.Item>
                            </Form>
                        </div> : null
                    }
                </Content>
            </div>
        </div >
    );
}

export default Email;