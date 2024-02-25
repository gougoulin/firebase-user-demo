import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center p-2">
      <div className="min-h-96 w-screen md:w-1/2 lg:w-1/3 m-auto bg-gray-100 rounded-lg pb-10">
        <h2 className="text-2xl flex justify-center text-gray-800 font-bold capitalize py-2 mt-5">
          Airoxy Product Lens
        </h2>
        <div className="px-5 mt-8 flex flex-col gap-2 w-4/5 m-auto">
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input type="email" className="grow" />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            Password
            <input type="password" className="grow" />
          </label>
          <button className="btn btn-primary">Log In</button>
          <button className="btn btn-outline">Log In via Google</button>
          <button className="btn btn-outline">Log In via Microsoft</button>
          <button className="btn btn-outline">Log In via Facebook</button>
        </div>
        <div className="text-sm flex flex-col items-center pt-2 mt-4 text-gray-500">
          <div>
            Doesn't have a account?{" "}
            <a className="btn-link" href="/auth/signup">
              Sign up
            </a>{" "}
            here
          </div>
          <a className="btn btn-link">forgot password?</a>
        </div>
      </div>
    </div>
  );
}
