import { ref, set } from "firebase/database";
import { database } from "./firebase";

export async function addMonthlyVerse() {
  await set(ref(database, "monthlyVerse"), {
    month: "August 2026",
    tamilText:
      "தடைகளை நீக்கிப்போடுகிறவர் அவர்களுக்கு முன்பாக நடந்துபோகிறார்; அவர்கள் தடைகளை நீக்கி, வாசலால் உட்பிரவேசித்துக் கடந்துபோவார்கள்; அவர்கள் ராஜா அவர்களுக்கு முன்பாகப் போவார், கர்த்தர் அவர்கள் முன்னணியில் நடந்துபோவார்.",
    tamilReference: "மீகா 2:13",
    englishText:
      "The One who breaks open the way will go up before them; they will break through the gate and go out. Their King will pass through before them, the Lord at their head.",
    englishReference: "Micah 2:13",
  });

  console.log("✅ Monthly Verse Added");
}