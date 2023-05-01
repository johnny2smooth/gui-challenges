export default function AspectRatioCard() {
  return (
    <>
      <h1 className="text-4xl">1. Aspect Ratio Image card</h1>
      <div className="card bg-blue-400 ">
        <h2 className="text-2xl">Something of interest</h2>
        <div className="visual bg-white"></div>
        <p>A brief description</p>
      </div>

      <h2 className="grow">What is this? And why is it important?</h2>
      <p className="max-w-prose">
        This is a card that will maintain it&apos;s visual&apos;s aspect ratio,
        even when the window is resized. We would want to maintain the aspect
        ratio for a card&apos;s visual no matter what. So, in this regard, we
        make sure that the card is bending itself only to the degree that the
        integrity of the visual component is maintained.
      </p>
    </>
  );
}
