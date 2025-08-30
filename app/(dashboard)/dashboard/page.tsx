import { ADMIN_DASHBOARD_DIR } from '@/constants/admin';
import { redirect } from 'next/navigation';

const DashboardPage = () => redirect('/' + ADMIN_DASHBOARD_DIR + '/blogs');

export default DashboardPage;
