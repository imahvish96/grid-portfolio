export type Information = {
  id: number;
  profile_summary: string;
  email: string;
  message: string;
  profile_image: string;
  skills: string[];
  resume_url: string;
};

export type Project = {
  id: number;
  project_name: string;
  description: string;
  tech_used: string[];
  image_url: string;
  live_link: string;
  github_url: string;
};

export type Experience = {
  id: number;
  designation: string;
  organization: string;
  start_date: string;
  end_date: string | null;
  is_current: boolean;
};

// strip any trailing slash so `${BASE}${path}` never produces a double slash
const BASE = (process.env.API_BASE_URL ?? "http://127.0.0.1:8000/api/v1").replace(/\/+$/, "");

// every endpoint wraps the payload in { ...meta, data }, so unwrap `data`.
async function getData<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${BASE}${path}`, { next: { revalidate: 60 } });

    if (!res.ok) return null;

    const json = await res.json();

    return (json?.data ?? null) as T | null;
  } catch {
    return null;
  }
}

export const getInformation = () => getData<Information>("/information");
export const getProjects = () => getData<Project[]>("/project");
export const getExperience = () => getData<Experience[]>("/experience");
