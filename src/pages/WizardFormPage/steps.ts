import * as Yup from "yup";
import requiredSchema from "@/utiils/validation/requiredSchema";
import strAcctSchema from "@/utiils/validation/strAcctSchema";
import { Step2 } from "./components/Step2";
import { Step1 } from "./components/Step1";
import { Step3 } from "./components/Step3";
import numberLimitSchema from "@/utiils/validation/numberLimitSchema";

export const steps = [
  {
    step: 1,
    initialValue: {
      firstName: "",
      lastName: "",
    },
    validation: Yup.object({
      firstName: requiredSchema().max(15, "不可大於 15 字"),
      lastName: requiredSchema().max(20, "不可大於 20 字"),
    }),
    component: Step1,
  },
  {
    step: 2,
    initialValue: {
      twId: "",
    },
    validation: Yup.object({
      twId: requiredSchema().concat(strAcctSchema()),
    }),
    component: Step2,
  },
  {
    step: 3,
    initialValue: {
      height: "",
      weight: "",
    },
    validation: Yup.object().shape({
      height: requiredSchema()
        .concat(numberLimitSchema())
        .concat(numberLimitSchema("max", 200)),
      weight: requiredSchema()
        .concat(numberLimitSchema())
        .concat(numberLimitSchema("max", 150)),
    }),
    component: Step3,
  },
];

export const initialValues = steps.reduce<initialValuesType>((acc, step) => {
  return { ...step.initialValue, ...acc };
}, {} as initialValuesType);

export type stepType = {
  step: number;
  initialValue: any;
  validation: any;
  component: () => JSX.Element;
};

export type initialValuesType = {
  firstName: string;
  lastName: string;
  twId: string;
  height: string;
  weight: string;
};
