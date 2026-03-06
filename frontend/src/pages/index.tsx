import { Outlet, useNavigate } from "react-router";
import { Header } from "../components/atoms/Header/Header.component";
import { PageLayout } from "@/layouts/PageLayout.styles";
import { useEffect } from "react";

export function IndexPage() {

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/calendar');
  }, [navigate]);

  return (
    <PageLayout>
      <Header />
      <Outlet />
    </PageLayout>
  );
}
