import React from 'react'
import { useStateValue } from '../../context'
import Product from '../../components/product/Product';
import { FaArrowRightLong } from "react-icons/fa6";
import like from "../../assets/images/emptywishlist.png"


const Wishlist = () => {
    const [state, dispatch] = useStateValue()
    console.log(state.wishlist.lenght);


    return (
        <>

            <div className="container">
                <div className="category">
                    {
                        state.wishlist.lenght === 0 ?
                            <div>
                                <img src={like} alt="" />
                            </div>
                            :
                            <Product data={state.wishlist} />
                    }
                </div>
            </div>

        </>
    )
}

export default Wishlist