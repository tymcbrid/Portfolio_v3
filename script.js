var linkedinbutton = document.getElementById("dot3");
var githubbutton = document.getElementById("dot4");
var phonebutton = document.getElementById("dot1");
var emailbutton = document.getElementById("dot2");
var resumebutton = document.getElementById("dot5");



//   document.addEventListener('DOMContentLoaded', function () {
//     var elems = document.querySelectorAll('.parallax');
//     var instances = M.Parallax.init(elems);
// });

if(resumebutton !== null){
  resumebutton.addEventListener("click", function(){
    window.open('https://drive.google.com/open?id=1sjuPwe3ngu4jsmQUSiGnvGF0yzlGbj4Z', '_blank')
  })
}

if(linkedinbutton !== null){
  linkedinbutton.addEventListener("click", function(){
    window.open('https://www.linkedin.com/in/mcbridetyler/', '_blank')
  })
}
if(githubbutton !== null){
  githubbutton.addEventListener("click", function(){
    window.open('https://github.com/tymcbrid', '_blank')
  }) 
}




$('#dot1').on('click', () => {
  $('#bg-modal1').removeClass('invisible')

})

$('#bg-modal1').on('click', (e) => {
  $('#bg-modal1').addClass('invisible')
}
)


$('#dot2').on('click', () => {
  $('#bg-modal2').removeClass('invisible')
})

$('#bg-modal2').on('click', (e) => {
  $('#bg-modal2').addClass('invisible')
}
)