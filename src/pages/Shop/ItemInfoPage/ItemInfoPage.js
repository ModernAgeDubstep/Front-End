import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductAndPrice } from '../../../state/actions/index';

const ItemInfoPage = () => {
    // const productInfo = useSelector(state => state.productInfo);
    const dispatch = useDispatch();
    const Params = useParams();

    useEffect(() => {
        fetchProductAndPrice(dispatch, Params.productId)
    }, [Params.productId, dispatch])
    // Create the style for this page:
    // complete page features.
    // switch API endpoint to live version.
    return(
        <>
            <h1>Item Info Page</h1>
        </>
    )
}

export default ItemInfoPage;