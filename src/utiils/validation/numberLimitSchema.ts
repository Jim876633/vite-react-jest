import * as yup from "yup";
export default (type: "min" | "max" = "min", number = 0) =>
  yup.string().test({
    name: "number" + type,
    exclusive: true, //同名以此為主
    params: { type, number },
    message: `${type === "min" ? "請大於" : "不可大於"}${number}`,
    test: (value) => {
      if (value && type === "min") {
        return parseInt(value) > number;
      }
      if (value && type === "max") {
        return parseInt(value) <= number;
      }
    },
  });
