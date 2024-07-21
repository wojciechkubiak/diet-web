"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loader, { LoaderSize } from "./components/Loader";
import { useAppSelector } from "./store/store";
import { AuthStatus } from "./store/auth/slice";

const Home: React.FC = () => {
  const authStatus = useAppSelector((state) => state.auth.status);
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const authToken = document.cookie;

    if (authToken || authStatus === AuthStatus.AUTHORIZED) {
      setIsLoading(false);
    } else {
      setIsLoading(false);
      router.push("/login");
    }
  }, [router, authStatus]);

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
