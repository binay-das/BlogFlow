import { CategoryList } from "@/components/CategoryList";
import Featured from "@/components/Featured";

export default function Home() {
  return (
    <div className="border flex ">
      <Featured />
      <CategoryList />
    </div>
  );
}
