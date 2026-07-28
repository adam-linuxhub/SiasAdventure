/*==================================================
  SIA'S ADVENTURE
  curriculum.ts

  Defines the educational structure of the game.

  Curriculum
      └── Subjects
              └── Categories
                      └── Skills
==================================================*/

export interface Stage {
    id: string;
    name: string;
}

export interface Skill {
    id: string;
    name: string;
    description: string;

    yearRange: {
        from: number;
        to: number;
    };

    stages: Stage[];

    prerequisites: string[];
}

export interface Category {
    id: string;
    name: string;

    skills: Skill[];
}

export interface Subject {
    id: string;
    name: string;

    categories: Category[];
}

export const curriculum: Subject[] = [

    /*==================================================
      MATHEMATICS
    ==================================================*/

    {
        id: "math",
        name: "Mathematics",

        categories: [

            {
                id: "number-place-value",
                name: "Number & Place Value",

                skills: [

                    {
                        id: "count-to-1000",
                        name: "Count to 1000",

                        description:
                            "Count forwards and backwards to 1000.",

                        yearRange: {
                            from: 3,
                            to: 3
                        },

                        stages: [

                            { id: "recognise", name: "Recognise" },
                            { id: "understand", name: "Understand" },
                            { id: "apply", name: "Apply" },
                            { id: "reason", name: "Reason" },
                            { id: "master", name: "Master" }

                        ],

                        prerequisites: []
                    },

                    {
                        id: "compare-numbers",
                        name: "Compare Numbers",

                        description:
                            "Compare numbers using <, > and =.",

                        yearRange: {
                            from: 3,
                            to: 3
                        },

                        stages: [

                            { id: "recognise", name: "Recognise" },
                            { id: "understand", name: "Understand" },
                            { id: "apply", name: "Apply" },
                            { id: "reason", name: "Reason" },
                            { id: "master", name: "Master" }

                        ],

                        prerequisites: [
                            "count-to-1000"
                        ]
                    },

                    {
    id: "hundreds-tens-ones",
    name: "Hundreds, Tens and Ones",

    description:
        "Recognise the value of each digit in a 3-digit number.",

    yearRange: {
        from: 3,
        to: 3
    },

    stages: [
        { id: "recognise", name: "Recognise" },
        { id: "understand", name: "Understand" },
        { id: "apply", name: "Apply" },
        { id: "reason", name: "Reason" },
        { id: "master", name: "Master" }
    ],

    prerequisites: [
        "count-to-1000"
    ]
},

{
    id: "partition-numbers",
    name: "Partition Numbers",

    description:
        "Partition 3-digit numbers into hundreds, tens and ones.",

    yearRange: {
        from: 3,
        to: 3
    },

    stages: [
        { id: "recognise", name: "Recognise" },
        { id: "understand", name: "Understand" },
        { id: "apply", name: "Apply" },
        { id: "reason", name: "Reason" },
        { id: "master", name: "Master" }
    ],

    prerequisites: [
        "hundreds-tens-ones"
    ]
},

{
    id: "order-numbers",
    name: "Order Numbers",

    description:
        "Order numbers from smallest to largest and vice versa.",

    yearRange: {
        from: 3,
        to: 3
    },

    stages: [
        { id: "recognise", name: "Recognise" },
        { id: "understand", name: "Understand" },
        { id: "apply", name: "Apply" },
        { id: "reason", name: "Reason" },
        { id: "master", name: "Master" }
    ],

    prerequisites: [
        "compare-numbers"
    ]
},
{
    id: "find-one-more-less",
    name: "Find One More or One Less",

    description:
        "Find one more and one less than a given number.",

    yearRange: {
        from: 3,
        to: 3
    },

    stages: [
        { id: "recognise", name: "Recognise" },
        { id: "understand", name: "Understand" },
        { id: "apply", name: "Apply" },
        { id: "reason", name: "Reason" },
        { id: "master", name: "Master" }
    ],

    prerequisites: [
        "partition-numbers"
    ]
},

{
    id: "find-ten-more-less",
    name: "Find Ten More or Ten Less",

    description:
        "Find ten more and ten less than a given number.",

    yearRange: {
        from: 3,
        to: 3
    },

    stages: [
        { id: "recognise", name: "Recognise" },
        { id: "understand", name: "Understand" },
        { id: "apply", name: "Apply" },
        { id: "reason", name: "Reason" },
        { id: "master", name: "Master" }
    ],

    prerequisites: [
        "partition-numbers"
    ]
},

{
    id: "find-one-hundred-more-less",
    name: "Find One Hundred More or Less",

    description:
        "Find one hundred more and one hundred less than a given number.",

    yearRange: {
        from: 3,
        to: 3
    },

    stages: [
        { id: "recognise", name: "Recognise" },
        { id: "understand", name: "Understand" },
        { id: "apply", name: "Apply" },
        { id: "reason", name: "Reason" },
        { id: "master", name: "Master" }
    ],

    prerequisites: [
        "partition-numbers"
    ]
},

{
    id: "number-lines",
    name: "Number Lines",

    description:
        "Locate, estimate and identify numbers on number lines.",

    yearRange: {
        from: 3,
        to: 3
    },

    stages: [
        { id: "recognise", name: "Recognise" },
        { id: "understand", name: "Understand" },
        { id: "apply", name: "Apply" },
        { id: "reason", name: "Reason" },
        { id: "master", name: "Master" }
    ],

    prerequisites: [
        "order-numbers"
    ]
},
{
    id: "count-in-50s",
    name: "Count in 50s",

    description:
        "Count forwards and backwards in steps of 50.",

    yearRange: {
        from: 3,
        to: 3
    },

    stages: [
        { id: "recognise", name: "Recognise" },
        { id: "understand", name: "Understand" },
        { id: "apply", name: "Apply" },
        { id: "reason", name: "Reason" },
        { id: "master", name: "Master" }
    ],

    prerequisites: [
        "count-to-1000"
    ]
},

{
    id: "roman-numerals",
    name: "Roman Numerals",

    description:
        "Read and write Roman numerals from I to XII.",

    yearRange: {
        from: 3,
        to: 3
    },

    stages: [
        { id: "recognise", name: "Recognise" },
        { id: "understand", name: "Understand" },
        { id: "apply", name: "Apply" },
        { id: "reason", name: "Reason" },
        { id: "master", name: "Master" }
    ],

    prerequisites: [
        "count-to-1000"
    ]
},

{
    id: "compare-roman-and-arabic",
    name: "Compare Roman and Arabic Numerals",

    description:
        "Match Roman numerals with their Arabic numeral equivalents.",

    yearRange: {
        from: 3,
        to: 3
    },

    stages: [
        { id: "recognise", name: "Recognise" },
        { id: "understand", name: "Understand" },
        { id: "apply", name: "Apply" },
        { id: "reason", name: "Reason" },
        { id: "master", name: "Master" }
    ],

    prerequisites: [
        "roman-numerals"
    ]
}


                ]
            },

            {
                id: "addition-subtraction",
                name: "Addition & Subtraction",

                skills: [

                    {
                        id: "mental-addition",
                        name: "Mental Addition",

                        description:
                            "Add numbers mentally using efficient strategies.",

                        yearRange: {
                            from: 3,
                            to: 4
                        },

                        stages: [

                            { id: "recognise", name: "Recognise" },
                            { id: "understand", name: "Understand" },
                            { id: "apply", name: "Apply" },
                            { id: "reason", name: "Reason" },
                            { id: "master", name: "Master" }

                        ],

                        prerequisites: [
                            "partition-numbers"
                        ]
                    }

                ]
            }

        ]
    },

    /*==================================================
      ENGLISH
    ==================================================*/

    {
        id: "english",
        name: "English",

        categories: [

            {
                id: "grammar",
                name: "Grammar",

                skills: [

                    {
                        id: "nouns",
                        name: "Nouns",

                        description:
                            "Identify common, proper and collective nouns.",

                        yearRange: {
                            from: 3,
                            to: 4
                        },

                        stages: [

                            { id: "recognise", name: "Recognise" },
                            { id: "understand", name: "Understand" },
                            { id: "apply", name: "Apply" },
                            { id: "reason", name: "Reason" },
                            { id: "master", name: "Master" }

                        ],

                        prerequisites: []
                    }

                ]
            }

        ]
    },

    /*==================================================
      VERBAL REASONING
    ==================================================*/

    {
        id: "verbal",
        name: "Verbal Reasoning",

        categories: [

            {
                id: "vocabulary",
                name: "Vocabulary",

                skills: [

                    {
                        id: "synonyms",
                        name: "Synonyms",

                        description:
                            "Recognise words with similar meanings.",

                        yearRange: {
                            from: 3,
                            to: 5
                        },

                        stages: [

                            { id: "recognise", name: "Recognise" },
                            { id: "understand", name: "Understand" },
                            { id: "apply", name: "Apply" },
                            { id: "reason", name: "Reason" },
                            { id: "master", name: "Master" }

                        ],

                        prerequisites: []
                    }

                ]
            }

        ]
    },

    /*==================================================
      NON-VERBAL REASONING
    ==================================================*/

    {
        id: "non-verbal",
        name: "Non-Verbal Reasoning",

        categories: [

            {
                id: "patterns",
                name: "Patterns",

                skills: [

                    {
                        id: "shape-patterns",
                        name: "Shape Patterns",

                        description:
                            "Identify visual patterns and sequences.",

                        yearRange: {
                            from: 3,
                            to: 5
                        },

                        stages: [

                            { id: "recognise", name: "Recognise" },
                            { id: "understand", name: "Understand" },
                            { id: "apply", name: "Apply" },
                            { id: "reason", name: "Reason" },
                            { id: "master", name: "Master" }

                        ],

                        prerequisites: []
                    }

                ]
            }

        ]
    },

    /*==================================================
      DISCOVERY
    ==================================================*/

    {
        id: "discovery",
        name: "Discovery",

        categories: [

            {
                id: "flags",
                name: "Flags",

                skills: [

                    {
                        id: "uk-flags",
                        name: "United Kingdom Flags",

                        description:
                            "Recognise the flags of the United Kingdom.",

                        yearRange: {
                            from: 3,
                            to: 6
                        },

                        stages: [

                            { id: "recognise", name: "Recognise" },
                            { id: "recall", name: "Recall" },
                            { id: "master", name: "Master" }

                        ],

                        prerequisites: []
                    }

                ]
            },

            {
                id: "planets",
                name: "Planets",

                skills: [

                    {
                        id: "solar-system",
                        name: "The Solar System",

                        description:
                            "Learn the planets in our solar system.",

                        yearRange: {
                            from: 3,
                            to: 6
                        },

                        stages: [

                            { id: "recognise", name: "Recognise" },
                            { id: "recall", name: "Recall" },
                            { id: "master", name: "Master" }

                        ],

                        prerequisites: []
                    }

                ]
            }

        ]
    }

];