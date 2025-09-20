const allLevels=()=>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res=>res.json())
    .then(data=>allLevelDisplay(data.data)
    )
}
const allLevelDisplay=(levels)=>{
    const allCategoryLevels=document.getElementById('allDisplayData')
    const activeBtn= document.getElementById('btn-${level.level_no}')
    console.log(activeBtn);
    
    levels.forEach(level => {
        const div =document.createElement('div');
        div.innerHTML=`
        <button id='btn-${level.level_no}' onclick='displayCategoryData(${level.level_no})' class="btn p-8">${level.lessonName}</button>
        `
        
         allCategoryLevels.append(div);
    });
   
}



allLevels()