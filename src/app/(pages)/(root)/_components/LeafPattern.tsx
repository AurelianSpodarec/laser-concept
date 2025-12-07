'use client'

function LeafPattern() {
  function playSound() {
    const audio = new Audio("/perfactus-ryan.mp3");
    audio.play().catch((err) => {
      console.error("Failed to play sound:", err);
    });
  };

  return (
    <button onClick={playSound} aria-hidden="true" tabIndex={-1} role="presentation">
      <img src="/images/textures/left-leafs.png" alt="" className="hover:scale-95 -mt-2 -ml-3 hover:rotate-1 transition duration-300 ease-in-out cursor-pointer absolute top-0 left-0 z-10 w-[200px] lg:w-[400px]" />
    </button>
  );
}

export default LeafPattern
