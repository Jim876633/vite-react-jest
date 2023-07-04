import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchPokeDetail } from "@/api/fetchPoke";
import styled from "./index.module.scss";

type pokeDetailType = {
  name: string;
  imgUrl: string;
};

export const ApiDetailPage = () => {
  const { name } = useParams();
  const { isLoading, data } = useQuery<pokeDetailType>(
    ["getPokeDetail", name],
    () => fetchPokeDetail(name as string)
  );
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (data) {
    return (
      <div className={styled.card}>
        <h3>{data.name}</h3>
        <img src={data.imgUrl} alt={data.name} />
      </div>
    );
  }
};
