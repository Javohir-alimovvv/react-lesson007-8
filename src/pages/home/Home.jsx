import React, { memo } from 'react'
import Hero from '../../components/hero/Hero'
import Category from '../../components/category/Category'
import Qulayliklar from '../../components/qulayliklar/Qulayliklar'

const Home = () => {
    return (
        <>
            <Hero />
            <Category/>
            <Qulayliklar/>
            
        </>
    )
}

export default memo(Home)