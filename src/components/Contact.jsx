import React, { useState } from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

import axios from "axios";

export function ContactSection() {
  // Gestion de l'état du formulaire
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Gestion des changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/contact-messages`,
        {
          data: formData,
        }
      );
      console.log("Message envoyé avec succès :", response.data);
      setSuccess("Message envoyé avec succès !");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      setError("Échec de l'envoi du message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-yellow-500 via-yellow-300 to-yellow-100 px-8 py-8 lg:py-16">
      <div className="container mx-auto text-center">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 font-Primary text-gray-900 !text-2xl lg:!text-5xl"
        >
          Nous sommes là pour vous aider
        </Typography>
        <Typography className="mb-10 font-Secondary font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-900">
          Que ce soit une question sur nos services, une demande d'assistance
          technique ou des suggestions d'amélioration, notre équipe est
          impatiente de vous entendre.
        </Typography>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
          <div className="space-y-4 p-4 mt-8 md:ml-8">
            {/* Adresse */}
            <div className="relative flex items-center gap-2">
              <MapPinIcon className="h-7 w-7 text-gray-900" />
              <span className="font-Secondary text-md sm:text-lg md:text-xl font-semibold text-gray-900">
                Cité 400 logts, Sétif, Algérie
              </span>
            </div>

            {/* E-mail */}
            <div className="relative flex items-center gap-2">
              <EnvelopeIcon className="h-7 w-7 text-gray-900" />
              <span className="font-Secondary text-md sm:text-lg md:text-xl font-semibold text-gray-900">
                vega19.tech@gmail.com
              </span>
            </div>

            {/* Téléphone */}
            <div className="relative flex items-center gap-2">
              <PhoneIcon className="h-7 w-7 text-gray-900" />
              <span className="font-Secondary text-md sm:text-lg md:text-xl font-semibold text-gray-900">
                0660893554
              </span>
            </div>

            {/* Heures d'ouverture */}
            <div className="relative flex items-center gap-2">
              <ClockIcon className="h-7 w-7 text-gray-900" />
              <span className="font-Secondary text-md sm:text-lg md:text-xl font-semibold text-gray-900">
                Sam - Jud : 10:00 - 18:00
              </span>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 lg:max-w-sm"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Typography
                  variant="small"
                  className="mb-2 font-Secondary text-left font-medium text-lg !text-gray-900"
                >
                  Prénom
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="Prénom"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="!border-black !focus:border-black"
                  containerProps={{
                    className: "min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 font-Secondary text-left font-medium text-lg !text-gray-900"
                >
                  Nom
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="Nom"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="!border-black !focus:border-black"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 font-Secondary text-left font-medium text-lg !text-gray-900"
              >
                Votre E-mail
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="nom@email.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="!border-black !focus:border-black"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 font-Secondary text-left font-medium text-lg !text-gray-900"
              >
                Votre Message
              </Typography>
              <Textarea
                rows={6}
                color="gray"
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="!border-black !focus:border-black"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <Button
              type="submit"
              className="w-full font-Secondary"
              color="gray"
            >
              {loading ? "Envoi en cours..." : "Envoyer le message"}
            </Button>
            {success && <p className="text-green-500 mt-4">{success}</p>}
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
