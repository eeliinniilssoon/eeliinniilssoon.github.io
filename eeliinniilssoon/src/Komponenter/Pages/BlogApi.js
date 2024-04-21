import { collection, getDocs, orderBy, query} from "firebase/firestore";
import { db } from "../../firebaseConfig";

export const IBlog = {
    id: "",
    date: "",
    author: "",
    title: "",
    image: "",
    content: ""
  };
// Funktion för att hämta blogginlägg från Firestore
export const fetchBlogPosts = async () => {
    const blogPostsCollection = query(collection(db, "BlogPosts"), orderBy("date", "desc"));
    const querySnapshot = await getDocs(blogPostsCollection);

    // Använd `map` för att omvandla dokumenten till IBlog-objekt
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
