export const Tooltip = ({ children, tooltipText, position }) => {
  if (!tooltipText) return null;

  return (
    <div className='relative inline-block'>
      {children}
      <div
        className='absolute bg-white/90 text-black/80 text-xs whitespace-nowrap rounded py-1 px-2 transition-opacity duration-300 pointer-events-none'
        style={{
          top: position.y,
          left: position.x,
          transform: 'translate(-50%, -100%)',
        }}
      >
        {tooltipText}
      </div>
    </div>
  );
};
