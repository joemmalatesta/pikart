export default function Toolbar() {
    type SVGIcon = {
      name: string,
      svgString: string,
      xOffset: number,
      yOffset: number
    }

    const pointerSVG: SVGIcon = {
      name: "pointer",
      svgString: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#fff"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-pointer"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7.904 17.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047 -1.047a1.067 1.067 0 0 0 0 -1.509l-4.907 -4.907l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563z" /></svg>`,
      xOffset: 0,
      yOffset: 0
    }
    const brushSVG: SVGIcon = {
      name: 'brush',
      svgString: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#fff"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brush"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21v-4a4 4 0 1 1 4 4h-4" /><path d="M21 3a16 16 0 0 0 -12.8 10.2" /><path d="M21 3a16 16 0 0 1 -10.2 12.8" /><path d="M10.6 9a9 9 0 0 1 4.4 4.4" /></svg>`,
      xOffset: 0,
      yOffset: 0
    }
    const bucketSVG: SVGIcon = {
      name: 'bucket',
      svgString: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#fff"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-bucket-droplet"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 16l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737z" /><path d="M13.737 9.737c2.299 -2.3 3.23 -5.095 2.081 -6.245c-1.15 -1.15 -3.945 -.217 -6.244 2.082c-2.3 2.299 -3.231 5.095 -2.082 6.244c1.15 1.15 3.946 .218 6.245 -2.081z" /><path d="M7.492 11.818c.362 .362 .768 .676 1.208 .934l6.895 4.047c1.078 .557 2.255 -.075 3.692 -1.512c1.437 -1.437 2.07 -2.614 1.512 -3.692c-.372 -.718 -1.72 -3.017 -4.047 -6.895a6.015 6.015 0 0 0 -.934 -1.208" /></svg>`,
      xOffset: 0,
      yOffset: 0,
    }
    const pencilSVG: SVGIcon = {
      name: 'pencil',
      svgString: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#fff"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-pencil"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /></svg>`,
      xOffset: 6,
      yOffset: 23
    }


    return (
      <main className="ring-2 rounded-xl ring-gray-800/70 bg-gray-700/60 flex justify-between gap-10 p-1 px-6">
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