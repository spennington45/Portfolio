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
        img: ["https://res.cloudinary.com/doxalakaz/image/upload/v1617313308/Camelot_image_1_kamh5h.png", "../assets/Pennington profile image.jpg"],
        url: "https://camelot-provider-services.netlify.app/",
        technologies: ["Java", "PostgresSQL", "Vue.js"],
        timeline: "2021",
      },
      {
        id: 2,
        title: "Test 2",
        bulletPoints: ["A", "B", "C", "D"],
        description: "",
        img: ["https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80", "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"],
        url: "",
        technologies: [],
        timeline: "2020",
      },
      {
        id: 3,
        title: "Test 3",
        bulletPoints: [],
        description: "",
        img: ["https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"],
        url: "",
        technologies: [],
        timeline: "",
      },
    ]
  },
  mutations: {

  }
})
