import styled from "./index.module.scss";

type propsType = {
  step: number;
};

const steps = [
  {
    id: 1,
    label: "1",
  },
  {
    id: 2,
    label: "2",
  },
  {
    id: 3,
    label: "3",
  },
];

export const Progress = ({ step }: propsType) => {
  return (
    <div className={styled.row}>
      {steps.map((el) => (
        <span className={el.id <= step ? styled.active : ""} key={el.id}>
          {el.label}
        </span>
      ))}
    </div>
  );
};
