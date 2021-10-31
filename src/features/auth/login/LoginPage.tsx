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
import { useHistory, Redirect } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { authSelector, loginUser, User } from '../authSlice';

type LoginType = {
  email: string;
  password: string;
};

const LoginSchema = Yup.object({
  email: Yup.string().required('email is required'),
  password: Yup.string().required('name is required'),
});

const Login = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { callApi, loading } = useSendApiData('auth/login');
  const { isLoggedIn } = useAppSelector(authSelector);

  const initialValues: LoginType = {
    email: '',
    password: '',
  };

  const onSubmit = async (
    values: LoginType,
    { setFieldError }: FormikHelpers<LoginType>
  ) => {
    callApi({
      data: values,
      onValidationError: (err) => parseValidationErrors(err, setFieldError),
      onError: toastError,
      onSuccess: async (data) => {
        toastMessage('Logged successfully');
        dispatch(loginUser(data as User));

        history.replace('/dashboard');
      },
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit,
  });

  if (isLoggedIn) return <Redirect to="/dashboard" />;

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
          Login
        </Typography>
        <Box sx={{ mt: 1 }}>
          <form onSubmit={formik.handleSubmit}>
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
              {loading ? 'Logining' : 'Login'}
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
