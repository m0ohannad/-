const container = document.querySelector('.container');
const renderData = (list) => {
    container.textContent = '';
    list.map((name, index) => {
        const card = document.createElement('div');
        card.className = "card";
        const front = document.createElement('div');
        front.className = "front-facing";
        const back = document.createElement('div');
        back.className = "back-facing";
        front.innerHTML = ` <h1 class="name">${name.name}</h1>
                            <p class="more">عرض التفاصيل</p>
                            <span class="top">جَلَّ جَلَالُهُ</span>
                            <span class="number">${index+1}</span>`;
        back.innerHTML = `  <p><b>المعنى: </b>${name.meaning}</p><br/>
                            <p><b>الورود: </b>${name.occurrence}</p><br/>
                            <p><b>الشاهد: </b>${name.evidence}</p>
                            <p><a class="btn" href="${name.pdf}" onclick="window.open(this.href, 'Snopzer',
'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return true;" >تحميل الملف</a></p>`;
        card.appendChild(front);
        card.appendChild(back);
        container.appendChild(card);

        card.addEventListener('click', () => flip(card));
    });
}

fetch("./script/data.json", {
    mode: "no-cors",
    Headers:{
        "Application-Type": "application/json"
    }
}).then(res => res.json())
.then(res => {
    renderData(res.names);
})
.catch(err => console.log(err));

  function flip(card){
      console.log(card);
      const cards = document.querySelectorAll('.card');
      if(card.classList.contains('open')){
        card.classList.remove("open");
      }else{
        cards.forEach(e =>{e.classList.remove("open")});
        card.classList.add("open");
      }
  };
