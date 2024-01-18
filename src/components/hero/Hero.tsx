import Image from "next/image";
import Link from "next/link";

import profile from "public/images/profile.png"
import fullprofile from "public/images/full-profile.jpg"
import GitHubIcon from "@/assets/svg/GitHub";
import LinkedInIcon from "@/assets/svg/LinkedIn";

export default function Hero() {
  return (
    <>
      <main className="w-full h-full flex items-center justify-center gap-10">
        <div className="flex items-center py-24">

          <section className="h-full text-xl">
            <h1>Welcome!</h1>
            <h2 className="mt-3">My name is Santiago, and i&apos;m a
              <strong className="flex cursor-default"> Web Developer</strong>
            </h2>

            <section className="mt-6 flex gap-3">
              <Link href='https://github.com/sjcrippa' target="_blank"> <GitHubIcon /> </Link>
              <Link href='https://linkedin.com/in/santiago-julian-crippa' target="_blank"> <LinkedInIcon /> </Link>
              {/* <GiftTopIcon color="blue"/> */}
            </section>
          </section>
          <section className="px-24">
            <Image className="rounded-full bg-blue-700"
              src={profile}
              alt="profile pic"
              width={150}
              height={150} />
          </section>
        </div>
      </main>
    </>
  )
}
