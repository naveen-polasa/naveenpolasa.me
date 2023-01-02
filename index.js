const projectsData = [
  {
    id: 1,
    title: "VS Code UI Clone",
    category: "Tailwind-CSS",
    src: "https://user-images.githubusercontent.com/91241718/210261634-18b7aa8c-c2e2-4be0-8baa-25caf024bd19.png",
    live: "https://vs-code-clone.netlify.app/",
    git: "https://github.com/Naveen-Polasa/vs-code-clone",
  },
  {
    id: 2,
    title: "Netflix UI Clone",
    category: "Tailwind-CSS",
    src: "https://user-images.githubusercontent.com/91241718/210265194-02c91f03-ad8e-4867-a6eb-038a25c351ca.png",
    live: "https://n-clone-np.netlify.app/",
    git: "https://github.com/Naveen-Polasa/netflix-clone",
  },
  {
    id: 3,
    title: "Manage Landing Page",
    category: "Tailwind-CSS",
    src: "https://user-images.githubusercontent.com/91241718/210265419-7bd03b0a-d66d-441f-bf28-72ded0ed760c.png",
    live: "https://vs-code-clone.netlify.app/",
    git: "https://github.com/Naveen-Polasa/manage-landing-page",
  },
  {
    id: 4,
    title: "Beats Landing Page",
    category: "HTML-CSS",
    src: "https://user-images.githubusercontent.com/91241718/210265468-ad110880-be09-41f7-b9cf-593c6aecf0a4.png",
    live: "https://beats-lp.netlify.app/",
    git: "https://github.com/Naveen-Polasa/beats-landing-page",
  },
  {
    id: 5,
    title: "Gaming Landing Page",
    category: "HTML-CSS",
    src: "https://user-images.githubusercontent.com/91241718/210265601-49561a34-21e6-445c-8783-89e3da704141.png",
    live: "https://gaming-lp.netlify.app/",
    git: "https://github.com/Naveen-Polasa/gaming-landing-page",
  },
  {
    id: 6,
    title: "Hosting Landing Page",
    category: "HTML-CSS",
    src: "https://user-images.githubusercontent.com/91241718/210265669-a52fac84-0462-4596-a113-c255dd0dfc17.png",
    live: "https://hosting-site-lp.netlify.app/",
    git: "https://github.com/Naveen-Polasa/hosting-site-landing-page",
  },
  {
    id: 6,
    title: "Credit Card Landing Page",
    category: "HTML-CSS",
    src: "https://user-images.githubusercontent.com/91241718/210265794-489464b2-4f4c-495b-b9c0-0ae17d6fbdcd.png",
    live: "https://credit-card-lp.netlify.app/",
    git: "https://github.com/Naveen-Polasa/credit-card-landing-page",
  },
  {
    id: 7,
    title: "Backroads Project",
    category: "HTML-CSS",
    src: "https://user-images.githubusercontent.com/91241718/210265856-993a7601-3890-451b-891d-5c3fcd350159.png",
    live: "https://backroads-b.netlify.app/",
    git: "https://github.com/Naveen-Polasa/backroads-project",
  },
];

const projectsContainer = document.querySelector(".projects-container");

window.addEventListener("DOMContentLoaded", () => {
  const projects = projectsData
    .map((project) => {
      return `<article class="w-96 p-2 border rounded-3xl border-gray-700 text-center ">
                <p class="text-center my-5 hover:text-yellow-500 hover:scale-110 hover:-rotate-1  duration-1000">${project.title}</p>
                <img class="m-auto w-80 rounded-lg hover:scale-105 duration-1000"
                    src=${project.src}
                    alt="">
                <a href="${project.git}"><i
                        class="fa-brands fa-github fa-2xl hover:scale-110 hover:text-red-400 duration-500 ease-in-out m-8 px-3"></i></a>
                <a href="${project.live}"><i
                        class="fa-solid fa-rocket fa-2xl hover:scale-110 hover:text-orange-600 duration-500 ease-in-out m-8 px-3"></i></a>
            </article>`;
    })
    .join(" ");
  projectsContainer.innerHTML = projects;
});
