// import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const isProject = await isValidProjectDir();

  // if (!isProject) {
  //   redirect("/create");
  // }

  return <>{children}</>;
}
