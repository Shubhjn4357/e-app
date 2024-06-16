import { Link } from "@/components/ui/link";
import { currentUser } from "@/lib/auth";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}
const ProtectedLayout = async({ children }: ProtectedLayoutProps) => {
  const user = await currentUser()

  if (!user) {
    return <div>
      <p>
        You are not authenticated...
      </p>
      <Link href="/login" variant="outline">
        Login
      </Link>
      </div>
  }

  return (
    <div>
      {children}
    </div>
  );
};

export default ProtectedLayout;
