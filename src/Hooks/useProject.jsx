export function useProject(name) {
  let shortDesc, features, desciption, thumbnail, title, projectName;

  switch (name) {
    case "reactquiz":
      shortDesc = "React quiz app";
      projectName = "React Quiz App";
      features = [
        "click get started",
        "check timer",
        "mark answer",
        "see result",
        "simple ui",
      ];
      desciption =
        "This project is a React-based quiz application offering an interactive experience. Users answer multiple-choice questions on various topics, earning points for correct answers. The app uses useReducer for state management and features a start screen, progress bar, timer, and a finished screen displaying scores and high scores. Responsive design ensures usability across devices. Error handling and loading states are included, displaying messages if data fetching fails. The app initializes with predefined questions to guarantee functionality without external data. Overall, this React Quiz App provides a smooth and engaging quiz experience with a user-friendly interface.";
      break;
    case "worldwise":
      shortDesc = "Mark the world";
      projectName = "World Wise";
      features = [
        "Map Integrated",
        "Login / SignUp",
        "mark favorite cities",
        "Make note",
        "clean ui",
      ];
      desciption =
        "My project, World Wise, is inspired by Jonas Schmedtmann's World Wise project on Udemy. I applied everything I learned from his course and enhanced the application with additional features. I added a backend to handle data storage and user management, making the app more robust and scalable. The project is fully responsive, ensuring a seamless experience on all devices. I implemented JWT tokens for secure login and signup processes, enhancing the security and user authentication aspects. Additionally, I integrated Leaflet, an open-source JavaScript library, to create interactive maps, providing users with a visually engaging way to explore geographic data. This project showcases my ability to extend a foundational project with advanced features, backend integration, and improved security, resulting in a comprehensive and user-friendly application.";

      break;

    case "travelist":
      shortDesc = "packing List";
      projectName = "Travel List";
      features = [
        "Add Packing items",
        "Make a List",
        "Sort by options",
        "Mark as Packed",
        "retro ui",
      ];
      break;

    case "popcorn":
      shortDesc = "Find your movie";
      projectName = "PopCorn";
      features = [
        "search movies",
        "Make wishlist",
        "movie details",
        "imdb review",
        "simple ui",
      ];
      break;

    case "traveller":
      shortDesc = "For The Travellers";
      projectName = "Traveller";
      features = [
        "Responsive",
        "Clean UI",
        "Animations",
        "Scalable",
        "Optimized",
      ];
      desciption =
        "This project intricately utilizes clip-path animations to craft visually captivating effects, enhancing user interface engagement.Through CSS, geometric shapes are defined with precision, utilizing properties like clip-path for shape manipulation and transitions for seamless animation. JavaScript augments interactivity by dynamically adjusting clip-path parameters based on user interactions. The project prioritizes optimization for browser rendering and animation smoothness, ensuring a seamless user experience. By leveraging advanced CSS techniques and JavaScript functionality, this project demonstrates adeptness in modern web animation, setting a high standard for visual design and interactivity.";
      break;

    case "mapty":
      shortDesc = "The Live Map";
      projectName = "The Mark";
      features = [
        "OOP Design",
        "Map Integration",
        "Java Script",
        "Optimized",
        "Clean UI",
      ];
      desciption =
        "This project exemplifies adeptness in object-oriented design, integrating mapping libraries, leveraging browser storage, ensuring responsiveness, and fostering interactivity. Through meticulous class organization and inheritance, it delivers a scalable and maintainable codebase. Integration with mapping libraries like Leaflet enriches user experience, allowing for interactive visualization of workout data. Utilization of browser localStorage ensures seamless data persistence across sessions, enhancing user convenience. The interface is designed to be responsive, adapting gracefully to various devices and screen sizes. Robust event handling mechanisms facilitate smooth user interactions, from form submissions to map interactions, providing a seamless and intuitive user experience. Overall, this project showcases a comprehensive skill set and attention to detail, making it a compelling asset for any software development role.";
      break;
    case "pigGame":
      shortDesc = "Fun Ludo Game";
      projectName = "Pig Game";
      features = [
        "Java Script",
        "Optimized",
        "Problem Solving",
        "Interactivity",
        "Clean UI",
      ];
      desciption =
        "The Pig Game is a simple yet engaging JavaScript-based web application. It offers an interactive experience where players roll dice, accumulating points while strategizing to avoid risks of losing their turn. The game employs dynamic DOM manipulation to update scores and display dice rolls instantly, enhancing user engagement. Utilizing JavaScript's event-driven architecture, it ensures smooth gameplay and responsive feedback to player actions. With a minimalist design and efficient code structure, the Pig Game delivers an immersive gaming experience across various devices. Its lightweight nature and seamless functionality make it an ideal choice for casual gamers and enthusiasts alike, highlighting the versatility and creativity achievable through JavaScript development";
  }

  return { shortDesc, title, desciption, features, thumbnail, projectName };
}
