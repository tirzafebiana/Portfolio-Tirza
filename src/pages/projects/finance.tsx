import { FileText, Calculator, Database, RefreshCw, BarChart, Shield } from 'lucide-react';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ImageCarousel from '../../components/ImageCarousel';
import ProjectOverview from '../../components/project/ProjectOverview';
import ProjectSection from '../../components/project/ProjectSection';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import { financeIcon } from '../../assets/project_icons';
import { socialLinks } from '../../config/socialLinks';

const images: string[] = [financeIcon];

const Finance = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        icon={financeIcon}
        title="SPBY & BKU Financial Systems"
        subtitle="Web-based Financial Data Management — BLSDM Komdigi Manado"
        githubUrl={socialLinks.repositories.projectTwo || '#'}
        features={[
          {
            icon: FileText,
            title: "Automated Reporting",
            description: "Generate SPBY and BKU financial reports automatically from input data"
          },
          {
            icon: Calculator,
            title: "Financial Calculations",
            description: "Built-in formulas and calculations for accurate financial processing"
          },
          {
            icon: Database,
            title: "Data Management",
            description: "Structured data entry and management using Google Sheets as backend"
          },
          {
            icon: RefreshCw,
            title: "Process Automation",
            description: "Streamlined administrative workflows reducing manual data entry"
          },
          {
            icon: BarChart,
            title: "Document Tracking",
            description: "Track financial documents and their approval status in real-time"
          },
          {
            icon: Shield,
            title: "Access Control",
            description: "Role-based permissions for secure financial data handling"
          }
        ]}
      />

      <ImageCarousel images={images} projectName="SPBY & BKU Financial Systems" />

      <ProjectSection title="Project Overview">
        <ProjectOverview
          paragraphs={[
            "The SPBY (Surat Permintaan Bayaran) and BKU (Buku Kas Umum) Financial Systems are web-based internal applications developed for BLSDM Komdigi Manado. These systems were created to automate and streamline financial data management, replacing manual spreadsheet-based workflows with efficient digital processes.",
            "Built using Google Apps Script and JavaScript with Google Sheets serving as the backend database, the applications provide a familiar interface while significantly reducing the time and effort required for financial data entry, calculation, and reporting. The integration with Google Workspace allows for seamless collaboration and data accessibility across the organization.",
            "The systems handle the complete lifecycle of financial documents — from initial data entry through approval workflows to final report generation. By automating repetitive tasks and calculations, the applications have substantially reduced manual workload and minimized the risk of human error in financial data processing."
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Technology Stack">
        <TechStack technologies={["Google Apps Script", "JavaScript", "Google Sheets"]} />
      </ProjectSection>

      <ProjectSection title="Technical Highlights">
        <TechnicalHighlights
          highlights={[
            "Built entirely on Google Workspace platform using Google Apps Script for server-side logic",
            "Google Sheets used as a collaborative real-time database with structured data validation",
            "Automated financial calculations and error checking to ensure data accuracy",
            "Custom web interface built with JavaScript and HTML/CSS for intuitive data entry",
            "Document management system with approval workflow tracking",
            "Automated report generation reducing hours of manual work per reporting cycle",
            "Role-based access controls ensuring secure financial data handling"
          ]}
        />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default Finance;