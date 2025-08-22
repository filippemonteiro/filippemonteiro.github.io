import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, ArrowRight } from "lucide-react";
import Button from "./Button";

const ProjectCard = ({ project, index = 0, variant = "default" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const cardVariants = {
    default: "glass-card p-6 h-full",
    featured: "glass-card p-8 h-full border-2 border-primary-purple/30",
    compact: "glass-card p-4 h-full",
  };

  const cardAnimation = {
    initial: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 },
    },
  };

  const ImagePlaceholder = () => (
    <div className="w-full h-48 bg-gradient-to-br from-primary-purple/20 to-primary-blue/20 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
          <Eye size={24} className="text-white/60" />
        </div>
        <p className="text-white/60 text-sm">Preview em breve</p>
      </div>
    </div>
  );

  return (
    <motion.article
      className={`${cardVariants[variant]} relative overflow-hidden`}
      variants={cardAnimation}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {(project.status || project.featured || project.year) && (
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-2 flex-wrap">
            {project.status && (
              <span
                className={`
                px-3 py-1 rounded-full text-xs font-medium z-10 relative
                ${
                  project.status === "completed"
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : project.status === "in-progress"
                    ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                    : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                }
              `}
              >
                {project.status === "completed"
                  ? "Concluído"
                  : project.status === "in-progress"
                  ? "Em andamento"
                  : "Planejamento"}
              </span>
            )}

            {project.featured && (
              <span className="px-2 py-1 bg-primary-purple/20 text-primary-purple text-xs rounded-full border border-primary-purple/30">
                Destaque
              </span>
            )}
          </div>

          {project.year && (
            <span className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-xs font-medium flex-shrink-0">
              {project.year}
            </span>
          )}
        </div>
      )}

      <div className="relative mb-6 overflow-hidden rounded-lg">
        {!imageError && project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <ImagePlaceholder />
        )}

        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-3 opacity-0 hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          {project.demoUrl && (
            <Button
              variant="glass"
              size="sm"
              href={project.demoUrl}
              icon={ExternalLink}
            >
              Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="glass"
              size="sm"
              href={project.githubUrl}
              icon={Github}
            >
              Código
            </Button>
          )}
        </motion.div>
      </div>

      <div className="flex-1 flex flex-col">
        {project.category && (
          <span className="text-primary-purple text-sm font-medium mb-2">
            {project.category}
          </span>
        )}

        <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
          {project.title}
        </h3>

        {project.subtitle && (
          <p className="text-gray-300 text-sm mb-3">{project.subtitle}</p>
        )}

        <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        {project.technologies && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span
                key={tech}
                className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-md">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        )}

        <div className="flex gap-2 mt-auto">
          {project.demoUrl && (
            <Button
              variant="primary"
              size="sm"
              href={project.demoUrl}
              icon={ExternalLink}
              iconPosition="right"
              className="flex-1"
            >
              Ver projeto
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="secondary"
              size="sm"
              href={project.githubUrl}
              icon={Github}
              className="px-3"
            ></Button>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
