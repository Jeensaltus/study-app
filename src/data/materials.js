export const materials = {
  id: "materials",
  code: "2109101",
  title: "Engineering Materials",
  thaiTitle: "วัสดุวิศวกรรม",
  accent: "#78716C",
  term: "Term 2",
  description:
    "โครงสร้างและสมบัติวัสดุวิศวกรรม โลหะ พลาสติก ไม้ คอนกรีต phase diagram และการทดสอบวัสดุ (Chula 2109101)",
  chapters: [
    {
      id: "intro",
      title: "Introduction to Engineering Materials",
      description: "ประเภทวัสดุ บทบาทในงานวิศวกรรม และการเลือกใช้วัสดุ",
      sections: [
        {
          id: "material-classes",
          title: "Classes of Materials",
          concept:
            "วัสดุวิศวกรรมหลัก: โลหะ (metals), เซรามิก (ceramics), พอลิเมอร์ (polymers), คอมโพสิต (composites), และไม้/คอนกรีต. แต่ละชนิดมีโครงสร้างและสมบัติต่างกัน — ความแข็ง, ความเหนียว, การนำไฟฟ้า/ความร้อน, ความทนสึกหรอ",
          example: {
            title: "เลือกวัสดุให้เหมาะงาน",
            problem: "ทำไมเหล็กใช้เป็นโครงสร้าง แต่พลาสติกใช้เป็นฉนวน?",
            steps: [
              "เหล็ก: แข็งแรง รับแรงดึง/อัดได้ดี → โครงสร้าง",
              "พลาสติก: ฉนดี น้ำหนักเบา → ฉนวน/บรรจุภัณฑ์",
            ],
          },
          practice: "ยกตัวอย่างวัสดุ 3 ชนิดในชีวิตประจำวัน พร้อมเหตุผลที่เลือกใช้",
        },
      ],
    },
    {
      id: "atomic-structure",
      title: "Atomic Structure & Bonding",
      description: "โครงสร้างอะตอม การเรียงตัว และพันธะระหว่างอะตอม",
      sections: [
        {
          id: "bonding-types",
          title: "Primary & Secondary Bonds",
          concept:
            "Primary bonds: ionic, covalent, metallic — แข็งแรง กำหนดโครงสร้างหลัก. Secondary bonds: van der Waals, hydrogen — อ่อนกว่า มีผลต่อพลาสติกและโพลิเมอร์. ประเภทพันธะสัมพันธ์กับสมบัติ เช่น โลหะนำไฟฟ้าได้เพราะ electron sea",
          practice: "เปรียบเทียบ ionic vs covalent vs metallic bond อย่างละ 1 ข้อ",
        },
      ],
    },
    {
      id: "crystalline",
      title: "Crystal Structure & Defects",
      description: "โครงสร้างผลึก ระบบจุด และ crystal defects",
      sections: [
        {
          id: "lattice-defects",
          title: "Lattice & Point Defects",
          concept:
            "Crystal lattice: การเรียงซ้ำของอะตอม (BCC, FCC, HCP ในโลหะ). Point defects: vacancy, interstitial, substitutional — มีผลต่อ diffusion และความแข็ง. Dislocation เป็นข้อบกพร่องเส้น อธิบาย plastic deformation",
          practice: "อธิบายว่า vacancy กับ dislocation มีผลต่อความแข็ง/ความเหนียวอย่างไร",
        },
      ],
    },
    {
      id: "mechanical",
      title: "Mechanical Properties",
      description: "Stress–strain, ความแข็ง, ความเหนียว และการทดสอบ",
      sections: [
        {
          id: "stress-strain",
          title: "Stress, Strain & Testing",
          concept:
            "Stress $\\sigma = F/A$, strain $\\varepsilon = \\Delta L/L_0$. กราฟ stress–strain: elastic region (Hooke's law), yield point, ultimate tensile strength, fracture. การทดสอบ: tensile test, hardness (Rockwell, Brinell), impact test",
          formula: "\\sigma = E\\varepsilon \\quad \\text{(elastic)}",
          practice: "จากกราฟ stress–strain ชี้จุด elastic limit, yield, UTS",
        },
      ],
    },
    {
      id: "phase-diagrams",
      title: "Phase Diagrams",
      description: "สมดุลระหว่าง phase และการตีความ phase diagram",
      sections: [
        {
          id: "binary-phase",
          title: "Binary Phase Diagrams",
          concept:
            "Phase diagram แสดง phase ที่ stable ตามอุณหภูมิและองค์ประกอบ. คำสำคัญ: liquidus, solidus, eutectic, eutectoid, solvus. ใช้ทำนาย microstructure หลัง casting หรือ heat treatment",
          practice: "อธิบาย eutectic point บน diagram แบบ binary A–B",
        },
      ],
    },
    {
      id: "metals",
      title: "Metals & Alloys",
      description: "โลหะ เหล็กกล้า และ heat treatment",
      sections: [
        {
          id: "steel-heat-treat",
          title: "Steel & Heat Treatment",
          concept:
            "เหล็กกล้า: คาร์บอนใน iron เปลี่ยน microstructure (pearlite, martensite). Heat treatment: annealing, quenching, tempering — ปรับความแข็ง/ความเหนียว. Alloy elements (Cr, Ni, Mo) ปรับสมบัติ",
          practice: "เปรียบเทียบ annealing กับ quenching ผลต่อ microstructure",
        },
      ],
    },
    {
      id: "polymers",
      title: "Polymers",
      description: "โครงสร้างโพลิเมอร์ การพอลิmerization และสมบัติ",
      sections: [
        {
          id: "polymer-structure",
          title: "Polymer Structure & Properties",
          concept:
            "Thermoplastic vs thermoset. โครงสร้าง: amorphous vs crystalline regions. สมบัติ: น้ำหนักเบา, ฉนดี, creep ที่อุณหภูมิสูง. การใช้งาน: บรรจุภัณฑ์, ฉนวน, ชิ้นส่วนเครื่องจักร",
          practice: "ยกตัวอย่าง thermoplastic vs thermoset อย่างละ 2 ชนิด",
        },
      ],
    },
    {
      id: "ceramics-concrete",
      title: "Ceramics, Concrete & Wood",
      description: "เซรามิก คอนกรีต ไม้ และวัสดุก่อสร้าง",
      sections: [
        {
          id: "non-metal-materials",
          title: "Ceramics, Concrete & Wood",
          concept:
            "Ceramics: แข็ง เปราะ ทนอุณหภูมิสูง (oxide, carbide). Concrete: composite ของ cement + aggregate + water — hydration. Wood: anisotropic, ใช้โครงสร้างและเฟอร์นิเจอร์. Asphalt: binder ในงานถนน",
          practice: "เปรียบเทียบ ceramics กับ metals เรื่องความเหนียวและการนำ heat",
        },
      ],
    },
  ],
};
