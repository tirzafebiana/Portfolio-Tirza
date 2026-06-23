import { Globe, Users, Calendar, BookOpen, Image, MessagesSquare } from 'lucide-react';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ImageCarousel from '../../components/ImageCarousel';
import ProjectOverview from '../../components/project/ProjectOverview';
import ProjectSection from '../../components/project/ProjectSection';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import { euroIcon } from '../../assets/project_icons';
import { socialLinks } from '../../config/socialLinks';

const images: string[] = [euroIcon];

const Ukmeuro = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        icon={euroIcon}
        title="UKM Edukasi Robotika"
        subtitle="Robotics Education Organization Website — Universitas Sam Ratulangi"
        githubUrl={socialLinks.repositories.projectFour || '#'}
        features={[
          {
            icon: Globe,
            title: "Organization Profile",
            description: "Showcase the student organization's mission, vision, and activities"
          },
          {
            icon: Calendar,
            title: "Events & Activities",
            description: "Display upcoming and past robotics events, workshops, and competitions"
          },
          {
            icon: BookOpen,
            title: "Educational Content",
            description: "Share robotics learning resources and project documentation"
          },
          {
            icon: Users,
            title: "Member Showcase",
            description: "Highlight organization members and their contributions to robotics projects"
          },
          {
            icon: Image,
            title: "Project Gallery",
            description: "Visual portfolio of robotics projects and achievements"
          },
          {
            icon: MessagesSquare,
            title: "Contact & Engagement",
            description: "Provide channels for prospective members to connect with the organization"
          }
        ]}
      />

      <ImageCarousel images={images} projectName="UKM Edukasi Robotika" />

      <ProjectSection title="Project Overview">
        <ProjectOverview
          paragraphs={[
            "UKM Edukasi Robotika (Robotics Education Student Organization) is a website developed for the robotics student organization at Universitas Sam Ratulangi. The website serves as an informational portal to showcase the organization's activities, events, robotics projects, and provide resources for members and prospective students interested in robotics.",
            "Built using foundational web technologies — HTML, CSS, and JavaScript — the website delivers a clean, responsive experience that effectively communicates the organization's mission and achievements. The project was created as a portfolio piece for the organization to establish its online presence and attract new members.",
            "The website features sections for organizational information, event listings, project portfolios, and member resources. By providing a central hub for all organizational information, the website helps streamline communication and increase visibility for the robotics education program on campus."
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Technology Stack">
        <TechStack technologies={["HTML", "CSS", "JavaScript"]} />
      </ProjectSection>

      <ProjectSection title="Technical Highlights">
        <TechnicalHighlights
          highlights={[
            "Responsive web design ensuring optimal viewing across desktop and mobile devices",
            "Clean and accessible HTML5 semantic markup structure",
            "Modern CSS with Flexbox/Grid for flexible page layouts",
            "Interactive JavaScript components for enhanced user experience",
            "Organization profile and branding integrated throughout the design",
            "Portfolio project establishing online presence for the robotics student organization"
          ]}
        />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default Ukmeuro;