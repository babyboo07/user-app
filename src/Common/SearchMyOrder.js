import { Box } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SearchMyOrder = () => {
    const [value, setValue] = useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <div>
                <Box sx={{ width: '100%' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                        centered
                    >
                        <Tab value="1" label="Tất cả đơn" />
                        <Tab value="2" label="Đang xử lý" />
                        <Tab value="3" label="Đang vận chuyển" />
                        <Tab value="4" label="Đã giao" />
                        <Tab value="5" label="Đã hủy" />
                    </Tabs>
                </Box>
            </div>

            <div className=''>
                <Input size="large" placeholder="Tìm đơn hàng theo mã đơn hàng, nhà bán và tên sản phẩm"
                    prefix={<FontAwesomeIcon icon={faMagnifyingGlass} color={'#cecece'} />} />
            </div>
        </div>
    );
}

export default SearchMyOrder;