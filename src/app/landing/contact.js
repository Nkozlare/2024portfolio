import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-w-full z-40 bg-dark lg:p-12 max-lg:p-6"
    >
      <div className="z-20 flex lg:flex-row max-lg:flex-col justify-between">
        <div className="z-20 flex flex-col">
          <div className="flex flex-row gap-10 items-center">
            <h2 className="lg:text-9xl max-lg:text-6xl tracking-tight">
              LET'S
            </h2>
            <p className="lg:text-2xl max-lg:text-base  max-w-[20rem] text-right text-secondary-light">
              Want to build something awesome together? Let's talk.
            </p>
          </div>
          <div className="flex flex-row ">
            <h2 className="lg:text-9xl max-lg:text-6xl tracking-tight">
              CONNECT
            </h2>
          </div>
        </div>
        <div className="flex flex-row lg:justify-end max-lg:justify-start max-lg:items-center lg:items-end gap-8 pb-5 max-lg:pl-1">
          <div className="flex flex-row gap-8 items-center">
            <h2 className="text-2xl text-secondary-light flex justify-end">
              contact me
            </h2>
            <svg
              className="h-6 w-6 text-text"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <line x1="5" y1="12" x2="19" y2="12" />{" "}
              <line x1="15" y1="16" x2="19" y2="12" />{" "}
              <line x1="15" y1="8" x2="19" y2="12" />
            </svg>
            <div className="flex flex-row gap-8 text-secondary-light ">
              <Link
                href="https://www.linkedin.com/in/nicholas-kozlarek/"
                target="_blank"
              >
                <svg
                  className="h-6 w-6 hover:scale-110 transition-all hover:text-text"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
                  <rect x="2" y="9" width="4" height="12" />{" "}
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
              <a href="mailto:kozlareknicholas@gmail.com">
                <svg
                  className="h-6 w-6 hover:scale-110 transition-all hover:text-text"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
