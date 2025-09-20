const removeActiveClass=()=>{
    const activeClass=document.getElementsByClassName('active')
    for(let clickBtn of activeClass){
            clickBtn.classList.remove('active')
            
        }
}



const displayCategoryData=(id)=>{
    const url=`https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        removeActiveClass()
        const btnClicked=document.getElementById(`btn-${id}`)
        btnClicked.classList.add('active')
        btnClickdData(data.data)
    }
    )
    
    
}
const btnClickdData=(categorys)=>{
    const categoryDataDisplay= document.getElementById('card-container')
    const defaultText=document.getElementById('default-text')
    const noDataText=document.getElementById('no-data-text')
    defaultText.classList.add('hidden')
    noDataText.classList.add('hidden')
    categoryDataDisplay.innerHTML="";

    if(!categorys || categorys.length===0){
        noDataText.classList.remove('hidden')
        return; 
        
    }
    categorys.forEach(category => {
        const div= document.createElement('div')
        // console.log(category.id);
        
        
        div.innerHTML=`
        <div class="card bg-base-100 h-[200px] shadow-sm text-center">
            <div class="card-body ">
                <h2 class="">${category.word}</h2>
                <p> meaning, pronunciation</p>
                <p> ${category.meaning}, ${category.pronunciation}</p>
                <div class="card-actions justify-between">
                    <button class="btn" onclick='modalApi(${category.id})'><i class="fa-solid fa-circle-info"></i></button>
                    <button class="btn"><i class="fa-solid fa-volume-high"></i></button>
                </div>
            </div>
        </div>
        
        
        `
        categoryDataDisplay.append(div)
    });
}
