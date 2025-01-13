import { createClient } from "@supabase/supabase-js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfSjFRZl4fIkeZ6iCJ3u6BTbnrGUuOJ2M",
  authDomain: "cyber-carnival-2025.firebaseapp.com",
  projectId: "cyber-carnival-2025",
  storageBucket: "cyber-carnival-2025.firebasestorage.app",
  messagingSenderId: "117126522262",
  appId: "1:117126522262:web:e2cdccc2f87133b60069b7",
};

const supabase = createClient(
  "https://zwgylnvqlufhxfprfltt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3Z3lsbnZxbHVmaHhmcHJmbHR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3ODg4ODgsImV4cCI6MjA1MjM2NDg4OH0.RZ28r3LujYCOSguRLISdzx7VOzBmJYTfOmUZqo6opPU"
);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { supabase, db };
