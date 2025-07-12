import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
  Clock,
  Users,
  Globe,
  Shield,
  Zap,
} from "lucide-react";
import { useForm } from "react-hook-form";

function ContactUs() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        "service_cwxb9h8", // e.g. service_xxxxxx
        "template_igyvrh5", // e.g. template_abcd123
        data,
        "38YhMVSLb4H1FN3Oq" // e.g. Y0urPubl1cK3y
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          reset(); // Clear form
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message.");
        }
      );
    emailjs
      .send(
        "service_cwxb9h8", // e.g. service_xxxxxx
        "template_95g5ywb", // e.g. template_abcd123
        data,
        "38YhMVSLb4H1FN3Oq" // e.g. Y0urPubl1cK3y
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          reset(); // Clear form
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message.");
        }
      );
    reset();
  };
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "support@ilakkanam.in",
      subContent: "We'll get back within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 98765 43210",
      subContent: "Mon-Sat, 10AM-7PM IST",
    },
    {
      icon: MapPin,
      title: "Office",
      content: "Ponneri, Tamil Nadu",
      subContent: "Located near New Bus Stand",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon to Sat - 10AM to 7PM",
      subContent: "Closed on Sundays & Holidays",
    },
  ];

  const features = [
    {
      icon: Users,
      title: "Guided Mentorship",
      description:
        "Hackathon mentorship, student project reviews, and idea support.",
    },
    {
      icon: Globe,
      title: "Modern Tech Stack",
      description: "We work with PHP, MERN, Firebase, and AI integrations.",
    },
    {
      icon: Shield,
      title: "Secure Deployments",
      description: "Trusted domain, SSL, and secure hosting for every client.",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description:
        "We deliver projects on time, with clean code and complete support.",
    },
  ];

  const faqs = [
    {
      question: "What services does Ilakkanam offer?",
      answer:
        "Ilakkanam provides web development (PHP/MERN), hosting, student project guidance, IoT & AI integration, and hackathon mentorship.",
    },
    {
      question: "Do you help students with hackathon or college projects?",
      answer:
        "Yes! We mentor students, help them structure their ideas, guide them technically, and ensure their project is ready to present.",
    },
    {
      question: "Can I request custom features for my website?",
      answer:
        "Absolutely. We tailor all solutions—from e-commerce to personal portfolios—based on your unique requirements.",
    },
    {
      question: "How long does it take to complete a website?",
      answer:
        "Simple websites take 3–5 days. Advanced apps or dashboards may take 2–3 weeks depending on the complexity.",
    },
    {
      question: "Do you provide domain and hosting?",
      answer:
        "Yes. We handle end-to-end deployment including domain registration, SSL setup, and reliable hosting services.",
    },
  ];

  const partners = [
    "Firebase",
    "GitHub",
    "Netlify",
    "GoDaddy",
    "MongoDB",
    "Node.js",
  ];

  return (
    <div className="min-h-screen relative bg-white">
      {/* Hero Section */}
      <div className="relative group bg-white overflow-hidden">
        <div className="absolute h-70 z-10 top-0  w-full   transition-transform duration-500 origin-center scale-x-0 group-hover:scale-x-100 bg-gradient-to-b from-blue-200 via-blue-100/10 to-blue-100/5 pointer-events-none"></div>

        <div className="relative max-w-7xl mt-10 flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:py-20 lg:py-28">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
              Get In{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-purple-900">
                Touch
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Have a project in mind? Whether you're a student, startup, or
              entrepreneur, Ilakkanam is ready to assist you.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white group rounded-2xl p-10 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-700 hover:-translate-y-1"
              >
                <div className="group-hover:animate-pulse flex ">
                  <div className="w-12 h-12 bg-gradient-to-r bg-black rounded-xl flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6  text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-slate-900 font-medium mb-1">
                  {info.content}
                </p>
                <p className="text-sm text-slate-500">{info.subContent}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-16">
        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2  gap-16 mb-20">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-slate-100">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Send us a message
                </h2>
                <p className="text-slate-600 text-lg">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* First Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">
                      First Name *
                    </label>
                    <input
                      type="text"
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 hover:bg-white"
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 hover:bg-white"
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email format",
                      },
                    })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 hover:bg-white"
                    placeholder="john.doe@company.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    {...register("phone", {
                      pattern: {
                        value: /^[0-9+\s()-]*$/,
                        message: "Invalid phone number",
                      },
                    })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 hover:bg-white"
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Subject *
                  </label>
                  <input
                    type="text"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 hover:bg-white"
                    placeholder="How can we help you?"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 hover:bg-white resize-none"
                    placeholder="Tell us about your project and requirements..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Terms & Conditions */}
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    {...register("privacy", {
                      required: "You must accept the terms.",
                    })}
                    className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="privacy" className="text-sm text-slate-600">
                    I agree to the{" "}
                    <span className="text-blue-600 hover:underline cursor-pointer font-medium">
                      Terms of Service
                    </span>{" "}
                    and{" "}
                    <span className="text-blue-600 hover:underline cursor-pointer font-medium">
                      Privacy Policy
                    </span>
                  </label>
                </div>
                {errors.privacy && (
                  <p className="text-red-500 text-sm">
                    {errors.privacy.message}
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-8 lg:flex lg:flex-col lg:justify-between lg:py-10">
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Why Choose Ilakkanam?
              </h3>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-slate-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Empowering Innovation with Ilakkanam
              </h3>
              <p className="text-slate-600 mb-6">
                At Ilakkanam Private Limited, we collaborate with passionate
                learners, startups, and institutions to drive digital
                transformation through cutting-edge solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 rounded-lg p-4 text-center"
                  >
                    <span className="text-slate-600 font-medium">
                      {partner}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 lg:p-12 border border-slate-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Get quick answers to common questions about our company.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 focus:outline-none focus:bg-slate-50 transition-all duration-200"
                >
                  <span className="font-semibold text-slate-900 pr-4 text-lg">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-slate-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-500" />
                    )}
                  </div>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-5 border-t border-slate-100">
                    <p className="text-slate-600 leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
