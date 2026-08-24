import { ref, set } from "firebase/database";
import { database } from "./firebase";

export async function testFirebase() {
  try {
    await set(ref(database, "test"), {
      message: "Firebase Connected Successfully",
    });

    console.log("✅ Firebase Connected");
  } catch (err) {
    console.error(err);
  }
}