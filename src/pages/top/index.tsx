import Link from "next/link";

const Top = () => {
  return (
    <>
      <h1>TOPページ</h1>
      <ul>
        <li>
          <Link href="/hoge/fuga/piyo">Piyo画面へ</Link>
        </li>
        <li>
          <Link href="/article/1">Article ID: 1 画面へ</Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/article/[id]",
              query: { id: 123, name: "太郎" },
            }}
          >
            Article ID: 123 NAME: 太郎 画面へ
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Top;
