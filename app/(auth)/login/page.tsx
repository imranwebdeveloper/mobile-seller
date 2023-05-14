"use client";
import { signIn } from "next-auth/react";

const Login = () => {
  const loginHandler = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const email = (e.target.email as HTMLInputElement).value;
      const password = (e.target.password as HTMLInputElement).value;
      await signIn("credentials", {
        callbackUrl: "/admin",
        redirect: true,
        email,
        password,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center flex-col">
      {/* <h1 className="text-center">Admin Panel</h1> */}
      <form
        className="flex w-full max-w-lg flex-col gap-2 rounded-lg border bg-primary-bg-light p-12 mx-2 "
        onSubmit={loginHandler}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          className=" w-full rounded-md border p-2 bg-secondary-bg-light outline-none "
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className=" w-full rounded-md border p-2 bg-slate-100 outline-none "
          required
          min={8}
          max={18}
        />
        <div className="mt-2 flex justify-center">
          <button type="submit" className=" btn-primary">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default Login;
