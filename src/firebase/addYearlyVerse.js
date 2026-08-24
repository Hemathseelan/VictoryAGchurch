import { ref, set } from "firebase/database";
import { database } from "./firebase";

export async function addYearlyVerse() {
  try {
    await set(ref(database, "yearlyVerse"), {
      year: "2026",
      tamilText:
        "அப்பொழுது கர்த்தருடைய ஆவி உம்மேல் பலமாக இறங்கும்; நீர் அவர்களோடே தீர்க்கதரிசனம் சொல்லி, வேறொரு மனுஷனாய் மாற்றப்படுவீர்.",
      tamilReference: "1 சாமுவேல் 10:6",
      englishText:
        "The Spirit of the Lord will come powerfully upon you, and you will prophesy with them; and you will be changed into a different person.",
      englishReference: "1 Samuel 10:6",
    });

    console.log("✅ Yearly Verse Added");
  } catch (err) {
    console.error(err);
  }
}