import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
     <SignedOut>
        <SignInButton>
          <Button>Sign up</Button>
        </SignInButton>

        <SignUpButton />
    </SignedOut>
    <SignedIn>
        <UserButton />
    </SignedIn>
    <ModeToggle />
    </div>
  );
}
