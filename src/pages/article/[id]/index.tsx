import { useRouter } from "next/router";

const Article = () => {
  const router = useRouter();
  const { id, name } = router.query;

  return (
    <div>
      <h1>Articleページ</h1>
      <p>ID: {id}</p>
      <p>NAME: {name}</p>
    </div>
  );
};

export default Article;
