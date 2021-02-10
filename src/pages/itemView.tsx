import React, { useEffect, FC } from 'react';
import IPage from '../interfaces/page';

const ItemView: FC<IPage> = props => {
    useEffect(() => {
        console.log(`Loading ${props.name}`);
    }, [props.name])

    return <p>This is the ItemView page!</p>
}

export default ItemView;