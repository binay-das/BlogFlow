import Image from "next/image";

export default function () {
    return <div className="mt-12">
    <h1 className="text-5xl font-bold">
      <b>Hey, Binay here!</b> Discover my stories and creative ideas.
    </h1>
    <div className="mt-12 flex items-center gap-40 border-2 border-amber-200 ">
      <div className="flex-1 h-[500px] relative border-amber-500 border ">
        <Image src="/file.svg" alt="" fill className="object-cover" />
      </div>
      <div className="flex-1 flex flex-col gap-5 border-amber-500 border ">
        <h1 className="text-4xl">Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
        <p className="text-2xl font-bold text-amber-100">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Cupiditate, quam nisi magni ea laborum inventore voluptatum
          laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
          quisquam! Harum unde sit culpa debitis.
        </p>
        <button className="px-6 py-4">Read More</button>
      </div>
    </div>
  </div>
}