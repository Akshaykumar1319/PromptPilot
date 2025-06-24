import React from 'react';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">Prompt Pilot</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
              <a href="#benefits" className="text-gray-600 hover:text-primary transition-colors">Benefits</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
              <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Master Your AI Prompts with
              <span className="block mt-2 text-primary">Intelligent Engineering</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Create, optimize, and manage your AI prompts with our powerful platform. 
              Get better results and boost your productivity with smart prompt engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-white rounded-lg text-lg font-medium hover:bg-primary-dark transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors">
                Schedule Demo
              </button>
            </div>
            <div className="mt-10 flex justify-center space-x-8 text-gray-600">
              <span className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Free 14-day trial
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                No credit card required
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern AI Workflows
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to create, manage, and optimize your AI prompts in one powerful platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Prompt Library",
                description: "Organize and categorize your prompts with intelligent tagging and search capabilities."
              },
              {
                title: "Version Control",
                description: "Track changes, compare versions, and maintain a complete history of your prompts."
              },
              {
                title: "Performance Analytics",
                description: "Measure prompt effectiveness with detailed analytics and insights."
              },
              {
                title: "Team Collaboration",
                description: "Work together seamlessly with real-time collaboration features."
              },
              {
                title: "AI Model Integration",
                description: "Connect with popular AI models and platforms effortlessly."
              },
              {
                title: "Template Builder",
                description: "Create reusable prompt templates with dynamic variables."
              }
            ].map((feature, index) => (
              <div key={index} 
                className="p-8 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="h-12 w-12 rounded-lg bg-primary/10 mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50" id="benefits">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Prompt Pilot?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the benefits of professional prompt engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Boost Productivity",
                description: "Save hours of time with our streamlined prompt management system."
              },
              {
                title: "Improve Results",
                description: "Get better responses from AI models with optimized prompts."
              },
              {
                title: "Scale Operations",
                description: "Easily manage thousands of prompts across multiple projects."
              },
              {
                title: "Reduce Costs",
                description: "Optimize token usage and reduce API costs with efficient prompts."
              }
            ].map((benefit, index) => (
              <div key={index} className="flex gap-6">
                <div className="w-12 h-12 flex-shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-semibold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that best fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "29",
                features: [
                  "100 prompts/month",
                  "Basic analytics",
                  "Email support",
                  "1 user"
                ]
              },
              {
                name: "Professional",
                price: "79",
                features: [
                  "Unlimited prompts",
                  "Advanced analytics",
                  "Priority support",
                  "5 team members",
                  "API access",
                  "Custom templates"
                ]
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: [
                  "Everything in Pro",
                  "Unlimited team members",
                  "24/7 support",
                  "Custom integration",
                  "SLA guarantee",
                  "Dedicated success manager"
                ]
              }
            ].map((plan, index) => (
              <div key={index} 
                className={`rounded-xl p-8 ${
                  index === 1 
                    ? 'bg-primary text-white ring-4 ring-primary/20' 
                    : 'bg-gray-50'
                }`}
              >
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">
                  {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
                  {plan.price !== "Custom" && <span className="text-lg opacity-75">/mo</span>}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className={`h-5 w-5 mr-3 ${index === 1 ? 'text-white' : 'text-primary'}`} 
                        fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  index === 1 
                    ? 'bg-white text-primary hover:bg-gray-100' 
                    : 'bg-primary text-white hover:bg-primary-dark'
                }`}>
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Prompt Pilot</h3>
              <p className="text-gray-400">Empowering your AI interactions with smart prompt engineering.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 Prompt Pilot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;