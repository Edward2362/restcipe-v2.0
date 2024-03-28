import "../globals.css";
import Layout from "@/components/Page/Authentication/AuthLayout";

export default function RootAuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <Layout>{children}</Layout>;
}
