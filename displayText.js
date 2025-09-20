const displayCategoryData=(id)=>{
    const url=`https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>btnClickdData(data.data)
    )
    
    
}
const btnClickdData=(categorys)=>{
    const categoryDataDisplay= document.getElementById('card-container')
    categoryDataDisplay.innerHTML="";
    categorys.forEach(category => {
        const div= document.createElement('div')
        div.innerHTML=`
        <div class="card bg-base-100 shadow-sm text-center">
            <div class="card-body">
                <h2 class="">${category.word}</h2>
                <p> meaning, pronunciation</p>
                <p> ${category.meaning}, ${category.pronunciation}</p>
                <div class="card-actions justify-between">
                    <button class="btn"><i class="fa-solid fa-circle-info"></i></button>
                    <button class="btn"><i class="fa-solid fa-volume-high"></i></button>
                </div>
            </div>
        </div>
        `
        categoryDataDisplay.append(div)
    });
}
 displayCategoryData()