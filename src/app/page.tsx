import Canvas from "@/components/canvas";
import Toolbar from "@/components/toolbar";

export default function Home() {
  return (
    <main className="text-5xl w-screen h-screen">
      <Canvas />
    <div className="absolute flex justify-center bottom-10 right-1/2 translate-x-1/2">
      <Toolbar />  
    </div>
        
    </main>

  );
}
