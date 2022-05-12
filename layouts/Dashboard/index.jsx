//Next, React (core node_modules) imports must be placed here
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
//import STORE from '@/store'

//import VIEWS from '@/views'

//import useFETCHER from '@/tools'

//import COMPOSITES from '@/composites'
//import COMPONENT from '@/components'
import styles from "./Dashboard.module.scss";

const DashboardLayout = ({ children, ...props }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return null;
  }
console.log(session);
  if (!session || !session.user.isAdmin) {
    router.push("/auth/login");
    return null;
  }

  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default DashboardLayout;
