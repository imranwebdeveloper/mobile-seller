import LoadingPage from "@/app/(admin)/admin/loading";
import SubHeader from "@/components/container/header/SubHeader";
import NewMobilesContainer from "@/components/container/main/NewMobilesContainer";
import React, { Suspense } from "react";

const BrandModelList = async ({ params }: { params: { brand: string } }) => {
  return (
    <div className="main">
      <section className="layout container">
        <SubHeader />
        <div className="mb-2 mt-4">
          <h1>{`${params.brand.toUpperCase()} MOBILES  `}</h1>
        </div>
        <Suspense fallback={<LoadingPage />}>
          {/* @ts-expect-error Server Component */}
          <NewMobilesContainer path={`list?brand=${params.brand}`} />
        </Suspense>
      </section>
    </div>
  );
};

export default BrandModelList;
