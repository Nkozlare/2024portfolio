import SkillButton from "./skillButton";
export default function AllSkills() {
  const skillsList = [
    "UI/UX",
    "Javascript",
    "React",
    "NextJs",
    "NodeJs",
    "Postgresql",
    "Prisma",
    "Auth0",
    "CSS",
    "Python",
    "Typescript",
    "Git",
    "Backend dev",
    "Deployment",
    "Vercel",
    "Express",
    "HTML5",
    "Tailwind",
    "RESTful API",
    "SQL",
    "MongoDB",
    "Jest",
    "Mocha",
    "Chai",
    "AWS",
    "Dev ops",
    "nginx",
    "Webpack",
    "Babel",
    "Docker",
    "Vite",
  ];
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-row lg:gap-8 max-lg:gap-4 transition-all flex-wrap items-center justify-center xl:max-w-[1280px] max-xl:max-w-[90vw]">
        {skillsList.map((skill, i) => {
          return (
            <div key={i} className="transition-all hover:scale-110">
              <SkillButton text={skill} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
