import { useFormik } from "formik";
import Container from "../../componenets/container/Container";
import Button from "../../componenets/button/Button";
import { useShoppingCartContext } from '../../context/ShopContext'
import * as Yup from "yup";

function Login() {
  const { handleLogin } = useShoppingCartContext();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      password: Yup.string()
        .min(5, "Too Short!")
        .max(30, "Too Long!")
        .required("Required"),
    }),
    onSubmit: (values) => {
      const { email, password } = values;

      console.log(email, password);
      // Handle user login
      handleLogin();

      // Reset the form after submission
      formik.resetForm();
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mb-44">
      <Container>
        <div className="w-full max-w-lg h-96 bg-slate-600 mx-auto p-6 rounded">
          <form onSubmit={formik.handleSubmit}>
            <input
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
              className="w-full p-2 rounded mb-4"
              type="email"
              placeholder="Email"

            />
            {formik.errors.email && formik.touched.email ? (
              <div className="text-red-600">{formik.errors.email}</div>
            ) : null}

            <input
              value={formik.values.password}
              onChange={formik.handleChange}
              name="password"
              className="w-full p-2 rounded mb-4"
              type="password"
              placeholder="Password"
            />
            {formik.errors.password && formik.touched.password ? (
              <div className="text-red-600">{formik.errors.password}</div>
            ) : null}

            <Button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded hover:bg-red-600 hover:text-white transition duration-300"
            >
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Login;