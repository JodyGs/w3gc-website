const DATA_HASHTAGS = [
  {
    name: "#Games",
    // url: "https://twitter.com/hashtag/Games",
  },
  {
    name: "#Gamingtools",
    // url: "https://twitter.com/hashtag/Gamingtools",
  },
  {
    name: "#DAO",
    // url: "https://twitter.com/hashtag/DAO",
  },
  {
    name: "#NFT",
    // url: "https://twitter.com/hashtag/NFT",
  },
  {
    name: "#Esporttools",
    // url: "https://twitter.com/hashtag/Esporttools",
  },
];

export default function Hashtag() {
  return (
    <div className="flex flex-wrap items-center">
      {DATA_HASHTAGS.map((hashtag, index) => (
        <p
          key={index}
          // href={hashtag.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 mr-2 cursor-auto rounded-sm bg-custom-red-middle/20 px-2 py-1 font-inter leading-6 text-custom-red-middle hover:bg-custom-pink-middle/30 hover:text-custom-pink-dark"
        >
          {hashtag.name}
        </p>
      ))}
    </div>
  );
}
