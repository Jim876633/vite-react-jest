import { fetchPoke } from "@/api/fetchPoke";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type pokeType = {
  name: string;
};

export const ApiPage = () => {
  const { isLoading, data } = useQuery<pokeType[]>(["getPoke"], fetchPoke);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (data) {
    return (
      <div>
        {data.map((el) => (
          <div key={el.name}>
            <h3>
              <Link to={el.name}>{el.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    );
  }
};
