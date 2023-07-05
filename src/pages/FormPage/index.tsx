import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import styled from "./index.module.scss";
import { TextInput } from "@/components/TextInput";
import strAcctSchema from "@/utiils/validation/strAcctSchema";
import requiredSchema from "@/utiils/validation/requiredSchema";

type formValuesType = {
  firstName: string;
  lastName: string;
  gender: string;
  twId: string;
};

export const FormPage = () => {
  const handleSubmit = (
    values: formValuesType,
    { resetForm }: FormikHelpers<formValuesType>
  ) => {
    alert(JSON.stringify(values));
    resetForm();
  };

  return (
    <div>
      <h2>Form</h2>
      <Formik
        initialValues={{ firstName: "", lastName: "", gender: "", twId: "" }}
        validationSchema={Yup.object({
          firstName: requiredSchema().max(15, "不可大於 15 字"),
          lastName: requiredSchema().max(20, "不可大於 20 字"),
          twId: requiredSchema().concat(strAcctSchema()),
        })}
        onSubmit={handleSubmit}
      >
        <Form>
          <TextInput name='firstName' label='firstName' type='text' />
          <TextInput name='lastName' label='lastName' type='text' />
          <TextInput name='twId' label='taiwan id' type='text' />
          <div className={styled.row}>
            <label htmlFor='colors'>Gender：</label>
            <Field
              name='gender'
              as='select'
              className='my-select'
              data-testid='gender'
            >
              <option value=''>select one</option>
              <option value='man'>male</option>
              <option value='female'>female</option>
            </Field>
            <ErrorMessage name='gender' data-testid='gender-error' />
          </div>
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
