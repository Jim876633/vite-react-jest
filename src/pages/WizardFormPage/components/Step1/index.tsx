import { TextInput } from "@/components/TextInput";

export const Step1 = () => {
  return (
    <>
      <TextInput name='firstName' label='firstName' type='text' />
      <TextInput name='lastName' label='lastName' type='text' />
    </>
  );
};
