import { Button, Form, Input, Layout } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editPass } from "../Redux/User/actions";

const Password = () => {
    const { Content } = Layout;
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFinish = (data) => {
        data.id = id;
        dispatch(editPass(data, navigate, '/user/userdetail/' + id));
    }

    return (
        <div className="ms-2 p-3">
            <div className='body-content mt-1 '>
                <h4 className="fw-light">Thiết lập mật khẩu</h4>
            </div>
            <div className='body-content mt-2'>
                <Content
                    className='bg-white d-flex justify-content-center'
                    style={{
                        padding: '24px',
                        borderRadius: '0.75rem',
                    }}>
                    <div className="form-phone ">
                        <Form
                            className="pb-0"
                            layout="vertical"
                            autoComplete="off"
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="password"
                                label="Mật khẩu mới "
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label="Nhập lại mật khẩu mới"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }

                                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType="submit" block type="primary">Lưu thay đổi</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Content>
            </div>
        </div >
    );
}

export default Password;