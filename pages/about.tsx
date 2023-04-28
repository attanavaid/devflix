import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

import Navbar from "@/components/Navbar";
import InfoModal from "@/components/InfoModal";
import useInfoModalStore from "@/hooks/useInfoModalStore";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      }
    };
  };

  return {
    props: {}
  };
};

const About = () => {
  const { isOpen, closeModal } = useInfoModalStore();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal}/>
      <Navbar/>

      <div className="pt-20 pb-40">
        <div className="px-4 md:px-12 mt-4 space-y-8">
          <div>
              <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
                About
              </p>

              <p className="text-white text-sm mb-4 pt-8">
                This website was created by Atta Navaid &copy; 2023. All rights reserved.
                <br/>
                This fullstack application was made using React with Typescript, Tailwind CSS, Next.js, Prisma, and MongoDB. 
                <br/>
                The repository for this app can be found on Atta Navaid&apos;s GitHub.
                <br/>
                The deployment of this app can be found on Vercel via the link on Atta Navaid&apos;s Portfolio.
              </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;