"use client";

import Menu from './../../components/Menu';
import Image from "next/image";
import Comments from "./../../components/Comments";

type PostData = {
  title: string;
  user?: {
    image?: string;
    name: string;
  };
  img?: string;
  desc: string;
};

type SinglePageProps = {
  params: { slug: string };
};

const getData = async (slug: string): Promise<PostData> => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }: SinglePageProps) => {
  const { slug } = params;
  const data = await getData(slug);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-12">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-8">{data?.title}</h1>
          <div className="flex items-center gap-4">
            {data?.user?.image && (
              <div className="w-12 h-12 relative">
                <Image src={data.user.image} alt="" fill className="rounded-full object-cover" />
              </div>
            )}
            <div className="flex flex-col text-gray-500">
              <span className="text-lg font-medium">{data?.user?.name}</span>
              <span className="text-sm">01.01.2024</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className="flex-1 h-96 relative hidden md:block">
            <Image src={data.img} alt="" fill className="object-cover" />
          </div>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <div
            className="text-lg text-gray-700"
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className="mt-8">
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;