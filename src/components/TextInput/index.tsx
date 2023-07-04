import { ErrorMessage, useField } from "formik";
import styled from "./index.module.scss";

type propsType = {
  label: string;
  name: string;
  type: string;
};

export const TextInput = ({ label, ...props }: propsType) => {
  const [field, meta] = useField(props);
  return (
    <div className={styled.row}>
      <label htmlFor={label}>{label}：</label>
      <div className={styled.input_group}>
        <input
          {...field}
          {...props}
          id={label}
          className={meta.touched && meta.error ? styled.error : ""}
        />
        <ErrorMessage
          name={props.name}
          render={(msg: string) => <div className={styled.errorMsg}>{msg}</div>}
        />
      </div>
    </div>
  );
};
