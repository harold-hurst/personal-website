export default function Home() {
  return (
    <div className="h-screen">
      <iframe
        src="/my-resume.pdf"
        className="w-full h-full"
        title="Resume PDF"
      />
    </div>
  );
}
