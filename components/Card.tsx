import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }: {
    key: any,
    item: any
}) => {
  return (
    <div className="mb-12 flex items-center gap-12" key={key}>
      {item.img && (
        <div className="flex-1 h-[350px] relative">
          <Image src={item.img} alt="" fill className="object-cover" />
        </div>
      )}
      <div className="flex-1 flex flex-col gap-8">
        <div className={styles.detail}>
          <span className="text-gray-200">
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className="text-red-300 font-semibold">{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <div className="text-sm font-semibold " dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,60) }}/>
        <Link href={`/posts/${item.slug}`} className="border border-b-2 border-amber-500 w-max py-1">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;