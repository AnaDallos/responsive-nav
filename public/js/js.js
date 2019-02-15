let url = "./data/nav.json";
fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        let html = '<ul class= "visible">';
        
        data.items.forEach((element) => {
            if(element.items.length>0){
                html += `
                <li class="dropdown-subnav"> 
                <a href="${element.url}">
                    <button class="dropbtn">${element.label}</button>
                </a> 
                <div class="dropdown-content">`;
                element.items.forEach((innerElement)=>{
                    html += `<a href="${innerElement.url}">${innerElement.label}</a>`;
                });
                html += `</div>`;
            }
            else{
                html += `<li> 
                <a href="${element.url}">${element.label}</a>
                </li>`;
            }
        });
        html += '</li></ul>'
        document.getElementById('main-list').innerHTML = html;
        console.log(html);


    }).catch(err => {
    // Do something for an error here
});



window.onload = ()=>{
    document.querySelector(".dropdown-subnav").addEventListener("click",()=>{
        document.querySelector(".dropdown-content").classList.toggle("display");
        document.querySelector(".dropdown-subnav").classList.toggle("active");
    });
    
    document.querySelector(".page-content").addEventListener("click",()=>{
        document.querySelector(".dropdown-content").classList.remove("display");
        document.querySelector(".dropdown-subnav").classList.remove("active");
        document.querySelector(".search input").classList.remove("visible");
        document.querySelector("header nav").classList.add("visible");
        document.querySelector("nav ul").classList.add("visible");
    });
    
    document.querySelector(".search button").addEventListener("click", ()=>{
        document.querySelector(".search input").classList.toggle("visible");
        document.querySelector("nav ul").classList.toggle("visible");
        document.querySelector(".dropdown-subnav").classList.remove("active");
        document.querySelector(".dropdown-content").classList.remove("display");
    });
}
