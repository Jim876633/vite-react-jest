// import { useFetchPoke } from "@/api/fetchPoke";
import { useFetchPoke } from "@/api/fetchPoke";
import { Link } from "react-router-dom";

export const ApiPage = () => {
  const { isLoading, data } = useFetchPoke();

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
