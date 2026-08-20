import MyGridLayout from "@/components/grid";
import { getExperience, getInformation, getProjects } from "@/lib/api";

// re-fetch from the API at most every 60s (ISR) so data stays fresh without redeploy
export const revalidate = 60;

export default async function Home() {
  const [info, projects, experience] = await Promise.all([getInformation(), getProjects(), getExperience()]);

  return <MyGridLayout experience={experience ?? []} info={info} projects={projects ?? []} />;
}
