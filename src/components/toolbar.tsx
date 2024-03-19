export default function Toolbar() {
    return (
      <main className="ring-2 rounded-xl ring-gray-800/80 bg-gray-700/80 flex justify-between gap-10 p-3 px-6">
        <button className="p-2"><img className="w-8" src="icons/pointer.svg" alt="" /></button>
        <button className="p-2"><img className="w-8" src="icons/brush.svg" alt="" /></button>
        <button className="p-2"><img className="w-8" src="icons/bucket.svg" alt="" /></button>
        <button className="p-2"><img className="w-8" src="icons/pencil.svg" alt="" /></button>
        <button className="flex flex-col items-center justify-center"><div className="flex justify-center items-center"><img className="w-4" src="icons/circle.svg" alt="" /></div>
        <div className="flex justify-between items-center"><img className="w-4" src="icons/triangle.svg" alt="" />
        <img className="w-4" src="icons/square.svg" alt="" /></div></button>
        <button className="p-2"><img className="w-8" src="icons/text.svg" alt="" /></button>
        <button className="p-2"><img className="w-8" src="icons/eraser.svg" alt="" /></button>
        <button className="p-2"><img className="w-8" src="icons/export.svg" alt="" /></button>


      </main>
    );
  }