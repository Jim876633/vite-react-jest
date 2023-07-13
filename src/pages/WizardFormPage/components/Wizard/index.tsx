import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import { initialValuesType, stepType, steps } from "../../steps";
import styled from "./index.module.scss";

type propsType = {
  goNext: (values: any) => void;
  initialValues: initialValuesType;
  step: number;
  goBack: (formik: FormikProps<any>) => void;
};

export const Wizard = ({ initialValues, step, goNext, goBack }: propsType) => {
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
            <button type='submit'>{isLastStep ? "Submit" : "Next"}</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
