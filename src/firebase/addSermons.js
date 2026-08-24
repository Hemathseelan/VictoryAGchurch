import { ref, set } from "firebase/database";
import { database } from "./firebase";

export async function addSermons() {
  try {
    await set(ref(database, "sermons"), [
      {
        title: "Communion Sunday Service",
        pastor: "Rev. J. Jayaraj",
        date: "02 August 2026",
        youtubeUrl: "https://www.youtube.com/live/z7nvrbZ0fbg",
      },

      {
        title: "Sunday Worship Service",
        pastor: "Rev. J. Jayaraj",
        date: "26 July 2026",
        youtubeUrl: "https://youtube.com/live/-k8dBVvFpG0?feature=share",
      },

      {
        title: "Sunday Worship Service",
        pastor: "Rev. J. Jayaraj",
        date: "19 July 2026",
        youtubeUrl: "https://youtube.com/live/6Sf-FXe2gXI?feature=share",
      },

      {
        title: "Sunday Worship Service",
        pastor: "Rev. J. Jayaraj",
        date: "12 July 2026",
        youtubeUrl: "https://www.youtube.com/live/rcYYQZP3ufE?si=yDEBKrqfJ9WBZYQc",
      },
    ]);

    console.log("✅ Sermons Uploaded");
  } catch (err) {
    console.error(err);
  }
}