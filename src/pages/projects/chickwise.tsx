import { Thermometer, Droplets, Radio, Cloud, AlertTriangle, Cpu } from 'lucide-react';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ImageCarousel from '../../components/ImageCarousel';
import ProjectOverview from '../../components/project/ProjectOverview';
import ProjectSection from '../../components/project/ProjectSection';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import { chickwiseIcon } from '../../assets/project_icons';
import { socialLinks } from '../../config/socialLinks';

const images: string[] = [chickwiseIcon];

const ChickWise = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        icon={chickwiseIcon}
        title="ChickWise"
        subtitle="IoT Smart Poultry Environmental Monitoring System"
        githubUrl={socialLinks.repositories.projectThree || '#'}
        features={[
          {
            icon: Thermometer,
            title: "Temperature Monitoring",
            description: "Real-time temperature tracking using DHT22 sensor for optimal poultry conditions"
          },
          {
            icon: Droplets,
            title: "Humidity Sensing",
            description: "Continuous humidity monitoring to maintain ideal brooding environment"
          },
          {
            icon: AlertTriangle,
            title: "Ammonia Detection",
            description: "MQ135 gas sensor monitoring ammonia levels for air quality management"
          },
          {
            icon: Radio,
            title: "ESP32 Connectivity",
            description: "Wi-Fi enabled microcontroller for wireless data transmission to the cloud"
          },
          {
            icon: Cloud,
            title: "Cloud Dashboard",
            description: "ThingsBoard Cloud for real-time data visualization and historical analysis"
          },
          {
            icon: Cpu,
            title: "IoT Integration",
            description: "End-to-end IoT system from sensor data collection to cloud analytics"
          }
        ]}
      />

      <ImageCarousel images={images} projectName="ChickWise" />

      <ProjectSection title="Project Overview">
        <ProjectOverview
          paragraphs={[
            "ChickWise is an IoT-based environmental monitoring system designed for poultry farms, developed as a team project during the MSIB Independent Study program. The system addresses the critical need for maintaining optimal environmental conditions in poultry housing, which directly impacts bird health, growth rates, and overall farm productivity.",
            "The system uses an ESP32 microcontroller equipped with DHT22 temperature and humidity sensors, along with an MQ135 gas sensor for ammonia detection. These sensors continuously monitor the poultry house environment and transmit data wirelessly to the ThingsBoard Cloud platform for real-time visualization and analysis.",
            "By providing farmers with real-time environmental data and historical trends, ChickWise enables proactive management of poultry housing conditions. Early detection of environmental issues such as temperature spikes, humidity imbalances, or dangerous ammonia levels allows for timely interventions, reducing mortality rates and improving overall flock health."
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Technology Stack">
        <TechStack technologies={["ESP32", "DHT22", "MQ135", "C++", "ThingsBoard Cloud"]} />
      </ProjectSection>

      <ProjectSection title="Technical Highlights">
        <TechnicalHighlights
          highlights={[
            "End-to-end IoT system from sensor data acquisition to cloud-based visualization",
            "ESP32 microcontroller with Wi-Fi connectivity for wireless data transmission",
            "DHT22 sensor providing accurate temperature (±0.5°C) and humidity (±2%) readings",
            "MQ135 gas sensor for real-time ammonia level detection in poultry housing",
            "ThingsBoard Cloud dashboard for real-time monitoring and historical data analysis",
            "Team project completed remotely during MSIB Independent Study program",
            "Low-cost, scalable solution suitable for small to medium poultry farms"
          ]}
        />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default ChickWise;