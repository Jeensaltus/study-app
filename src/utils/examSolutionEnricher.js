/**
 * ขยายเฉลยข้อสอบจริงที่มีแค่คำตอบสั้นๆ ให้อ่านเข้าใจได้
 */

function stepsToText(steps, answer) {
  const body = steps.filter(Boolean).map((s, i) => `${i + 1}. ${s}`).join("\n");
  const ans = answer ? `\n\n✅ คำตอบ: ${answer}` : "";
  return body + ans;
}

/** Backwards-compat: generated bank used "ขั้นที่ N:" format, normalize to "N." */
export function normalizeStepFormat(text = "") {
  return text.replace(/^ขั้นที่\s+(\d+):\s+/gm, (_, n) => `${n}. `);
}

export function enrichExamSolution(problem) {
  const { problem: text = "", answer = "", hint = "", subtopic = "" } = problem;
  const combined = `${hint}\n${answer}`.trim();

  if (combined.length > 120 && !/^[-$0-9.\s]+$/.test(answer.trim())) {
    const parts = [];
    if (hint) parts.push(`💡 แนวคิด: ${hint}`);
    parts.push(answer);
    return parts.join("\n\n");
  }

  if (/ลิมิต 0\/0|แยกตัวประกอบ|rational/.test(subtopic + text)) {
    return stepsToText(
      [
        hint || "แทนค่า $x$ ตรง → ได้รูป $\\frac{0}{0}$ (indeterminate)",
        "แยกตัวประกอบตัวเศษ แล้วตัดพจน์ร่วม $(x-a)$ ออก",
        "แทนค่า $x\\to a$ ในส่วนที่เหลือ",
      ],
      answer
    );
  }

  if (/ลิมิตพื้นฐาน|ลิมิตพหุนาม|แทนค่าตรง/.test(subtopic)) {
    return stepsToText(
      [
        "ฟังก์ชันเป็นพหุนาม → ต่อเนื่องทุกจุด",
        "แทนค่า $x$ ตรงในสูตร",
        "คำนวณค่าที่ได้",
      ],
      answer
    );
  }

  if (/ลิมิตที่อนันต์|อนันต์/.test(subtopic)) {
    return stepsToText(
      [
        "หารทั้งเศษและส่วนด้วย $x^n$ ที่มีกำลังสูงสุด",
        "เมื่อ $x\\to\\infty$ ค่าที่มี $x$ ในตัวส่วนจะเข้าใกล้ $0$",
        "เหลืออัตราส่วนของสัมประสิทธิ์นำหน้า",
      ],
      answer
    );
  }

  if (/อนุพันธ์|derivative/.test(subtopic.toLowerCase())) {
    return stepsToText(
      [
        hint || "ระบุว่าต้องใช้กฎอนุพันธ์ใด (power / product / chain / quotient)",
        "คำนวณทีละขั้น แล้วจัดรูปให้เรียบง่าย",
      ],
      answer
    );
  }

  if (/อินทิกรัล|integral|leibniz|ftc/.test(subtopic.toLowerCase())) {
    return stepsToText(
      [
        hint || "เลือกวิธี: substitution, parts, หรือสูตรพื้นฐาน",
        "หาฟังก์ชันต้น (อย่าลืม $+C$ ถ้าไม่จำกัดเขต)",
        "ถ้าจำกัดเขต: แทนขอบเขตแล้วลบ",
      ],
      answer
    );
  }

  if (/ลำดับ|sequence|อนุกรม|series/.test(subtopic.toLowerCase())) {
    return stepsToText(
      [
        hint || "เลือกการทดสอบ: comparison, ratio, alternating, p-series ฯลฯ",
        "ตรวจเงื่อนไขของทดสอบที่เลือก",
        "สรุปว่าลู่เข้า / ลู่ออก / ลู่เข้าแบบมีเงื่อนไข",
      ],
      answer
    );
  }

  if (/เวกเตอร์|vector|dot|cross/.test(subtopic.toLowerCase())) {
    return stepsToText(
      [
        hint || "เขียนสูตร dot product หรือ cross product",
        "แทนค่า component แล้วคำนวณ",
      ],
      answer
    );
  }

  if (/หลายตัวแปร|multivariable|partial/.test(subtopic.toLowerCase())) {
    return stepsToText(
      [
        hint || "หาอนุพันธ์บางครั้งโดยถือตัวแปรอื่นคงที่",
        "ตั้ง $f_x=0$, $f_y=0$ เพื่อหา critical point (ถ้าจำเป็น)",
      ],
      answer
    );
  }

  if (/ode|เชิงอนุพันธ์/.test(subtopic.toLowerCase())) {
    return stepsToText(
      [
        hint || "แยกตัวแปร หรือใช้ integrating factor",
        "integrate ทั้งสองข้าง แล้วหา $y$",
        "ใส่ constant $C$ ถ้าเป็น general solution",
      ],
      answer
    );
  }

  if (hint) {
    return stepsToText([`💡 แนวคิด: ${hint}`, "ทำตามขั้นตอนข้างต้นจนถึงคำตอบ"], answer);
  }

  return stepsToText(
    ["อ่านโจทย์และระบุวิธีที่เหมาะสมจากบทเรียน", "ทำทีละขั้นตามเทคนิคของหัวข้อนี้"],
    answer || "ดูเอกสารต้นฉบับ"
  );
}
