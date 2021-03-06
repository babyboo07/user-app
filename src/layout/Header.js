import { Badge, Button, Col, Dropdown, Form, Input, Menu, PageHeader, Row, Space } from "antd";
import { Link, NavLink, useNavigate, useLocation, useParams } from "react-router-dom";
import "../Css/Header.css";
import { faSearch, faUser, faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../Redux/auth/actions";
import { getAuthSelector } from "../Redux/auth/selectors";
import { addUser } from "../Redux/User/actions";
import { getCartSelector } from "../Redux/cart/selectors";
import { showCart } from "../Redux/cart/actions";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#fff',
    width: '800px',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
    height: '600px'
};

const Header = (props) => {

    const [open, setOpen] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);
    const handleOpenLogin = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenRegister = () => setOpenRegister(true);
    const handleCloseRegister = () => setOpenRegister(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = useSelector(getAuthSelector);
    const [user, setUser] = useState(null);
    const [fullName, setFullname] = useState("");
    const cartSelector = useSelector(getCartSelector);
    const { detailCart } = cartSelector;
    const [productList, setProductList] = useState([]);

    const location = useLocation();

    useEffect(() => {
        setUser(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null)
    }, [auth])

    useEffect(() => {
        dispatch(showCart({ id: user?.id}));
    }, []);

    useEffect(() => {
        setProductList(detailCart);
    }, [detailCart]);

    const handleSubmit = (data) => {
        console.log(data)
        dispatch(login(data));
        handleClose();
    }

    const handleSubmitSignup = (data) => {
        data.role = 3;
        dispatch(addUser(data));
        handleOpenLogin();
        handleCloseRegister();
    }

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }


    const menu = (
        <Menu
            items={[
                {
                    label: (
                        <a className='menu-item' target="_blank" rel="noopener noreferrer" href={`/user/myorder/${user?.id}`}>
                            ????n h??ng c???a t??i
                        </a>
                    ),
                },
                {
                    label: (
                        <a className='menu-item' target="_blank" rel="noopener noreferrer" href="#">
                            Qu???n l?? ?????i tr???
                        </a>
                    ),
                },
                {
                    label: (
                        <a className='menu-item' target="_blank" rel="noopener noreferrer" href="#">
                            Th??ng b??o c???a t??i
                        </a>
                    ),
                },
                {
                    label: (
                        <Link className='menu-item' target="_blank" rel="noopener noreferrer" to={`/user/userdetail/${user?.id}`}>
                            T??i kho???n c???a t??i
                        </Link>
                    ),
                },
                {
                    label: (
                        <a className='menu-item' target="_blank" rel="noopener noreferrer" href="/user/productevaluate">
                            Nh???n x??t s???n ph???m ???? mua
                        </a>
                    ),
                },
                {
                    label: (
                        <button style={{ background: 'none', border: 'none' }}
                            onClick={() => {
                                localStorage.removeItem("token");
                                dispatch(logout())
                                navigate('/')
                            }}
                            className='menu-item p-0' target="_blank" rel="noopener noreferrer" href="/">
                            Tho??t t??i kho???n
                        </button>
                    ),
                },
            ]}
        />
    );
    const renderHeader = () => {
        return (
            location.pathname !== `/order/${user?.id}` ?
                <div className="header">
                    <PageHeader className="page-header p-0 pb-2">
                        <Row className="w-100">
                            <Col xs={3}>
                                <a href="/">
                                    <img alt="logo" src={'https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png'} width={70} />
                                </a>
                            </Col>
                            <Col xs={16} className="mt-1">
                                <Input placeholder="T??m s???n ph???m, danh m???c hay th????ng hi???u mong mu???n ..." className="w-100" />
                                <Button className="position-absolute" id="btn-search">
                                    <FontAwesomeIcon icon={faSearch} />
                                </Button>
                                <NavLink to={"/product/searchProduct"} style={{ textDecoration: 'none' }} className={"text-white"}>??o Nam</NavLink>
                                &emsp;
                                <NavLink to={"/product/searchProduct"} style={{ textDecoration: 'none' }} className={"text-white"}>Gi??y D??p</NavLink>
                            </Col>
                            <Col xs={3} className='mx-3'>
                                {auth.isAuth ?
                                    <Dropdown overlay={menu} >
                                        <a onClick={e => e.preventDefault()} style={{ textDecoration: 'none' }} className='text-white'>
                                            <Space >
                                                <FontAwesomeIcon icon={faUser} size="2x" />
                                                <div className="col-12 user">
                                                    <div>T??i kho???n</div>
                                                    <div>{user?.fullName} <FontAwesomeIcon icon={faChevronDown} /></div>
                                                </div>
                                            </Space>
                                        </a>
                                    </Dropdown> :
                                    <div>
                                        <NavLink onClick={handleOpenRegister} style={{ textDecoration: 'none' }} to={"#"} className={"text-light"}>Register /</NavLink>
                                        <NavLink onClick={handleOpenLogin} style={{ textDecoration: 'none' }} to={"#"} className={"text-light"}>Login</NavLink>
                                    </div>
                                }
                            </Col>
                            <Col xs={1}>
                                <div className="btn-cart">
                                    <Link to={`/user/cart/${user?.id}`} style={{ outline: 'none' }}>
                                        <Badge count={productList.length}>
                                            <ShoppingCartOutlined style={{ color: '#ffffff', fontSize: '34px' }} />
                                        </Badge>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </PageHeader>

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        sx={{}}
                    >
                        <Box sx={style} className='p-0'>
                            <Button className="close-btn bg-light" shape="circle" onClick={handleClose}>
                                <FontAwesomeIcon icon={faXmark} size="lg" />
                            </Button>
                            <div className="row">
                                <div className="col-8" style={{ padding: '24px' }}>
                                    <div className="p-4">
                                        <h4>Xin Ch??o,</h4>
                                        <span>????ng nh???p v??o t??i kho???n</span>
                                    </div>
                                    <div className="px-4">
                                        <Form
                                            onFinish={handleSubmit}
                                            initialValues={{
                                                email,
                                                password
                                            }}>
                                            <Form.Item
                                                name='email'
                                                rules={[{
                                                    required: true,
                                                    message: 'Email kh??ng ???????c ????? tr???ng'
                                                },
                                                {
                                                    pattern: new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
                                                    message: 'Email kh??ng ????ng v???i ?????nh d???ng'
                                                }
                                                ]}
                                            >
                                                <Input value={email}
                                                    size="large"
                                                    placeholder="Email@gmail.com"
                                                    onChange={(e) => setEmail(e.target.value)} />
                                            </Form.Item>
                                            <Form.Item
                                                name='password'
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'M???t kh???u kh??ng ???????c ????? tr???ng',
                                                    },
                                                ]}
                                            >
                                                <Input.Password value={password}
                                                    size="large"
                                                    placeholder="M???t kh???u"
                                                    onChange={(e) => setPassword(e.target.value)} />
                                            </Form.Item>
                                            <Form.Item className="mt-2">
                                                <Button size="large" type="primary" block danger htmlType="submit" disabled={!validateForm()}>
                                                    ????ng nh???p
                                                </Button>
                                            </Form.Item>
                                        </Form>

                                        <div className="text-center p-4" style={{ marginTop: 50 }}>
                                            <p className='social-heading'><span>Ho???c ti???p t???c b???ng</span></p>
                                            <ul className="social__items">
                                                <li className="social__items mx-1">
                                                    <img width={"58"} height={"58"} src="https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png" alt="facebook" />
                                                </li>
                                                <li className="social__items mx-1">
                                                    <img width={"58"} height={"58"} src="https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png" alt="google" />
                                                </li>
                                            </ul>
                                            <p className='note'>B???ng vi???c ti???p t???c, b???n ???? ch???p nh???n
                                                <a href="#"> ??i???u kho???n s??? d???ng</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 bg-login">
                                    <div>
                                        <img width={'203px'} alt='logo' src='https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png' />
                                    </div>
                                    <div className="text-center pt-3 content">
                                        <h4>Mua s???m t???i Tiki</h4>
                                        <span>Si??u ??u ????i m???i ng??y</span>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </Modal>

                    <Modal
                        open={openRegister}
                        onClose={handleCloseRegister}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style} className='p-0'>
                            <Button className="close-btn bg-light" shape="circle" onClick={handleCloseRegister}>
                                <FontAwesomeIcon icon={faXmark} size="lg" />
                            </Button>
                            <div className="row">
                                <div className="col-8" style={{ padding: '24px' }}>
                                    <div className="p-4">
                                        <h4>T???o t??i kho???n</h4>
                                        <span>H??y tham gia c??ng Tiki n??</span>
                                    </div>
                                    <div className="px-4">
                                        <Form
                                            onFinish={handleSubmitSignup}
                                        >
                                            <Form.Item
                                                name='fullName'
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'T??n kh??ng ???????c ????? tr???ng',
                                                    },
                                                ]}
                                            >
                                                <Input value={fullName}
                                                    onChange={(e) => setFullname(e.target.value)}
                                                    placeholder="T??n c???a b???n" size="large" />
                                            </Form.Item>
                                            <Form.Item
                                                name='email'
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Email kh??ng ???????c ????? tr???ng',
                                                    },
                                                    {
                                                        pattern: new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
                                                        message: 'Email kh??ng ????ng v???i ?????nh d???ng'
                                                    }
                                                ]}
                                            >
                                                <Input value={email}
                                                    size="large"
                                                    placeholder="Email@gmail.com"
                                                    onChange={(e) => setEmail(e.target.value)} />
                                            </Form.Item>
                                            <Form.Item
                                                name='password'
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'M???t kh???u kh??ng ???????c ????? tr???ng',
                                                    },
                                                ]}
                                            >
                                                <Input.Password value={password}
                                                    size="large"
                                                    placeholder="M???t kh???u"
                                                    onChange={(e) => setPassword(e.target.value)} />
                                            </Form.Item>
                                            <Form.Item className="mt-2">
                                                <Button size="large" type="primary" block danger htmlType="submit">
                                                    ????ng k??
                                                </Button>
                                            </Form.Item>
                                        </Form>

                                        <div className="text-center p-4" style={{ marginTop: 50 }}>
                                            <p className='social-heading'><span>Ho???c ti???p t???c b???ng</span></p>
                                            <ul className="social__items">
                                                <li className="social__items mx-1">
                                                    <img width={"58"} height={"58"} src="https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png" alt="facebook" />
                                                </li>
                                                <li className="social__items mx-1">
                                                    <img width={"58"} height={"58"} src="https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png" alt="google" />
                                                </li>
                                            </ul>
                                            <p className='note'>B???ng vi???c ti???p t???c, b???n ???? ch???p nh???n
                                                <a href="#"> ??i???u kho???n s??? d???ng</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 bg-login">
                                    <div>
                                        <img width={'203px'} alt='logo' src='https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png' />
                                    </div>
                                    <div className="text-center pt-3 content">
                                        <h4>Mua s???m t???i Tiki</h4>
                                        <span>Si??u ??u ????i m???i ng??y</span>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </Modal>
                </div>
                : <></>
        );
    }

    return renderHeader();
}

export default Header;