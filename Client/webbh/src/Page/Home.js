import React, { useEffect, useState } from "react";
import Header from "../Components/Layout/Header";
import SideBarRow1 from "../Components/SideBarRow1";
import DetailProduct from "./DetailProduct";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Meta from "antd/lib/card/Meta";
import { Card } from "antd";
import ModalProduct from "../Components/Layout/DetailProduct";
const Home = () => {
    const navi = useNavigate();

    const [listProduct, setListProduct] = useState();
    const [visible, setVisible] = useState(false);
    const [product, setProduct] = useState();

    useEffect(() => {
        async function getListProduct() {
            const reslut = await axios.get(
                "http://localhost:8080/api/demo/allProduct"
            );
            await setListProduct(reslut.data);
        }
        getListProduct();
    }, []);

    console.log(listProduct);

    const showModal = (e, id) => {
        e.preventDefault();
        setProduct(id);
        setVisible(true);
    };
    return (
        <div>
            <Header></Header>
            <div className='box-navbar'>
                <SideBarRow1 />
            </div>
            <div
                style={{
                    display: "grid",
                    gap: 20,
                    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
                    width: "120rem",
                    marginLeft: 100,
                    marginTop: 20,
                }}
            >
                {listProduct !== undefined &&
                    listProduct.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                hoverable
                                style={{
                                    width: 200,
                                }}
                                cover={
                                    <img
                                        style={{ height: 200, width: 200 }}
                                        alt='example'
                                        src={item.anhMinhHoa}
                                    />
                                }
                                onClick={(event) => showModal(event, item.id)}
                            >
                                <Meta
                                    title={item.tenSp}
                                    description={item.giaKM}
                                />
                            </Card>
                        );
                    })}
            </div>
            <ModalProduct
                visible={visible}
                onClose={() => setVisible(false)}
                product={product}
            />
        </div>
    );
};

export default Home;
