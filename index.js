var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
for(var i=0; i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionID);
        console.log(targetSection);
        var interval=setInterval(function(){
            var targetSectionCoordinates=targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },50);    
        });
    
}

var progressBars=document.querySelector('.skills-progress>div');;
var skillsContainer=document.getElementById('skills-container');
window.addEventListener('scroll', checkscroll);

function checkscroll(){
    var coorinates= skillsContainer.getBoundingClientRect();
    if(coorinates.top<window.innerHeight){
        console.log('skills section visible');
    }
}