import Image from "next/image";
import Link from "next/link";

export default function ProjectModal({ project }) {
  return (
    <div className="flex lg:flex-row-reverse max-lg:flex-col-reverse gap-12 lg:px-12 justify-center max-lg:px-6 items-center">
      <div className="flex flex-col max-lg:text-center gap-8">
        <p className={`md:text-5xl max-md:text-4xl uppercase lg:max-w-[20rem]`}>
          {project.title}
        </p>
        <div className="max-lg:max-w-[60vw]">
          <p className="max-lg:text-center">{project.desc}</p>
        </div>
        <Link href={project.url} target="_blank">
          <p className="cursor-pointer text-secondary-light hover:text-text">
            {project.fun}
          </p>
        </Link>
      </div>
      <div className="rounded-lg relative lg:min-w-[35rem] max-lg:min-w-[50vw] max-sm:min-w-[85vw] md:min-h-[20rem] max-md:min-h-[10rem] overflow-hidden transition-all ease-out duration-500">
        <Image
          src={project.image}
          height="500"
          width="500"
          className="absolute inset-0 min-w-full min-h-full object-cover duration-500 ease-out transition-all hover:scale-110"
          alt="geometric wall pattern"
        />
      </div>
    </div>
  );
}
