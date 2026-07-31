import"./theme-DJb1Agj5.js";var e=[{id:`solve-one-step-addition-and-subtraction-problems`,name:`One-Step Addition & Subtraction`,subject:`Maths`}],t={get(t){return e.find(e=>e.id===t)},getName(e){return this.get(e)?.name??e},getSubject(e){return this.get(e)?.subject??`Unknown`},exists(e){return this.get(e)!==void 0},getBySubject(t){return e.filter(e=>e.subject===t)},getAll(){return[...e]}},n={skills:new Map,recordAnswer(e,t){let n=this.skills.get(e);n||(n={skillId:e,questionsSeen:0,correct:0,incorrect:0,mastery:0,confidence:0},this.skills.set(e,n)),n.questionsSeen++,t?n.correct++:n.incorrect++,n.mastery=Math.round(n.correct/n.questionsSeen*100),n.confidence=Math.min(n.questionsSeen,10)*10},getWeakestSkill(){if(this.skills.size===0)return null;let e=null,t=2**53-1;for(let n of this.skills.values()){let r=n.mastery+(100-n.confidence)*.3;r<t&&(t=r,e=n)}return e?.skillId??null},getAllSkills(){return[...this.skills.values()].sort((e,t)=>e.skillId.localeCompare(t.skillId))},getStrongestSkills(e=5){return[...this.skills.values()].sort((e,t)=>t.mastery===e.mastery?t.confidence-e.confidence:t.mastery-e.mastery).slice(0,e)},getWeakestSkills(e=5){return[...this.skills.values()].sort((e,t)=>e.mastery===t.mastery?e.confidence-t.confidence:e.mastery-t.mastery).slice(0,e)},getSubjectProgress(){let e=new Map;return this.getAllSkills().forEach(n=>{let r=t.getSubject(n.skillId),i=e.get(r);i||(i={subject:r,skills:0,questionsSeen:0,correct:0,mastery:0},e.set(r,i)),i.skills++,i.questionsSeen+=n.questionsSeen,i.correct+=n.correct}),e.forEach(e=>{e.mastery=e.questionsSeen===0?0:Math.round(e.correct/e.questionsSeen*100)}),[...e.values()].sort((e,t)=>t.mastery-e.mastery)},getOverallMastery(){if(this.skills.size===0)return 0;let e=0;for(let t of this.skills.values())e+=t.mastery;return Math.round(e/this.skills.size)},getStars(e){return e>=90?5:e>=75?4:e>=60?3:e>=40?2:+(e>=20)}},r={levels:[{level:1,name:`Explorer`,xp:0},{level:2,name:`Apprentice`,xp:100},{level:3,name:`Pathfinder`,xp:250},{level:4,name:`Spell Finder`,xp:500},{level:5,name:`Wizard Friend`,xp:1e3}],checkLevel(e){let t=e.level;return this.levels.forEach(n=>{e.xp>=n.xp&&(t=n.level,e.levelName=n.name)}),t>e.level?(e.level=t,!0):!1},checkLevelComplete(e){return e.questionsThisLevel>=20}},i={select(e){let t=n.getWeakestSkill();if(!t)return e[Math.floor(Math.random()*e.length)];let r=e.filter(e=>e.skillId===t);return r.length===0?e[Math.floor(Math.random()*e.length)]:r[Math.floor(Math.random()*r.length)]}},a={shuffledQuestions:[],currentIndex:0,currentQuestion:null,initialise(e){this.shuffledQuestions=[...e];for(let e=this.shuffledQuestions.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[this.shuffledQuestions[e],this.shuffledQuestions[t]]=[this.shuffledQuestions[t],this.shuffledQuestions[e]]}this.currentIndex=0,this.currentQuestion=null},getNextQuestion(e){this.shuffledQuestions.length===0&&this.initialise(e),this.currentIndex>=this.shuffledQuestions.length&&this.initialise(e);let t=this.shuffledQuestions.slice(this.currentIndex);this.currentQuestion=i.select(t);let n=this.shuffledQuestions.indexOf(this.currentQuestion);return[this.shuffledQuestions[this.currentIndex],this.shuffledQuestions[n]]=[this.shuffledQuestions[n],this.shuffledQuestions[this.currentIndex]],this.currentIndex++,this.currentQuestion},getCurrentQuestion(){return this.currentQuestion},submitAnswer(e){if(!this.currentQuestion)throw Error(`No current question.`);let t=e===this.currentQuestion.correct;return{correct:t,correctAnswerText:this.currentQuestion.answers[this.currentQuestion.correct]??``,explanation:this.currentQuestion.explanation,xpAwarded:t?this.currentQuestion.xp??10:0,starsAwarded:t?5:0}},reset(){this.currentIndex=0,this.currentQuestion=null}},o={worlds:[{world:1,name:`Enchanted Forest`,adventurePoints:0},{world:2,name:`Crystal Caves`,adventurePoints:10},{world:3,name:`Castle of Curiosity`,adventurePoints:25},{world:4,name:`Whispering Waters`,adventurePoints:45},{world:5,name:`Frost Peak`,adventurePoints:70},{world:6,name:`Dragon Volcano`,adventurePoints:100},{world:7,name:`Sky Kingdom`,adventurePoints:140},{world:8,name:`Star Temple`,adventurePoints:190}],getWorld(e){return this.worlds.find(t=>t.world===e)},getNextWorld(e){return this.getWorld(e+1)},checkWorld(e){if(!this.getWorld(e.world))return!1;let t=this.getNextWorld(e.world);return t!==void 0&&e.adventurePoints>=t.adventurePoints}},s={load(){let e=localStorage.getItem(`siasAdventure`);if(e){let t=JSON.parse(e);return t.adventurePoints??=0,t.world??=1,t.worldsCompleted??=0,t.questionsThisLevel??=0,t.badges??=[],t.treasures??=[],t}return{name:`Sia`,xp:0,stars:0,level:1,levelName:`Explorer`,treasureChests:0,badges:[],treasures:[],questionsAnswered:0,correct:0,incorrect:0,adventurePoints:0,world:1,worldsCompleted:0,questionsThisLevel:0}},save(e){localStorage.setItem(`siasAdventure`,JSON.stringify(e)),this.saveLearning()},loadLearning(){let e=localStorage.getItem(`siasAdventureLearning`);e&&(n.skills=new Map(JSON.parse(e)))},saveLearning(){localStorage.setItem(`siasAdventureLearning`,JSON.stringify([...n.skills.entries()]))}},c={answer(e,t){let i=a.submitAnswer(t),c=a.getCurrentQuestion();if(c?.skillId&&n.recordAnswer(c.skillId,i.correct),e.questionsAnswered++,e.questionsThisLevel++,i.correct)switch(e.correct++,e.xp+=i.xpAwarded,e.stars+=i.starsAwarded,c?.stage){case`recognise`:e.adventurePoints+=1;break;case`understand`:e.adventurePoints+=2;break;case`apply`:e.adventurePoints+=3;break;case`master`:e.adventurePoints+=4;break;default:e.adventurePoints+=1}else e.incorrect++;let l=r.checkLevelComplete(e);l&&(e.questionsThisLevel=0,e.treasureChests++);let u=r.checkLevel(e),d=o.checkWorld(e);return d&&(e.world++,e.worldsCompleted++),s.save(e),{result:i,levelUp:u,levelComplete:l,worldComplete:d}}},l=[{item:`Magic Wand`,badge:`First Spell`,icon:`🪄`,rarity:`Common`},{item:`Crystal Gem`,badge:`Treasure Hunter`,icon:`💎`,rarity:`Rare`},{item:`Spell Book`,badge:`Book Finder`,icon:`📚`,rarity:`Epic`},{item:`Golden Star`,badge:`Star Collector`,icon:`⭐`,rarity:`Legendary`}],u={rewards:l,open(e){let t=l[Math.floor(Math.random()*l.length)];return e.stars+=50,e.badges.includes(t.badge)||e.badges.push(t.badge),e.treasures.includes(t.item)||e.treasures.push(t.item),t}},d=[{id:`first-question`,name:`Quiz Beginner`,description:`Answer your first question.`,icon:`🎓`,unlocked:e=>e.questionsAnswered>=1},{id:`100-questions`,name:`Hard Worker`,description:`Answer 100 questions.`,icon:`💯`,unlocked:e=>e.questionsAnswered>=100},{id:`500-questions`,name:`Quiz Master`,description:`Answer 500 questions.`,icon:`🏆`,unlocked:e=>e.questionsAnswered>=500},{id:`accuracy-90`,name:`Accuracy Champion`,description:`Reach 90% accuracy.`,icon:`🎯`,unlocked:e=>e.questionsAnswered>=20&&e.correct/e.questionsAnswered>=.9},{id:`treasure-10`,name:`Treasure Hunter`,description:`Collect 10 treasures.`,icon:`💎`,unlocked:e=>e.treasures.length>=10},{id:`world-1`,name:`World Explorer`,description:`Complete your first world.`,icon:`🌍`,unlocked:e=>e.worldsCompleted>=1}],f={getUnlocked(e){return d.filter(t=>t.unlocked(e))},getLocked(e){return d.filter(t=>!t.unlocked(e))}};function p(e){let t=document.getElementById(e);if(!t)throw Error(`Missing element: ${e}`);return t}var m={renderStatistics(e){let t=e.questionsAnswered===0?0:Math.round(e.correct/e.questionsAnswered*100),n=o.getWorld(e.world);p(`statistics`).innerHTML=`

            <div class="stat-card">
                ⭐ Stars
                <strong>${e.stars}</strong>
            </div>

            <div class="stat-card">
                🏆 Rank
                <strong>${e.levelName}</strong>
            </div>

            <div class="stat-card">
                🌍 World
                <strong>${n?`${e.world}: ${n.name}`:e.world}</strong>
            </div>

            <div class="stat-card">
                ❓ Questions
                <strong>${e.questionsAnswered}</strong>
            </div>

            <div class="stat-card">
                ✅ Correct
                <strong>${e.correct}</strong>
            </div>

            <div class="stat-card">
                🎯 Accuracy
                <strong>${t}%</strong>
            </div>

            <div class="stat-card">
                🎁 Chests
                <strong>${e.treasureChests}</strong>
            </div>

            <div class="stat-card">
                💎 Treasures
                <strong>${e.treasures.length}</strong>
            </div>

            <div class="stat-card">
                🏅 Badges
                <strong>${e.badges.length}</strong>
            </div>

        `},renderSubjectSummary(){let e=p(`subject-summary`),t=n.getSubjectProgress();if(t.length===0){e.innerHTML=`<p>No learning data yet.</p>`;return}let r={Maths:`🔢`,English:`📖`,"Verbal Reasoning":`🧠`,"Non-Verbal Reasoning":`🧩`};e.innerHTML=t.map(e=>{let t=`★`.repeat(n.getStars(e.mastery))+`☆`.repeat(5-n.getStars(e.mastery));return`

                <div class="subject-card">

                    <div class="subject-header">

                        <span>

                            ${r[e.subject]??`📚`}

                            ${e.subject}

                        </span>

                        <span>

                            ${e.mastery}%

                        </span>

                    </div>

                    <div class="subject-stars">

                        ${t}

                    </div>

                    <div class="subject-progress">

                        <div
                            class="subject-progress-bar"
                            style="width:${e.mastery}%">

                        </div>

                    </div>

                    <div class="subject-footer">

                        ${e.correct}
                        /
                        ${e.questionsSeen}
                        correct

                        •

                        ${e.skills}
                        skills attempted

                    </div>

                </div>

            `}).join(``)},renderTreasureGallery(e){let t=p(`treasure-gallery`);t.innerHTML=``,u.rewards.map(t=>({icon:t.icon,name:t.item,rarity:t.rarity,owned:e.treasures.includes(t.item)})).forEach(e=>{let n=document.createElement(`div`);n.className=`treasure-card ${e.owned?`owned`:`locked`}`,n.innerHTML=`

                <div class="treasure-icon">

                    ${e.icon}

                </div>

                <div class="treasure-name">

                    ${e.name}

                </div>

                <div class="treasure-status rarity-${e.rarity.toLowerCase()}">

                    ${e.rarity}

                </div>

                <div class="treasure-status">

                    ${e.owned?`Collected ✓`:`Not Found`}

                </div>

            `,t.appendChild(n)})},renderSkillsReport(){let e=p(`skills-report`),r=n.getAllSkills();if(r.length===0){e.innerHTML=`<p>No learning data yet.</p>`;return}let i=[`Maths`,`English`,`Verbal Reasoning`,`Non-Verbal Reasoning`],a={Maths:`🔢`,English:`📖`,"Verbal Reasoning":`🧠`,"Non-Verbal Reasoning":`🧩`};e.innerHTML=i.map(e=>{let i=r.filter(n=>t.getSubject(n.skillId)===e).sort((e,t)=>t.mastery-e.mastery);return i.length===0?``:`

                <div class="subject-group">

                    <h3>

                        ${a[e]} ${e}

                    </h3>

                    ${i.map(e=>{let r=n.getStars(e.mastery),i=`★`.repeat(r)+`☆`.repeat(5-r);return`

                            <div class="skill-card">

                                <div class="skill-header">

                                    <span class="skill-name">

                                        ${t.getName(e.skillId)}

                                    </span>

                                    <span class="skill-score">

                                        ${e.mastery}%

                                    </span>

                                </div>

                                <div class="skill-stars">

                                    ${i}

                                </div>

                                <div class="skill-progress">

                                    <div
                                        class="skill-progress-bar"
                                        style="width:${e.mastery}%">
                                    </div>

                                </div>

                                <div class="skill-footer">

                                    ${e.correct}
                                    /
                                    ${e.questionsSeen}
                                    correct

                                </div>

                            </div>

                        `}).join(``)}

                </div>

            `}).join(``)},renderNeedsPractice(){let e=p(`needs-practice`),r=n.getWeakestSkills();if(r.length===0){e.innerHTML=`<p>No learning data yet.</p>`;return}e.innerHTML=r.map(e=>`

            <div class="practice-card">

                <div>

                    <div class="practice-name">

                        ${t.getName(e.skillId)}

                    </div>

                    <div class="practice-subject">

                        ${t.getSubject(e.skillId)}

                    </div>

                </div>

                <div class="practice-score">

                    ${e.mastery}%

                </div>

            </div>

        `).join(``)},renderStrongestSkills(){let e=p(`strongest-skills`),r=n.getStrongestSkills();if(r.length===0){e.innerHTML=`<p>No learning data yet.</p>`;return}e.innerHTML=r.map(e=>`

            <div class="practice-card">

                <div>

                    <div class="practice-name">

                        ${t.getName(e.skillId)}

                    </div>

                    <div class="practice-subject">

                        ${t.getSubject(e.skillId)}

                    </div>

                </div>

                <div class="practice-score">

                    ${e.mastery}%

                </div>

            </div>

        `).join(``)},renderAchievements(e){let t=p(`achievements`),n=f.getUnlocked(e);if(n.length===0){t.innerHTML=`<p>No achievements unlocked yet.</p>`;return}t.innerHTML=n.map(e=>`

            <div class="achievement-card">

                <div class="achievement-icon">

                    ${e.icon}

                </div>

                <div class="achievement-info">

                    <div class="achievement-name">

                        ${e.name}

                    </div>

                    <div class="achievement-description">

                        ${e.description}

                    </div>

                </div>

            </div>

        `).join(``)}};function h(e){let t=document.getElementById(e);if(!t)throw Error(`Missing element: ${e}`);return t}function g(){let e=h(`treasure-button`),t=h(`treasure-collection`),n=h(`close-treasure`),r=h(`game-content`),i=h(`helper-panel`),a=h(`stats-panel`);e.addEventListener(`click`,()=>{r.classList.add(`hidden`),i.classList.add(`hidden`),a.classList.add(`hidden`),e.classList.add(`hidden`),t.classList.add(`visible`)}),n.addEventListener(`click`,()=>{t.classList.remove(`visible`),r.classList.remove(`hidden`),i.classList.remove(`hidden`),a.classList.remove(`hidden`),e.classList.remove(`hidden`)})}var _,v=[],y=!1,b=[`Welcome back, Sia! Ready for another adventure?`,`Let's earn another star today!`,`Every question makes you stronger.`,`I know you can solve this one!`,`You're becoming a brilliant explorer!`,`Let's see how clever you are!`,`Magic happens when we keep learning!`,`Fantastic! Here's your next challenge.`,`Believe in yourself—you've got this!`,`Let's have some fun learning together!`],x=[`Fantastic!`,`Brilliant thinking!`,`Excellent work!`,`Amazing!`,`You're becoming a real explorer!`,`Wizzy is very proud of you!`,`Another star earned!`,`Wonderful work!`],S=[`Good try!`,`Every mistake helps us learn.`,`Don't worry—we'll get it next time.`,`Keep practising!`,`You're getting stronger every question.`,`Let's learn this together.`],C=[`Treasure awaits!`,`Hop is cheering for you!`,`Amazing work!`,`Another star collected!`,`Fantastic exploring!`,`You're on a roll!`,`Keep going!`];function w(e){let t=document.getElementById(e);if(!t)throw Error(`Missing element: ${e}`);return t}fetch(`questions/maths.json`).then(e=>{if(!e.ok)throw Error(`Unable to load questions.`);return e.json()}).then(e=>{v=e,a.initialise(v),T()}).catch(e=>{console.error(e),alert(`Sorry, the question bank could not be loaded.`)});function T(){_=s.load(),s.loadLearning(),g(),B(),E()}function E(){if(v.length===0){alert(`No questions available.`);return}a.getNextQuestion(v),D()}function D(){let e=a.getCurrentQuestion();if(!e)return;R(),z(),w(`submit-answer`).style.display=`inline-block`,w(`dont-know`).style.display=`inline-block`,w(`submit-answer`).disabled=!1,w(`dont-know`).disabled=!1,w(`next-question`).style.display=`none`,V(),w(`question-text`).textContent=e.question,w(`hint-text`).textContent=e.hint;let t=w(`answers`);t.innerHTML=``,e.answers.forEach((e,n)=>{let r=document.createElement(`label`);r.className=`answer-option`,r.innerHTML=`
<input
type="radio"
name="answer"
value="${n}">
${e}
`,r.querySelector(`input`).addEventListener(`change`,()=>{document.querySelectorAll(`.answer-option`).forEach(e=>{e.classList.remove(`selected`)}),r.classList.add(`selected`)}),t.appendChild(r)})}function O(e){let t=a.getCurrentQuestion();if(!t)return;y=!1;let n=w(`explanation`),r=document.querySelectorAll(`.answer-option`);r.forEach(e=>{e.style.pointerEvents=`none`}),w(`submit-answer`).style.display=`none`,w(`dont-know`).style.display=`none`,w(`next-question`).style.display=`inline-block`,r.forEach((n,r)=>{r===t.correct&&n.classList.add(`correct`),r===e&&e!==t.correct&&n.classList.add(`incorrect`)});let i=c.answer(_,e),o=i.result;y=i.levelUp;let s=i.levelComplete,l=i.worldComplete;o.correct?P():N(o),B(),l?L():s?I():y?F():o.correct&&M(o),n.classList.remove(`hidden`),w(`next-question`).style.display=`inline-block`}w(`submit-answer`).addEventListener(`click`,k),w(`dont-know`).addEventListener(`click`,A),w(`next-question`).addEventListener(`click`,j);function k(){let e=document.querySelector(`input[name='answer']:checked`);if(!e){alert(`Choose an answer first!`);return}O(Number(e.value))}function A(){let e=a.getCurrentQuestion();if(!e)return;_.questionsAnswered++,s.save(_),B();let t=w(`explanation`);t.innerHTML=`

<h3>🧙 Wizzy says...</h3>

<p>

That's perfectly okay!

Every great wizard learns by practising.

</p>

<p>

The correct answer was:

<strong>${e.answers[e.correct]}</strong>

</p>

<p>

${e.explanation}

</p>

`,t.classList.remove(`hidden`),w(`submit-answer`).style.display=`none`,w(`dont-know`).style.display=`none`,w(`next-question`).style.display=`inline-block`}function j(){R(),E()}function M(e){let t=w(`explanation`);t.innerHTML=`

<h3>🧙 Wizzy says...</h3>

<p><strong>${x[Math.floor(Math.random()*x.length)]}</strong></p>

<p>

${e.explanation}

</p>

`}function N(e){let t=w(`explanation`);t.innerHTML=`

<h3>🧙 Wizzy says...</h3>

<p><strong>${S[Math.floor(Math.random()*S.length)]}</strong></p>

<p>

The correct answer was:

<strong>${e.correctAnswerText}</strong>

</p>

<p>

${e.explanation}

</p>

`}function P(){let e=w(`hop-celebration`),t=w(`hop-message`);t&&(t.textContent=C[Math.floor(Math.random()*C.length)]),e.style.display=`block`,setTimeout(()=>{e.style.display=`none`},2500)}function F(){let e=u.open(_),t=w(`explanation`);t.innerHTML=`

<h2>🎁 Magical Treasure Chest!</h2>

<p>

🧙 Amazing, Sia!

</p>

<p>

⭐ You reached Level ${_.level}

<br>

${_.levelName}

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

`}function I(){let e=w(`explanation`),t=u.open(_);s.save(_),e.innerHTML=`
        <div class="level-complete">
            <h2>🎉 Level Complete!</h2>

            <p>You answered <strong>20 questions</strong>.</p>

            <p>🎁 You earned <strong>1 Treasure Chest</strong>!</p>

            <p>

                ✨ Inside was:

                <strong>${t.item}</strong>

            </p>

            <p>

                📦 Total Treasure Chests:
                <strong>${_.treasureChests}</strong>

            </p>

            <p>Keep going to complete your next level!</p>
        </div>
    `}function L(){let e=w(`explanation`),t=o.getWorld(_.world);s.save(_),B();let n=o.getNextWorld(_.world-1),r=t?.name??`World ${_.world-1}`,i=n?.name??`Master Explorer`;e.innerHTML=`

    <h2>🌍 World Complete!</h2>

    <p>

    🧙 <strong>Fantastic, Sia!</strong>

    </p>

    <p>

    You have completed

    <strong>${r}</strong>!

    </p>

    <hr>

    <p>

    ${n?`✨ <strong>${i} Unlocked!</strong>`:`👑 <strong>Congratulations!</strong>`}

    </p>

    <p>

    ${n?`💎 Welcome to <strong>${i}</strong>`:`🎉 You have completed every world!`}

    </p>

    <p>

    ⭐ Adventure Points:
        <strong>${_.adventurePoints}</strong>

        <br><br>

        🏅 Worlds Completed:
        <strong>${_.worldsCompleted}</strong>

    </p>

    <p>

    🎒 Pack your backpack...

    Your next adventure begins now!

    </p>

    <p>

    ➡️ Click <strong>Next Question</strong> to continue.

    </p>

    `}function R(){w(`explanation`).classList.add(`hidden`),w(`next-question`).style.display=`none`}function z(){document.querySelectorAll(`.answer-option`).forEach(e=>{e.classList.remove(`correct`,`incorrect`,`selected`),e.style.pointerEvents=`auto`})}function B(){w(`stars`).textContent=_.stars.toString(),w(`treasure-chests`).textContent=_.treasureChests.toString(),w(`level`).textContent=`${_.levelName}`,w(`level-progress`).textContent=`${_.questionsThisLevel} / 20`;let e=o.getWorld(_.world);w(`world`).textContent=e?e.name:``,w(`world`).title=`Worlds Completed: ${_.worldsCompleted}`,w(`xp-progress`).style.width=`${Math.min(_.xp,100)}%`,m.renderTreasureGallery(_),m.renderStatistics(_)}function V(){let e=b[Math.floor(Math.random()*b.length)];U(e)}var H=null;function U(e){let t=w(`wizzy-message`);if(!t)return;H!==null&&clearInterval(H),t.textContent=``;let n=0;H=setInterval(()=>{if(n>=e.length){clearInterval(H),H=null;return}t.textContent+=e[n],n++},28)}