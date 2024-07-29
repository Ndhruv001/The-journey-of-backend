import useLogin from "../hooks/useLogin";

export default function LoginForm() {
    const {formData, handleChange, handleSubmit, handleForgotPassword} = useLogin();

  return (
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-400 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
            id="email"
            type="email"
            name="email"
            value={formData.name}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-400 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
            id="password"
            type="password"
            name="password"
            value={formData.name}
            onChange={handleChange}
            placeholder="*********"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleSubmit}
          >
            Log In
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleForgotPassword}
          >
            Forgot Password
          </button>
        </div>
      </form>
  );
}
