import RootLayout from './layout';

export default function Home() {
  return (
    <RootLayout>
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold mb-4"></h2>
        <div className="flex">
          {/* Left box (smaller) */}
          <div className="flex-1 mr-2 bg-gray-200 p-4">
            <h3 className="text-xl font-semibold">Left Box</h3>
            <p> Left</p>
          </div>
          {/* Right box (larger) */}
          <div className="flex-2 bg-gray-300 p-4">
            <h3 className="text-xl font-semibold">Right Box</h3>
            <p> Right</p>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
