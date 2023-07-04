import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Progress } from "./components/Progress";
import styled from "./index.module.scss";
import { initialValues, steps } from "./steps";

type stepType = {
  step: number;
  initialValue: any;
  validation: any;
  component: () => JSX.Element;
};

export const WizardFormPage = () => {
  const [step, setStep] = useState(1);
  const [initialValuesSnapShot, setInitialValuesSnapShot] =
    useState(initialValues);

  const stepInfo = steps.find((el) => el.step === step) as stepType;
  const isLastStep = step === 3;

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
      <Outlet />
      <Formik
        initialValues={initialValuesSnapShot}
        validationSchema={stepInfo.validation}
        onSubmit={submitHandler}
      >
        {(formik) => (
          <Form>
            {stepInfo.component()}
            <div className={styled.btn_list}>
              {step !== 1 ? (
                <button onClick={() => goBack(formik)} type='button'>
                  Back
                </button>
              ) : null}
              <button type='submit'>{isLastStep ? "Sumbit" : "Next"}</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
