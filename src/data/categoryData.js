// Import images
// Example: import webDev1 from '../images/web-dev-1.jpg';
import bpAccounting from '../images/bp-accounting-apps.png';
import bpAddress from '../images/bp-address.png';
import bubbleApp from '../images/bubble-app.png';
import demoMovie from '../images/demo-movie.png';
import fitness from '../images/fitness.png';
import ipAddress from '../images/ip-address.png';
import uxDesigner from '../images/ux-designer.png';
import uxDesignerM from '../images/ux-designer-m.png';
import worldVite from '../images/world-vite.png';
import newPost from '../images/newpost.png';
import coming from '../images/coming-soon.png'; 
import petstore from '../images/swagger-petstore.png';
import teaCozy from '../images/tea-cozy.png';
import workoutCoach from '../images/workout-coach.png';
import deployed from '../images/deployed_loggedin.png';
import eBikes from '../images/ecommerce-bikes.png';
import eSneakers from '../images/ecommerce-sneakers.png';
import filtering from '../images/filtering.png';
import financial from '../images/financial-literacy.png';
import ipMobile from '../images/ip-mobile.png';
import logoDesigns from '../images/logo-designs.png';
import medical from '../images/medical-route.png';
import portfolio from '../images/personal-portfolio.png';
import petDesigns from '../images/pet-designs.png';
import recipe from '../images/recipe-mockups.png';
import shopping from '../images/shopping.png';
import stickerSheet from '../images/sticker-sheet.png';
import swaggerPetstore from '../images/swagger-petstore.png';
import taskTracker from '../images/TT2.png';
import wireframes from '../images/wireframes.png';
import worldViteReact from '../images/WorldViteReact.png';
import aboutUs from '../images/about-us.png';


export const categoryData = {
  "web-developer": {
    title: "Web Developer",
    carouselItems: [
      {
        image: ipAddress,
        caption: "IP Address Search",
        description: "FrontendMentor challenge project with search functionality and API integration."
      },
      {
        image: deployed,
        caption: "Full-Stack Car Dealership Site",
        description: "Full-stack IBM Capstone project with user authentication, CRUD operations, and Docker deployment."
      },
      {
        image: eSneakers,
        caption: "FrontendMentor E-commerce Site",
        description: "E-commerce product page with image gallery, lightbox, and cart functionality."
      },
      {
        image: "workoutCoach",
        caption: "Workout Coach React App",
        description: "LaunchCode capstone project using React, featuring dynamic user interaction and API-driven content."
      }
    ],
    collageImages: [
      { src: worldViteReact, alt: "Web development project: Where in the World" },
      { src: teaCozy, alt: "Web development project: Tea Cozy" },
      { src: newPost, alt: "Full stack project" },
      { src: aboutUs, alt: "Full stack project About us static page" },
      { src: ipMobile, alt: "IP Address search app" },
      { src: swaggerPetstore, alt: "Full stack project stagger image" }
    ]
  },
  "ux-designer": {
    title: "UX Designer",
    carouselItems: [
      {
        image: petDesigns,
        caption: "Bring-Me-Home Pet Adoption",
        description: "Designed ideation, wireframes, and prototypes for a pet adoption app for Google UX Design Specialization course."
      },
      {
        image: recipe,
        caption: "Mockups for Italian Recipe App",
        description: "Created for Google UX Design Specialization course focusing on user-friendly recipe app."
      },
      {
        image: financial,
        caption: "Financial Literacy App",
        description: "User stories, research, testing for Google UX Design Specialization Social Good project."
      },
      {
        image: uxDesigner,
        caption: "Political Candidate Site Design",
        description: "Created designs for a political candidate's campaign"
      }
    ],
    collageImages: [
      { src: stickerSheet, alt: "First sticker sheet done in Google UX course" },
      { src: wireframes, alt: "Image of wireframing" },
      { src: logoDesigns, alt: "Examples of some logo designs created on Canva" },
      { src: taskTracker, alt: "Task tracker project created with Bubble.io" },
      { src: fitness, alt: "Fitness app design" },
      { src: "/images/ux-collage-6.jpg", alt: "UX design project 6" }
    ]
  },
  "bubble-io-developer": {
    title: "Bubble.io Developer",
    carouselItems: [
      {
        image: "/images/bubble-carousel-1.jpg",
        caption: "No-Code Solutions",
        description: "Building powerful web applications without traditional coding using Bubble.io's visual programming interface."
      },
      {
        image: "/images/bubble-carousel-2.jpg",
        caption: "Database Design",
        description: "Designing efficient database structures and workflows to handle complex business logic and data relationships."
      },
      {
        image: "/images/bubble-carousel-3.jpg",
        caption: "Workflow Automation",
        description: "Creating automated workflows and integrations to streamline business processes and improve efficiency."
      },
      {
        image: "/images/bubble-carousel-4.jpg",
        caption: "Responsive Design",
        description: "Crafting responsive Bubble.io applications that provide excellent user experiences on all device sizes."
      }
    ],
    collageImages: [
      { src: "/images/bubble-collage-1.jpg", alt: "Bubble.io project 1" },
      { src: "/images/bubble-collage-2.jpg", alt: "Bubble.io project 2" },
      { src: "/images/bubble-collage-3.jpg", alt: "Bubble.io project 3" },
      { src: "/images/bubble-collage-4.jpg", alt: "Bubble.io project 4" },
      { src: "/images/bubble-collage-5.jpg", alt: "Bubble.io project 5" },
      { src: "/images/bubble-collage-6.jpg", alt: "Bubble.io project 6" }
    ]
  }
};

export default categoryData;