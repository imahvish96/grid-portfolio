import MyGridLayout from "@/components/grid";
import { getExperience, getInformation, getProjects } from "@/lib/api";

export default async function Home() {
  const [info, projects, experience] = await Promise.all([getInformation(), getProjects(), getExperience()]);

  return <MyGridLayout experience={experience ?? []} info={info} projects={projects ?? []} />;
}
