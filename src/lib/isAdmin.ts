import { auth0 } from "@/lib/auth0";

const isAdmin = async (): Promise<boolean> => {
  const session = await auth0.getSession();
  const user = session?.user;

  if (!user || !user["cusec/roles"]) {
    return false;
  }

  return user["cusec/roles"].includes("Admin");
};

export default isAdmin;
