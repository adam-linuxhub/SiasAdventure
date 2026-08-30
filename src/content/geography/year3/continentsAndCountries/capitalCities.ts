import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const capitalCities: SkillContent = {

    skillId: "capitalCities",

    title: "Capital Cities",

    description:
        "Learn the capital cities of countries around the world.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

        {
            id: "geo-cap-001",
            skillId: "capitalCities",
            question:
                "What is the capital city of the United Kingdom?",
            stage: "recognise",
            options: [
                "London",
                "Manchester",
                "Birmingham",
                "Liverpool"
            ],
            hint:
                "Think of the city where the UK government is based.",
            explanation:
                "London is the capital city of the United Kingdom.",
            difficulty: 1,
            correctAnswer: "London",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "uk"]
        },

        {
            id: "geo-cap-002",
            skillId: "capitalCities",
            question:
                "London is the capital city of which country?",
            stage: "recognise",
            options: [
                "United Kingdom",
                "France",
                "Ireland",
                "Germany"
            ],
            hint:
                "London is the capital of the country where Sia lives.",
            explanation:
                "London is the capital city of the United Kingdom.",
            difficulty: 1,
            correctAnswer: "United Kingdom",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "uk"]
        },

        {
            id: "geo-cap-003",
            skillId: "capitalCities",
            question:
                "What is the capital city of France?",
            stage: "recognise",
            options: [
                "Paris",
                "Lyon",
                "Marseille",
                "Nice"
            ],
            hint:
                "Think of the famous French city with the Eiffel Tower.",
            explanation:
                "Paris is the capital city of France.",
            difficulty: 1,
            correctAnswer: "Paris",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "europe"]
        },

        {
            id: "geo-cap-004",
            skillId: "capitalCities",
            question:
                "Paris is the capital city of which country?",
            stage: "recognise",
            options: [
                "France",
                "Belgium",
                "Spain",
                "Italy"
            ],
            hint:
                "Paris is a famous city in Western Europe.",
            explanation:
                "Paris is the capital city of France.",
            difficulty: 1,
            correctAnswer: "France",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "europe"]
        },

        {
            id: "geo-cap-005",
            skillId: "capitalCities",
            question:
                "What is the capital city of Germany?",
            stage: "recognise",
            options: [
                "Berlin",
                "Munich",
                "Hamburg",
                "Frankfurt"
            ],
            hint:
                "Think of the German city that was once divided by a famous wall.",
            explanation:
                "Berlin is the capital city of Germany.",
            difficulty: 1,
            correctAnswer: "Berlin",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "europe"]
        },

        {
            id: "geo-cap-006",
            skillId: "capitalCities",
            question:
                "Berlin is the capital city of which country?",
            stage: "recognise",
            options: [
                "Germany",
                "Austria",
                "Switzerland",
                "Poland"
            ],
            hint:
                "Berlin is a major city in central Europe.",
            explanation:
                "Berlin is the capital city of Germany.",
            difficulty: 1,
            correctAnswer: "Germany",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "europe"]
        },

        {
            id: "geo-cap-007",
            skillId: "capitalCities",
            question:
                "What is the capital city of Spain?",
            stage: "recognise",
            options: [
                "Madrid",
                "Barcelona",
                "Seville",
                "Valencia"
            ],
            hint:
                "The capital is not Barcelona.",
            explanation:
                "Madrid is the capital city of Spain.",
            difficulty: 1,
            correctAnswer: "Madrid",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "europe"]
        },

        {
            id: "geo-cap-008",
            skillId: "capitalCities",
            question:
                "Madrid is the capital city of which country?",
            stage: "recognise",
            options: [
                "Spain",
                "Portugal",
                "Italy",
                "Greece"
            ],
            hint:
                "Madrid is a major city on the Iberian Peninsula.",
            explanation:
                "Madrid is the capital city of Spain.",
            difficulty: 1,
            correctAnswer: "Spain",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "europe"]
        },

        {
            id: "geo-cap-009",
            skillId: "capitalCities",
            question:
                "What is the capital city of Italy?",
            stage: "recognise",
            options: [
                "Rome",
                "Milan",
                "Venice",
                "Naples"
            ],
            hint:
                "Think of the city where the ancient Colosseum can be found.",
            explanation:
                "Rome is the capital city of Italy.",
            difficulty: 1,
            correctAnswer: "Rome",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "europe"]
        },

        {
            id: "geo-cap-010",
            skillId: "capitalCities",
            question:
                "Rome is the capital city of which country?",
            stage: "recognise",
            options: [
                "Italy",
                "Greece",
                "Spain",
                "Croatia"
            ],
            hint:
                "Rome is the capital of a country shaped like a boot.",
            explanation:
                "Rome is the capital city of Italy.",
            difficulty: 1,
            correctAnswer: "Italy",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "europe"]
        },

        {
            id: "geo-cap-011",
            skillId: "capitalCities",
            question:
                "What is the capital city of Ireland?",
            stage: "recognise",
            options: [
                "Dublin",
                "Cork",
                "Galway",
                "Limerick"
            ],
            hint:
                "It is the largest city in the Republic of Ireland.",
            explanation:
                "Dublin is the capital city of Ireland.",
            difficulty: 1,
            correctAnswer: "Dublin",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "europe"]
        },

        {
            id: "geo-cap-012",
            skillId: "capitalCities",
            question:
                "Dublin is the capital city of which country?",
            stage: "recognise",
            options: [
                "Ireland",
                "United Kingdom",
                "Iceland",
                "Scotland"
            ],
            hint:
                "Dublin is on the island of Ireland.",
            explanation:
                "Dublin is the capital city of Ireland.",
            difficulty: 1,
            correctAnswer: "Ireland",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "europe"]
        },

        {
            id: "geo-cap-013",
            skillId: "capitalCities",
            question:
                "What is the capital city of Portugal?",
            stage: "recognise",
            options: [
                "Lisbon",
                "Porto",
                "Braga",
                "Faro"
            ],
            hint:
                "The capital is a coastal city in western Portugal.",
            explanation:
                "Lisbon is the capital city of Portugal.",
            difficulty: 1,
            correctAnswer: "Lisbon",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "europe"]
        },

        {
            id: "geo-cap-014",
            skillId: "capitalCities",
            question:
                "Lisbon is the capital city of which country?",
            stage: "recognise",
            options: [
                "Portugal",
                "Spain",
                "Italy",
                "France"
            ],
            hint:
                "Portugal is on the western side of the Iberian Peninsula.",
            explanation:
                "Lisbon is the capital city of Portugal.",
            difficulty: 1,
            correctAnswer: "Portugal",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "europe"]
        },

        {
            id: "geo-cap-015",
            skillId: "capitalCities",
            question:
                "What is the capital city of Greece?",
            stage: "recognise",
            options: [
                "Athens",
                "Thessaloniki",
                "Patras",
                "Heraklion"
            ],
            hint:
                "Think of the ancient city associated with the Parthenon.",
            explanation:
                "Athens is the capital city of Greece.",
            difficulty: 1,
            correctAnswer: "Athens",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "europe"]
        },

        {
            id: "geo-cap-016",
            skillId: "capitalCities",
            question:
                "Athens is the capital city of which country?",
            stage: "recognise",
            options: [
                "Greece",
                "Cyprus",
                "Italy",
                "Turkey"
            ],
            hint:
                "Athens is famous for its ancient Greek buildings.",
            explanation:
                "Athens is the capital city of Greece.",
            difficulty: 1,
            correctAnswer: "Greece",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "europe"]
        },

        {
            id: "geo-cap-017",
            skillId: "capitalCities",
            question:
                "What is the capital city of Japan?",
            stage: "recognise",
            options: [
                "Tokyo",
                "Kyoto",
                "Osaka",
                "Hiroshima"
            ],
            hint:
                "Think of Japan's huge modern city that is also its capital.",
            explanation:
                "Tokyo is the capital city of Japan.",
            difficulty: 1,
            correctAnswer: "Tokyo",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "asia"]
        },

        {
            id: "geo-cap-018",
            skillId: "capitalCities",
            question:
                "Tokyo is the capital city of which country?",
            stage: "recognise",
            options: [
                "Japan",
                "China",
                "South Korea",
                "Thailand"
            ],
            hint:
                "Tokyo is on the island nation in East Asia.",
            explanation:
                "Tokyo is the capital city of Japan.",
            difficulty: 1,
            correctAnswer: "Japan",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "asia"]
        },

        {
            id: "geo-cap-019",
            skillId: "capitalCities",
            question:
                "What is the capital city of China?",
            stage: "recognise",
            options: [
                "Beijing",
                "Shanghai",
                "Hong Kong",
                "Guangzhou"
            ],
            hint:
                "It is one of the world's largest cities and is in northern China.",
            explanation:
                "Beijing is the capital city of China.",
            difficulty: 1,
            correctAnswer: "Beijing",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "asia"]
        },

        {
            id: "geo-cap-020",
            skillId: "capitalCities",
            question:
                "Beijing is the capital city of which country?",
            stage: "recognise",
            options: [
                "China",
                "Japan",
                "Mongolia",
                "South Korea"
            ],
            hint:
                "Beijing is a major city in East Asia.",
            explanation:
                "Beijing is the capital city of China.",
            difficulty: 1,
            correctAnswer: "China",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "asia"]
        },
        {
            id: "geo-cap-021",
            skillId: "capitalCities",
            question:
                "What is the capital city of Australia?",
            stage: "recognise",
            options: [
                "Canberra",
                "Sydney",
                "Melbourne",
                "Brisbane"
            ],
            hint:
                "It is not Sydney or Melbourne. Think of the city chosen to be Australia's capital.",
            explanation:
                "Canberra is the capital city of Australia.",
            difficulty: 1,
            correctAnswer: "Canberra",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "oceania"]
        },

        {
            id: "geo-cap-022",
            skillId: "capitalCities",
            question:
                "Canberra is the capital city of which country?",
            stage: "recognise",
            options: [
                "Australia",
                "New Zealand",
                "South Africa",
                "Canada"
            ],
            hint:
                "Canberra is on the continent of Australia.",
            explanation:
                "Canberra is the capital city of Australia.",
            difficulty: 1,
            correctAnswer: "Australia",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "oceania"]
        },

        {
            id: "geo-cap-023",
            skillId: "capitalCities",
            question:
                "What is the capital city of Canada?",
            stage: "recognise",
            options: [
                "Ottawa",
                "Toronto",
                "Vancouver",
                "Montreal"
            ],
            hint:
                "It is not Toronto or Vancouver. Think of the city on the Ottawa River.",
            explanation:
                "Ottawa is the capital city of Canada.",
            difficulty: 1,
            correctAnswer: "Ottawa",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "north-america"]
        },

        {
            id: "geo-cap-024",
            skillId: "capitalCities",
            question:
                "Ottawa is the capital city of which country?",
            stage: "recognise",
            options: [
                "Canada",
                "United States",
                "Australia",
                "New Zealand"
            ],
            hint:
                "Ottawa is a city in North America.",
            explanation:
                "Ottawa is the capital city of Canada.",
            difficulty: 1,
            correctAnswer: "Canada",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "north-america"]
        },

        {
            id: "geo-cap-025",
            skillId: "capitalCities",
            question:
                "What is the capital city of the United States?",
            stage: "recognise",
            options: [
                "Washington, D.C.",
                "New York City",
                "Los Angeles",
                "Chicago"
            ],
            hint:
                "It is named after the first President of the United States.",
            explanation:
                "Washington, D.C. is the capital city of the United States.",
            difficulty: 1,
            correctAnswer: "Washington, D.C.",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "north-america"]
        },

        {
            id: "geo-cap-026",
            skillId: "capitalCities",
            question:
                "Washington, D.C. is the capital city of which country?",
            stage: "recognise",
            options: [
                "United States",
                "Canada",
                "Mexico",
                "Brazil"
            ],
            hint:
                "It is the capital of the country directly south of Canada.",
            explanation:
                "Washington, D.C. is the capital city of the United States.",
            difficulty: 1,
            correctAnswer: "United States",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "north-america"]
        },

        {
            id: "geo-cap-027",
            skillId: "capitalCities",
            question:
                "What is the capital city of Brazil?",
            stage: "recognise",
            options: [
                "Brasília",
                "Rio de Janeiro",
                "São Paulo",
                "Salvador"
            ],
            hint:
                "It is not Rio de Janeiro. Brazil's capital is inland.",
            explanation:
                "Brasília is the capital city of Brazil.",
            difficulty: 2,
            correctAnswer: "Brasília",
            estimatedSeconds: 25,
            tags: ["geography", "year3", "capital-cities", "south-america"]
        },

        {
            id: "geo-cap-028",
            skillId: "capitalCities",
            question:
                "Brasília is the capital city of which country?",
            stage: "recognise",
            options: [
                "Brazil",
                "Argentina",
                "Chile",
                "Colombia"
            ],
            hint:
                "Brasília is the capital of the largest country in South America.",
            explanation:
                "Brasília is the capital city of Brazil.",
            difficulty: 2,
            correctAnswer: "Brazil",
            estimatedSeconds: 25,
            tags: ["geography", "year3", "capital-cities", "south-america"]
        },

        {
            id: "geo-cap-029",
            skillId: "capitalCities",
            question:
                "What is the capital city of Argentina?",
            stage: "recognise",
            options: [
                "Buenos Aires",
                "Córdoba",
                "Rosario",
                "Mendoza"
            ],
            hint:
                "It is a large city on the eastern coast of Argentina.",
            explanation:
                "Buenos Aires is the capital city of Argentina.",
            difficulty: 2,
            correctAnswer: "Buenos Aires",
            estimatedSeconds: 25,
            tags: ["geography", "year3", "capital-cities", "south-america"]
        },

        {
            id: "geo-cap-030",
            skillId: "capitalCities",
            question:
                "Buenos Aires is the capital city of which country?",
            stage: "recognise",
            options: [
                "Argentina",
                "Brazil",
                "Chile",
                "Peru"
            ],
            hint:
                "Argentina is a large country in southern South America.",
            explanation:
                "Buenos Aires is the capital city of Argentina.",
            difficulty: 2,
            correctAnswer: "Argentina",
            estimatedSeconds: 25,
            tags: ["geography", "year3", "capital-cities", "south-america"]
        },

        {
            id: "geo-cap-031",
            skillId: "capitalCities",
            question:
                "What is the capital city of Egypt?",
            stage: "recognise",
            options: [
                "Cairo",
                "Alexandria",
                "Giza",
                "Luxor"
            ],
            hint:
                "Think of the huge Egyptian city near the pyramids.",
            explanation:
                "Cairo is the capital city of Egypt.",
            difficulty: 1,
            correctAnswer: "Cairo",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "africa"]
        },

        {
            id: "geo-cap-032",
            skillId: "capitalCities",
            question:
                "Cairo is the capital city of which country?",
            stage: "recognise",
            options: [
                "Egypt",
                "Morocco",
                "Kenya",
                "Nigeria"
            ],
            hint:
                "Cairo is a famous city beside the River Nile.",
            explanation:
                "Cairo is the capital city of Egypt.",
            difficulty: 1,
            correctAnswer: "Egypt",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "africa"]
        },

        {
            id: "geo-cap-033",
            skillId: "capitalCities",
            question:
                "What is the capital city of Kenya?",
            stage: "recognise",
            options: [
                "Nairobi",
                "Mombasa",
                "Kisumu",
                "Nakuru"
            ],
            hint:
                "It is a major city in eastern Africa.",
            explanation:
                "Nairobi is the capital city of Kenya.",
            difficulty: 2,
            correctAnswer: "Nairobi",
            estimatedSeconds: 25,
            tags: ["geography", "year3", "capital-cities", "africa"]
        },

        {
            id: "geo-cap-034",
            skillId: "capitalCities",
            question:
                "Nairobi is the capital city of which country?",
            stage: "recognise",
            options: [
                "Kenya",
                "Tanzania",
                "Uganda",
                "Ghana"
            ],
            hint:
                "Kenya is in eastern Africa.",
            explanation:
                "Nairobi is the capital city of Kenya.",
            difficulty: 2,
            correctAnswer: "Kenya",
            estimatedSeconds: 25,
            tags: ["geography", "year3", "capital-cities", "africa"]
        },

        {
            id: "geo-cap-035",
            skillId: "capitalCities",
            question:
                "What is the capital city of India?",
            stage: "recognise",
            options: [
                "New Delhi",
                "Mumbai",
                "Kolkata",
                "Bengaluru"
            ],
            hint:
                "It is not Mumbai. The name contains the word 'Delhi'.",
            explanation:
                "New Delhi is the capital city of India.",
            difficulty: 1,
            correctAnswer: "New Delhi",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "asia"]
        },

        {
            id: "geo-cap-036",
            skillId: "capitalCities",
            question:
                "New Delhi is the capital city of which country?",
            stage: "recognise",
            options: [
                "India",
                "Pakistan",
                "Bangladesh",
                "Nepal"
            ],
            hint:
                "India is a large country in South Asia.",
            explanation:
                "New Delhi is the capital city of India.",
            difficulty: 1,
            correctAnswer: "India",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "asia"]
        },

        {
            id: "geo-cap-037",
            skillId: "capitalCities",
            question:
                "What is the capital city of Israel?",
            stage: "recognise",
            options: [
                "Jerusalem",
                "Tel Aviv",
                "Haifa",
                "Eilat"
            ],
            hint:
                "Think of the historic city that is central to several major religions.",
            explanation:
                "Jerusalem is the capital city of Israel.",
            difficulty: 2,
            correctAnswer: "Jerusalem",
            estimatedSeconds: 25,
            tags: ["geography", "year3", "capital-cities", "asia"]
        },

        {
            id: "geo-cap-038",
            skillId: "capitalCities",
            question:
                "Jerusalem is the capital city of which country?",
            stage: "recognise",
            options: [
                "Israel",
                "Jordan",
                "Lebanon",
                "Egypt"
            ],
            hint:
                "Jerusalem is in the country on the eastern coast of the Mediterranean Sea.",
            explanation:
                "Jerusalem is the capital city of Israel.",
            difficulty: 2,
            correctAnswer: "Israel",
            estimatedSeconds: 25,
            tags: ["geography", "year3", "capital-cities", "asia"]
        },

        {
            id: "geo-cap-039",
            skillId: "capitalCities",
            question:
                "What is the capital city of Mexico?",
            stage: "recognise",
            options: [
                "Mexico City",
                "Cancún",
                "Guadalajara",
                "Monterrey"
            ],
            hint:
                "The country's capital has the same name as the country.",
            explanation:
                "Mexico City is the capital city of Mexico.",
            difficulty: 1,
            correctAnswer: "Mexico City",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "north-america"]
        },

        {
            id: "geo-cap-040",
            skillId: "capitalCities",
            question:
                "Mexico City is the capital city of which country?",
            stage: "recognise",
            options: [
                "Mexico",
                "Guatemala",
                "United States",
                "Cuba"
            ],
            hint:
                "The capital's name gives you a big clue.",
            explanation:
                "Mexico City is the capital city of Mexico.",
            difficulty: 1,
            correctAnswer: "Mexico",
            estimatedSeconds: 20,
            tags: ["geography", "year3", "capital-cities", "north-america"]
        },
        {
            id: "geo-cap-041",
            skillId: "capitalCities",
            question:
                "What is the capital city of South Africa?",
            stage: "recognise",
            options: [
                "Pretoria",
                "Cape Town",
                "Johannesburg",
                "Durban"
            ],
            hint:
                "South Africa has more than one important capital city, but Pretoria is the administrative capital.",
            explanation:
                "Pretoria is the administrative capital city of South Africa.",
            difficulty: 3,
            correctAnswer: "Pretoria",
            estimatedSeconds: 30,
            tags: ["geography", "year4", "capital-cities", "africa"]
        },

        {
            id: "geo-cap-042",
            skillId: "capitalCities",
            question:
                "What is the capital city of New Zealand?",
            stage: "recognise",
            options: [
                "Wellington",
                "Auckland",
                "Christchurch",
                "Hamilton"
            ],
            hint:
                "It is not Auckland. The capital is at the southern end of the North Island.",
            explanation:
                "Wellington is the capital city of New Zealand.",
            difficulty: 2,
            correctAnswer: "Wellington",
            estimatedSeconds: 25,
            tags: ["geography", "year3", "capital-cities", "oceania"]
        },

        {
            id: "geo-cap-043",
            skillId: "capitalCities",
            question:
                "Wellington is the capital city of which country?",
            stage: "recognise",
            options: [
                "New Zealand",
                "Australia",
                "Fiji",
                "Papua New Guinea"
            ],
            hint:
                "Wellington is the capital of the island country southeast of Australia.",
            explanation:
                "Wellington is the capital city of New Zealand.",
            difficulty: 2,
            correctAnswer: "New Zealand",
            estimatedSeconds: 25,
            tags: ["geography", "year3", "capital-cities", "oceania"]
        },

        {
            id: "geo-cap-044",
            skillId: "capitalCities",
            question:
                "What is the capital city of Turkey?",
            stage: "recognise",
            options: [
                "Ankara",
                "Istanbul",
                "Izmir",
                "Antalya"
            ],
            hint:
                "Istanbul is famous, but it is not Turkey's capital.",
            explanation:
                "Ankara is the capital city of Turkey.",
            difficulty: 2,
            correctAnswer: "Ankara",
            estimatedSeconds: 25,
            tags: ["geography", "year4", "capital-cities", "europe"]
        },

        {
            id: "geo-cap-045",
            skillId: "capitalCities",
            question:
                "Ankara is the capital city of which country?",
            stage: "recognise",
            options: [
                "Turkey",
                "Greece",
                "Bulgaria",
                "Romania"
            ],
            hint:
                "Ankara is in a country that lies partly in Europe and partly in Asia.",
            explanation:
                "Ankara is the capital city of Turkey.",
            difficulty: 2,
            correctAnswer: "Turkey",
            estimatedSeconds: 25,
            tags: ["geography", "year4", "capital-cities", "europe", "asia"]
        },

        {
            id: "geo-cap-046",
            skillId: "capitalCities",
            question:
                "What is the capital city of Norway?",
            stage: "recognise",
            options: [
                "Oslo",
                "Bergen",
                "Stockholm",
                "Helsinki"
            ],
            hint:
                "Oslo is the capital of one of the Scandinavian countries.",
            explanation:
                "Oslo is the capital city of Norway.",
            difficulty: 2,
            correctAnswer: "Oslo",
            estimatedSeconds: 25,
            tags: ["geography", "year4", "capital-cities", "europe"]
        },

        {
            id: "geo-cap-047",
            skillId: "capitalCities",
            question:
                "Oslo is the capital city of which country?",
            stage: "recognise",
            options: [
                "Norway",
                "Sweden",
                "Denmark",
                "Finland"
            ],
            hint:
                "Norway is a Scandinavian country with a long coastline.",
            explanation:
                "Oslo is the capital city of Norway.",
            difficulty: 2,
            correctAnswer: "Norway",
            estimatedSeconds: 25,
            tags: ["geography", "year4", "capital-cities", "europe"]
        },

        {
            id: "geo-cap-048",
            skillId: "capitalCities",
            question:
                "What is the capital city of Sweden?",
            stage: "recognise",
            options: [
                "Stockholm",
                "Gothenburg",
                "Oslo",
                "Copenhagen"
            ],
            hint:
                "Stockholm is a city spread across several islands.",
            explanation:
                "Stockholm is the capital city of Sweden.",
            difficulty: 2,
            correctAnswer: "Stockholm",
            estimatedSeconds: 25,
            tags: ["geography", "year4", "capital-cities", "europe"]
        },

        {
            id: "geo-cap-049",
            skillId: "capitalCities",
            question:
                "Stockholm is the capital city of which country?",
            stage: "recognise",
            options: [
                "Sweden",
                "Norway",
                "Denmark",
                "Finland"
            ],
            hint:
                "Sweden is one of the Scandinavian countries.",
            explanation:
                "Stockholm is the capital city of Sweden.",
            difficulty: 2,
            correctAnswer: "Sweden",
            estimatedSeconds: 25,
            tags: ["geography", "year4", "capital-cities", "europe"]
        },

        {
            id: "geo-cap-050",
            skillId: "capitalCities",
            question:
                "What is the capital city of Denmark?",
            stage: "recognise",
            options: [
                "Copenhagen",
                "Aarhus",
                "Stockholm",
                "Oslo"
            ],
            hint:
                "It is a major Scandinavian city on the eastern side of Denmark.",
            explanation:
                "Copenhagen is the capital city of Denmark.",
            difficulty: 2,
            correctAnswer: "Copenhagen",
            estimatedSeconds: 25,
            tags: ["geography", "year4", "capital-cities", "europe"]
        },

        {
            id: "geo-cap-051",
            skillId: "capitalCities",
            question:
                "Copenhagen is the capital city of which country?",
            stage: "recognise",
            options: [
                "Denmark",
                "Sweden",
                "Norway",
                "Iceland"
            ],
            hint:
                "Denmark is the Scandinavian country that includes the Jutland peninsula.",
            explanation:
                "Copenhagen is the capital city of Denmark.",
            difficulty: 2,
            correctAnswer: "Denmark",
            estimatedSeconds: 25,
            tags: ["geography", "year4", "capital-cities", "europe"]
        },

        {
            id: "geo-cap-052",
            skillId: "capitalCities",
            question:
                "What is the capital city of Finland?",
            stage: "recognise",
            options: [
                "Helsinki",
                "Tampere",
                "Stockholm",
                "Oslo"
            ],
            hint:
                "It is a northern European capital on the Baltic Sea.",
            explanation:
                "Helsinki is the capital city of Finland.",
            difficulty: 2,
            correctAnswer: "Helsinki",
            estimatedSeconds: 25,
            tags: ["geography", "year4", "capital-cities", "europe"]
        },

        {
            id: "geo-cap-053",
            skillId: "capitalCities",
            question:
                "Helsinki is the capital city of which country?",
            stage: "recognise",
            options: [
                "Finland",
                "Sweden",
                "Norway",
                "Estonia"
            ],
            hint:
                "Finland is east of Sweden and west of Russia.",
            explanation:
                "Helsinki is the capital city of Finland.",
            difficulty: 2,
            correctAnswer: "Finland",
            estimatedSeconds: 25,
            tags: ["geography", "year4", "capital-cities", "europe"]
        },

        {
            id: "geo-cap-054",
            skillId: "capitalCities",
            question:
                "What is the capital city of Poland?",
            stage: "recognise",
            options: [
                "Warsaw",
                "Kraków",
                "Gdańsk",
                "Wrocław"
            ],
            hint:
                "It is Poland's largest city and is located in the east-central part of the country.",
            explanation:
                "Warsaw is the capital city of Poland.",
            difficulty: 2,
            correctAnswer: "Warsaw",
            estimatedSeconds: 25,
            tags: ["geography", "year4", "capital-cities", "europe"]
        },

        {
            id: "geo-cap-055",
            skillId: "capitalCities",
            question:
                "Warsaw is the capital city of which country?",
            stage: "recognise",
            options: [
                "Poland",
                "Germany",
                "Czech Republic",
                "Hungary"
            ],
            hint:
                "Poland is in central Europe, east of Germany.",
            explanation:
                "Warsaw is the capital city of Poland.",
            difficulty: 2,
            correctAnswer: "Poland",
            estimatedSeconds: 25,
            tags: ["geography", "year4", "capital-cities", "europe"]
        },

        {
            id: "geo-cap-056",
            skillId: "capitalCities",
            question:
                "What is the capital city of Thailand?",
            stage: "recognise",
            options: [
                "Bangkok",
                "Chiang Mai",
                "Phuket",
                "Pattaya"
            ],
            hint:
                "It is a very large city in central Thailand.",
            explanation:
                "Bangkok is the capital city of Thailand.",
            difficulty: 2,
            correctAnswer: "Bangkok",
            estimatedSeconds: 25,
            tags: ["geography", "year4", "capital-cities", "asia"]
        },

        {
            id: "geo-cap-057",
            skillId: "capitalCities",
            question:
                "Bangkok is the capital city of which country?",
            stage: "recognise",
            options: [
                "Thailand",
                "Vietnam",
                "Cambodia",
                "Malaysia"
            ],
            hint:
                "Thailand is a country in Southeast Asia.",
            explanation:
                "Bangkok is the capital city of Thailand.",
            difficulty: 2,
            correctAnswer: "Thailand",
            estimatedSeconds: 25,
            tags: ["geography", "year4", "capital-cities", "asia"]
        },

        {
            id: "geo-cap-058",
            skillId: "capitalCities",
            question:
                "What is the capital city of Saudi Arabia?",
            stage: "recognise",
            options: [
                "Riyadh",
                "Jeddah",
                "Mecca",
                "Medina"
            ],
            hint:
                "It is an inland city in the centre of the Arabian Peninsula.",
            explanation:
                "Riyadh is the capital city of Saudi Arabia.",
            difficulty: 3,
            correctAnswer: "Riyadh",
            estimatedSeconds: 30,
            tags: ["geography", "year4", "capital-cities", "asia"]
        },

        {
            id: "geo-cap-059",
            skillId: "capitalCities",
            question:
                "Riyadh is the capital city of which country?",
            stage: "recognise",
            options: [
                "Saudi Arabia",
                "United Arab Emirates",
                "Qatar",
                "Oman"
            ],
            hint:
                "Riyadh is the capital of the largest country on the Arabian Peninsula.",
            explanation:
                "Riyadh is the capital city of Saudi Arabia.",
            difficulty: 3,
            correctAnswer: "Saudi Arabia",
            estimatedSeconds: 30,
            tags: ["geography", "year4", "capital-cities", "asia"]
        },

        {
            id: "geo-cap-060",
            skillId: "capitalCities",
            question:
                "Which country has Jerusalem as its capital city?",
            stage: "recognise",
            options: [
                "Israel",
                "Jordan",
                "Lebanon",
                "Syria"
            ],
            hint:
                "Jerusalem is a historic city in the Middle East.",
            explanation:
                "Jerusalem is the capital city of Israel.",
            difficulty: 3,
            correctAnswer: "Israel",
            estimatedSeconds: 30,
            tags: ["geography", "year4", "capital-cities", "asia"]
        }

    ]

};

export default capitalCities;

export {
    capitalCities
};

