const Progress = ({ value = 0, className = '' }) => (
  <div className={`relative h-4 w-full overflow-hidden rounded-full bg-gray-200 ${className}`}>
    <div 
      className="h-full w-full flex-1 bg-blue-600 transition-all"
      style={{ transform: `translateX(-${100 - value}%)` }}
    />
  </div>
);

export default Progress;

