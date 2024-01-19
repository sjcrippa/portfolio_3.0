import Image from "next/image";
import Link from "next/link";

import profile from "public/images/profile.png"
import GitHubIcon from "@/assets/svg/GitHub";
import LinkedInIcon from "@/assets/svg/LinkedIn";

export default function Hero() {
  return (
    <>
      <main className="w-full flex items-center justify-center gap-10">
        <div className="flex items-center py-24">

          <section className="h-full text-xl">
            <h1>Welcome!</h1>
            <h2 className="mt-3">My name is Santiago, and i&apos;m a
              <strong className="flex cursor-default"> Web Developer</strong>
            </h2>

            <section className="mt-6 flex gap-3">
              <Link href='https://github.com/sjcrippa' target="_blank"> <GitHubIcon /> </Link>
              <Link href='https://linkedin.com/in/santiago-julian-crippa' target="_blank"> <LinkedInIcon /> </Link>
            </section>
          </section>
          <section className="flex px-24">
            {/* <Image className="rounded-full "
              src={profile}
              alt="profile pic"
              width={190}
              height={190} /> */}
            <div className="w-56 h-56 rounded-full bg-blue-500">
              <Image className="absolute rounded-full"
                src={profile}
                alt="profile pic"
                width={190}
                height={190} />

            </div>
          </section>
        </div>
      </main>
    </>
  )
}
