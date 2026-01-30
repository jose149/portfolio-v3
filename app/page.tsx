import Header from "@/components/Header";
import Banner from "@/components/Banner";

export default function Portfolio() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {" "}
        {/* padding top to avoid overlapping header */}
        <Banner />
        {/* You can add About, Projects, Contact sections here */}
      </main>
    </>
  );
}
