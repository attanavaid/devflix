import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import Image from "next/image";
import logo from "../public/images/logo.png";

import useCurrentUser from "@/hooks/useCurrentUser";

const images = [
  "/images/profile_blue.png",
  "/images/profile_red.png",
  "/images/profile_gray.png",
  "/images/profile_green.png"
]

interface UserCardProps {
  name: string;
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

const UserCard = ({ name }: UserCardProps) => {
  const imgSrc = images[Math.floor(Math.random() * 4)];

  return (
    <div className="group flex-row w-44 mx-auto">
        <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
          <Image
            draggable={false}
            className="w-max h-max object-contain"
            src={imgSrc}
            alt="Profile Image"
            width={172}
            height={172}
          />
        </div>

      <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
        {name}
      </div>
   </div>
  );
}

const App = () => {
  const router = useRouter();
  const { data: currentUser } = useCurrentUser();

  const selectProfile = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <>
      <nav className="px-12 py-5">
        <Image src={logo} className="h-12" alt="Logo" width={178} height={48}/>
      </nav>

      <div className="flex items-center pt-40 justify-center">
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-6xl text-white text-center">Who&#39;s watching?</h1>
          <div className="flex items-center justify-center gap-8 mt-10">
            <div onClick={() => selectProfile()}>
              <UserCard name={currentUser?.name} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;