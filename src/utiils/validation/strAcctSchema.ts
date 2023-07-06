import * as yup from "yup";

export default () =>
  yup.string().test({
    name: "twIdSchema",
    exclusive: true,
    params: {},
    message: "身分證號格式不合",
    test: (value) => {
      if (value === undefined) return false;
      const letters = "ABCDEFGHJKLMNPQRSTUVXYWZIO";
      const firstLetterIndex = letters.indexOf(value[0]);
      if (firstLetterIndex < 0) {
        return false;
      }
      let sum =
        Math.floor((firstLetterIndex + 10) / 10) +
        ((firstLetterIndex + 10) % 10) * 9;
      for (let i = 1; i < 9; i++) {
        sum += +value[i] * (9 - i);
      }
      sum += +value[9] * 1;
      return sum % 10 === 0;
    },
  });
