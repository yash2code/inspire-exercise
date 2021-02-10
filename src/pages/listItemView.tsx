import React, { useEffect, FC } from 'react';
import IPage from '../interfaces/page';

const ListItemView: FC<IPage> = props => {
    useEffect(() => {
        console.log(`Loading ${props.name}`);
    }, [props.name])

    return <p>This is the ListItemView page!</p>
}

export default ListItemView;