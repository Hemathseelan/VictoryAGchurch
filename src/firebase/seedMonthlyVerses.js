import { ref, set } from "firebase/database";
import { database } from "./firebase";

const monthlyVerses = {
  April: {
    month: "April 2026",
    tamilText:
      "உன் வசனம் என் கால்களுக்கு தீபமும், என் பாதைக்கு வெளிச்சமுமாயிருக்கிறது.",
    tamilReference: "சங்கீதம் 119:105",
    englishText:
      "Your word is a lamp for my feet and a light on my path.",
    englishReference: "Psalm 119:105",
  },

  May: {
    month: "May 2026",
    tamilText:
      "கர்த்தர் என் மேய்ப்பராயிருக்கிறார்; எனக்குக் குறைவில்லை.",
    tamilReference: "சங்கீதம் 23:1",
    englishText:
      "The Lord is my shepherd; I lack nothing.",
    englishReference: "Psalm 23:1",
  },

  June: {
    month: "June 2026",
    tamilText:
      "உன் முழு இருதயத்தோடும் கர்த்தரில் நம்பிக்கையாயிரு.",
    tamilReference: "நீதிமொழிகள் 3:5",
    englishText:
      "Trust in the Lord with all your heart.",
    englishReference: "Proverbs 3:5",
  },

  July: {
    month: "July 2026",
    tamilText:
      "கர்த்தர் உன்னை ஆசீர்வதித்து உன்னைக் காக்கக்கடவர்.",
    tamilReference: "எண்ணாகமம் 6:24",
    englishText:
      "The Lord bless you and keep you.",
    englishReference: "Numbers 6:24",
  },
};

export async function uploadMonthlyVerses() {
  try {
    const versesRef = ref(database, "monthlyVerses");

    await set(versesRef, monthlyVerses);

    console.log("✅ April, May, June and July verses uploaded successfully!");
  } catch (error) {
    console.error("❌ Error uploading monthly verses:", error);
  }
}