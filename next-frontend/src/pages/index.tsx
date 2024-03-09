import { Inter } from "next/font/google";
import ConnectWallet from "@/components/ConnectWallet";
import { useRouter } from "next/router";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { useEffect } from "react";
import { generateRandomUsername } from "@/components/functions";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  

  useEffect(() => {
    if(localStorage.getItem('SecretName') === null) {
      const randomUsername = generateRandomUsername();
      localStorage.setItem('SecretName', randomUsername)
    }
    console.log(localStorage.getItem('SecretName'))
  }, [])

  return (
    <div className="w-full h-full absolute ">
      <EvervaultCard className="z-0" text="WhitleBlower">
        <div className="flex flex-col items-center justify-center text-center h-full gap-2 z-20">
          <h1 className="md:section-header-headline md:text-6xl text-5xl dark:text- mt-10  text-black z-20">WhitleBlower</h1>
          <p className="p-10 text-gray-700 md:text-base text-sm w-2/3 md:w-full  select-none z-20">🕵️‍♂️ WhistleBlower is a platform for whistleblowers to report misconduct in a secure and private manner.</p>

          <ConnectWallet />
        </div>
      </EvervaultCard>
    </div>
  );
}


