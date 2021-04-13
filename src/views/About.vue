<template>
  <div class="container mb-5 ml-5">
    <div class="header">
      <h1>About Me</h1>
    </div>
    <div class="text-left">
      <h2>
        <font-awesome-icon :icon="{ prefix: 'fa', iconName: 'terminal' }" />
        Background
      </h2>
      <p>
        My name is Steven Pennington and I initially grew up in southern
        California, and have traveled around the United States for school and
        work. Growing up I have always enjoyed learning how things work. This
        drive led me into my first career as a scientist. I went to school to
        study Biochemistry and Molecular Biology and ended up getting my Ph.D.
        in 2009 from Oklahoma State University. From there I went to the
        University of Iowa where I spent 4 years as a postdoctoral fellow doing
        research. Several of my projects have had a bioinformatics aspect to
        them and this was my initial foray into coding. I had to teach myself
        Python to pursue my degree and I have used it in several projects since.
        I also have some experience with R for analysing large data sets. During
        and after my postdoc I also taught at several colleges, As Flash was
        fazed out I volunteered to make new virtual labs in early 2020. A sample
        of this can be found on this web site. Once COVID-19 hit the world
        enrollment fell and I found myself with less work. This abundant amount
        of free time led me to the opportunity that is
        <a href="https://www.techelevator.com/">Tech Elevator</a> where I
        furthered my programming skills substantially and developed many great
        relationships along the way. Upon graduation from Tech Elevator I began
        working there as an Academic Fellow, helping students and developing
        tech for the company.
      </p>
      <h2>
        <font-awesome-icon :icon="{ prefix: 'fa', iconName: 'code' }" />
        BACK-END ENGINEERING
      </h2>
      <p>
        On the back end I have experience with Java and Python. In both cases I
        have built various scripts to perform small tasks and many small CLI
        applications. Beyond scripts I have built server side applications that
        communicate with the client via RESTful API in Java and Spring
        Frameworks. Whether CLI or a server side API, the back end communicates
        with a PostgreSQL database. Using postgres and PG admin or the psql I
        have designed and built out databases in 3rd normal form. I also have
        some experience deploying to the cloud. I have some basic knowledge of
        AWS and BitBucket cloud. While deploying Python scripts to BitBucket
        cloud I built out a CI/CD pipeline using a standard Docker Python image
        and adding functionality to the .yml. Some additions are supporting
        testing of branches, on demand requests with user input env, and
        scheduled daily execution of the default pipeline. Additionally, I have
        experience unit testing with JUnit4 and 5 as well as Integration
        testing.
      </p>
      <h2>
        <font-awesome-icon :icon="{ prefix: 'fa', iconName: 'edit' }" />
        FRONT-END ENGINEERING
      </h2>
      <p>
        For the front end technologies I have experience with vanilla
        JavaScript, jQuery, Vue.js, HTML, and CSS. Using frameworks like axios I
        have tied web applications to back end APIs. Some applications I have
        built are single page applications and others are full fledged web pages
        with extensive functionality. I have some experience with additional
        frameworks such as Bootstrap to help styling and responsive design. More
        recently I have begun looking into testing the front end with Cypris. I
        have deployed web pages to github pages as well as other web hosting
        services such as Heroku.
      </p>
      <h2>
        <font-awesome-icon :icon="{ prefix: 'fa', iconName: 'code-branch' }" />
        OTHER ENGINEERING
      </h2>
      <p>
        Other related skills I have is experience with the command line, mostly
        in BASH although I have some experience on the windows command line. I
        also have experience with shell scripting and using other command line
        tools such as cURL and others. I also have experience with Git version
        control on the command line and via GitHub and BitBucket. I have worked
        in an agile environment working in sprints and building out new features
        on branches and merging with a development branch to be deployed. I have
        worked with project management tools such as Trello, Jira, and Asana.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>