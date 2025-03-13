import EmailIcon from "@/components/Icons/EmailIcon";
import PasswordIcon from "@/components/Icons/PasswordIcon";
import Input from "@/components/Input";
import Link from "next/link";

const page = () => {
  return (
    <div className="my-auto flex justify-center pt-20 h-screen">
      <div className="md:w-3/4 w-full mx-auto flex flex-col items-center gap-2">
        <h1 className="text-center text-4xl font-bold tracking-wide mb-8">
          Welcome back!
        </h1>
        <Input type="text" placeholder="Enter email" icon={<EmailIcon />} />
        <Input type="password" placeholder="Password" icon={<PasswordIcon />} />
        <button className="bg-blue-500 w-full sm:w-[500px] py-2 mt-4 rounded-md cursor-pointer">
          Log In
        </button>
        <div className="w-[500px] flex flex-row-reverse">
          <Link href={"/"} className="text-blue-500 text-right text-sm">
            Do not an account? Click here to create one for free!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
