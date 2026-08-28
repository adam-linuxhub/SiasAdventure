import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const countryFlags: SkillContent = {

    skillId: "countryFlags",

    title: "Country Flags",

    description:
        "Learn to recognise the flags of different countries around the world.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

        {
            id: "geo-flag-001",
            skillId: "countryFlags",
            question:
                "Which country does this flag belong to?",
            image:
                "images/flags/united-kingdom.png",
            stage: "recognise",
            options: [
                "United Kingdom",
                "France",
                "Italy",
                "Australia"
            ],
            hint:
                "Look at the colours and the pattern on the flag.",
            explanation:
                "This is the flag of the United Kingdom.",
            difficulty: 1,
            correctAnswer: "United Kingdom",
            estimatedSeconds: 20,
            tags: [
                "geography",
                "year3",
                "country-flags"
            ]
        },

        {
            id: "geo-flag-002",
            skillId: "countryFlags",
            question:
                "Which country does this flag belong to?",
            image:
                "images/flags/france.png",
            stage: "recognise",
            options: [
                "France",
                "Ireland",
                "Italy",
                "Germany"
            ],
            hint:
                "Look carefully at the three vertical colours.",
            explanation:
                "This is the flag of France, with blue, white and red vertical stripes.",
            difficulty: 1,
            correctAnswer: "France",
            estimatedSeconds: 20,
            tags: [
                "geography",
                "year3",
                "country-flags"
            ]
        },

        {
            id: "geo-flag-003",
            skillId: "countryFlags",
            question:
                "Which country does this flag belong to?",
            image:
                "images/flags/germany.png",
            stage: "recognise",
            options: [
                "Germany",
                "Belgium",
                "France",
                "Netherlands"
            ],
            hint:
                "Look at the three horizontal colours.",
            explanation:
                "This is the flag of Germany, with black, red and gold horizontal stripes.",
            difficulty: 1,
            correctAnswer: "Germany",
            estimatedSeconds: 20,
            tags: [
                "geography",
                "year3",
                "country-flags"
            ]
        },

        {
            id: "geo-flag-004",
            skillId: "countryFlags",
            question:
                "Which country does this flag belong to?",
            image:
                "images/flags/spain.png",
            stage: "recognise",
            options: [
                "Spain",
                "Portugal",
                "Italy",
                "France"
            ],
            hint:
                "Look at the red and yellow colours.",
            explanation:
                "This is the flag of Spain, which has red and yellow horizontal bands.",
            difficulty: 1,
            correctAnswer: "Spain",
            estimatedSeconds: 20,
            tags: [
                "geography",
                "year3",
                "country-flags"
            ]
        },

        {
            id: "geo-flag-005",
            skillId: "countryFlags",
            question:
                "Which country does this flag belong to?",
            image:
                "images/flags/italy.png",
            stage: "recognise",
            options: [
                "Italy",
                "France",
                "Ireland",
                "Belgium"
            ],
            hint:
                "Look at the three vertical colours.",
            explanation:
                "This is the flag of Italy, with green, white and red vertical stripes.",
            difficulty: 1,
            correctAnswer: "Italy",
            estimatedSeconds: 20,
            tags: [
                "geography",
                "year3",
                "country-flags"
            ]
        },

        {
            id: "geo-flag-006",
            skillId: "countryFlags",
            question:
                "Which country does this flag belong to?",
            image:
                "images/flags/ireland.png",
            stage: "recognise",
            options: [
                "Ireland",
                "Italy",
                "France",
                "Ivory Coast"
            ],
            hint:
                "Look at the three vertical colours.",
            explanation:
                "This is the flag of Ireland, with green, white and orange vertical stripes.",
            difficulty: 1,
            correctAnswer: "Ireland",
            estimatedSeconds: 20,
            tags: [
                "geography",
                "year3",
                "country-flags"
            ]
        },

        {
            id: "geo-flag-007",
            skillId: "countryFlags",
            question:
                "Which country does this flag belong to?",
            image:
                "images/flags/japan.png",
            stage: "recognise",
            options: [
                "Japan",
                "China",
                "South Korea",
                "Indonesia"
            ],
            hint:
                "Look at the simple symbol in the centre.",
            explanation:
                "This is the flag of Japan, with a red circle representing the sun.",
            difficulty: 1,
            correctAnswer: "Japan",
            estimatedSeconds: 20,
            tags: [
                "geography",
                "year3",
                "country-flags"
            ]
        },

        {
            id: "geo-flag-008",
            skillId: "countryFlags",
            question:
                "Which country does this flag belong to?",
            image:
                "images/flags/canada.png",
            stage: "recognise",
            options: [
                "Canada",
                "United States",
                "England",
                "Australia"
            ],
            hint:
                "Look at the leaf in the centre.",
            explanation:
                "This is the flag of Canada, which has a red maple leaf in the centre.",
            difficulty: 1,
            correctAnswer: "Canada",
            estimatedSeconds: 20,
            tags: [
                "geography",
                "year3",
                "country-flags"
            ]
        },

        {
            id: "geo-flag-009",
            skillId: "countryFlags",
            question:
                "Which country does this flag belong to?",
            image:
                "images/flags/brazil.png",
            stage: "recognise",
            options: [
                "Brazil",
                "Portugal",
                "South Africa",
                "India"
            ],
            hint:
                "Look at the green background and the yellow diamond.",
            explanation:
                "This is the flag of Brazil, with a yellow diamond and a blue globe on a green background.",
            difficulty: 1,
            correctAnswer: "Brazil",
            estimatedSeconds: 20,
            tags: [
                "geography",
                "year3",
                "country-flags"
            ]
        },

        {
            id: "geo-flag-010",
            skillId: "countryFlags",
            question:
                "Which country does this flag belong to?",
            image:
                "images/flags/australia.png",
            stage: "recognise",
            options: [
                "Australia",
                "New Zealand",
                "United Kingdom",
                "United States"
            ],
            hint:
                "Look for the Southern Cross and the Union Jack.",
            explanation:
                "This is the flag of Australia, which includes the Union Jack and stars of the Southern Cross.",
            difficulty: 2,
            correctAnswer: "Australia",
            estimatedSeconds: 20,
            tags: [
                "geography",
                "year3",
                "country-flags"
            ]
        }

    ]

};

export default countryFlags;