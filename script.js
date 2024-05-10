const questions = [
    "هل أنت مهتم بدراسة كيفية تأثير العرض والطلب على الأسعار والأسواق؟",
    "هل تستمتع بفهم كيفية عمل الاقتصاد وتأثيره على الأعمال التجارية؟",
    "هل تشعر بالفضول تجاه العوامل التي تؤثر على اتخاذ القرارات الاقتصادية على المستوى الاقتصاد الجزئي والاقتصاد الكلي؟",
    "هل تستمتع بدراسة النظريات الاقتصادية والنماذج؟",
    "هل أنت مهتم بتعلم التجارة الدولية وتنمية الاقتصاد؟",
    "هل أنت مهتم بالأسواق المالية وكيفية عملها؟",
    "هل تستمتع بالتفكير في كيفية إدارة الأموال واستثمارها بشكل ذكي؟",
    "هل تستمتع بدراسة استراتيجيات الاستثمار والأسواق المالية؟",
    "هل أنت مهتم بتعلم التمويل الشركي والتخطيط المالي؟",
    "هل لديك شغف لتحليل البيانات المالية وتقييم المخاطر؟",
    "هل تستمتع بتحليل البيانات المالية والمعاملات المالية؟",
    "هل تستمتع بالعمل مع الأرقام والبيانات المالية؟",
    "هل تحب دراسة مبادئ المحاسبة وتطبيقها على البيانات المالية؟",
    "هل لديك اهتمام في التقارير المالية والتدقيق؟",
    "هل أنت مهتم بتعلم قوانين الضرائب والتنظيمات؟",
    "هل تحب التفاعل مع العملاء وفهم احتياجاتهم؟",
    "هل تستمتع بتنظيم الأشياء وتوجيه الفرق لتحقيق الأهداف المشتركة؟",
    "هل أنت مهتم بتعلم مبادئ واستراتيجيات الإدارة؟",
    "هل تستمتع بتحليل اتجاهات السوق وسلوك المستهلكين؟",
    "هل أنت مهتم بريادة الأعمال وبدء الأعمال التجارية الخاصة بك؟",
    "هل تستمتع بدراسة السياسات الحكومية وتأثيرها على حياة المواطنين؟",
    "هل أنت مهتم بالبحث في مفاهيم مثل العدالة الاجتماعية وحقوق الإنسان؟",
    "هل أنت مهتم بدراسة هياكل الحكومة والأنظمة السياسية؟",
    "هل تستمتع بتحليل الأيديولوجيات السياسية وتأثيرها على المجتمع؟",
    "هل أنت متحمس للدعوة إلى التغيير الاجتماعي والمشاركة في النشاط السياسي؟",
    "هل تستمتع باستخدام التكنولوجيا لتحسين عمليات الأعمال وتطوير حلول فعالة؟",
    "هل لديك رغبة في الجلوس أمام أجهزة الكمبيوتر لفترات طويلة؟",
    "هل لديك شغف للتكنولوجيا والحواسيب؟",
    "هل أنت مهتم بتعلم إدارة قواعد البيانات وتحليل البيانات؟",
    "هل تستمتع بحل المشكلات وإيجاد حلول مبتكرة باستخدام التكنولوجيا؟"
];
const questionsEnglish = [
    "Are you interested in studying how supply and demand affect prices and markets?",
    "Do you enjoy understanding how economics works and its impact on business?",
    "Are you intrigued by the factors that influence economic decision-making at both micro and macro levels?",
    "Do you enjoy studying economic theories and models?",
    "Are you interested in learning about international trade and economic development?",

    "Are you interested in financial markets and how they operate?",
    "Do you enjoy thinking about how to manage money and invest it wisely?",
    "Do you enjoy studying investment strategies and financial markets?",
    "Are you interested in learning about corporate finance and financial planning?",
    "Do you have a passion for analyzing financial statements and assessing risk?",

    "Do you enjoy analyzing financial data and transactions?",
    "Do you enjoy working with financial numbers and data?",
    "Do you enjoy studying accounting principles and applying them to financial data?",
    "Do you have an interest in financial reporting and auditing?",
    "Are you interested in learning about tax laws and regulations?",

    "Do you like interacting with customers and understanding their needs?",
    "Do you enjoy organizing things and directing teams to achieve common goals?",
    "Are you interested in learning about management principles and strategies?",
    "Do you enjoy analyzing market trends and consumer behavior?",
    "Are you interested in entrepreneurship and starting your own business?",

    "Do you enjoy studying government policies and their impact on citizens' lives?",
    "Are you interested in researching concepts like social justice and human rights?",
    "Are you interested in studying government structures and political systems?",
    "Do you enjoy analyzing political ideologies and their impact on society?",
    "Are you passionate about advocating for social change and participating in political activism?",

    "Do you enjoy using technology to improve business operations and develop effective solutions?",
    "Do you have a desire to sit in front of computers for long periods of time?",
    "Do you have a passion for technology and computers?",
    "Are you interested in learning about database management and data analysis?",
    "Do you enjoy problem-solving and finding innovative solutions using technology?"
];
const results = {
    "economics": { score: 0, questions: [0, 1, 2, 3, 4] },
    "finance": { score: 0, questions: [5, 6, 7, 8, 9] },
    "accounting": { score: 0, questions: [10, 11, 12, 13, 14] },
    "business": { score: 0, questions: [15, 16, 17, 18, 19] },
    "political": { score: 0, questions: [20, 21, 22, 23, 24] },
    "information_system": { score: 0, questions: [25, 26, 27, 28, 29] }
};

let currentQuestion = 0;
let answers = [];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const prevButton = document.getElementById('prev-btn');
const choiceText = document.getElementById('choice-text');

function displayQuestion() {
    const currentQuestionArabic = questions[currentQuestion];
    const currentQuestionEnglish = questionsEnglish[currentQuestion];
    questionElement.innerHTML = `<div>${currentQuestionEnglish}</div><div>${currentQuestionArabic}</div>`;
    optionsElement.innerHTML = '';

    const option1 = createOptionButton("Yes");
    const option2 = createOptionButton("No");

    optionsElement.appendChild(option1);
    optionsElement.appendChild(option2);
}

function createOptionButton(text) {
    const option = document.createElement('button');
    option.textContent = text;
    option.classList.add('option-button');
    option.addEventListener('click', () => {
        const optionButtons = document.querySelectorAll('.option-button');
        optionButtons.forEach(button => button.classList.remove('selected'));
        option.classList.add('selected');
        answers[currentQuestion] = text === "Yes" ? "likely" : "dislikely";
        showNextQuestion(); // Call the function to show the next question directly
    });
    return option;
}

function showNextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
        if (currentQuestion > 0) {
            prevButton.style.display = 'block'; // Show the Previous button from the second question onwards
        }
    } else {
        calculateResults();
        displayResult();
    }
}

function calculateResults() {
    answers.forEach((answer, index) => {
        Object.keys(results).forEach(major => {
            if (results[major].questions.includes(index)) {
                if (answer === "likely") {
                    results[major].score++;
                }
            }
        });
    });
}

function displayResult() {
    let maxScore = -1;
    let selectedMajor = "";

    Object.keys(results).forEach(major => {
        if (results[major].score > maxScore) {
            maxScore = results[major].score;
            selectedMajor = major;
        }
    });

    resultElement.textContent = results[selectedMajor].score === 0 ? "No suitable major has been selected" : selectedMajor;
    choiceText.style.display = 'block'; // Display the choice text
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
}

prevButton.addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
        if (currentQuestion === 0) {
            prevButton.style.display = 'none'; // Hide the Previous button on the first question
        }
    }
});

displayQuestion();
