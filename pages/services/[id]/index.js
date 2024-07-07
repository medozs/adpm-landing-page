"use client"
import React, { useEffect } from "react";
import { useProduct, useProductGallery, useProductSection } from "../../../hooks/api/home";
import { useRouter } from "next/router";
import { Container } from "../../../components/container";
import { HeroBanner } from "../../../components/hero";
import { baseURL } from "../../../utils";

const ServiceDetail = () => {
  const router = useRouter()
  const { id } = router.query

  const product = useProduct({enabled: id !== undefined})
  const productData = product?.data?.data?.data
  const productDetailData = productData?.filter(item => item?.id === 5)

  const section = useProductSection({enabled: id !== undefined}, id)
  const sectionData = section?.data?.data?.data
  

  const gallery = useProductGallery({enabled: id !== undefined}, id)
  const galleryData = gallery?.data?.data?.data
  
  return (
    <div className="">
      <HeroBanner
        title={productDetailData?.[0]?.name}
        img="bg-[url('/about.jpeg')]"
      />
      <Container className="my-20">
        {sectionData?.map((item, i) => (
          <div key={i} className="lg:flex lg:h-[400px]">
            <img src={baseURL + item.imageUrl} alt="" className={`lg:w-1/2 ${i % 2 === 0 ? "order-1" : "order-2"}`} />
            <div className={`lg:w-1/2 p-4 flex my-auto ${i % 2 !== 0  ? "order-1" : "order-2"}`}>
              {item.desc}
            </div>
          </div>
        ))}
        {/* <div className="font-bold text-2xl lg:text-4xl my-12">
          Product Gallery
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-3">
          {galleryData?.map((item, i) => (
            <img src={baseURL + item.imageUrl} alt="" className="object-cover h-32" />
          ))}
        </div> */}
      </Container>
    </div>
  )
};

export default ServiceDetail;
