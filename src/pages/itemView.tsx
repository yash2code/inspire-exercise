import React, { useEffect, FC, useState } from 'react';
import IPage from '../interfaces/page';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { getLiteratureItem } from '../config/utils';
import Row from 'antd/lib/row';
import Title from 'antd/lib/typography/Title';
import { LeftOutlined } from '@ant-design/icons'
import Col from 'antd/lib/col';
import Card from 'antd/lib/card';

const ItemView: FC<IPage & RouteComponentProps<any>> = props => {
    const [message, setMessage] = useState<string>('');
    const [item, setItem] = useState<any | {}>(null)

    useEffect(() => {
        console.log(`Loading ${props.name}`);
        let id = props.match.params.id;

        if (id) {
            getLiteratureItem(id).then((res) => {
                setItem(res.data);
            })
        }
        else {
            setMessage(`No id provided!`);
        }
    }, [props])


    return <>
        <Row>
            <Col span={5} offset={5}>
                <Title level={5}><LeftOutlined style={{ color: '#1890ff' }} /><Link to='/'>{"Back to Search results"}</Link></Title>
            </Col>
        </Row>
        <Row justify="center">
            <Col md={12} sm={12}>

                {item && (
                    <>
                        <Card
                            style={{ width: 650 }}
                            title={<Link to={`/item/${item.id}`}>{item.metadata.titles[0].title}</Link>}
                        >
                            {" "}
                            {item.metadata.abstracts[0].value}{" "}
                        </Card>
                    </>
                )}
            </Col>
        </Row>
    </>
}

export default withRouter(ItemView);