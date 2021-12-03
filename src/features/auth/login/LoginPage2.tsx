const LoginPage2 = () => {
  return (
    <>
      <form>
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-200">
          <div className="border-t-4 border-blue-500 rounded-md shadow-md mt-2 bg-white pt-6 pb-12 px-4 max-w-sm">
            <h1 className="text-2xl text-left text-gray-600 mb-4">
              Login to your account
            </h1>

            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="text-gray-600 text-sm font-semibold mb-2"
              >
                {' '}
                Username or Email{' '}
              </label>
              <input
                type="email"
                className="form-input px-4 py-2 rounded-md"
                placeholder="Email"
              />
            </div>

            <div className="flex flex-col mt-4">
              <label
                htmlFor="password"
                className="text-gray-600 text-sm font-semibold mb-2"
              >
                {' '}
                Password{' '}
              </label>
              <input
                type="email"
                className="form-input px-4 py-2 rounded-md"
                placeholder="Password"
              />
            </div>

            <button className="mt-6 w-full rounded-md bg-blue-500 font-semibold text-white px-4 py-2">
              Login
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginPage2;
