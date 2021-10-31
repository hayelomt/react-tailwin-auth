// Render Prop
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';

type LoginType = {
  email: string;
  password: string;
};

const LoginSchema = Yup.object({
  email: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const Basic = () => {
  const onSubmit = async (
    values: LoginType,
    { setFieldError }: FormikHelpers<LoginType>
  ) => {
    await new Promise((r) => setTimeout(r, 500));
    setFieldError('email', 'Email is validated');
  };

  return (
    <div>
      <h1>Any place in your app!</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Basic;
