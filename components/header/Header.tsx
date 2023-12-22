import { LOGO } from "@/config/config"
import { deviceIsMobile } from "@/lib/apis/serverConfig"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
    const isMobile = deviceIsMobile()
  return (
    <header id="myHeader" className="fixed inset-x-0 top-0 z-[80] mt-0 inline-flex h-12 flex-row items-center">
    <div className="box-border inline-flex grow flex-row items-center border-b border-bbaby-border bg-bbaby-brighter px-2 md:px-5">
      <div className="inline-flex grow items-center">
        <div className="inline-flex grow flex-row items-center">
          <div className="flex h-12 items-center" />
          <Link href={'/'} aria-label="Home" className="inline-flex flex-row items-center justify-center" scroll={true}>
            <div className="flex-none py-2 pr-2">
              <Image src={LOGO} width={32} height={32} alt={'logo'} priority className="rounded-full" />
            </div>
          </Link>
          {!isMobile && (
            <div className="mx-auto my-0 max-w-[690px] grow">
              {/* <SearchBar /> */}
            </div>
          )}
        </div>
      </div>
      {/* <div className="inline-flex grow-0 flex-row items-center">
        <div className="flex flex-row items-center">
          {session?.user ? (
            <>
              {session.user.role === 1 && <GovButton />}
              <NotificationButton />
              <SubmitButton />
              <span className="h-8 md:ml-2" />
            </>
          ) : (
            <div className="hidden flex-row items-center sm:flex">
              <LoginButtons />
            </div>
          )}
          <div id="verification" className="flex flex-row items-center">
            <div id="user_dropdown">
              <UserDropdownButton session={session} />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  </header>
  )
}

export default Header