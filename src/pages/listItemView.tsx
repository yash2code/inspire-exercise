import React, { useEffect, FC, useState } from 'react';
import { getLiteratureList } from '../config/utils';
import IPage from '../interfaces/page';
import Col from 'antd/lib/col'
import Space from 'antd/lib/space'
import Row from 'antd/lib/row'
import Card from "antd/lib/card";
import Title from 'antd/lib/typography/Title';
import { Link } from 'react-router-dom';
import Spin from 'antd/lib/spin';

const ListItemView: FC<IPage> = props => {
    const [list, setList] = useState<any | []>([]);
    const [total, setTotal] = useState<number>(0);
    const [loading, setLoading] = useState<boolean | undefined>(false)

    useEffect(() => {
        setLoading(true)
        getLiteratureList().then((res) => {
            setList(res.data);
            setTotal(res.total);
            setLoading(false)
        })
    }, []);

    useEffect(() => {
        console.log(`Loading ${props.name}`);
    }, [props.name])

    return <Spin spinning={loading}>
        <Row justify="center">
            <Title level={4}>Total results: {total}</Title>
        </Row>
        <Row justify="center">
            <Col md={12} sm={12}>
                <Space direction="vertical">
                    {list && (
                        <>
                            {list.map((m: any, index: number) => {
                                return (
                                    <Card
                                        key={index}
                                        style={{ width: 650 }}
                                        title={<Link to={`/item/${m.id}`}>{m.metadata.titles[0].title}</Link>}
                                    >
                                        {" "}
                                        {m.metadata.abstracts[0].value}{" "}
                                    </Card>
                                );
                            })}
                        </>
                    )}
                </Space>
            </Col>
        </Row></Spin>
}

export default ListItemView;