import SubHeader from "@/components/container/header/SubHeader";
import NewMobilesContainer from "@/components/container/main/NewMobilesContainer";
import { Suspense } from "react";
import LoadingPage from "../(admin)/admin/loading";

const Home = async () => {
  return (
    <main className="main">
      <section className="layout container">
        <SubHeader />
      </section>
    </main>
  );
};
export default Home;
//  <Suspense fallback={<LoadingPage />}>
//    <div className="my-2 mt-4">
//      <h1>Top Mobiles</h1>
//    </div>
//    {/* @ts-expect-error Server Component */}
//    <NewMobilesContainer path="list" />
//    <div className="mb-2 mt-4">
//      <h1>New Mobiles</h1>
//    </div>
//    {/* @ts-expect-error Server Component */}
//    <NewMobilesContainer path="list" />
//  </Suspense>;
