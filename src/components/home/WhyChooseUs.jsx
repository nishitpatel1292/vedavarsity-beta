import { Lightbulb, Infinity, Radar, Headphones, DollarSign, CheckCircle, Users } from 'lucide-react'; // or any icon library you prefer
import SectionTitle from '../shared/SectionTitle';

const features = [
  {
    title: 'Authentic Vedic Knowledge',
    description: 'Rooted in the teachings of Srila Prabhupada.',
    icon: Lightbulb
  },
  {
    title: 'Expert Teachers',
    description: 'From the Gaudiya Vaishnava tradition.',
    icon: Infinity
  },
  {
    title: 'Flexible Online Courses',
    description: 'You can take anytime, anywhere.',
    icon: Headphones
  },
  {
    title: 'Affordable Fees',
    description: 'For high-quality spiritual education.',
    icon: DollarSign // You can replace this with your preferred icon
  },
  {
    title: 'Certified Programs',
    description: 'To support your growth and service.',
    icon: CheckCircle // Replace with appropriate icon if needed
  },
  {
    title: 'Community of Seekers',
    description: 'Walking the path of devotion together.',
    icon: Users // Replace with an icon that reflects community
  }
];

export default function WhyChooseUs() {
  return (
    <section
      className="relative bg-cover bg-center py-20 text-white z-0"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')"
      }}>
      <div className="absolute inset-0 bg-[#264559]/70 z-10"></div>

      <div className="relative z-30 container mx-auto px-4 text-center">
        <SectionTitle title="WHY CHOOSE US" background={'dark'}/>
        {/* <h2 className="text-4xl font-bold mb-2"></h2> */}
        <p className="mb-12 text-lg">The top reasons for you to join us</p>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 justify-items-center items-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-white p-6 text-green-500">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

