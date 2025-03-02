import Link from "next/link";

export default function () {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-24 text-xl px-8">
        <div className="flex flex-col">
          <h1 className="my-4 text-2xl">Help</h1>
          <p>Help Center</p>
          <p>Help Forum</p>
          <p>Video Tutorials</p>
        </div>
        <div className="flex flex-col">
          <h1 className="my-4 text-2xl">Community</h1>
          <p>Blogger Buzz</p>
        </div>
        <div className="flex flex-col">
          <h1 className="my-4 text-2xl">Developers</h1>
          <p>Blogger API</p>
          <p>Developer Forum</p>
        </div>
      </div>

      <div className="flex">
        <div className="flex-5 text-2xl">
          <Link href={"/"} className="m-4">
            Terms of Service
          </Link>
          <Link href={"/"} className="m-4">
            Privacy
          </Link>
          <Link href={"/"} className="m-4">
            Content Policy
          </Link>
        </div>
        <div className="flex-1 bg-gray-400 text-slate-100 p-2 rounded">
          English
        </div>
      </div>
    </div>
  );
}
