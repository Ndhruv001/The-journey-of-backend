import useSignup from "../hooks/useSignup";

export default function SignupForm() {
    const {formData, handleChange, handleSubmit} = useSignup();

  return (
    <>
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
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-400 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            type="text"
            placeholder="Username"
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
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
}
