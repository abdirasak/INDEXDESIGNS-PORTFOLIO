import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
  linkText?: string;
  tags?: string[];
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  (
    { className, imgSrc, title, description, link, linkText = "View Project", tags = [], ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-green/10 bg-dark-2 text-cream shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 hover:border-green/30 hover:shadow-xl hover:shadow-green/5",
          className
        )}
        {...props}
      >
        {/* Image */}
        <div className="aspect-video overflow-hidden">
          <img
            src={imgSrc}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-syne font-semibold uppercase tracking-wider border border-green/20 text-green/70 px-2 py-0.5 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h3 className="font-lora font-bold text-xl text-cream transition-colors duration-300 group-hover:text-green">
            {title}
          </h3>
          <p className="mt-3 flex-1 text-cream-dim text-sm leading-relaxed font-dm">
            {description}
          </p>

          {/* CTA */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn mt-5 pt-5 border-t border-green/10 inline-flex items-center gap-2 text-sm font-syne font-semibold text-green transition-all duration-300 hover:gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            {linkText}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </a>
        </div>
      </div>
    );
  }
);
ProjectCard.displayName = "ProjectCard";

export { ProjectCard };
