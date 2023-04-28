import { NextApiRequest, NextApiResponse, NextPageContext } from "next";
import prismadb from "@/libs/prismadb";

import { getSession } from "next-auth/react";
import { without } from "lodash";

export default async function handler(context: NextPageContext, request: NextApiRequest, response: NextApiResponse) {
  try {
    if (request.method !== "POST") {
      return response.status(405).end();
    };

    const session = await getSession(context);

    if (!session?.user?.email) {
      throw new Error("Not signed in");
    };

    const { movieId } = request.body;

    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      }
    });

    if (!existingMovie) {
      throw new Error("Invalid ID");
    };

    const user = await prismadb.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!user) {
      throw new Error("Invalid email");
    };

    const updatedFavoriteIds = without(user.favoriteIds, movieId);

    const updatedUser = await prismadb.user.update({
      where: {
        email: session.user.email,
      },
      data: {
        favoriteIds: updatedFavoriteIds,
      }
    });

    return response.status(200).json(updatedUser);
  } 
  
  catch (error) {
    console.log(error);

    return response.status(500).end();
  }
};