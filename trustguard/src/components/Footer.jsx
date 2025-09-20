// import { Shield } from 'lucide-react';
// import { Link } from 'react-router-dom'; 
// import { SiX, SiLinkedin, SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si';

// const socialLinks = [
//   { name: 'X', href: 'https://x.com/trustguard', label: 'Follow us on X', Icon: SiX, color: 'text-gray-800' },
//   { name: 'LinkedIn', href: 'https://linkedin.com/company/trustguard', label: 'Connect on LinkedIn', Icon: SiLinkedin, color: 'text-blue-700' },
//   { name: 'Facebook', href: 'https://facebook.com/trustguard', label: 'Like us on Facebook', Icon: SiFacebook, color: 'text-blue-600' },
//   { name: 'Instagram', href: 'https://instagram.com/trustguard', label: 'Follow us on Instagram', Icon: SiInstagram, color: 'text-pink-600' },
//   { name: 'YouTube', href: 'https://youtube.com/trustguard', label: 'Subscribe to our YouTube channel', Icon: SiYoutube, color: 'text-red-600' },
// ];

// const footerSections = [
//   {
//     title: 'Product',
//     links: [
//       { text: 'How It Works', href: '#' }, { text: 'AI Technology', href: '#' }, { text: 'Trust Scoring', href: '#' }, { text: 'Source Verification', href: '#' }, { text: 'API Access', href: '#' }
//     ]
//   },
//   {
//     title: 'Resources',
//     links: [
//       { text: 'Education Center', href: '#' }, { text: 'Fact-Checking Guide', href: '#' }, { text: 'Research Papers', href: '#' }, { text: 'Blog', href: '#' }, { text: 'Help Center', href: '#' }
//     ]
//   },
//   {
//     title: 'Company',
//     links: [
//       { text: 'About Us', href: '/about' }, { text: 'Our Mission', href: '#' }, { text: 'Careers', href: '#' }, { text: 'Contact', href: '/contact' }, { text: 'Press Kit', href: '#' }
//     ]
//   }
// ];

// const FooterLinkColumn = ({ title, links }) => (
//   <div className="min-w-[150px]">
//     <h4 className="font-semibold text-white mb-4">{title}</h4>
//     <ul className="space-y-2">
//       {links.map((link) => (
//         <li key={link.text}>
//           <Link to={link.href} className="text-gray-200 hover:text-purple-300 transition-colors text-sm break-words">{link.text}</Link>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-r from-black via-purple-900 to-purple-700 border-t">
//       <div className="container mx-auto px-4 py-10">
//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {/* Brand Section */}
//           <div className="space-y-4">
//             <div className="flex items-center gap-2">
//               <div className="p-2 bg-blue-100 rounded-xl neon-blue-glow">
//                 <Shield className="h-6 w-6 text-blue-600" />
//               </div>
//               <h3 className="font-semibold text-lg text-white">TrustGuard</h3>
//             </div>
//             <p className="text-gray-200 text-sm leading-relaxed">
//               Empowering informed decisions through AI-powered content verification and misinformation detection.
//             </p>
//             <div className="flex gap-3 flex-wrap">
//               {socialLinks.map(({ href, label, Icon, color }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-2 hover:bg-purple-800 rounded neon-hover transition-colors"
//                   aria-label={label}
//                 >
//                   <Icon className={`h-4 w-4 ${color}`} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Footer Link Columns - ensure text is visible and spacing is good */}
//           {footerSections.map((section) => (
//             <FooterLinkColumn 
//               key={section.title} 
//               title={section.title} 
//               links={section.links} 
//             />
//           ))}
//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-purple-800 mt-10 pt-6">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-gray-200 justify-center md:justify-start">
//               <a href="#" className="hover:text-purple-300 transition-colors">Privacy Policy</a>
//               <a href="#" className="hover:text-purple-300 transition-colors">Terms of Service</a>
//               <a href="#" className="hover:text-purple-300 transition-colors">Cookie Policy</a>
//               <a href="#" className="hover:text-purple-300 transition-colors">Accessibility</a>
//             </div>
//             <div className="text-sm text-gray-200 text-center md:text-right">
//               © 2025 TrustGuard. All rights reserved.
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const footerSections = [
  {
    title: 'Product',
    links: [
      { text: 'How It Works', href: '/how-it-works' },
      { text: 'Features', href: '#features' },
      { text: 'Methodology', href: '#methodology' },
      { text: 'Documentation', href: '#docs' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { text: 'Learn About Misinformation', href: '/learn' },
      { text: 'Research Papers', href: '#research' },
      { text: 'Best Practices', href: '#practices' },
      { text: 'FAQ', href: '#faq' }
    ]
  },
  {
    title: 'Company',
    links: [
      { text: 'About', href: '/about' },
      { text: 'Team', href: '#team' },
      { text: 'Contact', href: '/contact' },
      { text: 'Careers', href: '#careers' }
    ]
  }
];

const FooterLinkColumn = ({ title, links }) => (
  <div className="space-y-4">
    <h4 className="font-semibold text-gray-900">{title}</h4>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.text}>
          <Link 
            to={link.href} 
            className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">TrustGuard</h3>
                <span className="text-xs text-blue-600 font-medium">PROTOTYPE</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              AI-powered content verification prototype for detecting misinformation 
              and analyzing source credibility.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="GitHub Repository"
              >
                <SiGithub className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <SiLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Footer Link Columns */}
          {footerSections.map((section) => (
            <FooterLinkColumn 
              key={section.title} 
              title={section.title} 
              links={section.links} 
            />
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-700 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-700 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-gray-700 transition-colors">
                Disclaimer
              </a>
            </div>
            <div className="text-sm text-gray-500">
              © 2025 TrustGuard Prototype. Educational purposes only.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
