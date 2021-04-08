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
          text: "Temp text"
        },
        {
          img: "../assets/Pennington profile image.jpg",
          text: "Replace me"
        }
        ],
        url: "https://camelot-provider-services.netlify.app/",
        technologies: ["Java", "PostgresSQL", "Vue.js"],
        timeline: "2021",
        additionalText: 'Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
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
        url: "TBD",
        technologies: ["Java", "PostgreSQL", "Vue.js"],
        timeline: "2020-2021",
        additionalText: "Users can register an account and contribute to the database with their favorite recipes. There are also forums for the community to help each other and discuss any recipes, techniques, or anything else they may want to discuss."
      },
      {
        id: 3,
        title: "Test 3",
        bulletPoints: [],
        description: "",
        img: [
        {
          img: "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",
          text: "Replace me"
        }],
        url: "",
        technologies: [],
        timeline: "",
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
