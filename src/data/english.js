export const english = {
  id: "english",
  code: "5500111",
  title: "English Foundations",
  thaiTitle: "ภาษาอังกฤษพื้นฐาน",
  accent: "#E11D48",
  term: "Term 1",
  description: "พื้นฐาน grammar, reading, writing, speaking และคำศัพท์ CEFR A1–C2 ผ่าน flashcard แบบสุ่ม",
  chapters: [
    {
      id: "basics-a1",
      title: "Basics (A1)",
      description: "ตัวอักษร ทักทาย ตัวเลข และประโยคพื้นฐาน",
      sections: [
        {
          id: "greetings",
          title: "Greetings & Introductions",
          concept:
            "ทักทายพื้นฐาน: Hello / Hi, Good morning/afternoon/evening, Goodbye / See you. แนะนำตัว: My name is … / I'm …, Nice to meet you. ถามสุภาพ: How are you? — I'm fine, thank you. ใช้ Please, Thank you, Sorry บ่อยใน A1",
          example: {
            title: "Dialogue — First meeting",
            problem: "สร้างบทสนทนาแนะนำตัว 4 ประโยค",
            steps: [
              "A: Hello! My name is Anna.",
              "B: Hi Anna, I'm Ben. Nice to meet you.",
              "A: Nice to meet you too. How are you?",
              "B: I'm fine, thank you. And you?",
            ],
          },
          practice: "เขียนบทสนทนาแนะนำตัวเป็นคู่ ใช้ at least 6 คำจาก A1: hello, name, nice, meet, how, fine",
        },
        {
          id: "be-verb",
          title: "Be Verb & Simple Sentences",
          concept:
            "กริยา to be: am / is / are — I am, You are, He/She/It is, We/They are. ประโยคบอกชื่อ อาชีพ สถานที่: I am a student. She is from Thailand. Negative: is not / isn't. Question: Are you …? Yes, I am. / No, I'm not.",
          example: {
            title: "Transform sentences",
            problem: "เปลี่ยน She / student / Chula เป็นประโยค 3 แบบ",
            steps: [
              "Affirmative: She is a student at Chula.",
              "Negative: She isn't a student at Chula.",
              "Question: Is she a student at Chula?",
            ],
          },
          practice: "เขียน 6 ประโยคเกี่ยวกับตัวเอง ใช้ am/is/are อย่างละ 2 ประโยค",
        },
      ],
    },
    {
      id: "grammar-a2",
      title: "Grammar (A2)",
      description: "articles, คำนามพหูพจน์, คำเปรียบเทียบ และ preposition",
      sections: [
        {
          id: "articles-plurals",
          title: "Articles & Plurals",
          concept:
            "a/an ใช้กับ noun นับได้เอกพจน์: a book, an hour. the ใช้เมื่อผู้ฟังรู้ว่าหมายถึงอะไร. ไม่ใช้ article กับ noun นับไม่ได้ทั่วไป (water, information). พหูพจน์: -s, -es, irregular (child→children, mouse→mice)",
          example: {
            title: "Choose a / an / the / —",
            problem: "เติม article ที่ถูก",
            steps: ["___ apple → an apple", "___ sun is bright → The sun is bright", "I need ___ water → (no article) water"],
          },
          practice: "เขียน 8 ประโยค ใช้ a, an, the และ noun พหูพจน์อย่างละ 2 ประโยค",
        },
        {
          id: "comparatives-prepositions",
          title: "Comparatives & Prepositions",
          concept:
            "Comparative: -er (taller) หรือ more + adj (more important). Superlative: the -est / the most … Preposition of place: in, on, at, under, next to. Preposition of time: in (month/year), on (day), at (time)",
          example: {
            title: "Compare & locate",
            problem: "เขียนประโยบ 2 ประโยค",
            steps: [
              "Bangkok is bigger than Chiang Mai.",
              "The library is next to the cafeteria.",
            ],
          },
          practice: "เปรียบเทียบวิชา 2 วิชาที่เรียน + บอกตำแหน่งสิ่งของในห้อง 5 อย่าง",
        },
      ],
    },
    {
      id: "tenses-b1",
      title: "Tenses (B1)",
      description: "present, past, future และ perfect เบื้องต้น",
      sections: [
        {
          id: "present-past",
          title: "Present & Past Tenses",
          concept:
            "Present simple: habit/fact — I study every day. Present continuous: now — I am studying. Past simple: finished — I studied yesterday (regular -ed, irregular went/saw). Past continuous: background — I was studying when he called.",
          example: {
            title: "Timeline",
            problem: "เลือก tense ให้เหมาะ",
            steps: [
              "Every morning I ___ (wake) up at 6. → wake",
              "Right now I ___ (write) an email. → am writing",
              "Last night I ___ (watch) a movie. → watched",
            ],
          },
          practice: "เล่า yesterday ด้วย past simple อย่างน้อย 5 ประโยค",
        },
        {
          id: "future-perfect",
          title: "Future & Present Perfect",
          concept:
            "Future: will + V1 / be going to + V1. Present perfect: have/has + past participle — experience or unfinished time: I have visited Japan. (ever, never, already, yet). อย่าสับสน past simple (เมื่อระบุเวลาแน่นอนแล้ว)",
          example: {
            title: "Have you ever …?",
            problem: "ตอบด้วย present perfect",
            steps: [
              "Have you ever been abroad? — Yes, I have been to Singapore.",
              "I haven't finished the report yet.",
              "She has already submitted her homework.",
            ],
          },
          practice: "เขียน 5 คำถาม Have you ever …? และตอบ",
        },
      ],
    },
    {
      id: "reading-b1",
      title: "Reading (B1)",
      description: "กลยุทธ์อ่านและทำความเข้าใจ",
      sections: [
        {
          id: "reading-strategies",
          title: "Skimming, Scanning & Main Idea",
          concept:
            "Skimming: อ่านเร็วจับ main idea / tone. Scanning: หาข้อมูลเฉพาะ (ตัวเลข วันที่ ชื่อ). Context clues: ทายความหมายคำจากประโยครอบข้าง. Topic sentence มักอยู่ต้นหรือท้ายย่อหน้า",
          example: {
            title: "Scan for facts",
            problem: "จากข่าวสั้น หา who / when / where",
            steps: [
              "Skim → หัวข้อคือ university open day",
              "Scan → วันที่ 15 March, สถานที่ Main Hall",
              "Main idea → invitation to prospective students",
            ],
          },
          practice: "อ่านบทความสั้น 150 คำ สรุป main idea 1 ประโยค + รายละเอียด 3 ข้อ",
        },
      ],
    },
    {
      id: "writing-b2",
      title: "Writing (B2)",
      description: "โครงสร้างย่อหน้าและล register",
      sections: [
        {
          id: "paragraph-structure",
          title: "Paragraph Structure",
          concept:
            "ย่อหน้า academic: Topic sentence → Supporting sentences (reason/example) → Concluding sentence. Linking words: however, therefore, moreover, for example, in addition. หลีกเลี่ยง I think ซ้ำ — ใช้ It appears that / This suggests",
          example: {
            title: "PEEL paragraph",
            problem: "เขียนย่อหน้าเรื่อง online learning",
            steps: [
              "Point: Online learning offers flexibility.",
              "Evidence: Students can review lectures anytime.",
              "Explain: This helps part-time workers.",
              "Link: Therefore, it supports diverse learners.",
            ],
          },
          practice: "เขียนย่อหน้า 120–150 คำ เรื่อง a skill you want to improve",
        },
        {
          id: "formal-informal",
          title: "Formal vs Informal Register",
          concept:
            "Formal email: Dear Dr. …, I am writing to …, Yours sincerely. Informal: Hi …, Just wanted to …, Cheers. หลีกเลี่ยง contractions ใน formal (do not vs don't). Passive voice ใช้ในรายงาน: The experiment was conducted",
          example: {
            title: "Rewrite informal → formal",
            problem: "Hey prof, can't make it to class tomorrow.",
            steps: [
              "Dear Professor Smith,",
              "I am writing to inform you that I will be unable to attend class tomorrow.",
              "Yours sincerely, …",
            ],
          },
          practice: "เขียนอีเมลขอเลื่อนนัด 2 ฉบับ: informal (เพื่อน) และ formal (อาจารย์)",
        },
      ],
    },
    {
      id: "speaking-b2",
      title: "Speaking (B2)",
      description: "การออกเสียงและการพูดในสถานการณ์จริง",
      sections: [
        {
          id: "pronunciation-speaking",
          title: "Pronunciation & Fluency",
          concept:
            "Word stress: PHOtograph vs phoTOgraphy. Sentence stress: เน้นคำสำคัญ ลด function words. Linking: pick_it_up. Small talk topics: weather, studies, hobbies. Presentation: signposting — First, … / To summarize, …",
          example: {
            title: "Mini presentation outline",
            problem: "พูด 1 นาทีเรื่อง your major",
            steps: [
              "Opening: Today I'll talk about why I chose engineering.",
              "Body: interest in math, problem solving, career goals",
              "Closing: In summary, engineering matches my strengths.",
            ],
          },
          practice: "อัดเสียง 60 วินาที แนะนำตัว + สาขา ฟังย้อนและแก้ stress 3 คำ",
        },
      ],
    },
    {
      id: "advanced-c1",
      title: "Advanced (C1)",
      description: "ภาษาเชิงวิชาการและ nuance",
      sections: [
        {
          id: "academic-register",
          title: "Academic Register & Hedging",
          concept:
            "Hedging ลดความ catagoric: may, might, tend to, appear to, it is possible that. Nominalization: develop → development. Collocations: make a decision (not do). Avoid redundancy: absolutely essential → essential",
          example: {
            title: "Hedge a claim",
            problem: "Technology destroys social skills.",
            steps: [
              "Strong → Weak: Technology may reduce face-to-face interaction.",
              "Evidence: Some studies suggest …",
              "Balanced: While technology can limit social contact, it also enables global connection.",
            ],
          },
          practice: "เขียน 4 ประโยค claim + hedge เรื่อง AI in education",
        },
      ],
    },
    {
      id: "vocab-cefr",
      title: "CEFR Vocabulary Guide",
      description: "วิธีใช้ flashcard ในแอp",
      sections: [
        {
          id: "cefr-levels",
          title: "CEFR A1–C2 Overview",
          concept:
            "A1: สื่อสารพื้นฐาน · A2: สถานการณ์คุ้นเคย · B1: เรื่องทั่วไป travel/work · B2: โต้ตอบคล่อง เนื้อหา abstract · C1: ภาษาซับซ้อน implicit · C2: ใกล้เจ้าของภาษา. คำศัพท์ในแอp มาจาก CEFR-J + Octanove (~9,900 การ์ด)",
          example: {
            title: "Study plan",
            problem: "ลำดับการเรียนคำศัพท์",
            steps: [
              "เริ่ม A1 → A2 จนคล่อง",
              "B1–B2 สำหรับมหาวิทยาลัย",
              "C1–C2 ขยาย academic vocabulary",
              "ใช้โหมด รวม เพื่อทบทวนข้ามระดับ",
            ],
          },
          practice: "เปิด Flashcard → เลือก A1 → สุ่มเล่น 20 ใบ → จดคำที่กด ยังไม่รู้ แล้วทบทวนซ้ำ",
        },
      ],
    },
  ],
  flashcards: [],
};
