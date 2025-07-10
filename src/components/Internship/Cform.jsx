import React, { useState } from "react";
import {
  Upload,
  Send,
  Users,
  TrendingUp,
  Award,
  ChevronLeft,
  ChevronRight,
  Quote,
  Building2,
} from "lucide-react";
import useScrollAnimation from "../../scrollanimation";
import styles from "../../css/Internship.module.css";

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
    resume: null,
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Frontend Developer",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b9a72d2a?w=80&h=80&fit=crop&crop=face",
      quote:
        "Ilakkanam's mentorship program accelerated my growth beyond expectations. The collaborative environment fosters both innovation and personal development.",
    },
    {
      name: "Marcus Rodriguez",
      role: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      quote:
        "The learning-driven culture here is exceptional. Every project presents opportunities to explore cutting-edge technologies and methodologies.",
    },
    {
      name: "Priya Patel",
      role: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
      quote:
        "What distinguishes Ilakkanam is the genuine investment in employee growth. The mentorship I received fundamentally shaped my career trajectory.",
    },
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Flexible Culture",
      description:
        "Work-life balance with remote options and flexible hours that adapt to your professional needs.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Learning-Driven Environment",
      description:
        "Continuous learning opportunities, conference attendance, and comprehensive skill development programs.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Mentorship & Growth",
      description:
        "Personalized mentorship programs with clear career progression pathways and leadership development.",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes

    if (file && file.size > maxSize) {
      alert("File size should be less than 5MB.");
      e.target.value = null; // Reset the input
      return;
    }

    setFormData((prev) => ({
      ...prev,
      resume: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Application submitted successfully!");
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const [ref, isVisible] = useScrollAnimation();

  const [ref1, isVisible1] = useScrollAnimation();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Building2 className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Join <span className="text-blue-600">Ilakkanam</span>
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We're seeking talented professionals to join our innovative team.
            Discover opportunities that align with your career aspirations.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Application Form */}
          <div className="order-2 lg:order-1">
            <div ref={ref} className={` ${isVisible ? styles['career-form-animation-show'] : styles['career-form-animation']} bg-white rounded-lg shadow-lg border border-gray-200 p-8`}>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Submit Your Application
                </h2>
                <p className="text-gray-600">
                  Fill out the form below to apply for a position at Ilakkanam.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Role Interested In *
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    required
                  >
                    <option value="">Select a position</option>
                    <option value="frontend">Frontend Developer</option>
                    <option value="backend">Backend Developer</option>
                    <option value="fullstack">Full Stack Developer</option>
                    <option value="ui-ux">UI/UX Designer</option>
                    <option value="data-scientist">Data Scientist</option>
                    <option value="product-manager">Product Manager</option>
                    <option value="devops">DevOps Engineer</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Resume Upload *
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      id="resume-upload"
                      required
                    />
                    <label
                      htmlFor="resume-upload"
                      className="flex items-center justify-center w-full px-4 py-6 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
                    >
                      <div className="text-center">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 font-medium">
                          {formData.resume
                            ? formData.resume.name
                            : "Click to upload your resume"}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          PDF, DOC, or DOCX (Max 5MB)
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Cover Letter / Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Tell us about yourself and why you're interested in this position..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Submit Application
                </button>
              </form>
            </div>
          </div>

          {/* Right Side - Company Information */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Why Work at Ilakkanam */}
            <div ref={ref1} className={`${isVisible1 ? styles['side-animation-show'] : styles['side-animation']}  bg-gray-50 rounded-lg p-8 border border-gray-200`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Work at Ilakkanam?
              </h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-blue-600">{benefit.icon}</div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Testimonials */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What Our Team Says
              </h3>

              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>

                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentTestimonial
                            ? "bg-blue-600"
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <div className="text-center">
                  <Quote className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                    />
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationForm;
