async function getData() {
  let res;
  try {
    res = await fetch(`${process.env.BACKEND_URL}/artist`);
  } catch (error) {}

  return res ? res.json() : [];
}

function Artist({ details }: any) {
  return (
    <div
      key={details.id}
      className="group rounded-lg border border-transparent px-5 py-4 mx-4 my-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      <h2 className="mb-3 text-2xl font-semibold">{details.name} </h2>
      <div className="flex place-items-center">
        <p>Genre: </p>
        <p className="m-0 max-w-[30ch] text-sm opacity-50 pl-2">
          {details.genre}
        </p>
      </div>

      <div className="flex place-items-center">
        <p>Stage: </p>
        <p className="m-0 max-w-[30ch] text-sm opacity-50 pl-2">
          {details.stage}
        </p>
      </div>
      <div className="flex flex-col place-items-start justify-start">
        <p>Description: </p>
        <p className="m-0 max-w-[30ch] text-sm opacity-50 py-3 ">
          {details.description}
        </p>
      </div>
      <div className="flex place-items-center">
        <p>Links: </p>
        <p className="m-0 max-w-[30ch] text-sm opacity-50 pl-2">
          {Object.keys(details.links).map((key) => (
            <a
              key={key}
              href={details.links[key]}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              {key}{" "}
            </a>
          ))}
        </p>
      </div>
    </div>
  );
}

export default async function Home() {
  const artists = await getData();
  console.log(artists);

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <div className="relative z-[-1] flex flex-col place-items-center">
        <h1 className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert font-mono text-2xl font-bold">
          ⚡️ Container Festival 2024
        </h1>
        <p>
          We are a festival that celebrates the containerization of software
        </p>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        {artists.length > 0
          ? artists.map((artist: any) => Artist({ details: artist }))
          : "No artists found"}
      </div>
    </main>
  );
}
