import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Trophy, Gift, Calendar, Users, Star, Award, Target, Home } from 'lucide-react';

const PremiumContests: React.FC = () => {
  const contests = [
    {
      id: 'design-excellence',
      title: 'Design Excellence Award 2024',
      description: 'Showcase your architectural masterpiece and win recognition for innovative design concepts. Open to homeowners, architects, and designers.',
      prize: '₹5,00,000 Cash Prize',
      deadline: 'December 31, 2024',
      category: 'Architecture',
      status: 'active',
      icon: Trophy
    },
    {
      id: 'luxury-living',
      title: 'Luxury Living Space Challenge',
      description: 'Transform ordinary spaces into extraordinary living environments. Submit your before-and-after interior design transformations.',
      prize: '₹2,50,000 Interior Makeover Package',
      deadline: 'November 30, 2024',
      category: 'Interior Design',
      status: 'closing-soon',
      icon: Home
    },
    {
      id: 'sustainable-design',
      title: 'Sustainable Design Innovation',
      description: 'Design eco-friendly luxury spaces that blend traditional Indian elements with modern sustainability practices.',
      prize: '₹3,00,000 Green Design Grant',
      deadline: 'January 15, 2025',
      category: 'Sustainability',
      status: 'upcoming',
      icon: Award
    },
    {
      id: 'photography-contest',
      title: 'Architectural Photography Contest',
      description: 'Capture stunning architectural photography of premium properties. Professional judging by industry experts.',
      prize: '₹1,00,000 Photography Equipment',
      deadline: 'Ongoing - Monthly Winners',
      category: 'Photography',
      status: 'active',
      icon: Target
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500 text-white';
      case 'closing-soon':
        return 'bg-yellow-500 text-white';
      case 'upcoming':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Trophy className="w-5 h-5" />
            <span>Premium Contests & Awards</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Showcase Your Excellence
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Participate in our exclusive contests and awards program. 
            Win recognition for your architectural and design achievements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {contests.map((contest, index) => (
            <div key={contest.id} className="premium-card p-8 relative overflow-hidden group hover-lift">
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusBadge(contest.status)}`}>
                  {contest.status === 'active' ? 'Enter Now' : 
                   contest.status === 'closing-soon' ? 'Closing Soon' : 
                   contest.status === 'upcoming' ? 'Coming Soon' : 'Closed'}
                </span>
              </div>
              
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4">
                  <contest.icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3">{contest.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{contest.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <Gift className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <div className="font-semibold text-foreground">{contest.prize}</div>
                        <div className="text-xs text-muted-foreground">Grand Prize</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <div className="font-semibold text-foreground">{contest.deadline}</div>
                        <div className="text-xs text-muted-foreground">Deadline</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <div className="font-semibold text-foreground">{contest.category}</div>
                        <div className="text-xs text-muted-foreground">Category</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-6 border-t border-border/50">
                <div className="text-sm text-muted-foreground">
                  {contest.status === 'active' ? 'Entry Open' : 
                   contest.status === 'closing-soon' ? `${Math.ceil((new Date(contest.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days left` : 
                   contest.status === 'upcoming' ? 'Opens January 15, 2025' : 'Contest Ended'}
                </div>
                
                <Button 
                  variant={contest.status === 'active' ? 'hero' : 'outline'}
                  className="group"
                  disabled={contest.status !== 'active'}
                >
                  {contest.status === 'active' ? 'Enter Contest' : 
                   contest.status === 'closing-soon' ? 'Set Reminder' : 'View Details'}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Star className="w-5 h-5" />
            <span>Why Participate?</span>
          </div>
          <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
            Benefits of Participation
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Industry Recognition',
                description: 'Get noticed by real estate professionals and potential clients.',
                icon: Award
              },
              {
                title: 'Portfolio Enhancement',
                description: 'Add award-winning projects to your professional portfolio.',
                icon: Target
              },
              {
                title: 'Networking Opportunities',
                description: 'Connect with architects, designers, and industry leaders.',
                icon: Users
              }
            ].map((benefit, index) => (
              <div key={index} className="premium-card p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumContests;
