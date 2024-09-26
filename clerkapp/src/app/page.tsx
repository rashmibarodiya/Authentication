import { SignOutButton } from '@clerk/nextjs'


export default function Home() {
  // const { signOut } = useClerk()
  return (
    <div className='flex'>
      home
      <SignOutButton signOutOptions={{ redirectUrl: "/sign-in" }}>
            <div className="flex cursor-pointer bg-white text-black gap-4 p-4">
              {/* <Image
                src="/assets/logout.svg"
                alt="logout"
                width={24}
                height={24}
              /> */}
              <p className="text-light-2 max-lg:hidden">Logout</p>
            </div>
          </SignOutButton>
    </div>
  );
}
