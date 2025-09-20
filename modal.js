

const modalApi=(id)=>{
    const url=`https://openapi.programming-hero.com/api/word/${id}`
    fetch(url)
    .then(res=> res.json())
    .then(data=> modalText(data.data)
    )
}
const modalText=(data)=>{
    // console.log(data);
    
    const modalDisplay=document.getElementById('modal-container')
   modalDisplay.innerHTML="";
    
   const div= document.createElement('div');
        div.innerHTML=`
        <h2 class='text-xl font-bold'>${data.word}</h2>
        <h2>meaning: ${data.meaning}</h2>
        <h2 class="text-base font-bold">Example: ${data.sentence}</h2>
        <h2 class="text-base font-medium ">সমার্থক শব্দ গুলো: ${data.synonyms}</h2>

        
        `
        
        modalDisplay.append(div)
   
    document.getElementById('deatils').checked=true;
    
}

// id: 3
// level: 2
// meaning: "সতর্ক"
// partsOfSpeech: "adjective"
// points: 2
// pronunciation: "কশাস"
// sentence: "Be cautious while crossing the road."
// synonyms: (3) ['careful', 'alert', 'watchful']
// word: "Cautious"