const addPlayer = () =>  {
    const searchValue = document.getElementById("input-value").value;
    const url= `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
    fetch(url)
    .then((response) =>response.json())
    .then(data => displayName(data.player))
    document.getElementById("input-value").value='';
}

 const displayName = players =>{
     const container = document.getElementById("container")
     container.textContent = '';
     const play = players.slice(0, 20);
  for (const play of players){
       play.textContent= "";
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card-group mt-5">
  <div class="card">
    <img class="w-25 mt-5" src="${play.strThumb}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${play.strPlayer}</h5>
      <h5> contery:${play.strNationality}</h5>
      <p class="card-text">${play.strDescriptionEN}</p>
      <button onClick={dettilsID()} class=bg-primary> Dettils </button>
    </div>
 `;
     container.appendChild(div);  
  }
  }
  const dettilsID = () =>{
      const Dettils = document.getElementById("dettils");
      const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${Dettils}`
      fetch(url)
      .then((response)=>response.json())
      .then(data => DisplayDettils(data.players))
    }

    const DisplayDettils = addDisplay =>{
        const displays = document.getElementById('player-dittils')
        const dettilsplayer = addDisplay.slice(1,50);
        for(const display of dettilsplayer){
            const div = document.createElement('div')
            div.innerHTML = `
            <h4>$display.strDescriptionRU}</h4>
            
            `;
            displays.appendChild(div);
        }
    }



