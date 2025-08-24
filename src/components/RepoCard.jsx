import { Star, GitFork, Eye } from "lucide-react";

export const RepoCard = ({ repo }) => {
  return (
    <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        <h3 className="text-xl font-bold mb-2">{repo.name}</h3>
        <p className="text-muted-foreground mb-4 h-12 overflow-hidden">{repo.description}</p>
        <div className="flex items-center justify-between text-muted-foreground">
          <div className="flex items-center gap-2">
            <Star size={16} />
            <span>{repo.stargazers_count}</span>
          </div>
          <div className="flex items-center gap-2">
            <GitFork size={16} />
            <span>{repo.forks_count}</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye size={16} />
            <span>{repo.watchers_count}</span>
          </div>
          <span className="text-sm">{repo.language}</span>
        </div>
      </a>
    </div>
  );
};
