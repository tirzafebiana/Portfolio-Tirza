import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import awsCloudFoundationsBadge from '../../assets/badges/digitalent.jpeg';
import awsCloudPractitionerBadge from '../../assets/badges/myskill.jpeg';
import citiLogo from '../../assets/badges/kemnaker.png';
import kmlogo from '../../assets/badges/km.jpeg';

const Certifications = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const badges = [
    {
      id: 'aws-cloud-foundations',
      image: awsCloudFoundationsBadge,
      alt: 'Assistent Web Developer Badge',
      title: 'Assistent Web Developer',
      subtitle: 'Digitalent Scolarship 2026',
      credentialUrl: 'https://drive.google.com/file/d/17B4zZJxZtL7XPiuztdSpK2Reca7rhF7U/view?usp=sharing',
      status: 'completed'
    },
    {
      id: 'aws-cloud-practitioner',
      image: awsCloudPractitionerBadge,
      alt: 'Internet Of Things Development Badge',
      title: 'Internet Of Things Development',
      subtitle: 'MSIB - Myskill 2024',
      credentialUrl: 'https://drive.google.com/file/d/1V74QE4tiubL5CbqPwkMt1D5Fy50lAMCr/view?usp=sharing',
      status: 'completed'
    }
  ];

  const credentials = [
    {
      id: 'citi-human-subjects',
      image: citiLogo,
      alt: 'CITI Program Logo',
      title: 'Programmer',
      subtitle: 'Maganghub Kemnaker RI 2026',
      issuer: 'CITI Program',
      issued: 'Sep 2023',
      expires: 'Sep 2026',
      credentialId: '00000000',
      credentialUrl: 'https://drive.google.com/file/d/1MlGECO0ECfvuJgsZ1HYIxwVqg5dsgdvi/view?usp=drive_link',
      status: 'completed'
    },
    {
      id: 'citi-human-subjects',
      image: kmlogo,
      alt: 'KM Logo',
      title: 'Quaality Assurance',
      subtitle: 'MSIB - KEMDIKBUD 2023',
      issuer: 'MSIB - KEMDIKBUD 2023',
      issued: 'Sep 2023',
      expires: 'Sep 2026',
      credentialId: '00000000',
      credentialUrl: 'https://drive.google.com/file/d/1uqE82darH0ryCNI5v-8h5dzXa6KGuIoe/view?usp=drive_link',
      status: 'completed'
    },
  ];

  return (
    <section id="certifications" className="py-8 relative" style={{
      background: themeColors.background.sections?.certifications || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2 className="text-4xl font-bold text-center mb-6" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>Certifications & Credentials</h2>

        <div className="max-w-6xl mx-auto">
          {/* AWS Certifications */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {badges.map((badge) => {
              const BadgeComponent = () => (
                <div className="flex flex-col items-center group">
                  <div className="mb-4">
                    <img
                      src={badge.image}
                      alt={badge.alt}
                      className="w-32 h-32 md:w-40 md:h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      width="160"
                      height="160"
                      sizes="(max-width: 768px) 128px, 160px"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium mb-2" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500] }}>
                    {badge.title}
                  </h3>
                  <p className="text-center text-sm" style={{ color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[600] }}>
                    {badge.subtitle || (badge.status === 'in-progress' ? 'In Progress!' : '')}
                  </p>
                </div>
              );

              return badge.credentialUrl ? (
                <a
                  key={badge.id}
                  href={badge.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none"
                  style={{ outline: 'none' }}
                  onFocus={(e) => e.currentTarget.blur()}
                  aria-label={`View ${badge.title} credential`}
                >
                  <BadgeComponent />
                </a>
              ) : (
                <div key={badge.id} className="block">
                  <BadgeComponent />
                </div>
              );
            })}
          </div>

          {/* CITI Program Certifications */}
          <div className="flex flex-wrap justify-center gap-8">
            {credentials.map((credential) => {
              const BadgeComponent = () => (
                <div className="flex flex-col items-center group">
                  <div className="mb-4">
                    <img
                      src={credential.image}
                      alt={credential.alt}
                      className="w-32 h-32 md:w-40 md:h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      width="160"
                      height="160"
                      sizes="(max-width: 768px) 128px, 160px"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium mb-2" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500] }}>
                    {credential.title}
                  </h3>
                  <p className="text-center text-sm" style={{ color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[600] }}>
                    {credential.subtitle || (credential.status === 'in-progress' ? 'In Progress!' : '')}
                  </p>
                </div>
              );

              return credential.credentialUrl ? (
                <a
                  key={credential.id}
                  href={credential.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none"
                  style={{ outline: 'none' }}
                  onFocus={(e) => e.currentTarget.blur()}
                  aria-label={`View ${credential.title} credential`}
                >
                  <BadgeComponent />
                </a>
              ) : (
                <div key={credential.id} className="block">
                  <BadgeComponent />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Bottom gradient overlay for smooth transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.pink[25]} 100%)`,
          zIndex: 1
        }}
      />
    </section>
  );
};

export default Certifications;