import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import { initialValuesType, stepType, steps } from "../../steps";
import styled from "./index.module.scss";

type propsType = {
  submitHandler: (value: any, helper: FormikHelpers<any>) => void;
  initialValues: initialValuesType;
  step: number;
  goBack: (formik: FormikProps<any>) => void;
};

export const Wizard = ({
  submitHandler,
  initialValues,
  step,
  goBack,
}: propsType) => {
  const stepInfo = steps.find((el) => el.step === step) as stepType;
  const isLastStep = step === 3;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={stepInfo.validation}
      onSubmit={submitHandler}
    >
      {(formik) => (
        <Form data-testid='form'>
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
  );
};
