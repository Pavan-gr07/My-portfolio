/* ******** */
/* Variables */
/* ******** */

/* ******** */
/* projects */
/* ******** */

const projects = [
    {
        name:"foodwebsite",
        img:'food website.png',
        codeUrl:'https://github.com/Pavan-gr07/-food-website',
        liveUrl:'https://pavan-gr07.github.io/-food-website/ass1error.html',
        tags: ['html', 'js']
    },
    {
        name:"Company Stories",
        img:'company stories.png',
        codeUrl:'https://github.com/Pavan-gr07/Story-Page',
        liveUrl:'https://pavan-gr07.github.io/Story-Page/ass2edyoudha.html',
        tags:['css']
    },
    {
        name:"Own Website",
        img:'food website.png',
        codeUrl:"https://github.com/Pavan-gr07/ownwensite",
        tags:['html'],
        liveUrl:"https://pavan-gr07.github.io/ownwensite/"
    },
    {
        name:"nuuk Website",
        img:'nuuk website.png',
        codeUrl:"https://github.com/Pavan-gr07/Nuuk_Webapp-HTML_CSS-Final-Project-",
        tags:['css','js'],
        liveUrl:"https://pavan-gr07.github.io/Nuuk_Webapp-HTML_CSS-Final-Project-//"
    },
];

const year1=document.getElementById('year1');
const projectsEl = document.getElementById('projects')
const filterEls = document.querySelectorAll("#filters li");


for(let i=0;i<filterEls.length;i++)
{
    filterEls[i].addEventListener('click',function(e){
        let tag=e.target.id;
        renderProjects(tag);
    })
}



year1.innerHTML = new Date().getFullYear();


function renderProjects(tag)
{
    
    let output = "";


for(let i=0;i< projects.length;i++)
{

    if(tag == 'all' || projects[i].tags.includes(tags)){
    output += `<div class="project">
    <img src="projects/${projects[i].img}"  alt="Food website">
    <div class="content flex">
      <p>"${projects[i].name}"</p>
      <p class="flex">
          <a href="${projects[i].codeUrl}" target="_blank"><i class="fa-brands fa-github"></i></a>
          <a href="${projects[i].liveUrl}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
      </p>
    </div>
  </div>`;}
  else{

  }
}
projectsE1.innerHTML = output;
}
renderProjects('all');

//string Literal > inside we can sue variables