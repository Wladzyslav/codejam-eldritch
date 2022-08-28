import a from"./data/ancients.js";import b from"./data/mythicCards/green/index.js";import c from"./data/mythicCards/brown/index.js";import d from"./data/mythicCards/blue/index.js";let azathoth=document.getElementById("0"),cthulthu=document.getElementById("1"),iogSothoth=document.getElementById("2"),shubNiggurath=document.getElementById("3");azathoth.style.backgroundImage=`url(${a[0].cardFace})`,cthulthu.style.backgroundImage=`url(${a[1].cardFace})`,iogSothoth.style.backgroundImage=`url(${a[2].cardFace})`,shubNiggurath.style.backgroundImage=`url(${a[3].cardFace})`;let getRandomNum=(b,c)=>{let a=Math.ceil(b),d=Math.floor(c);return Math.floor(Math.random()*(d-a+1))+a},shuffleStack=a=>{for(let b=a.length-1;b>0;b--){let c=Math.floor(Math.random()*(b+1)),d=a[b];a[b]=a[c],a[c]=d}return a},cardsNumber=[],firstStageStack=[],secondStageStack=[],thirdStageStack=[],fullStack=[],getCardsNumberByAncient=b=>{cardsNumber.push({green:a[b].firstStage.greenCards,brown:a[b].firstStage.brownCards,blue:a[b].firstStage.blueCards}),cardsNumber.push({green:a[b].secondStage.greenCards,brown:a[b].secondStage.brownCards,blue:a[b].secondStage.blueCards}),cardsNumber.push({green:a[b].thirdStage.greenCards,brown:a[b].thirdStage.brownCards,blue:a[b].thirdStage.blueCards})},stg1G=document.querySelector("#stg-1-g"),stg1Br=document.querySelector("#stg-1-br"),stg1Bl=document.querySelector("#stg-1-bl"),stg2G=document.querySelector("#stg-2-g"),stg2Br=document.querySelector("#stg-2-br"),stg2Bl=document.querySelector("#stg-2-bl"),stg3G=document.querySelector("#stg-3-g"),stg3Br=document.querySelector("#stg-3-br"),stg3Bl=document.querySelector("#stg-3-bl"),stageLabels=document.querySelectorAll(".stage-label"),getCounter=()=>{stg1G.textContent=cardsNumber[0].green,stg1Bl.textContent=cardsNumber[0].blue,stg1Br.textContent=cardsNumber[0].brown,stg2G.textContent=cardsNumber[1].green,stg2Bl.textContent=cardsNumber[1].blue,stg2Br.textContent=cardsNumber[1].brown,stg3G.textContent=cardsNumber[2].green,stg3Bl.textContent=cardsNumber[2].blue,stg3Br.textContent=cardsNumber[2].brown,stageLabels[0].classList.add("stage-active")},getNormalStack=(e,b,f,c)=>{if(0!==cardsNumber[c][b]){let d=1;for(;d<=cardsNumber[c][b];){let a=[];e.map((c,d,b)=>{a.push(b[getRandomNum(0,e.length-1)])}),!firstStageStack.includes(a[0])&&!secondStageStack.includes(a[0])&&!thirdStageStack.includes(a[0])&&(f.push(a[0]),d++)}}},getEasyStack=(e,b,f,c)=>{function g(a){return"hard"!==a.difficulty}let h=e.filter(g);if(0!==cardsNumber[c][b]){let d=1;for(;d<=cardsNumber[c][b];){let a=[];h.map((c,d,b)=>{a.push(b[getRandomNum(0,h.length-1)])}),!firstStageStack.includes(a[0])&&!secondStageStack.includes(a[0])&&!thirdStageStack.includes(a[0])&&(f.push(a[0]),d++)}}},getHardStack=(e,b,f,c)=>{function g(a){return"easy"!==a.difficulty}let h=e.filter(g);if(0!==cardsNumber[c][b]){let d=1;for(;d<=cardsNumber[c][b];){let a=[];h.map((c,d,b)=>{a.push(b[getRandomNum(0,h.length-1)])}),!firstStageStack.includes(a[0])&&!secondStageStack.includes(a[0])&&!thirdStageStack.includes(a[0])&&(f.push(a[0]),d++)}}},getFullStack=(a,b,c)=>{let d=c.concat(b),e=d.concat(a);return e},pickAncient=document.querySelector(".pick-ancient");pickAncient.addEventListener("click",b=>{let c=document.querySelector(".current-ancient"),d=document.querySelector(".game-container");"card ancient"===b.target.className&&(pickAncient.classList.add("inactive"),c.classList.remove("inactive"),c.style.backgroundImage=`url(${a[b.target.id].cardFace})`,d.classList.remove("inactive"),getCardsNumberByAncient(b.target.id),getCounter())});let difficultyContainer=document.querySelector(".difficulty-container"),difficultyInfo=document.querySelector(".difficulty-info"),shuffleButton=document.querySelector(".shuffle"),reloadButton=document.querySelector(".reload");difficultyContainer.addEventListener("click",a=>{"difficulty normal"===a.target.className?(a.target.classList.add("difficulty-active"),shuffleButton.classList.remove("inactive"),difficultyContainer.classList.add("inactive"),difficultyInfo.textContent="\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438",getNormalStack(b,"green",firstStageStack,0),getNormalStack(c,"brown",firstStageStack,0),getNormalStack(d,"blue",firstStageStack,0),getNormalStack(b,"green",secondStageStack,1),getNormalStack(c,"brown",secondStageStack,1),getNormalStack(d,"blue",secondStageStack,1),getNormalStack(b,"green",thirdStageStack,2),getNormalStack(c,"brown",thirdStageStack,2),getNormalStack(d,"blue",thirdStageStack,2)):"difficulty easy"===a.target.className?(a.target.classList.add("difficulty-active"),shuffleButton.classList.remove("inactive"),difficultyContainer.classList.add("inactive"),difficultyInfo.textContent="\u041B\u0435\u0433\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438",getEasyStack(b,"green",firstStageStack,0),getEasyStack(c,"brown",firstStageStack,0),getEasyStack(d,"blue",firstStageStack,0),getEasyStack(b,"green",secondStageStack,1),getEasyStack(c,"brown",secondStageStack,1),getEasyStack(d,"blue",secondStageStack,1),getEasyStack(b,"green",thirdStageStack,2),getEasyStack(c,"brown",thirdStageStack,2),getEasyStack(d,"blue",thirdStageStack,2)):"difficulty hard"===a.target.className&&(a.target.classList.add("difficulty-active"),shuffleButton.classList.remove("inactive"),difficultyContainer.classList.add("inactive"),difficultyInfo.textContent="\u0422\u0440\u0443\u0434\u043D\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438",getHardStack(b,"green",firstStageStack,0),getHardStack(c,"brown",firstStageStack,0),getHardStack(d,"blue",firstStageStack,0),getHardStack(b,"green",secondStageStack,1),getHardStack(c,"brown",secondStageStack,1),getHardStack(d,"blue",secondStageStack,1),getHardStack(b,"green",thirdStageStack,2),getHardStack(c,"brown",thirdStageStack,2),getHardStack(d,"blue",thirdStageStack,2))});let secondStageCardsNumber,thirdStageCardsNumber;shuffleButton.addEventListener("click",()=>{let a=document.querySelector(".cards-container"),b=document.querySelector(".counter-container");a.classList.remove("inactive"),b.classList.remove("inactive"),shuffleButton.classList.add("inactive"),reloadButton.classList.remove("inactive"),shuffleStack(firstStageStack),shuffleStack(secondStageStack),shuffleStack(thirdStageStack),fullStack=getFullStack(firstStageStack,secondStageStack,thirdStageStack),secondStageCardsNumber=cardsNumber[1].green+cardsNumber[1].brown+cardsNumber[1].blue,thirdStageCardsNumber=cardsNumber[2].green+cardsNumber[2].brown+cardsNumber[2].blue});let deck=document.querySelector(".deck"),currentCard,getCardFromStack=()=>{let a=document.querySelector(".current-card");1!==fullStack.length?(currentCard=fullStack.pop(),a.style.backgroundImage=`url(${currentCard.cardFace})`):(currentCard=fullStack.pop(),a.style.backgroundImage=`url(${currentCard.cardFace})`,deck.classList.add("inactive"))},updateCounter=()=>{if(fullStack.length>=secondStageCardsNumber+thirdStageCardsNumber){if("green"===currentCard.color){let a=stg1G.textContent;a--,stg1G.textContent=a}else if("brown"===currentCard.color){let b=stg1Br.textContent;b--,stg1Br.textContent=b}else if("blue"===currentCard.color){let c=stg1Bl.textContent;c--,stg1Bl.textContent=c}}else if(fullStack.length>=thirdStageCardsNumber&&fullStack.length<secondStageCardsNumber+thirdStageCardsNumber){if(stageLabels[0].classList.remove("stage-active"),stageLabels[1].classList.add("stage-active"),"green"===currentCard.color){let d=stg2G.textContent;d--,stg2G.textContent=d}else if("brown"===currentCard.color){let e=stg2Br.textContent;e--,stg2Br.textContent=e}else if("blue"===currentCard.color){let f=stg2Bl.textContent;f--,stg2Bl.textContent=f}}else if(fullStack.length<=thirdStageCardsNumber){if(stageLabels[1].classList.remove("stage-active"),stageLabels[2].classList.add("stage-active"),"green"===currentCard.color){let g=stg3G.textContent;g--,stg3G.textContent=g}else if("brown"===currentCard.color){let h=stg3Br.textContent;h--,stg3Br.textContent=h}else if("blue"===currentCard.color){let i=stg3Bl.textContent;i--,stg3Bl.textContent=i}}};deck.addEventListener("click",()=>{getCardFromStack(),updateCounter()}),reloadButton.addEventListener("click",()=>{location.reload()})
