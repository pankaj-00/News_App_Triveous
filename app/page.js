import NewsFeed from "@/components/NewsFeed";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-6">
      <NewsFeed />
    </main>
  );
}
