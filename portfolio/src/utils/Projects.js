import burgerzilla from "../Assets/images/burgerzilla.png"
import codingquiz from "../Assets/images/codingquiz.png"
import project1 from "../Assets/images/project1.png"
import readme from "../Assets/images/readme.png"
import weatherapp from "../Assets/images/weatherapp.png"

export const Projects = [

      {id: 0,
        title : "Burger Zilla",
        description: "This project is a full stack application that allows users to input the names of burgers they'd like to order. Whenever a user submits a burger's name, your app will display the burger on the left side of the page, waiting to be devoured. Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page, indicating the burger has been devoured. The app will store every burger in a database, whether devoured or not.The technologies used are HTML, CSS, JavaScript, Bootstrap, Handlebars, jQuery, Node, Express, ORM, and mySql. JavaScript",
        technologies:"",
        image: burgerzilla,
        githubRepo: "https://github.com/ericfreyer/Farmwise_FreshEats", 
        deployed: "https://ericfreyer.github.io/Farmwise_FreshEats/"
      },
      {id: 1,
        title : "Farmwise Fresh Eats",
        description: "By entering a zip code, our easy to use interface shows user farmers markets in their area at a glance. By clicking on a market, user can, see details on goods sold, and hours of operation. Farmwise Fresh Eats utilizes the USDA's database of registered markets.This project is a full stack application that allows users to input the names of burgers they'd like to order. Whenever a user submits a burger's name, your app will display the burger on the left side of the page, waiting to be devoured. Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page, indicating the burger has been devoured. The app will store every burger in a database, whether devoured or not.",
        technologies: "The technologies used are HTML, CSS, JavaScript, Bootstrap, Handlebars, jQuery, Node, Express, ORM, and mySql. JavaScript",
        image: project1,
        githubRepo: "https://github.com/ericfreyer/Farmwise_FreshEats", 
        deployed: "https://ericfreyer.github.io/Farmwise_FreshEats/"
      },
      {id: 2,
        title:"Weather App",
        description:"As a developer, I was asked to build a weather dashboard that runs in the browser and features dynamically updated HTML and CSS. Data will be retrieved from a third-party weather API(OpenWeather API).",
        technologies:"",
        image: weatherapp,
        githubRepo:"https://github.com/itz-essie/Weather-App",
        deployed:"https://itz-essie.github.io/Weather-App/"
      },
      {id: 3,
        title:"",
        description:"This project is a full stack application that allows users cure their COVID lonliness by collecting and displaying COVID-friendly date/activity ideas for the user to participate in, if they wish. This application will display user-input date/activity ideas as well as allow users to submit additional date/activity ideas. Our application is designed for the user to select the activity type they would like to explore and then filter the results by their state to see those activities in their area, submitted by other users.",
        technologies: "GitHub, Boostrap, Heroku,Handlebars, Javascript, Node js, Formidable, Express, and Sequelize.",
        image:readme,
        githubRepo:"https://github.com/itz-essie/stepping_out", 
        deployed: "https://intense-mountain-14877.herokuapp.com/"
      },
      {id: 4,
        title:"Coding Quiz",
        description:"Built a timed coding quiz on HTML and JavaScript fundamentals, with multiple-choice questions. This app will runs in the browser, and has a clean, polished, and responsive user interface.",
        technologies: "HTML, CSS, JQuery, and JavaScript",
        image:codingquiz,
        githubRepo: "https://github.com/itz-essie/Coding-Quiz",
        deployed: "https://itz-essie.github.io/Coding-Quiz/"
      }
      // {id: 5,
      //   title:"",
      //   description:"",
      //   image:codingquiz,
      //   url:""
      // }
    ]

  