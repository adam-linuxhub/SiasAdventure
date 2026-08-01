/*==================================================
  SIA'S ADVENTURE

  QUESTION DASHBOARD

==================================================*/

import { getAllQuestions, content } from "./content";
import type { Question } from "./questionEngine";

/*==================================================
  TYPES
==================================================*/

interface DashboardQuestion {

    subject: string;

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

    const questions = getAllQuestions();

    const dashboardData = questions.map(

        question => ({

            subject: question.skillId ?? "Unknown",

            question

        })

    );

    renderSummary(

        dashboardData

    );

    renderTables(

        dashboardData

    );

}

/*==================================================
  COLLECT DASHBOARD DATA
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

        of Object.entries(

            content

        )

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
  COLLECT QUESTIONS
==================================================*/

function collectQuestions(

    subject: string,

    node: unknown,

    results: DashboardQuestion[]

): void {

    /*==============================================
      ARRAY
    ==============================================*/

    if (

        Array.isArray(

            node

        )

    ) {

        for (

            const item

            of node

        ) {

            if (

                isQuestion(

                    item

                )

            ) {

                results.push({

                    subject,

                    question: item

                });

            }

            else {

                collectQuestions(

                    subject,

                    item,

                    results

                );

            }

        }

        return;

    }

    /*==============================================
      OBJECT
    ==============================================*/

    if (

        node

        &&

        typeof node === "object"

    ) {

        for (

            const value

            of Object.values(

                node

            )

        ) {

            collectQuestions(

                subject,

                value,

                results

            );

        }

    }

}

/*==================================================
  QUESTION TYPE GUARD
==================================================*/

function isQuestion(

    value: unknown

): value is Question {

    return (

        !!value

        &&

        typeof value === "object"

        &&

        "question" in value

        &&

        "answers" in value

        &&

        "correct" in value

    );

}

/*==================================================
  RENDER SUMMARY
==================================================*/

function renderSummary(

    dashboardData: DashboardQuestion[]

): void {

    const summary =

        document.getElementById(

            "summary"

        );

    if (

        !summary

    ) {

        return;

    }

    summary.innerHTML = "";

    const title =

        document.createElement(

            "h2"

        );

    title.textContent =

        `Overall Questions: ${dashboardData.length}`;

    summary.appendChild(

        title

    );

    const counts =

        new Map<string, number>();

    for (

        const item

        of dashboardData

    ) {

        counts.set(

            item.subject,

            (

                counts.get(

                    item.subject

                ) ?? 0

            ) + 1

        );

    }

    for (

        const [

            subject,

            count

        ]

        of

        [...counts.entries()].sort(

            (

                a,

                b

            ) =>

                a[0].localeCompare(

                    b[0]

                )

        )

    ) {

        const row =

            document.createElement(

                "p"

            );

        row.innerHTML =

            `<strong>${formatSubjectName(subject)}</strong>: ${count}`;

        summary.appendChild(

            row

        );

    }

}

/*==================================================
  FORMAT SUBJECT NAME
==================================================*/

function formatSubjectName(

    subject: string

): string {

    switch (

        subject

    ) {

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
  RENDER TABLES
==================================================*/

function renderTables(

    dashboardData: DashboardQuestion[]

): void {

    const container =

        document.getElementById(

            "tables"

        );

    if (

        !container

    ) {

        return;

    }

    container.innerHTML = "";

    const subjects =

        [...new Set(

            dashboardData.map(

                item => item.subject

            )

        )].sort();

    for (

        const subject

        of subjects

    ) {

        const questions =

            dashboardData.filter(

                item =>

                    item.subject === subject

            );

        renderSubjectTable(

            container,

            subject,

            questions

        );

    }

}
/*==================================================
  SUBJECT TABLE
==================================================*/

function renderSubjectTable(

    parent: HTMLElement,

    subject: string,

    questions: DashboardQuestion[]

): void {

    const heading =

        document.createElement(

            "h2"

        );

    heading.textContent =

        `${formatSubjectName(subject)} (${questions.length})`;

    parent.appendChild(

        heading

    );

    const table =

        document.createElement(

            "table"

        );

    const thead =

        document.createElement(

            "thead"

        );

    thead.innerHTML = `

<tr>

<th>Question ID</th>

<th>Question</th>

<th>Correct Answer</th>

<th>Skill ID</th>

<th>Stage</th>

</tr>

`;

    table.appendChild(

        thead

    );

    const tbody =

        document.createElement(

            "tbody"

        );

    for (

        const item

        of questions

    ) {

        const question =

            item.question;

        const row =

            document.createElement(

                "tr"

            );

        row.innerHTML = `

<td>${question.id ?? ""}</td>

<td>${question.question}</td>

<td>${(question as any).correctAnswer ?? ""}</td>

<td>${question.skillId ?? ""}</td>

<td>${question.stage ?? ""}</td>
`;

        tbody.appendChild(

            row

        );

    }

    table.appendChild(

        tbody

    );

    parent.appendChild(

        table

    );

}
