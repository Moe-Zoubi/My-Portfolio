const games = [
    {
      Name: 'Retro Mario',
      img: '/project-images/mario.jpg',
      link: 'https://github.com/Moe-Zoubi/Game-Creation/tree/main/mario',
    },
    {
      Name: 'Retro Zelda',
      img: '/project-images/zelda.jpg',
      link: 'https://github.com/Moe-Zoubi/Game-Creation/tree/main/zelda',
    },
  ]
const vanillaJavaScript = [
        {
            Name: 'Countdown Timer',
            img: '/project-images/countdown-timer.jpg',
            link: 'https://github.com/Moe-Zoubi/Vanilla-Javascript/tree/main/Countdown-Timer',
          },
        {
          Name: 'Counter',
          img: '/project-images/Counter.jpg',
          link: 'https://github.com/Moe-Zoubi/Vanilla-Javascript/tree/main/Counter',
        },
        {
          Name: 'Grocery List',
          img: '/project-images/grocery-list.jpg',
          link: 'https://github.com/Moe-Zoubi/Vanilla-Javascript/tree/main/Grocery-bud',
        },
        {
          Name: 'Menu',
          img: '/project-images/Menu.jpg',
          link: 'https://github.com/Moe-Zoubi/Vanilla-Javascript/tree/main/Menu',
        },
        {
          Name: 'Modal',
          img: '/project-images/Modal.jpg',
          link: 'https://github.com/Moe-Zoubi/Vanilla-Javascript/tree/main/Modal',
        },
        {
          Name: 'NavBar',
          img: '/project-images/navbar.jpg',
          link: 'https://github.com/Moe-Zoubi/Vanilla-Javascript/tree/main/NavBar',
        },
        {
          Name: 'Paragraph Generator',
          img: '/project-images/paragraph-generator.jpg',
          link: 'https://github.com/Moe-Zoubi/Vanilla-Javascript/tree/main/lorem-ipsum',
        },
        {
          Name: 'Q & A',
          img: '/project-images/Q&A.jpg',
          link: 'https://github.com/Moe-Zoubi/Vanilla-Javascript/tree/main/Questions',
        },
        {
          Name: 'Reviews',
          img: '/project-images/Reviews.jpg',
          link: 'https://github.com/Moe-Zoubi/Vanilla-Javascript/tree/main/Reviews',
        },
        {
          Name: 'SideBar',
          img: '/project-images/sidebar.jpg',
          link: 'https://github.com/Moe-Zoubi/Vanilla-Javascript/tree/main/Sidebar',
        },
        {
          Name: 'Slides',
          img: '/project-images/slides.jpg',
          link: 'https://github.com/Moe-Zoubi/Vanilla-Javascript/tree/main/Slider',
        },
        {
          Name: 'Smooth Scroll',
          img: '/project-images/smooth-scroll.jpg',
          link: 'https://github.com/Moe-Zoubi/Vanilla-Javascript/tree/main/Scroll',
        },
        {
          Name: 'Tabs',
          img: '/project-images/tabs.jpg',
          link: 'https://github.com/Moe-Zoubi/Vanilla-Javascript/tree/main/Tabs',
        },
        {
          Name: 'Video',
          img: '/project-images/video.jpg',
          link: 'https://github.com/Moe-Zoubi/Vanilla-Javascript/tree/main/Video',
        },
        {
          Name: 'Color Randomizer',
          img: '/project-images/colo-randomizer.jpg',
          link: 'https://github.com/Moe-Zoubi/Vanilla-Javascript/tree/main/Color-Flipper',
        },
      ]
// nav bar setup
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
const linksContainer = document.querySelector(".links-container");

/* project display */
const vanillaContainer = document.getElementById("vanilla-projects");
const gameContainer = document.getElementById("game-projects");

window.addEventListener("DOMContentLoaded", function () {
    displayProjects(vanillaJavaScript,"vanilla");
    displayProjects(games, "games");
});

window.addEventListener("scroll",function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        navbar.classList.add("fixed-nav");
    }else{
        navbar.classList.remove("fixed-nav");
    }

    if(scrollHeight > 500){
        topLink.classList.add("show-link");
    }else{
        topLink.classList.remove("show-link");
    }
});

// set nav toggle
const navToggle = document.querySelector(".nav-toggle");

const links = document.querySelector(".links");

navToggle.addEventListener("click",function(){
    // linksContainer.classList.toggle("show-links");
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }else{
        linksContainer.style.height = 0;
    }
});




window.addEventListener("scroll",function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        navbar.classList.add("fixed-nav");
    }else{
        navbar.classList.remove("fixed-nav");
    }

    if(scrollHeight > 500){
        topLink.classList.add("show-link");
    }else{
        topLink.classList.remove("show-link");
    }
});

//scroll function
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function(link){
    link.addEventListener("click", function(e){
        e.preventDefault();
        
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        if(!fixedNav){
            position = position - navHeight;
        }
        
        if(navHeight > 82){
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0, top: position,
        });
        linksContainer.style.height = 0;
    });
});

function displayProjects(projects, arrType) {
    let displayProjects = projects.map(function (project) {
      return `<div class="card">
    <div class="project-title">${project.Name}</div>
    <img src=${project.img} alt=${project.Name}>
    <button onclick="window.location.href=${project.link}" class="project-btn-container project-btn">Click me</button>
  </div>`;
    });

    displayProjects = displayProjects.join("");

    if(arrType === "games"){
        gameContainer.innerHTML = displayProjects;
    }else{
        vanillaContainer.innerHTML = displayProjects;
    }
  }