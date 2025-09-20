const allLevels=()=>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res=>res.json())
    .then(data=>allLevelDisplay(data.data)
    )
}
const allLevelDisplay=(levels)=>{
    const allCategoryLevels=document.getElementById('allDisplayData')
    levels.forEach(level => {
        const div =document.createElement('div');
        div.innerHTML=`
        <button onclick='displayCategoryData(${level.level_no})' class="btn p-8">${level.lessonName}</button>
        `
        
         allCategoryLevels.append(div);
    });
   
}



allLevels()