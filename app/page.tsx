"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loader, { LoaderSize } from "./components/Loader";

const Home: React.FC = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const authToken = localStorage.getItem("authToken");

    if (authToken) {
      setIsLoading(false);
    } else {
      setIsLoading(false);
      router.push("/login");
    }
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {isLoading ? (
        <div className="w-full min-h-screen h-full flex items-center justify-center">
          <Loader size={LoaderSize.LARGE} />
        </div>
      ) : (
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
      )}
    </main>
  );
};

export default Home;
