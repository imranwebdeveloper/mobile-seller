"use client";
import { useSession, signIn, signOut } from "next-auth/react";

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
    <main className="flex min-h-screen items-center justify-center">
      <form
        className="flex w-full max-w-lg flex-col gap-2 rounded-lg border bg-white p-12 shadow-lg"
        onSubmit={loginHandler}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          className=" w-full rounded-md border p-3 outline-none "
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className=" w-full rounded-md border p-3 outline-none "
          required
          min={8}
          max={18}
        />
        <div className="mt-2 flex justify-center">
          <button type="submit" className=" border px-8 py-2 font-bold">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default Login;
