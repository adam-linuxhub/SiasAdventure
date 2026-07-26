import"./style-CQyF9PL7.js";var e={load(){let e=localStorage.getItem(`siasAdventure`);return e?JSON.parse(e):{name:`Sia`,xp:0,stars:0,level:1,levelName:`Explorer`,treasureChests:0,badges:[],questionsAnswered:0,correct:0,incorrect:0}},save(e){localStorage.setItem(`siasAdventure`,JSON.stringify(e))}},t={levels:[{level:1,name:`Explorer`,xp:0},{level:2,name:`Apprentice`,xp:100},{level:3,name:`Pathfinder`,xp:250},{level:4,name:`Spell Finder`,xp:500},{level:5,name:`Wizard Friend`,xp:1e3}],checkLevel(e){let t=e.level;return this.levels.forEach(n=>{e.xp>=n.xp&&(t=n.level,e.levelName=n.name)}),t>e.level?(e.level=t,!0):!1}},n={open(t){let n=[{item:`🪄 Magic Wand`,badge:`First Spell`},{item:`💎 Crystal Gem`,badge:`Treasure Hunter`},{item:`📚 Spell Book`,badge:`Book Finder`},{item:`⭐ Golden Star`,badge:`Star Collector`}],r=n[Math.floor(Math.random()*n.length)];return t.treasureChests++,t.stars+=50,t.badges.includes(r.badge)||t.badges.push(r.badge),e.save(t),r}},r={shuffledQuestions:[],currentIndex:0,initialise(e){this.shuffledQuestions=[...e];for(let e=this.shuffledQuestions.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[this.shuffledQuestions[e],this.shuffledQuestions[t]]=[this.shuffledQuestions[t],this.shuffledQuestions[e]]}this.currentIndex=0},getRandomQuestion(e,t){return this.shuffledQuestions.length===0&&this.initialise(t),this.currentIndex>=this.shuffledQuestions.length&&this.initialise(t),this.shuffledQuestions[this.currentIndex++]}},i,a=[],o,s=!1,c=[`Welcome back, Sia! Ready for another adventure?`,`Let's earn another star today!`,`Every question makes you stronger.`,`I know you can solve this one!`,`You're becoming a brilliant explorer!`,`Let's see how clever you are!`,`Magic happens when we keep learning!`,`Fantastic! Here's your next challenge.`,`Believe in yourself—you've got this!`,`Let's have some fun learning together!`],l=[`Fantastic!`,`Brilliant thinking!`,`Excellent work!`,`Amazing!`,`You're becoming a real explorer!`,`Wizzy is very proud of you!`,`Another star earned!`,`Wonderful work!`],u=[`Good try!`,`Every mistake helps us learn.`,`Don't worry—we'll get it next time.`,`Keep practising!`,`You're getting stronger every question.`,`Let's learn this together.`],d=[`Treasure awaits!`,`Hop is cheering for you!`,`Amazing work!`,`Another star collected!`,`Fantastic exploring!`,`You're on a roll!`,`Keep going!`];fetch(`questions/maths.json`).then(e=>{if(!e.ok)throw Error(`Unable to load questions.`);return e.json()}).then(e=>{a=e,r.initialise(a),f()}).catch(e=>{console.error(e),alert(`Sorry, the question bank could not be loaded.`)});function f(){i=e.load(),T(),p()}function p(){if(a.length===0){alert(`No questions available.`);return}o=r.getRandomQuestion(i,a),m()}function m(){C(),w(),document.getElementById(`submit-answer`).style.display=`inline-block`,document.getElementById(`dont-know`).style.display=`inline-block`,document.getElementById(`submit-answer`).disabled=!1,document.getElementById(`dont-know`).disabled=!1,document.getElementById(`next-question`).style.display=`none`,E(),document.getElementById(`question-text`).textContent=o.question,document.getElementById(`hint-text`).textContent=o.hint;let e=document.getElementById(`answers`);e.innerHTML=``,o.answers.forEach((t,n)=>{let r=document.createElement(`label`);r.className=`answer-option`,r.innerHTML=`

<input
type="radio"
name="answer"
value="${n}">

${t}

`,r.querySelector(`input`).addEventListener(`change`,()=>{document.querySelectorAll(`.answer-option`).forEach(e=>e.classList.remove(`selected`)),r.classList.add(`selected`)}),e.appendChild(r)})}function h(n){s=!1;let r=document.getElementById(`explanation`),a=document.querySelectorAll(`.answer-option`);a.forEach(e=>{e.style.pointerEvents=`none`}),document.getElementById(`submit-answer`).style.display=`none`,document.getElementById(`dont-know`).style.display=`none`,document.getElementById(`next-question`).style.display=`inline-block`,a.forEach((e,t)=>{t===o.correct&&e.classList.add(`correct`),t===n&&n!==o.correct&&e.classList.add(`incorrect`)}),i.questionsAnswered++,n===o.correct?(i.correct++,i.xp+=o.xp??10,i.stars+=5,s=t.checkLevel(i),x()):b(),e.save(i),T(),s?S():n===o.correct&&y(),r.classList.remove(`hidden`),document.getElementById(`next-question`).style.display=`inline-block`}document.getElementById(`submit-answer`).addEventListener(`click`,g),document.getElementById(`dont-know`).addEventListener(`click`,_),document.getElementById(`next-question`).addEventListener(`click`,v);function g(){let e=document.querySelector(`input[name='answer']:checked`);if(!e){alert(`Choose an answer first!`);return}h(Number(e.value))}function _(){i.questionsAnswered++,e.save(i),T();let t=document.getElementById(`explanation`);t.innerHTML=`

<h3>🧙 Wizzy says...</h3>

<p>

That's perfectly okay!

Every great wizard learns by practising.

</p>

<p>

The correct answer was:

<strong>${o.answers[o.correct]}</strong>

</p>

<p>

${o.explanation}

</p>

`,t.classList.remove(`hidden`),document.getElementById(`submit-answer`).style.display=`none`,document.getElementById(`dont-know`).style.display=`none`,document.getElementById(`next-question`).style.display=`inline-block`}function v(){C(),p()}function y(){let e=document.getElementById(`explanation`);e.innerHTML=`

<h3>🧙 Wizzy says...</h3>

<p><strong>${l[Math.floor(Math.random()*l.length)]}</strong></p>

<p>

${o.explanation}

</p>

`}function b(){let e=document.getElementById(`explanation`);e.innerHTML=`

<h3>🧙 Wizzy says...</h3>

<p><strong>${u[Math.floor(Math.random()*u.length)]}</strong></p>

<p>

The correct answer was:

<strong>${o.answers[o.correct]}</strong>

</p>

<p>

${o.explanation}

</p>

`}function x(){let e=document.getElementById(`hop-celebration`),t=document.getElementById(`hop-message`);t&&(t.textContent=d[Math.floor(Math.random()*d.length)]),e.style.display=`block`,setTimeout(()=>{e.style.display=`none`},2500)}function S(){let e=n.open(i),t=document.getElementById(`explanation`);t.innerHTML=`

<h2>🎁 Magical Treasure Chest!</h2>

<p>

🧙 Amazing, Sia!

</p>

<p>

⭐ You reached Level ${i.level}

<br>

${i.levelName}

</p>

<p>

🐇 Hop opened the treasure chest!

</p>

<p>

🎁 ${e.item}

</p>

<p>

🏆 ${e.badge}

</p>

<p>

⭐ +50 Stars!

</p>

`}function C(){document.getElementById(`explanation`).classList.add(`hidden`),document.getElementById(`next-question`).style.display=`none`}function w(){document.querySelectorAll(`.answer-option`).forEach(e=>{e.classList.remove(`correct`,`incorrect`,`selected`),e.style.pointerEvents=`auto`})}function T(){document.getElementById(`stars`).textContent=i.stars,document.getElementById(`level`).textContent=`${i.level} ${i.levelName}`,document.getElementById(`xp-progress`).style.width=`${Math.min(i.xp,100)}%`}function E(){let e=c[Math.floor(Math.random()*c.length)];O(e)}var D=null;function O(e){let t=document.getElementById(`wizzy-message`);if(!t)return;D&&clearInterval(D),t.textContent=``;let n=0;D=setInterval(()=>{if(n>=e.length){clearInterval(D),D=null;return}t.textContent+=e[n],n++},28)}