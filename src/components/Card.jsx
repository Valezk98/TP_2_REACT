
export default function Card({ game }) {
  return (
    <article className="bg-surface-container-high rounded-xl border border-outline-variant overflow-hidden group hover:-translate-y-2 hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all duration-300 cursor-pointer flex flex-col">
      <div className="relative aspect-video overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src={game.image}
          alt={game.name}
        />
      </div>
      <div className="p-md flex-1 flex flex-col">
        <div className="flex gap-2 mb-sm flex-wrap">
          <span className="bg-primary-container/10 text-primary px-2 py-0.5 rounded-full text-xs font-label-sm border border-primary-container/20">
            {game.genre.toUpperCase()}
          </span>
          <span className="bg-primary-container/10 text-primary px-2 py-0.5 rounded-full text-xs font-label-sm border border-primary-container/20">
            {game.platform.toUpperCase()}
          </span>
        </div>
        <h3 className="font-bold text-lg mb-xs text-on-surface group-hover:text-primary transition-colors">
          {game.name}
        </h3>
        <p className="text-on-surface-variant text-sm line-clamp-2 mt-auto">
          {game.description}
        </p>
      </div>
    </article>
  );
}