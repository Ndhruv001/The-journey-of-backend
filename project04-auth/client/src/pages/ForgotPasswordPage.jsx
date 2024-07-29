import ForgotPasswordForm from "../components/ForgotPasswordForm";

function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <div className="bg-black p-10 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl text-white font-bold mb-6 text-center">
          Forgot Password
        </h1>
        <ForgotPasswordForm/>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
