interface MiroEmbedProps {
  boardId: string;
  className?: string;
}

export const MiroEmbed = ({ boardId, className = '' }: MiroEmbedProps) => {
  // Miro embed URL format: https://miro.com/app/embed/{boardId}
  const embedUrl = `https://miro.com/app/embed/${boardId}/?pres=1&frameId=3458764599667749477&embedId=123456789`;

  return (
    <div className={`miro-embed ${className}`.trim()}>
      <div className="miro-embed__frame">
        <iframe
          src={embedUrl}
          className="w-full h-full min-h-[500px] rounded-lg border-0"
          allowFullScreen
          allow="fullscreen; clipboard-read; clipboard-write"
          title="Miro Board"
        />
      </div>
    </div>
  );
};
