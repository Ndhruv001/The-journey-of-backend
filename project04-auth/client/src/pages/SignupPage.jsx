import SignupForm from "../components/SignupForm";

export default function SignupPage() {
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-black p-8 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-3xl font-semibold text-white mb-6 text-center">
        Sign Up
      </h2>
        {<SignupForm/>}
      </div>
    </div>
  );
}


