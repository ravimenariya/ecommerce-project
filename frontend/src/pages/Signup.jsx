import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useDispatch, useSelector } from 'react-redux';
import { Register } from '../redux/userSlice';
import { CircularProgress } from '@mui/material';
import { FaUser, FaEnvelope, FaPhone, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
  name: z.string().min(1, "Name is required").max(40, "Name cannot exceed 40 characters"),
  email: z.string().email("A valid email is required"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  password: z.string()
    .min(8, "Password is too short")
    .regex(/[0-9]/, "Password must contain a number")
    .regex(/[a-z]/, "Password must contain a lowercase letter")
    .regex(/[A-Z]/, "Password must contain an uppercase letter")
    .regex(/[\W_]/, "Password must contain a special character"),
});

function Signup() {
  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    await dispatch(Register(data));
    navigate('/login')
  };

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gray-100">
    //   <div className="p-8 w-[25rem] shadow-lg bg-white rounded-md">
    //     <h1 className="text-black font-bold text-3xl text-center mb-4">Signup</h1>
    //     <form onSubmit={handleSubmit(onSubmit)}>

    //       <div className="relative mb-4">
    //         <FaUser className="absolute left-3 top-3 text-gray-500" />
    //         <input
    //           className="pl-10 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //           type="text"
    //           placeholder="Name"
    //           {...register('name')}
    //         />
    //         {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
    //       </div>

    //       <div className="relative mb-4">
    //         <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
    //         <input
    //           className="pl-10 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //           type="email"
    //           placeholder="Email"
    //           {...register('email')}
    //         />
    //         {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
    //       </div>

    //       <div className="relative mb-4">
    //         <FaPhone className="absolute left-3 top-3 text-gray-500" />
    //         <input
    //           className="pl-10 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //           type="text"
    //           placeholder="Phone"
    //           {...register('phone')}
    //         />
    //         {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
    //       </div>

    //       <div className="relative mb-4">
    //         <FaLock className="absolute left-3 top-3 text-gray-500" />
    //         <input
    //           className="pl-10 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //           type="password"
    //           placeholder="Password"
    //           {...register('password')}
    //         />
    //         {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
    //       </div>

    //       <button
    //         className="bg-black px-8 py-2 rounded-md w-full mt-3 text-white"
    //         type="submit"
    //       >
    //         {loading ? <CircularProgress size={24} className="text-white" /> : "Signup"}
    //       </button>
    //     </form>


    //     <div className="text-center mt-4">
    //       <p className="text-gray-600">
    //         Already have an account?{" "}
    //         <Link to="/login" className="text-blue-500 hover:underline">
    //           Login here
    //         </Link>
    //       </p>
    //     </div>
    //   </div>
    // </div>



    <div className="flex justify-center items-center min-h-screen ">
      <div className="flex w-[80rem] h-[35rem] shadow-lg rounded-md overflow-hidden">

        {/* Left side: Signup form */}
        <div className="w-1/2 p-12 ">
          <h1 className="font-bold text-4xl text-center mb-6">Register </h1>
          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Name Field */}
            <div className="relative mb-6">
              <FaUser className="absolute left-3 top-3 " />
              <input
                className="pl-10 w-full border border-gray-600  rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Name"
                {...register('name')}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            {/* Email Field */}
            <div className="relative mb-6">
              <FaEnvelope className="absolute left-3 top-3 " />
              <input
                className="pl-10 w-full border border-gray-600  rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                placeholder="Email"
                {...register('email')}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Phone Field */}
            <div className="relative mb-6">
              <FaPhone className="absolute left-3 top-3 " />
              <input
                className="pl-10 w-full border border-gray-600  rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Phone"
                {...register('phone')}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>

            {/* Password Field */}
            <div className="relative mb-6">
              <FaLock className="absolute left-3 top-3 " />
              <input
                className="pl-10 w-full border border-gray-600 bg- rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                placeholder="Password"
                {...register('password')}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md w-full mt-4 text-white"
              type="submit"
            >
              {loading ? <CircularProgress size={20} className="text-white" /> : 'Signup'}
            </button>
          </form>

          {/* Already have an account? */}
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="w-1/2 bg-cover bg-center p-20">
          {/* <img src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-working-on-laptop-illustration-download-in-svg-png-gif-file-formats--man-place-work-area-employee-at-desk-pack-people-illustrations-3901204.png?f=webp" alt="" /> */}
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/man-working-with-computer-on-desk-illustration-download-in-svg-png-gif-file-formats--at-office-business-pack-illustrations-5175395.png?f=webp" alt="" />
        </div>
      </div>
    </div>

  );
}

export default Signup;
