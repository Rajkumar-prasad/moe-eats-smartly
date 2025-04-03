
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-moes-cream to-white dark:from-moes-brown/90 dark:to-gray-900">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h1>
          
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>
                We'd love to hear from you. Reach out with any questions, feedback, or suggestions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-6">
                <p className="text-muted-foreground">
                  Have a question or feedback about our Nutrition Calculator? We're here to help! 
                  Please feel free to reach out to our team using the contact information below.
                </p>
                
                <div className="flex items-center gap-2 mt-2">
                  <Mail className="h-5 w-5 text-moes-red" />
                  <a 
                    href="mailto:contact@moesnutritioncalculator.online" 
                    className="text-foreground hover:text-moes-red transition-colors"
                  >
                    contact@moesnutritioncalculator.online
                  </a>
                </div>
                
                <div className="border-t border-border/50 pt-6 mt-2">
                  <h3 className="font-semibold text-lg mb-3">Response Time</h3>
                  <p className="text-muted-foreground">
                    We strive to respond to all inquiries within 24-48 hours during business days. 
                    Thank you for your patience and for using Moe's Nutrition Calculator.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
