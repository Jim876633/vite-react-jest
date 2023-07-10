import { useQuery } from "@tanstack/react-query";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

export const fetchPokeDetail = async (
  name: string
): Promise<{ name: string; imgUrl: string } | unknown> => {
  try {
    const res = await fetch(apiUrl + name);
    const data = await res.json();
    return {
      name,
      imgUrl: data.sprites.front_shiny,
    };
  } catch (err) {
    return err;
  }
};

export const fetchPoke = async () => {
  try {
    const res = await fetch(apiUrl + "?limit=10");
    const data = await res.json();
    return data.results;
  } catch (err) {
    return err;
  }
};

const useFetchPoke = () => useQuery<pokeType[]>(["getPoke"], fetchPoke);

const useFetchPokeDetail = (name: string) =>
  useQuery<pokeDetailType>(["getPokeDetail"], async () => {
    return (await fetchPokeDetail(name)) as pokeDetailType;
  });

export { useFetchPoke, useFetchPokeDetail };

type pokeType = {
  name: string;
};

type pokeDetailType = {
  name: string;
  imgUrl: string;
};
