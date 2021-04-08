import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [
      {
        id: 1,
        title: "Camelot for children service and provider management system",
        bulletPoints: ["Provides a secure web tool to manage volunteers", "Search through any volunteers by name and view contact information for each volunteer", "Link providers to particular services", "Volunteers and services can be added updated or removed to the database as needed"],
        description: "A web app to manage volunteers and services for the non-profit group Camelot",
        img: [{
          img: "https://res.cloudinary.com/doxalakaz/image/upload/v1617313308/Camelot_image_1_kamh5h.png",
          text: "Services page"
        },
        {
          img: "https://res.cloudinary.com/doxalakaz/image/upload/v1617910080/Camelot_image_3_tqm4kv.png",
          text: "Create new services"
        },
        {
          img: "https://res.cloudinary.com/doxalakaz/image/upload/v1617910080/Camelot_image_2_ngmtcd.png",
          text: "Home page where admin can register new users"
        },
        {
          img: "https://res.cloudinary.com/doxalakaz/image/upload/v1617910450/Camelot_image_4_su8dye.png",
          text: "Volunteer list"
        },
        {
          img: "https://res.cloudinary.com/doxalakaz/image/upload/v1617910080/Camelot_image_5_iogppo.png",
          text: "Filter volunteers by first or last name"
        },
        {
          img: "https://res.cloudinary.com/doxalakaz/image/upload/v1617910273/Camelot_image_7_q9vhxf.png",
          text: "Volunteer details are revealed when their name is clicked on. Volunteers can be updated, linked with a service, or deleted from the database."
        },
        {
          img: "https://res.cloudinary.com/doxalakaz/image/upload/v1617910080/Camelot_image_6_j9kysj.png",
          text: "Add volunteer form"
        },
        ],
        url: "https://camelot-provider-services.netlify.app/",
        technologies: ["Java", "PostgresSQL", "Vue.js"],
        timeline: "2021",
        additionalText: 'This web app was built to manage volunteers and services for the non-profit group Camelot. The back end was built with a PostgreSQL database to house all the information for the services and volunteers. DAOs and a RESTfull api was built using Java 11 for access to all the information in the database, as well as a authentication service service dedicated to security.  The front end was built using Vue.js with help from a collaborator to style the page.  On the front end log in is required to see any information on any pages. All new users must be registered by an Admin to provide an extra layer of security as all users will have access to personal information.  Once  user has access to the app they can search through volunteers and services as needed. Volunteers are also linked to services to make searching easier as a user can search for a volunteer by services they are linked to.  Volunteers can also be searched by first or last name and details of the each volunteer are displayed in an expanding box once their names are clicked on. Under the providers page volunteers can be updated incase address or other information changes, linked to any service, or deleted from the database.  On the services page of an individual service volunteers can be unlinked from a particular service if they are no longer available for that service. For example a junior buddy would need to be unlinked from that service once they were of age and could be moved to a different service, such as a buddy or adult volunteer.  ',
      },
      {
        id: 2,
        title: "Beer recipe for home-brewing web page and database",
        bulletPoints: ["Users can register and log in", "Provides a searchable database of beer recipes", "Users can contribute recipes", "Forums for community to collaborate"],
        description: "A web page connected to a database to store beer recipes for brewers.",
        img: [{
          img: "https://res.cloudinary.com/doxalakaz/image/upload/v1617892537/Beer_recipe_1_hlflqb.png",
          text: "Home page"
        },
        {
          img: "https://res.cloudinary.com/doxalakaz/image/upload/v1617892832/Beer_recipe_2_iwjutn.png",
          text: "Log in page"
        },
        {
          img: "https://res.cloudinary.com/doxalakaz/image/upload/v1617892837/Beer_recipe_3_cc3fcl.png",
          text: "Add recipe form"
        },
        ],
        url: "https://github.com/spennington45/BeerRecipe",
        technologies: ["Java", "PostgreSQL", "Vue.js", "Bootstrap"],
        timeline: "2020-2021",
        additionalText: "Users can register an account and contribute to the database with their favorite recipes. There are also forums for the community to help each other and discuss any recipes, techniques, or anything else they may want to discuss."
      },
      {
        id: 3,
        title: "BitBucket Slack Bot",
        bulletPoints: ["Queries BitBucket API 2.0", "Uses Slack app to communicate reports to staff", "Uses timeago to format results in a readable format", "Logs any errors to artifacts on BitBucket"],
        description: "Several python scripts that query the BitBucket API and sends a report to slack users reporting on commit history of students.",
        img: [
        {
          img: "https://res.cloudinary.com/doxalakaz/image/upload/v1617916718/bitbucket_slack_bot_hltjal.png",
          text: "Daily report to slack"
        }],
        url: "",
        technologies: ["Python"],
        timeline: "2021",
        additionalText: "",
      },
      {
        id: 4,
        title: "Encryption/Decryption cli (caesar cipher)",
        bulletPoints: ["Accepts a message and encrypts it providing an array of numbers as output", "Accepts a set of csv and translates it into a string as output."],
        description: "2 different cli application to encrypt and decrypt codes passed into it",
        img: [
        {
          img: "https://res.cloudinary.com/doxalakaz/image/upload/v1617916723/asci_encryption_j4vbmk.png",
          text: "Encrypting a message"
        },
        {
          img: "https://res.cloudinary.com/doxalakaz/image/upload/v1617916723/asci_decryption_bi5ggp.png",
          text: "Decrypting a message"
        },
      ],
        url: "https://github.com/spennington45/Java-commandline-projects",
        technologies: ["Java"],
        timeline: "2020",
        additionalText: "",
      },
      {
        id: 5,
        title: "Virtual biology lab, Macromolecules",
        bulletPoints: ["Simulates a macromolecule lab for online classes", "Teaches about carbohydrates, lipids, and proteins"],
        description: "A virtual lab to be used in online classes, simulating a lab normally done in person.",
        img: [
        {
          img: "https://res.cloudinary.com/doxalakaz/image/upload/v1617917629/macromolicule_lab_2_fpizee.png",
          text: "Results of carbohydrate experiment"
        },
        {
          img: "https://res.cloudinary.com/doxalakaz/image/upload/v1617917629/macromolicule_lab_1_aoc4r2.png",
          text: "Initial conditions for carbohydrate experiment"
        },
        {
          img: "https://res.cloudinary.com/doxalakaz/image/upload/v1617917921/macromolicule_lab_3_hiweyt.png",
          text: "Results of lipids experiment"
        },
      ],
        url: "https://spennington45.github.io/Macro-Molecule-Lab/",
        technologies: ["JavaScript", "HTML5", "CSS", "jQuery"],
        timeline: "2020",
        additionalText: "",
      },
    ]
  },
  getters: {
    getProjectByID: (state) => (id) => {
      return state.projects.find(project => project.id == id)
    }
  },
  mutations: {

  }
})
