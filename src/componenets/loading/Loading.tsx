// import Button from "../button/Button"
// import { useShopContext } from "../../context/ShopContext"


// function Loading() {
//   const { handleLogin } = useShopContext()
//   return (
//     <div className="bg-slate-900 mt-32 text-center ">
//       <label>Email</label>
//       <input type="text" />
//       <label>password</label>
//       <input type="password" />
//       <Button onClick={handleLogin} className="bg-slate-600 text-slate-300"  >Login</Button>
//     </div>
//   )
// }

// export default Loading
import { useFormik } from "formik";
import Container from "../../componenets/container/Container";
// E
// import { useShoppingCartContext } from "../../context/ShopContext";
import * as Yup from "yup";

function Login() {
  // const { handleLogin } = useShoppingCartContext()
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),

    }),
    onSubmit: (values: { username: any; password: any; }) => {
      const { username, password } = values;

      console.log(username, password);
    },
  });

  return (
    <div className="mt-40">
      <Container>
        <div className="w-96 h-96 bg-slate-300 mx-auto p-6 rounded">
          <form onSubmit={formik.handleSubmit}>
            <input
              value={formik.values.username}
              onChange={formik.handleChange}
              name="username"
              className="w-full p-2 rounded"
              type="text"
            />


            <input
              value={formik.values.password}
              onChange={formik.handleChange}
              name="password"
              className="w-full mt-4 p-2 rounded"
              type="password"
            />


            {/* <Button type="submit" onClick={handleLogin}>Submit</Button> */}
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Login;

