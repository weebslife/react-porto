import { Eye, Github } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectButton = ({ url, type, delay }) => {
  const isPreview = type === 'preview';
  const icon = isPreview ? <Eye /> : <Github />;
  const text = isPreview ? 'Preview' : 'Source Code';

  const baseStyles = `
    flex items-center justify-center gap-2 px-8 py-3 rounded-full 
    transition-colors opacity-0 animate-slideUpContent
  `;

  const activeStyles = isPreview 
    ? 'bg-blue-600 text-white hover:bg-blue-800 max-sm:w-full'
    : 'border border-blue-600 text-blue-600 dark:text-white hover:bg-blue-700 hover:text-white dark:hover:bg-blue-600 max-sm:w-full';

  const disabledStyles = isPreview
    ? 'bg-blue-900 text-gray-200 max-sm:w-full'
    : 'border border-gray-400 text-gray-400 max-sm:w-full';

  if (!url) {
    return (
      <button 
        disabled
        className={`${baseStyles} ${disabledStyles} cursor-not-allowed`}
        style={{ animationDelay: delay }}
      >
        {text} {icon}
      </button>
    );
  }

  return (
    <Link 
      target='_blank'
      to={url}
      className={`${baseStyles} ${activeStyles}`}
      style={{ animationDelay: delay }}
    >
      {text} {icon}
    </Link>
  );
};

export default ProjectButton;