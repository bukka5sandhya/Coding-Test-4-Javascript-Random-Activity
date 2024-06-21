let getActivityBtnEle = document.getElementById("getActivityBtn");
let activityNameEle = document.getElementById("activityName");
let activityTypeEle = document.getElementById("activityType");
let activityImgEle = document.getElementById("activityImg");
let spinnerEle = document.getElementById("spinner");

getActivityBtnEle.addEventListener("click",function(){
    spinnerEle.classList.remove("d-none"); 
    let options={
        method:"GET"
    };
    let url="https://apis.ccbp.in/random-activity";
    fetch(url,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        spinnerEle.classList.add("d-none");
        activityNameEle.textContent =jsonData.activity; 
        activityTypeEle.textContent = jsonData.type;
        activityImgEle.src= jsonData.image;
    });
        
    
});