var c=Object.defineProperty;var f=(r,e,t)=>e in r?c(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var i=(r,e,t)=>(f(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();class g{constructor(){i(this,"observers",[])}addObserver(e){this.observers.push(e),e.update()}removeObserver(e){this.observers=this.observers.filter(t=>t!==e)}notifyObservers(){this.observers.forEach(e=>e.update())}}class C{constructor(e){i(this,"undoStack",[]);i(this,"redoStack",[]);this.base=e}execute(e){this.undoStack.push(e),this.redoStack=[],console.log(this.toString())}undo(){const e=this.undoStack.pop();if(!e)throw new Error("No more undo states");this.redoStack.push(e);const t=this.undoStack.slice(-1)[0]||this.base;return console.log(this.toString()),t.state}redo(){const e=this.redoStack.pop();if(!e)throw new Error("No more redo states");return this.undoStack.push(e),console.log(this.toString()),e.state}get canUndo(){return this.undoStack.length>0}get canRedo(){return this.redoStack.length>0}toString(){return`undoStack: ${this.undoStack.length}, redoStack: ${this.redoStack.length}`}}const h=[{"en-CA":"hello","fr-CA":"bonjour"},{"en-CA":"time","fr-CA":"temps"},{"en-CA":"year","fr-CA":"an"},{"en-CA":"people","fr-CA":"gens"},{"en-CA":"way","fr-CA":"maniere"},{"en-CA":"day","fr-CA":"jour"},{"en-CA":"man","fr-CA":"homme"},{"en-CA":"thing","fr-CA":"chose"},{"en-CA":"woman","fr-CA":"femme"},{"en-CA":"life","fr-CA":"vie"},{"en-CA":"child","fr-CA":"enfant"},{"en-CA":"world","fr-CA":"monde"},{"en-CA":"school","fr-CA":"ecole"},{"en-CA":"state","fr-CA":"etat"},{"en-CA":"family","fr-CA":"famille"},{"en-CA":"student","fr-CA":"etudiant"},{"en-CA":"group","fr-CA":"groupe"},{"en-CA":"country","fr-CA":"pays"},{"en-CA":"problem","fr-CA":"probleme"},{"en-CA":"hand","fr-CA":"main"},{"en-CA":"part","fr-CA":"partie"},{"en-CA":"place","fr-CA":"lieu"},{"en-CA":"case","fr-CA":"cas"},{"en-CA":"week","fr-CA":"semaine"},{"en-CA":"company","fr-CA":"entreprise"},{"en-CA":"system","fr-CA":"systeme"},{"en-CA":"program","fr-CA":"programme"},{"en-CA":"question","fr-CA":"question"},{"en-CA":"work","fr-CA":"travail"},{"en-CA":"government","fr-CA":"gouvernement"},{"en-CA":"number","fr-CA":"nombre"},{"en-CA":"night","fr-CA":"nuit"},{"en-CA":"point","fr-CA":"point"},{"en-CA":"home","fr-CA":"maison"},{"en-CA":"water","fr-CA":"eau"},{"en-CA":"room","fr-CA":"chambre"},{"en-CA":"mother","fr-CA":"mere"},{"en-CA":"area","fr-CA":"zone"},{"en-CA":"money","fr-CA":"argent"},{"en-CA":"story","fr-CA":"histoire"},{"en-CA":"fact","fr-CA":"fait"},{"en-CA":"month","fr-CA":"mois"},{"en-CA":"lot","fr-CA":"beaucoup"},{"en-CA":"right","fr-CA":"droit"},{"en-CA":"study","fr-CA":"etude"},{"en-CA":"book","fr-CA":"livre"},{"en-CA":"eye","fr-CA":"oeil"},{"en-CA":"job","fr-CA":"emploi"},{"en-CA":"word","fr-CA":"mot"},{"en-CA":"business","fr-CA":"affaires"},{"en-CA":"issue","fr-CA":"probleme"},{"en-CA":"side","fr-CA":"cote"},{"en-CA":"kind","fr-CA":"genre"},{"en-CA":"head","fr-CA":"tete"},{"en-CA":"house","fr-CA":"maison"},{"en-CA":"service","fr-CA":"service"},{"en-CA":"friend","fr-CA":"ami"},{"en-CA":"father","fr-CA":"pere"},{"en-CA":"power","fr-CA":"pouvoir"},{"en-CA":"hour","fr-CA":"heure"},{"en-CA":"game","fr-CA":"jeu"},{"en-CA":"line","fr-CA":"ligne"},{"en-CA":"end","fr-CA":"fin"},{"en-CA":"member","fr-CA":"membre"},{"en-CA":"law","fr-CA":"loi"},{"en-CA":"car","fr-CA":"voiture"},{"en-CA":"city","fr-CA":"ville"},{"en-CA":"community","fr-CA":"communaute"},{"en-CA":"name","fr-CA":"nom"},{"en-CA":"president","fr-CA":"president"},{"en-CA":"team","fr-CA":"equipe"},{"en-CA":"minute","fr-CA":"minute"},{"en-CA":"idea","fr-CA":"idee"},{"en-CA":"kid","fr-CA":"gamin"},{"en-CA":"body","fr-CA":"corps"},{"en-CA":"information","fr-CA":"information"},{"en-CA":"back","fr-CA":"arriere"},{"en-CA":"parent","fr-CA":"parent"},{"en-CA":"face","fr-CA":"visage"},{"en-CA":"others","fr-CA":"autres"},{"en-CA":"level","fr-CA":"niveau"},{"en-CA":"office","fr-CA":"bureau"},{"en-CA":"door","fr-CA":"porte"},{"en-CA":"health","fr-CA":"sante"},{"en-CA":"person","fr-CA":"personne"},{"en-CA":"art","fr-CA":"art"},{"en-CA":"war","fr-CA":"guerre"},{"en-CA":"history","fr-CA":"histoire"},{"en-CA":"party","fr-CA":"fete"},{"en-CA":"result","fr-CA":"resultat"},{"en-CA":"change","fr-CA":"changement"},{"en-CA":"morning","fr-CA":"matin"},{"en-CA":"reason","fr-CA":"raison"},{"en-CA":"research","fr-CA":"recherche"},{"en-CA":"girl","fr-CA":"fille"},{"en-CA":"guy","fr-CA":"gars"},{"en-CA":"moment","fr-CA":"moment"},{"en-CA":"air","fr-CA":"air"},{"en-CA":"teacher","fr-CA":"professeur"},{"en-CA":"force","fr-CA":"force"},{"en-CA":"education","fr-CA":"education"},{"en-CA":"goose","fr-CA":"oie"},{"en-CA":"waterloo","fr-CA":"waterloo"},{"en-CA":"honk","fr-CA":"klaxon"}];function u(r){const e=[];for(let t=0;t<r;t++){const n=Math.floor(Math.random()*h.length);e.push(h[n])}return e}class p extends g{constructor(){super(...arguments);i(this,"undoManagers",[]);i(this,"games",[]);i(this,"uniqueId",0);i(this,"lang","en-CA");i(this,"gameInFocus",-1);i(this,"wordCompleted",!1)}undo(){this.games[this.gameInFocus]={...this.undoManagers[this.gameInFocus].undo()},this.notifyObservers()}redo(){this.games[this.gameInFocus]={...this.undoManagers[this.gameInFocus].redo()},this.notifyObservers()}get canUndo(){return this.undoManagers[this.gameInFocus].canUndo}get canRedo(){return this.undoManagers[this.gameInFocus].canRedo}get numGames(){return this.games.length}get gameList(){return this.games}get focusedGame(){return this.gameInFocus}get getLang(){return this.lang}get getWordCompleted(){return this.wordCompleted}create(){const n={id:this.uniqueId++,fontSize:16,numWords:20,randomWords:u(20),currentWord:0,completed:Array(20).fill(!1),completedCount:0,userFocus:!1};this.games=[...this.games,n];const o={state:{...n}};o.state.completed=[...n.completed],this.undoManagers=[...this.undoManagers,new C(o)],this.notifyObservers()}delete(){this.gameInFocus?(this.games.splice(this.gameInFocus,1),this.undoManagers.splice(this.gameInFocus,1)):(this.games.pop(),this.undoManagers.pop()),this.gameInFocus=-1,this.notifyObservers()}clear(){this.games=[],this.undoManagers=[],this.gameInFocus=-1,this.notifyObservers()}gameFocus(t){this.gameInFocus=t,this.notifyObservers()}wordFocus(t){this.games[this.gameInFocus].completed[t]&&(this.games[this.gameInFocus].completed[t]=!1,this.games[this.gameInFocus].completedCount--),this.games[this.gameInFocus].userFocus?t===this.games[this.gameInFocus].currentWord?(this.games[this.gameInFocus].currentWord=this.games[this.gameInFocus].completed.indexOf(!1),this.games[this.gameInFocus].userFocus=!1):this.games[this.gameInFocus].currentWord=t:(this.games[this.gameInFocus].userFocus=!0,this.games[this.gameInFocus].currentWord=t);const n={state:{...this.games[this.gameInFocus]}};n.state.completed=[...this.games[this.gameInFocus].completed],this.undoManagers[this.gameInFocus].execute(n),this.notifyObservers()}changeFontSize(t,n){if(this.games[this.gameInFocus].fontSize=t,n){const o={state:{...this.games[this.gameInFocus]}};o.state.completed=[...this.games[this.gameInFocus].completed],this.undoManagers[this.gameInFocus].execute(o)}this.notifyObservers()}resetGame(t){isNaN(t)&&(t=0),t>=0&&t<=9999?(this.games[this.gameInFocus].randomWords=u(t),this.games[this.gameInFocus].completed=Array(t).fill(!1)):(this.games[this.gameInFocus].randomWords=[],this.games[this.gameInFocus].completed=[]),this.games[this.gameInFocus].completedCount=0,this.games[this.gameInFocus].numWords=t,this.games[this.gameInFocus].currentWord=0,this.games[this.gameInFocus].userFocus=!1;const n={state:{...this.games[this.gameInFocus]}};n.state.completed=[...this.games[this.gameInFocus].completed],this.undoManagers[this.gameInFocus].execute(n),this.notifyObservers()}checkMatch(t){if(t===this.games[this.gameInFocus].randomWords[this.games[this.gameInFocus].currentWord][this.lang]){this.games[this.gameInFocus].completed[this.games[this.gameInFocus].currentWord]=!0,this.games[this.gameInFocus].completedCount++,this.games[this.gameInFocus].currentWord=this.games[this.gameInFocus].completed.indexOf(!1),this.wordCompleted=!0,this.games[this.gameInFocus].userFocus=!1;const n={state:{...this.games[this.gameInFocus]}};n.state.completed=[...this.games[this.gameInFocus].completed],this.undoManagers[this.gameInFocus].execute(n)}this.notifyObservers()}wordCompleteTextCleared(){this.wordCompleted=!1}changeLang(t){this.lang=t,this.notifyObservers()}}class A{constructor(e){i(this,"container");i(this,"addButton");i(this,"deleteButton");i(this,"clearButton");i(this,"undoButton");i(this,"redoButton");i(this,"langSelect");this.model=e,this.container=document.createElement("div"),this.container.id="toolbar";const t=document.createElement("div");t.id="leftSide";const n=document.createElement("div");n.id="rightSide",this.addButton=document.createElement("button"),this.addButton.innerText="Add Game",this.addButton.addEventListener("click",()=>{e.create()}),t.appendChild(this.addButton),this.deleteButton=document.createElement("button"),this.deleteButton.innerText="Delete Game",this.deleteButton.disabled=!0,this.deleteButton.addEventListener("click",()=>{e.numGames!==0&&e.delete()}),t.appendChild(this.deleteButton),this.clearButton=document.createElement("button"),this.clearButton.innerText="Clear Games",this.clearButton.disabled=!0,this.clearButton.addEventListener("click",()=>{e.clear()}),t.appendChild(this.clearButton),this.undoButton=document.createElement("button"),this.undoButton.innerText="Undo",this.undoButton.disabled=!0,this.undoButton.addEventListener("click",()=>{e.undo()}),n.appendChild(this.undoButton),this.redoButton=document.createElement("button"),this.redoButton.innerText="Redo",this.redoButton.disabled=!0,this.redoButton.addEventListener("click",()=>{e.redo()}),n.appendChild(this.redoButton),this.langSelect=document.createElement("select");const o=document.createElement("option");o.value="en-CA",o.text="English",this.langSelect.add(o);const s=document.createElement("option");s.value="fr-CA",s.text="Français",this.langSelect.add(s),this.langSelect.addEventListener("change",()=>{e.changeLang(this.langSelect.value)}),n.appendChild(this.langSelect),this.container.appendChild(t),this.container.appendChild(n),this.model.addObserver(this)}update(){this.addButton.disabled=this.model.numGames>=20,this.deleteButton.disabled=this.model.numGames===0,this.clearButton.disabled=this.model.numGames===0,this.undoButton.disabled=this.model.focusedGame===-1||!this.model.canUndo,this.redoButton.disabled=this.model.focusedGame===-1||!this.model.canRedo}get root(){return this.container}}class b{constructor(e){i(this,"container");this.model=e,this.container=document.createElement("div"),this.container.id="gameArea",this.model.addObserver(this)}update(){this.container.replaceChildren();const e=document.getElementById("gameArea");if(this.model.focusedGame!==-1){e.style.flexDirection="row",e.style.justifyContent="",this.model.gameList[this.model.focusedGame].numWords<0||this.model.gameList[this.model.focusedGame].numWords>9999?(e.style.backgroundColor="rgb(255, 210, 210)",e.innerText="INVALID GAME PARAMETERS!",e.style.flexDirection="column",e.style.fontSize="5vw",e.style.textAlign="center",e.style.justifyContent="center"):e&&this.model.gameList[this.model.focusedGame].completedCount===this.model.gameList[this.model.focusedGame].randomWords.length?e.style.backgroundColor="rgb(236, 255, 220)":e.style.backgroundColor="white";const t=document.createDocumentFragment();[...this.model.gameList[this.model.focusedGame].randomWords].forEach((n,o)=>{const s=document.createElement("label");s.id="word",s.addEventListener("click",()=>{this.model.gameList[this.model.focusedGame].completedCount!==this.model.gameList[this.model.focusedGame].completed.length&&this.model.wordFocus(o)}),s.addEventListener("mouseenter",()=>{this.model.gameList[this.model.focusedGame].completedCount!==this.model.gameList[this.model.focusedGame].completed.length&&(s.style.backgroundColor="rgb(255, 255, 224)",s.style.border="2px solid lightpink",s.style.padding="8.596px")}),s.addEventListener("mouseleave",()=>{s.style.border="",s.style.padding="10px",o===this.model.gameList[this.model.focusedGame].currentWord?(s.style.backgroundColor="yellow",this.model.gameList[this.model.focusedGame].userFocus&&(s.style.border="2px solid red",s.style.padding="8.596px")):this.model.gameList[this.model.focusedGame].completed[o]?s.style.backgroundColor="lime":s.style.backgroundColor=""}),s.innerText=`${n[this.model.getLang]}`,s.style.fontSize=`${this.model.gameList[this.model.focusedGame].fontSize}px`,o===this.model.gameList[this.model.focusedGame].currentWord?(s.style.backgroundColor="yellow",this.model.gameList[this.model.focusedGame].userFocus&&(s.style.border="2px solid red",s.style.padding="8.596px")):this.model.gameList[this.model.focusedGame].completed[o]&&(s.style.backgroundColor="lime"),t.appendChild(s)}),this.container.appendChild(t)}else e&&(e.style.backgroundColor="white")}get root(){return this.container}}class I{constructor(e){i(this,"container");i(this,"textInput");i(this,"resetButton");i(this,"gameProgress");i(this,"fontSize");i(this,"numWords");this.model=e,this.container=document.createElement("div"),this.container.id="gameConsole",this.textInput=document.createElement("input"),this.textInput.type="text",this.textInput.disabled=!0,this.textInput.addEventListener("input",()=>{e.checkMatch(this.textInput.value.toLowerCase())}),this.container.appendChild(this.textInput);const t=document.createElement("div");t.id="inputContainer";const n=document.createElement("div");n.id="gamePropertiesInput1";const o=document.createElement("div");o.id="gamePropertiesInput2",this.fontSize=document.createElement("input"),this.fontSize.type="range",this.fontSize.disabled=!0,this.fontSize.min="0",this.fontSize.max="100",this.fontSize.addEventListener("input",()=>{e.changeFontSize(parseInt(this.fontSize.value),!1)}),this.fontSize.addEventListener("change",()=>{e.changeFontSize(parseInt(this.fontSize.value),!0)});const s=document.createElement("label");s.innerText="Font Size:",n.appendChild(s),n.appendChild(this.fontSize),t.appendChild(n),this.numWords=document.createElement("input"),this.numWords.type="number",this.numWords.disabled=!0,this.numWords.addEventListener("input",()=>{e.resetGame(parseInt(this.numWords.value))});const a=document.createElement("label");a.innerText="Num Words:",o.appendChild(a),o.appendChild(this.numWords),t.appendChild(o),this.container.appendChild(t),this.resetButton=document.createElement("button"),this.resetButton.disabled=!0,this.resetButton.innerText="Reset Game",this.resetButton.addEventListener("click",()=>{e.resetGame(parseInt(this.numWords.value))}),this.container.appendChild(this.resetButton),this.gameProgress=document.createElement("label"),this.gameProgress.innerText="Select / Add a game to Start!",this.container.appendChild(this.gameProgress),this.model.addObserver(this)}update(){this.model.focusedGame!==-1?this.model.gameList[this.model.focusedGame].completedCount===this.model.gameList[this.model.focusedGame].completed.length||this.model.gameList[this.model.focusedGame].numWords<0||this.model.gameList[this.model.focusedGame].numWords>9999?(this.textInput.disabled=!0,this.textInput.value=""):(this.textInput.disabled=!1,this.model.getWordCompleted&&(this.textInput.value="",this.model.wordCompleteTextCleared())):(this.textInput.disabled=!0,this.textInput.value=""),this.model.focusedGame!==-1?(this.fontSize.value=`${this.model.gameList[this.model.focusedGame].fontSize}`,this.model.gameList[this.model.focusedGame].completedCount===this.model.gameList[this.model.focusedGame].completed.length||this.model.gameList[this.model.focusedGame].numWords<0||this.model.gameList[this.model.focusedGame].numWords>9999?this.fontSize.disabled=!0:this.fontSize.disabled=!1):this.fontSize.disabled=!0,this.model.focusedGame!==-1?(this.numWords.disabled=!1,this.numWords.value=`${this.model.gameList[this.model.focusedGame].numWords}`,this.model.gameList[this.model.focusedGame].numWords<0||this.model.gameList[this.model.focusedGame].numWords>9999?(this.numWords.style.backgroundColor="rgb(255, 125, 125)",this.numWords.style.border="2px solid red"):(this.numWords.style.backgroundColor="whitesmoke",this.numWords.style.border="1px solid black")):this.numWords.disabled=!0,this.model.focusedGame!==-1?this.model.gameList[this.model.focusedGame].numWords<0||this.model.gameList[this.model.focusedGame].numWords>9999?this.resetButton.disabled=!0:this.resetButton.disabled=!1:this.resetButton.disabled=!0,this.model.focusedGame===-1?this.gameProgress.innerText="Select / Add a game to Start!":this.model.gameList[this.model.focusedGame].numWords<0||this.model.gameList[this.model.focusedGame].numWords>9999?this.gameProgress.innerText="Invalid Num Words! Should be in 0 - 9999":this.model.gameList[this.model.focusedGame].completedCount===this.model.gameList[this.model.focusedGame].randomWords.length?this.gameProgress.innerText="Game Completed!":this.gameProgress.innerText=`${this.model.gameList[this.model.focusedGame].completedCount} / ${this.model.gameList[this.model.focusedGame].randomWords.length} Words Matched`}get root(){return this.container}}class v{constructor(e){i(this,"container");this.model=e,this.container=document.createElement("div"),this.container.id="right",this.model.addObserver(this)}update(){this.container.replaceChildren(),[...this.model.gameList].forEach((e,t)=>{const n=document.createElement("div");n.id="game",t===this.model.focusedGame&&(n.style.border="2px solid crimson"),n.addEventListener("click",()=>{t===this.model.focusedGame?this.model.gameFocus(-1):this.model.gameFocus(t)});const o=document.createElement("label");o.id="gameId",o.innerText=`Game ${e.id}`;const s=document.createElement("div");s.id="progressBar",e.numWords!==0&&(s.style.width=`calc(${e.completedCount/e.numWords} * (100% - 80px))`),n.appendChild(o),n.appendChild(s),this.container.appendChild(n)})}get root(){return this.container}}const d=new p,l=document.querySelector("div#app"),m=document.createElement("div");m.id="left";m.appendChild(new b(d).root);m.appendChild(new I(d).root);l.appendChild(new A(d).root);l.appendChild(m);l.appendChild(new v(d).root);
