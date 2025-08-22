import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Grid, List, Github, ExternalLink, Star } from "lucide-react";
import ProjectCard from "../ui/ProjectCard";
import Button from "../ui/Button";
import { projects, categories } from "../../data/projects";


const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  const { featuredProjects, otherProjects, filteredProjects } = useMemo(() => {
    if (selectedCategory === "all") {
      const featured = projects.filter((project) => project.featured);
      const others = projects.filter((project) => !project.featured);

      return {
        featuredProjects: featured,
        otherProjects: others,
        filteredProjects: [],
      };
    } else {
      const filtered = projects.filter(
        (project) => project.category === selectedCategory
      );

      return {
        featuredProjects: [],
        otherProjects: [],
        filteredProjects: filtered,
      };
    }
  }, [selectedCategory]);

  const isShowingAll = selectedCategory === "all";

  return (
    <section id="projetos" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-responsive relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-purple to-primary-blue mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Uma seleção dos meus trabalhos mais recentes, mostrando minhas
            habilidades e experiência em desenvolvimento front-end.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`filter-btn ${
                selectedCategory === "all" ? "active" : ""
              }`}
            >
              <Filter size={14} />
              Todos ({projects.length})
            </button>

            {categories.map((category) => {
              const count = projects.filter(
                (p) => p.category === category
              ).length;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`filter-btn ${
                    selectedCategory === category ? "active" : ""
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>

          {!isShowingAll && (
            <div className="flex gap-1 bg-white/5 p-1 rounded-lg backdrop-blur-sm">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-primary-purple text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === "list"
                    ? "bg-primary-purple text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <List size={18} />
              </button>
            </div>
          )}
        </motion.div>

        <AnimatePresence mode="wait">
          {isShowingAll ? (
            <motion.div
              key="all-projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {featuredProjects.length > 0 && (
                <motion.div
                  className="mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-8">
                    <Star className="text-yellow-400 mr-3" size={24} />
                    <h3 className="text-2xl font-semibold text-white">
                      Projetos em Destaque
                    </h3>
                    <div className="flex-1 ml-4 h-px bg-gradient-to-r from-yellow-400/50 to-transparent"></div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project, index) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        variant="featured"
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {otherProjects.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-8">
                    <div className="w-3 h-3 bg-primary-blue rounded-full mr-3"></div>
                    <h3 className="text-2xl font-semibold text-white">
                      Outros Projetos
                    </h3>
                    <div className="flex-1 ml-4 h-px bg-gradient-to-r from-primary-blue/50 to-transparent"></div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherProjects.map((project, index) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        variant="compact"
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center mb-8">
                <div className="w-3 h-3 bg-primary-purple rounded-full mr-3"></div>
                <h3 className="text-2xl font-semibold text-white">
                  {selectedCategory}
                </h3>
                <span className="ml-3 px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full">
                  {filteredProjects.length} projeto
                  {filteredProjects.length !== 1 ? "s" : ""}
                </span>
                <div className="flex-1 ml-4 h-px bg-gradient-to-r from-primary-purple/50 to-transparent"></div>
              </div>

              {filteredProjects.length > 0 ? (
                <div
                  className={
                    viewMode === "grid"
                      ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                      : "space-y-6"
                  }
                >
                  {filteredProjects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                      variant={viewMode === "list" ? "compact" : "default"}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="glass-card p-8 max-w-md mx-auto">
                    <div className="w-16 h-16 bg-gray-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Filter size={24} className="text-gray-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Nenhum projeto encontrado
                    </h4>
                    <p className="text-gray-400 mb-4">
                      Não há projetos nesta categoria ainda.
                    </p>
                    <button
                      onClick={() => setSelectedCategory("all")}
                      className="text-primary-purple hover:text-primary-blue transition-colors duration-300"
                    >
                      ← Voltar para todos os projetos
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Gostou do que viu?
            </h3>
            <p className="text-gray-300 mb-6">
              Tenho mais projetos no meu GitHub e estou sempre trabalhando em
              novas ideias. Vamos criar algo incrível juntos!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                href="https://github.com/filippemonteiro"
                icon={Github}
                iconPosition="right"
              >
                Ver mais no GitHub
              </Button>

              <Button
                variant="secondary"
                onClick={() =>
                  document
                    .getElementById("contato")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                icon={ExternalLink}
                iconPosition="right"
              >
                Vamos trabalhar juntos
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
