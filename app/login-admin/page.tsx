import { AdminLoginForm } from "@/components/forms";

const AdminLoginPage = () => {
  return (
    <section className="flex-center w-full h-screen flex-col bg-light-900">
      <div className="p-5 bg-light-900 rounded-3xl w-[28rem] flex-center flex-col">
        <h1 className="text-black text-3xl font-bold">Admin Login</h1>
        <p className="text-md text-light-100 my-2 font-semibold">
          Please login to continue
        </p>
        <AdminLoginForm />
      </div>
    </section>
  );
};

export default AdminLoginPage;
