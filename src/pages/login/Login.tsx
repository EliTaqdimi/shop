// import { useFormik } from "formik";
// import Container from "../../componenets/container/Container";
// import Button from "../../componenets/button/Button";
// import { useShoppingCartContext } from '../../context/ShopContext'
// import * as Yup from "yup";

// function Login() {
//   const { handleLogin } = useShoppingCartContext();

//   const formik = useFormik({
//     initialValues: {
//       username: "",
//       password: "",
//     },
//     validationSchema: Yup.object().shape({
//       username: Yup.string()
//         .min(2, "Too Short!")
//         .max(50, "Too Long!")
//         .required("Required"),
//       password: Yup.string()
//         .min(5, "Too Short!")
//         .max(30, "Too Long!")
//         .required("Required"),
//     }),
//     onSubmit: (values) => {
//       const { username, password } = values;

//       console.log(username, password);
//       // عملیات ورود کاربر
//       handleLogin();

//       // پاک کردن فرم بعد از ارسال
//       formik.resetForm();
//     },
//   });

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 mb-44">
//       <Container>
//         <div className="w-full max-w-lg h-96 bg-slate-600 mx-auto p-6 rounded">
//           <form onSubmit={formik.handleSubmit}>
//             <input
//               value={formik.values.username}
//               onChange={formik.handleChange}
//               name="username"
//               className="w-full p-2 rounded mb-4"
//               type="text"
//               placeholder="Username"
//             />
//             {formik.errors.username && formik.touched.username ? (
//               <div className="text-red-600">{formik.errors.username}</div>
//             ) : null}

//             <input
//               value={formik.values.password}
//               onChange={formik.handleChange}
//               name="password"
//               className="w-full p-2 rounded mb-4"
//               type="password"
//               placeholder="Password"
//             />
//             {formik.errors.password && formik.touched.password ? (
//               <div className="text-red-600">{formik.errors.password}</div>
//             ) : null}
//             <Button
//               type="submit"
//               className="w-full p-2 bg-blue-500 text-white rounded hover:bg-red-600 hover:text-white transition duration-300"
//             >
//               Submit
//             </Button>

//           </form>
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default Login;
import { useState } from 'react';
import { useShoppingCartContext } from '../../context/ShopContext';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin } = useShoppingCartContext();
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);

    // بعد از سابمیت فیلد ها را خالی می کنیم
    setUsername('');
    setPassword('');
    handleLogin();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
