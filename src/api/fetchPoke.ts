const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

export const fetchPokeDetail = async (name: string) => {
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
