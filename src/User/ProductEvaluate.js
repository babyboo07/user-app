import { faCamera, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar, Button, Card, Col, Form, Input, Layout, Rate, Row } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const { Content } = Layout;

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: '#fff',
    border: 'thin solid #cecece',
    borderRadius: 2,
    boxShadow: 24,
    p: 2,
};

const ProductEvaluate = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="p-3">
            <div className='body-content mt-1'>
                <h4 className="fw-light">Nhận xét sản phẩm đã mua</h4>
            </div>
            <div className='body-content mt-2'>
                <Content>
                    <Layout
                        className="site-layout-background"
                    >
                        <Content
                            className='bg-white'
                            style={{
                                padding: '16px',
                                minHeight: 280,
                            }}
                        >
                            <Row gutter={16}>
                                <Col>
                                    <Link to={''} style={{ textDecoration: 'none' }}>
                                        <Card
                                            className=""
                                            hoverable
                                            style={{ width: "auto", maxWidth: 220 }}
                                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                            bodyStyle={{ padding: 10 }}
                                        >
                                            <div>
                                                <div className="product-title">
                                                    Thiên Tài Bên Trái, Kẻ Điên Bên Phải (Tái Bản)
                                                </div>
                                            </div>
                                            <div>
                                                <Button block
                                                    className="rounded btn-warning"
                                                    style={{ boxShadow: 'none' }}
                                                    onClick={handleOpen} >Viết nhận xét</Button>

                                                <Modal
                                                    open={open}
                                                    onClose={handleClose}
                                                    aria-labelledby="modal-modal-title"
                                                    aria-describedby="modal-modal-description"
                                                >
                                                    <Box sx={style}>
                                                        <div className="row d-flex align-items-center">
                                                            <div className="col-10 d-flex align-items-center">
                                                                <Avatar shape="square" size="large" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                                                <div className="row ms-1">
                                                                    <span>Máy chơi game cầm tay sup 400 game</span>
                                                                    <span className="product-sell">Nhà bán vinet shop</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 text-end">
                                                                <FontAwesomeIcon size="lg" icon={faXmark} color={'#cecece'} onClick={handleClose} />
                                                            </div>
                                                            <div className="pt-1" >
                                                                <h5 className="text-center fw-normal">Vui Lòng Đánh Giá</h5>
                                                                <Rate className="d-flex justify-content-center" />
                                                                <Form className="pt-1">
                                                                    <Form.Item>
                                                                        <Input.TextArea style={{ minHeight: '180px' }} placeholder="Chia sẻ thêm thông tin sản phẩm" />
                                                                    </Form.Item>
                                                                    <Form.Item>
                                                                        <div className="row m-0">
                                                                            <Button size="large" type="primary" ghost className="col p-0 me-1"><FontAwesomeIcon icon={faCamera} className='me-1' />Thêm ảnh</Button>
                                                                            <Button size="large" type="primary" className="col p-0 ms-1">Viết nhận xét</Button>
                                                                        </div>
                                                                    </Form.Item>
                                                                </Form>
                                                            </div>
                                                        </div>
                                                    </Box>
                                                </Modal>
                                            </div>
                                        </Card>
                                    </Link>
                                </Col>
                            </Row>
                        </Content>
                    </Layout>
                </Content>
            </div>
        </div>
    );
}

export default ProductEvaluate;