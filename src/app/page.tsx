import { Quiz } from "../components/Quiz";
import { Suspense } from "react";
import Loading from "@/components/Loading";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <div className="mt-8 w-3/5">
      <Suspense fallback={<Loading />}>
        <Quiz />
      </Suspense>
    </div>
  )
}
