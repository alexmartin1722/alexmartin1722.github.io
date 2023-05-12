import * as React from "react";
import profile from "./static/profile.jpeg";
import Image from "next/image";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// export const name = 'Alexander Martin';
export const avatar = profile;

export const about = () => {
  return (
    <>
      Hey, I'm Alex. I'm a{" "}
      <b>Undergraduate Researcher at the University of Rochester</b>
    </>
  );
};
export const bio = () => {
  return (
    <>
      I am a third-year undergraduate student in computer science at the
      University of Rochester advised by{" "}
      <a
        href="https://www.cs.rochester.edu/u/jluo/"
        target="_blank"
        className="font-bold underline underline-offset-2"
      >
        Jiebo Luo
      </a>
      ,&nbsp;
      <a
        href="https://hoques.com/"
        target="_blank"
        className="font-bold underline underline-offset-2"
      >
        Ehsan Hoque
      </a>
      ,&nbsp;
      <a
        href="http://aaronstevenwhite.io/"
        target="_blank"
        className="font-bold underline underline-offset-2"
      >
        Aaron White
      </a>
      , and&nbsp;
      <a
        href="https://www.linkedin.com/in/clyde-f-martin-04726521/"
        target="_blank"
        className="font-bold underline underline-offset-2"
      >
        Clyde Martin
      </a>
      . My research interests lie primarily in understanding both language and
      vision.
    </>
  );
};

export const researchInterest = () => {
  return (
    <>
      Current research projects in these areas are: 1. Developing event and
      argument extraction across multiple sentences (FAMuS) 2. Summarizing
      events in documents from queries (Event Keyed Summarization) My other
      research includes replacing human annotation with synthetic data for
      computer vision tasks (Hi5), translating images across large domain gaps,
      and probability theory and vector space methods for environmental
      research.
    </>
  );
};

export const hobby = () => {
  return (
    <>
      Outside of research, I enjoy hiking, spending time with my dogs, and
      reading books like Robot Ecology.
    </>
  );
};

export function Email() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="31"
      height="31"
    >
      <path
        d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 13 16 L 37 16 C 37.18 16 37.349766 16.020312 37.509766 16.070312 L 27.679688 25.890625 C 26.199688 27.370625 23.790547 27.370625 22.310547 25.890625 L 12.490234 16.070312 C 12.650234 16.020312 12.82 16 13 16 z M 11.070312 17.490234 L 18.589844 25 L 11.070312 32.509766 C 11.020312 32.349766 11 32.18 11 32 L 11 18 C 11 17.82 11.020312 17.650234 11.070312 17.490234 z M 38.929688 17.490234 C 38.979688 17.650234 39 17.82 39 18 L 39 32 C 39 32.18 38.979687 32.349766 38.929688 32.509766 L 31.400391 25 L 38.929688 17.490234 z M 20 26.410156 L 20.890625 27.310547 C 22.020625 28.440547 23.510234 29 24.990234 29 C 26.480234 29 27.959844 28.440547 29.089844 27.310547 L 29.990234 26.410156 L 37.509766 33.929688 C 37.349766 33.979688 37.18 34 37 34 L 13 34 C 12.82 34 12.650234 33.979687 12.490234 33.929688 L 20 26.410156 z"
        fill="currentColor"
      />
    </svg>
  );
}

export function GitHubIcon() {
  return (
    <svg
      width="27.5"
      height="27.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9914_10)">
        <path
          d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_9914_10">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function GoogleScholarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="30"
      height="30"
    >
      <path
        d="M 25 3 C 12.85 3 3 12.85 3 25 C 3 37.15 12.85 47 25 47 C 37.15 47 47 37.15 47 25 C 47 12.85 37.15 3 25 3 z M 21 11 L 38 11 L 36.980469 11.880859 C 36.980469 11.920859 37 11.96 37 12 L 37 17.279297 C 37.6 17.619297 38 18.26 38 19 L 38 25 C 38 26.1 37.1 27 36 27 C 34.9 27 34 26.1 34 25 L 34 19 C 34 18.26 34.4 17.619297 35 17.279297 L 35 13.570312 L 31.410156 16.650391 C 31.760156 17.350391 32 18.200234 32 19.240234 C 32 21.960234 30.480703 23.309766 28.970703 24.509766 C 28.500703 24.989766 27.949219 25.510312 27.949219 26.320312 C 27.949219 27.120313 28.500391 27.570625 28.900391 27.890625 L 30.189453 28.919922 C 31.779453 30.279922 33.220703 31.530547 33.220703 34.060547 C 33.220703 37.510547 29.930469 41 23.730469 41 C 18.500469 41 15.980469 38.47 15.980469 35.75 C 15.980469 34.43 16.629766 32.559531 18.759766 31.269531 C 20.989766 29.879531 24.020391 29.690078 25.650391 29.580078 C 25.140391 28.920078 24.560547 28.230078 24.560547 27.080078 C 24.560547 26.470078 24.749687 26.100391 24.929688 25.650391 C 24.529688 25.690391 24.129531 25.730469 23.769531 25.730469 C 19.969531 25.730469 17.799297 22.85 17.779297 20 L 11 20 L 21 11 z M 24.269531 14.240234 C 23.339531 14.240234 22.33 14.710938 21.75 15.460938 C 21.14 16.220938 20.949219 17.210156 20.949219 18.160156 C 20.949219 20.620156 22.370938 24.699219 25.460938 24.699219 C 26.370938 24.699219 27.339922 24.259922 27.919922 23.669922 C 28.739922 22.819922 28.820312 21.65 28.820312 21 C 28.820312 18.35 27.269531 14.240234 24.269531 14.240234 z M 26.039062 30.609375 C 25.719062 30.609375 23.769766 30.679219 22.259766 31.199219 C 21.459766 31.499219 19.160156 32.370469 19.160156 34.980469 C 19.160156 37.590469 21.64 39.460938 25.5 39.460938 C 28.97 39.460938 30.800781 37.760234 30.800781 35.490234 C 30.800781 33.620234 29.620859 32.630391 26.880859 30.650391 C 26.590859 30.610391 26.409063 30.609375 26.039062 30.609375 z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width="35"
      height="35"
    >
      <path
        d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ORCIDIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0,0,256,256"
      width="34"
      height="34"
      fill-rule=""
    >
      <g
        fill="currentColor"
        fill-rule="nonzero"
        stroke="none"
        stroke-width="10"
        stroke-linecap=""
        stroke-linejoin="miter"
        stroke-miterlimit="10"
        stroke-dasharray=""
        stroke-dashoffset="0"
        font-family="none"
        font-weight="none"
        font-size="none"
        text-anchor="none"
      >
        {/* <path 
                d="M0,256v-256h256v256z" id="bgRectangle">
                </path> */}
      </g>

      {/* <g fill-rule="nonzero" stroke="none" 
                stroke-width="1" stroke-linecap="butt" 
                stroke-linejoin="miter" stroke-miterlimit="10" 
                stroke-dasharray="" stroke-dashoffset="0" 
                font-family="none" font-weight="none" 
                font-size="none" text-anchor="none" > */}
      <g transform="scale(8,8)">
        <path
          d="M16,3c-7.16786,0 -13,5.83214 -13,13c0,7.16786 5.83214,13 13,13c7.16786,0 13,-5.83214 13,-13c0,-7.16786 -5.83214,-13 -13,-13zM16,5c6.08698,0 11,4.91302 11,11c0,6.08698 -4.91302,11 -11,11c-6.08698,0 -11,-4.91302 -11,-11c0,-6.08698 4.91302,-11 11,-11zM11,8c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM10,11v11h2v-11zM14,11v1v10h4.5c3.02558,0 5.5,-2.47442 5.5,-5.5c0,-3.02558 -2.47442,-5.5 -5.5,-5.5zM16,13h2.5c1.94442,0 3.5,1.55558 3.5,3.5c0,1.94442 -1.55558,3.5 -3.5,3.5h-2.5z"
          fill="currentColor"
        ></path>
      </g>
      {/* </g> */}
    </svg>
  );
}

function About() {
  return (
    <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
      <section>
        <h1 className="text-3xl font-serif">
          <b>Alexander Martin</b>
        </h1>
        <div className="flex items-start md:items-center my-7 flex-col md:flex-row">
          <div
            className="flex items-start md:items-center mr-12 flex-row md:flex-col"
            style={{
              height: 300,
            }}
          >
            <p className="max-w-[400px] text-neutral-800 dark:text-neutral-200">
              {about()}
            </p>
            <p className="max-w-[400px] text-neutral-800 dark:text-neutral-200 mt-[10px]">
              {bio()}
            </p>
          </div>

          <div
            className="flex items-start mt-5 md:items-center flex-col ml-1"
            style={{
              height: 300,
            }}
          >
            <Image
              alt="Alexander Martin"
              className="rounded grayscale-[15%] mb-4"
              src={profile}
              width={200}
              priority
            />

            {/* <nav id ="PageLinks"> */}
            <div className="flex flex-row text-neutral-500 dark:text-neutral-400">
              <a
                className="transition-all hover:text-neutral-800 
                                        dark:hover:text-neutral-200 py-[5px] px-[4px] 
                                        text-neutral-500"
                href="mailto:amart50@u.rochester.edu"
                rel="external nofollow noopener"
                target="_blank"
              >
                <Email />
              </a>

              <a
                className="transition-all hover:text-neutral-800 
                                        dark:hover:text-neutral-200 py-[6.5px] px-[3px] 
                                        text-neutral-500"
                href="https://github.com/alexmartin1722"
                rel="external nofollow noopener"
                target="_blank"
              >
                <GitHubIcon />
              </a>

              <a
                className="transition-all hover:text-neutral-800 
                                        dark:hover:text-neutral-200 py-[3.35px] pl-[3px] 
                                        text-neutral-500"
                href="https://orcid.org/0000-0002-8863-4002"
                rel="external nofollow noopener"
                target="_blank"
              >
                <ORCIDIcon />
              </a>

              <a
                className="transition-all hover:text-neutral-800 
                                        dark:hover:text-neutral-200 py-[2.6px] px-[3px] 
                                        text-neutral-500"
                href="https://www.linkedin.com/in/alexander-david-paul-martin/"
                rel="external nofollow noopener"
                target="_blank"
              >
                <LinkedInIcon />
              </a>

              <a
                className="transition-all hover:text-neutral-800 
                                        dark:hover:text-neutral-200 py-[5px] px-[3px] 
                                        text-neutral-500"
                href="https://scholar.google.com/citations?hl=en&authuser=1&user=6_4ethMAAAAJ"
                rel="external nofollow noopener"
                target="_blank"
              >
                <GoogleScholarIcon />
              </a>
            </div>

            {/* </nav> */}
          </div>
        </div>

        <hr />
      </section>
    </main>
  );
}

export default About;
