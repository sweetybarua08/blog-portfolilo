import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Pager = () => {
  return (
    <div className="flex justify-between items-center mt-12 border-t border-border pt-8">
      <Link to="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
        <ArrowLeft size={20} />
        <span>Previous Post</span>
      </Link>
      <Link to="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
        <span>Next Post</span>
        <ArrowRight size={20} />
      </Link>
    </div>
  );
};
