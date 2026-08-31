import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import { projectsData } from './data/projects'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {projectsData.map((project) => (
        <Route
          key={project.id}
          path={`/project-${project.id}`}
          element={<ProjectDetail project={project} />}
        />
      ))}
    </Routes>
  )
}
