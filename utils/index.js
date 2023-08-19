import { db } from "../lib/firebase";
import { addDoc, collection } from "firebase/firestore";

export const handleLike = async (
  title,
  image,
  publishedAt,
  source,
  liked,
  setLiked,
  urlToFullArticle,
  currentUser
) => {
  console.log(title);
  if (!liked.includes(title.toLowerCase())) {
    const newLiked = [...liked];
    newLiked.push(title.toLowerCase());
    setLiked(newLiked);
    try {
      await addDoc(collection(db, "likedArticles", currentUser.email, "data"), {
        title: title,
        source: source,
        publishedAt: publishedAt,
        image: image,
        url: urlToFullArticle || process.env.NEXT_PUBLIC_BASE_URL,
      });
    } catch (err) {
      console.log(err.message);
    }
  }
};
