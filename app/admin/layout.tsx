import type { ReactNode } from "react";

import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";

interface Props {
  children: ReactNode;
}

export default function AdminLayout({
  children,
}: Props) {

  return (

    <div className="flex h-screen">

      <AdminSidebar />

      <div className="flex flex-1 flex-col">

        <AdminHeader />

        <main className="flex-1 overflow-auto p-8">

          {children}

        </main>

      </div>

    </div>

  );

}