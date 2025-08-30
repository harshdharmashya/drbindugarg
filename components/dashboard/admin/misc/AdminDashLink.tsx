import Link, { LinkProps } from 'next/link';
import { ADMIN_DASHBOARD_DIR } from '@/constants/admin';

interface IAdminDashLink extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

const AdminDashLink = ({ children, href, className, ...props }: IAdminDashLink) => (
  <Link href={`/${ADMIN_DASHBOARD_DIR + href}`} className={className} {...props}>
    {children}
  </Link>
);

export default AdminDashLink;
