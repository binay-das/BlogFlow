import React from "react";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    // throw new Error("Failed");
    return res.json({
            link: '//',
            img: 'wdc',
            title: 'qdcf'
    });
  }

  return res.json();
//   return res.json({
//     link: '//',
//     img: 'wdc',
//     title: 'qdcf'
//   });
};

export const CategoryList = async () => {
  // const data = await getData();
  return (
    <div className="">
      <h1 className="my-20">Popular Categories</h1>
      <div className="flex flex-wrap justify-between gap-5">
        {/* @ts-ignore  */}
        {/* {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`$flex justify-center items-center gap-2 capitalize w-3/20 h-20 rounded`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className="rounded-8xl"
              />
            )}
            {item.title}
          </Link>
        ))} */}
        hi
      </div>
    </div>
  );
};

// export default CategoryList;