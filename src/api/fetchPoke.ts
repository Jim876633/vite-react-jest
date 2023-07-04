const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

export const fetchPokeDetail = async (name: string) => {
  const res = await fetch(apiUrl + name);
  const data = await res.json();
  return {
    name,
    imgUrl: data.sprites.front_shiny,
  };
};

export const fetchPoke = async () => {
  const res = await fetch(apiUrl + "?limit=10");
  const data = await res.json();
  return data.results;
};
