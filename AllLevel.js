function allData(){
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res=>res.json())
    .then(data=>showData(data.data)
    )
}
const showData=(levels)=>{
console.log(levels);
    const allDisplayData=document.getElementById('allDisplayData')
    for(let level of levels){
        console.log(level)
        const div= document.createElement('div')
        div.innerHTML=`
        <button class="btn btn-outline">${level.lessonName
}</button>
        `
        allDisplayData.appendChild(div)
    }
}

allData()