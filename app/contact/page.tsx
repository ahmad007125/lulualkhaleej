"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=26.4613994,50.022094&z=18&output=embed";

export default function ContactPage() {
  const [showWhatsapp, setShowWhatsapp] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    website: "", // honeypot
  });

  const handleChange = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setFormData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};

const handleSubmit = async (
  e: FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setLoading(true);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        website: "",
      });

      setShowWhatsapp(false);
    } else if (result.whatsapp) {
      setShowWhatsapp(true);
      alert(result.message);
    } else {
      alert(result.message || "Failed to send message.");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      {/* Your Hero Section */}

      <section className="py-20">
        <div className="container mx-auto sm:px-6 px-4">
          <h2 className="sm:text-4xl text-2xl font-bold text-center">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mt-14">
            <div>
              <h3 className="sm:text-2xl text-xl font-semibold">Contact Information</h3>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="mt-1 text-muted-foreground">
                      Dallah Industrial Area,
                      <br />
                      Dammam, Eastern Province,
                      <br />
                      Saudi Arabia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:info@lulualkhaleej.com"
                      className="mt-1 block text-muted-foreground hover:text-primary transition"
                    >
                      info@lulualkhaleej.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href="tel:+966505417597"
                      className="mt-1 block text-muted-foreground hover:text-primary transition"
                    >
                      +966 505417597
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <Input
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />

              <Input
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
              />

              <Textarea
                name="message"
                placeholder="Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />

              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <Button
                type="submit"
                disabled={loading}
                className="px-5 py-3 !h-auto cursor-pointer !font-bold !text-md text-white"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>

              {showWhatsapp && (
                <a
                  href="https://wa.me/966505417597"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700"
                >
                  Contact on WhatsApp
                </a>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto sm:px-6 px-4">
          <h2 className="sm:text-3xl text-2xl font-bold text-center mb-3">Our Location</h2>
          <p className="text-center text-muted-foreground mb-10">
            Dallah, Dammam, Eastern Province, Saudi Arabia
          </p>
          <div className="overflow-hidden rounded-xl border aspect-[4/3] md:aspect-[16/7]">
            <iframe
              src={MAP_EMBED_URL}
              className="h-full w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Lulu Al Khaleej Machinery Maintenance Co. - Dammam, Saudi Arabia"
            />
          </div>
        </div>
      </section>

      {/* Your Map Section */}
    </>
  );
}