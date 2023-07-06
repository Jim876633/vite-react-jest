import { FormikHelpers, FormikProps } from "formik";
import { useState } from "react";
import { Progress } from "./components/Progress";
import { Wizard } from "./components/Wizard";
import { initialValues } from "./steps";

export const WizardFormPage = () => {
  const [step, setStep] = useState(1);
  const [initialValuesSnapShot, setInitialValuesSnapShot] =
    useState(initialValues);

  const submitHandler = (values: any, { setTouched }: FormikHelpers<any>) => {
    if (step !== 3) {
      setTouched({});
      goNext(values);
    } else {
      alert(JSON.stringify(values));
    }
  };

  const goNext = (values: any) => {
    if (step !== 3) {
      setStep((prev) => prev + 1);
      setInitialValuesSnapShot(values);
    }
  };
  const goBack = (formik: FormikProps<any>) => {
    if (step !== 1) {
      formik.setTouched({});
      setStep((prev) => prev - 1);
      setInitialValuesSnapShot(formik.values);
    }
  };

  return (
    <div>
      <h2>Wizard Form</h2>
      <Progress step={step} />
      <Wizard
        submitHandler={submitHandler}
        initialValues={initialValuesSnapShot}
        step={step}
        goBack={goBack}
      />
    </div>
  );
};
