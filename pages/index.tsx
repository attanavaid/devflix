import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import movies from "./api/movies";

import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import InfoModal from "@/components/InfoModal";
import useMovieList from "@/hooks/useMovieList";
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

const Home = () => {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModalStore();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal}/>
      <Navbar/>
      <Billboard/>

      <div className="pb-40">
        <div className="pt-20"></div>
        <MovieList title="Trending Now" data={movies}/>
        <div className="pt-20"></div>
        <MovieList title="My Favorites" data={favorites}/>
      </div>
    </>
  );
};

export default Home;