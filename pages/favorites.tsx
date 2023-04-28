import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import movies from "./api/movies";

import Navbar from "@/components/Navbar";
import MovieList from "@/components/MovieList";
import InfoModal from "@/components/InfoModal";
import useFavorites from "@/hooks/useFavorites";
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

const Favorites = () => {
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModalStore();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal}/>
      <Navbar/>

      <div className="pt-20 pb-40">
        <MovieList title="My Favorites" data={favorites}/>
      </div>
    </>
  );
};

export default Favorites;