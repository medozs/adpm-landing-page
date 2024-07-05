import React, { useEffect, useState } from "react";
import { HeroBanner } from "../../components/hero";
import { Container } from "../../components/container";
import { ContactFooter } from "../../components/footer/contactFooter";
import { ProjectCard } from "../../components/card/projectCard";
import { serviceListLite } from "../../utils/dummyData";
import { useProduct, useProjectByProduct } from "../../hooks/api/home";
import { baseURL } from "../../utils";

const Projects = () => {
  const product = useProduct()
  const productData = product?.data?.data?.data
  const [isSelected, setSelected] = useState({ id: 4, isSelect: true });
  const project = useProjectByProduct({}, isSelected.id)
  const projectData = project?.data?.data?.data

  useEffect(() => {
    project.refetch()
  }, [isSelected])

  return (
    <>
      <HeroBanner
        title="Explore Our Projects"
        desc="From Vision to Reality Our Project Portfolio Delivers"
        img="bg-[url('/project.jpeg')]"
      />
      <Container>
        <div className="space-y-12 my-32 mb-64">
          <div className="font-bold text-3xl text-center">
            COMPANY COMITMENT
          </div>
          <div className="flex justify-between">
            {productData?.map((item, i) => (
              <div
                key={i}
                onClick={() =>
                  setSelected({ id: item.id, isSelect: isSelected.isSelect })
                }
                className={`${isSelected.isSelect && isSelected.id === item.id ? "bg-[#FFEBBB]" : "bg-white"} cursor-pointer shadow-md px-8 py-1 font-semibold`}
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-8">
            {projectData?.map((item, i) => (
              <ProjectCard
                img={baseURL + item.imageUrl}
                client={item.client}
                scope={item.scope}
                location={item.location}
              />
            ))}
          </div>
        </div>
      </Container>
      <ContactFooter />
    </>
  );
};

export default Projects;
