import * as Yup from 'yup';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FormikHelpers, useFormik } from 'formik';
import { useSendApiData } from '../../../common/hooks';
import { parseValidationErrors } from '../../../common/utils/validation';
import { toastError, toastMessage } from '../../../common/utils/alert';
import { useHistory } from 'react-router';

type RegisterType = {
  email: string;
  password: string;
  name: string;
};

const RegisterSchema = Yup.object({
  email: Yup.string().required('email is required'),
  name: Yup.string().required('name is required'),
  password: Yup.string().required('password is required'),
});

const Register = () => {
  const history = useHistory();
  const { callApi, loading } = useSendApiData('auth/register');

  const initialValues: RegisterType = {
    email: '',
    password: '',
    name: '',
  };

  const onSubmit = async (
    values: RegisterType,
    { setFieldError }: FormikHelpers<RegisterType>
  ) => {
    callApi({
      data: values,
      onValidationError: (err) => parseValidationErrors(err, setFieldError),
      onError: toastError,
      onSuccess: async (data) => {
        toastMessage('Registered successfully');
        history.replace('/login');
      },
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema: RegisterSchema,
    onSubmit,
  });

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box sx={{ mt: 1 }}>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              margin="normal"
              fullWidth
              name="name"
              label="Name"
              type="text"
              id="name"
              size="small"
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              margin="normal"
              fullWidth
              id="email"
              name="email"
              label="Email Address"
              autoComplete="email"
              autoFocus
              size="small"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              size="small"
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{ mt: 3, mb: 2 }}
            >
              {loading ? 'Registering' : 'Register'}
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
