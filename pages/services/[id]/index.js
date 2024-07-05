"use client"
import React, { useEffect } from "react";
import { useProduct, useProductSection } from "../../../hooks/api/home";
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
  
  return (
    <div className="">
      <HeroBanner
        title={productDetailData?.[0]?.name}
        img="bg-[url('/about.jpeg')]"
      />
      <Container className="my-20">
        {sectionData?.map((item, i) => (
          <div key={i} className="flex h-[400px]">
            <img src={baseURL + item.imageUrl} alt="" className={`w-1/2 ${i % 2 === 0 ? "order-1" : "order-2"}`} />
            <div className={`w-1/2 p-4 flex my-auto ${i % 2 !== 0  ? "order-1" : "order-2"}`}>
              {item.desc}
            </div>
          </div>
        ))}
      </Container>
    </div>
  )
};

export default ServiceDetail;
