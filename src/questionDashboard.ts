/*==================================================
  SIA'S ADVENTURE

  QUESTION DASHBOARD

==================================================*/

import { content } from "./content";

import type { Question } from "./questionEngine";

import { PlayerStorage } from "./storage";

/*==================================================
  TYPES
==================================================*/

interface DashboardQuestion {

    subject: string;

    skill: string;

    question: Question;

}


/*==================================================
  START
==================================================*/

initialise();


/*==================================================
  INITIALISE
==================================================*/

function initialise(): void {


    const dashboardData =

        collectDashboardData();



    renderSummary(

        dashboardData

    );


    renderDrillDown(

        dashboardData

    );


    renderQuestions(

        dashboardData

    );

    initialiseResetButton();

}

/*==================================================
  RESET BUTTON
==================================================*/
function initialiseResetButton(): void {

    const button =
        document.getElementById("reset-progress");

    if (!button) {

        return;

    }

    button.addEventListener("click", () => {

        const confirmed = confirm(
            "Reset all adventure progress?\n\nThis cannot be undone."
        );

        if (!confirmed) {

            return;

        }

        PlayerStorage.reset();

        alert("Adventure progress has been reset.");

        location.reload();

    });

}

/*==================================================
  COLLECT DATA
==================================================*/

function collectDashboardData():

DashboardQuestion[] {


    const results:

        DashboardQuestion[] = [];


    for (

        const [

            subject,

            subjectContent

        ]

        of Object.entries(content)

    ) {


        collectQuestions(

            subject,

            subjectContent,

            results

        );

    }


    return results;

}


/*==================================================
  WALK CONTENT TREE

  Subject
     SkillContent
        activities[]

==================================================*/

function collectQuestions(

    subject: string,

    node: unknown,

    results: DashboardQuestion[]

): void {


    if (

        Array.isArray(node)

    ) {


        for (

            const item

            of node

        ) {


            collectQuestions(

                subject,

                item,

                results

            );

        }


        return;

    }



    if (

        !node

        ||

        typeof node !== "object"

    ) {

        return;

    }



    const object =

        node as Record<string, unknown>;



    if (

        "skillId" in object

        &&

        "activities" in object

        &&

        Array.isArray(object.activities)

    ) {


        for (

            const activity

            of object.activities

        ) {


            results.push({

                subject,

                skill:

                    String(object.skillId),

                question:

                    activity as Question

            });

        }


        return;

    }



    for (

        const value

        of Object.values(object)

    ) {


        collectQuestions(

            subject,

            value,

            results

        );

    }

}


/*==================================================
  TOP SUMMARY
==================================================*/

function renderSummary(

    dashboardData: DashboardQuestion[]

): void {


    const summary =

        document.getElementById(

            "summary"

        );


    if (!summary) {

        return;

    }


    summary.innerHTML = "";


    const title =

        document.createElement("h2");


    title.textContent =

        `Overall Questions: ${dashboardData.length.toLocaleString()}`;


    summary.appendChild(title);

}


/*==================================================
  DRILL DOWN
==================================================*/

function renderDrillDown(

    dashboardData: DashboardQuestion[]

): void {


    const container =

        document.getElementById(

            "drilldown"

        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    const heading =

        document.createElement("h2");


    heading.textContent =

        "Drill Down";


    container.appendChild(

        heading

    );


    const table =

        document.createElement("table");


    table.innerHTML = `

<thead>

<tr>

<th>Subject</th>

<th>Skill</th>

<th>Questions</th>

</tr>

</thead>

<tbody></tbody>

`;



    const tbody =

        table.querySelector("tbody")!;



    const counts =

        new Map<string, Map<string, number>>();



    for (

        const item

        of dashboardData

    ) {


        if (!counts.has(item.subject)) {


            counts.set(

                item.subject,

                new Map()

            );

        }


        const skills =

            counts.get(item.subject)!;


        skills.set(

            item.skill,

            (skills.get(item.skill) ?? 0) + 1

        );

    }



    for (

        const [

            subject,

            skills

        ]

        of counts

    ) {


        for (

            const [

                skill,

                count

            ]

            of skills

        ) {


            const row =

                document.createElement("tr");


            row.innerHTML = `

<td>${formatSubjectName(subject)}</td>

<td>${formatSkillName(skill)}</td>

<td><strong>${count.toLocaleString()}</strong></td>

`;


            tbody.appendChild(row);

        }

    }


    container.appendChild(table);

}


/*==================================================
  QUESTION TABLES
==================================================*/

function renderQuestions(

    dashboardData: DashboardQuestion[]

): void {


    const container =

        document.getElementById(

            "tables"

        );


    if (!container) {

        return;

    }


    container.innerHTML = "";



    const subjects =

        [...new Set(

            dashboardData.map(

                item => item.subject

            )

        )];



    for (

        const subject

        of subjects

    ) {


        const questions =

            dashboardData.filter(

                item =>

                    item.subject === subject

            );


        const heading =

            document.createElement("h2");


        heading.textContent =

            `${formatSubjectName(subject)} (${questions.length})`;


        container.appendChild(heading);



        const table =

            document.createElement("table");


        table.innerHTML = `

<thead>

<tr>

<th>Question ID</th>

<th>Question</th>

<th>Correct Answer</th>

<th>Skill</th>

<th>Stage</th>

</tr>

</thead>

<tbody></tbody>

`;



        const tbody =

            table.querySelector("tbody")!;



        for (

            const item

            of questions

        ) {


            const q =

                item.question;


            const row =

                document.createElement("tr");


            row.innerHTML = `

<td>${q.id ?? ""}</td>

<td>${q.question ?? ""}</td>

<td>${(q as any).correctAnswer ?? ""}</td>

<td>${item.skill}</td>

<td>${q.stage ?? ""}</td>

`;


            tbody.appendChild(row);

        }


        container.appendChild(table);

    }

}


/*==================================================
  FORMAT SUBJECT
==================================================*/

function formatSubjectName(

    subject: string

): string {


    switch(subject) {


        case "mathematics":

            return "Mathematics";


        case "english":

            return "English";


        case "science":

            return "Science";


        case "history":

            return "History";


        case "geography":

            return "Geography";


        case "verbalSkills":

            return "Verbal Skills";


        case "verbalReasoning":

            return "Verbal Reasoning";


        case "nonVerbalReasoning":

            return "Non-Verbal Reasoning";


        default:

            return subject;

    }

}


/*==================================================
  FORMAT SKILL
==================================================*/

function formatSkillName(

    skill: string

): string {


    return skill

        .replace(/-/g, " ")

        .replace(/([A-Z])/g, " $1")

        .replace(

            /^./,

            c => c.toUpperCase()

        );

}