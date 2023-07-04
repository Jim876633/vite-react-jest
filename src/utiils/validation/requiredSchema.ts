/* eslint-disable no-template-curly-in-string */
import * as yup from "yup";

export default (msg = "必填項目") =>
  yup.string().test({
    name: "requiredSchema",
    exclusive: true, //同名以此為主
    params: { msg },
    message: `${msg}`,
    test: (value) => {
      return value !== "" && value !== undefined;
    },
  });
