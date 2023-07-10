import { useFetchPokeDetail } from "@/api/fetchPoke";
import { useParams } from "react-router-dom";
import styled from "./index.module.scss";

export const ApiDetailPage = () => {
  const { name } = useParams();
  const { isLoading, data } = useFetchPokeDetail(name as string);
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
