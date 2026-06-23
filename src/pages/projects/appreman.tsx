import { Clock, MapPin, Users, Smartphone, Bell } from 'lucide-react';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ImageCarousel from '../../components/ImageCarousel';
import ProjectOverview from '../../components/project/ProjectOverview';
import ProjectSection from '../../components/project/ProjectSection';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import { appremanIcon } from '../../assets/project_icons';
import { socialLinks } from '../../config/socialLinks';

const images: string[] = [appremanIcon];

const Appreman = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        icon={appremanIcon}
        title="Appreman"
        subtitle="Internship Attendance Mobile App — BLSDM Komdigi Manado"
        githubUrl={socialLinks.repositories.projectOne || '#'}
        features={[
          {
            icon: Smartphone,
            title: "Check-in / Check-out",
            description: "Mobile-based attendance recording with timestamp and location verification"
          },
          {
            icon: Users,
            title: "Role-based Access",
            description: "Separate interfaces for interns and coordinators with appropriate permissions"
          },
          {
            icon: Bell,
            title: "Real-time Monitoring",
            description: "Coordinator dashboard for live attendance tracking and notifications"
          },
          {
            icon: Clock,
            title: "Automated Reporting",
            description: "Generate attendance reports and summaries automatically"
          },
          {
            icon: MapPin,
            title: "Location Verification",
            description: "GPS-based check-in to ensure attendance within designated area"
          }
        ]}
      />

      <ImageCarousel images={images} projectName="Appreman" />

      <ProjectSection title="Project Overview">
        <ProjectOverview
          paragraphs={[
            "Appreman is a mobile-based attendance system developed for the internship program at BLSDM Komdigi Manado. The application was built to address the inefficiencies of the traditional paper-based attendance method, providing a modern digital solution that streamlines the entire check-in and check-out process.",
            "Built with Flutter for the frontend mobile application and Laravel for the REST API backend, Appreman offers a seamless cross-platform experience. The system uses MySQL for robust data storage, ensuring reliable record-keeping of all attendance data.",
            "The application features real-time monitoring capabilities that allow coordinators to track intern attendance as it happens. Automated reporting simplifies administrative tasks, while role-based access control ensures that interns and coordinators each have appropriate levels of functionality and data visibility."
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Technology Stack">
        <TechStack technologies={["Flutter", "Laravel", "MySQL"]} />
      </ProjectSection>

      <ProjectSection title="Technical Highlights">
        <TechnicalHighlights
          highlights={[
            "Replaced manual paper-based attendance system with a fully digital solution",
            "Cross-platform mobile application built with Flutter for Android and iOS",
            "RESTful API backend using Laravel with secure authentication and authorization",
            "Real-time attendance monitoring dashboard for program coordinators",
            "Automated report generation reducing administrative workload",
            "Location-based verification for accurate attendance tracking",
            "Role-based access control with distinct intern and coordinator interfaces"
          ]}
        />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default Appreman;