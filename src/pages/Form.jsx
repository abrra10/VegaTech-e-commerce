import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Radio,
  Select,
  Option,
} from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const shippingData = [
    {
      Wilaya: "Adrar",
      expressShipping: 1500,
      standardShipping: 700,
    },
    {
      Wilaya: "Chlef",
      expressShipping: 700,
      standardShipping: 350,
    },
    {
      Wilaya: "Laghouat",
      expressShipping: 900,
      standardShipping: 500,
    },
    {
      Wilaya: "Oum El Bouaghi",
      expressShipping: 800,
      standardShipping: 350,
    },
    {
      Wilaya: "Batna",
      expressShipping: 700,
      standardShipping: 350,
    },
    {
      Wilaya: "Béjaïa",
      expressShipping: 700,
      standardShipping: 350,
    },
    {
      Wilaya: "Biskra",
      expressShipping: 900,
      standardShipping: 400,
    },
    {
      Wilaya: "Béchar",
      expressShipping: 1200,
      standardShipping: 600,
    },
    {
      Wilaya: "Blida",
      expressShipping: 700,
      standardShipping: 350,
    },
    {
      Wilaya: "Bouira",
      expressShipping: 700,
      standardShipping: 350,
    },
    {
      Wilaya: "Tamanrasset",
      expressShipping: 2000,
      standardShipping: 1000,
    },
    {
      Wilaya: "Tébessa",
      expressShipping: 850,
      standardShipping: 400,
    },
    {
      Wilaya: "Tlemcen",
      expressShipping: 800,
      standardShipping: 350,
    },
    {
      Wilaya: "Tiaret",
      expressShipping: 800,
      standardShipping: 350,
    },
    {
      Wilaya: "Tizi Ouzou",
      expressShipping: 700,
      standardShipping: 350,
    },
    {
      Wilaya: "Alger",
      expressShipping: 600,
      standardShipping: 300,
    },
    {
      Wilaya: "Djelfa",
      expressShipping: 900,
      standardShipping: 500,
    },
    {
      Wilaya: "Jijel",
      expressShipping: 700,
      standardShipping: 350,
    },
    {
      Wilaya: "Sétif",
      expressShipping: 550,
      standardShipping: 250,
    },
    {
      Wilaya: "Saïda",
      expressShipping: 900,
      standardShipping: 350,
    },
    {
      Wilaya: "Skikda",
      expressShipping: 800,
      standardShipping: 350,
    },
    {
      Wilaya: "Sidi Bel Abbès",
      expressShipping: 800,
      standardShipping: 350,
    },
    {
      Wilaya: "Annaba",
      expressShipping: 700,
      standardShipping: 350,
    },
    {
      Wilaya: "Guelma",
      expressShipping: 850,
      standardShipping: 400,
    },
    {
      Wilaya: "Constantine",
      expressShipping: 650,
      standardShipping: 350,
    },
    {
      Wilaya: "Médéa",
      expressShipping: 800,
      standardShipping: 350,
    },
    {
      Wilaya: "Mostaganem",
      expressShipping: 800,
      standardShipping: 350,
    },
    {
      Wilaya: "M'Sila",
      expressShipping: 700,
      standardShipping: 350,
    },
    {
      Wilaya: "Mascara",
      expressShipping: 800,
      standardShipping: 350,
    },
    {
      Wilaya: "Ouargla",
      expressShipping: 1000,
      standardShipping: 500,
    },
    {
      Wilaya: "Oran",
      expressShipping: 700,
      standardShipping: 350,
    },
    {
      Wilaya: "El Bayadh",
      expressShipping: 1200,
      standardShipping: 600,
    },
    {
      Wilaya: "Illizi",
      expressShipping: 1950,
      standardShipping: 1000,
    },
    {
      Wilaya: "Bordj Bou Arreridj",
      expressShipping: 600,
      standardShipping: 300,
    },
    {
      Wilaya: "Boumerdès",
      expressShipping: 700,
      standardShipping: 350,
    },
    {
      Wilaya: "El Tarf",
      expressShipping: 850,
      standardShipping: 400,
    },
    {
      Wilaya: "Tindouf",
      expressShipping: 1700,
      standardShipping: 800,
    },
    {
      Wilaya: "Tissemsilt",
      expressShipping: 850,
      standardShipping: 400,
    },
    {
      Wilaya: "El Oued",
      expressShipping: 1000,
      standardShipping: 500,
    },
    {
      Wilaya: "Khenchela",
      expressShipping: 800,
      standardShipping: 350,
    },
    {
      Wilaya: "Souk Ahras",
      expressShipping: 850,
      standardShipping: 400,
    },
    {
      Wilaya: "Tipaza",
      expressShipping: 700,
      standardShipping: 350,
    },
    {
      Wilaya: "Mila",
      expressShipping: 800,
      standardShipping: 350,
    },
    {
      Wilaya: "Aïn Defla",
      expressShipping: 800,
      standardShipping: 350,
    },
    {
      Wilaya: "Naâma",
      expressShipping: 1200,
      standardShipping: 600,
    },
    {
      Wilaya: "Aïn Témouchent",
      expressShipping: 800,
      standardShipping: 350,
    },
    {
      Wilaya: "Ghardaïa",
      expressShipping: 1000,
      standardShipping: 500,
    },
    {
      Wilaya: "Relizane",
      expressShipping: 800,
      standardShipping: 350,
    },
    {
      Wilaya: "Timimoun",
      expressShipping: 1500,
      standardShipping: 700,
    },
    {
      Wilaya: "Bordj Badji Mokhtarl",
      expressShipping: 900,
      standardShipping: 400,
    },
    {
      Wilaya: "Ouled Djellal",
      expressShipping: 900,
      standardShipping: 400,
    },
    {
      Wilaya: "Béni Abbès",
      expressShipping: 1200,
      standardShipping: 600,
    },
    {
      Wilaya: "In Guezzam",
      expressShipping: 1500,
      standardShipping: 700,
    },
    {
      Wilaya: "In Salah",
      expressShipping: 1850,
      standardShipping: 900,
    },
    {
      Wilaya: "Touggourt",
      expressShipping: 1000,
      standardShipping: 500,
    },
    {
      Wilaya: "El M'Ghair",
      expressShipping: 1000,
      standardShipping: 500,
    },
    {
      Wilaya: "Djanet",
      expressShipping: 2000,
      standardShipping: 1000,
    },
    {
      Wilaya: "El Meniaa",
      expressShipping: 1000,
      standardShipping: 500,
    },
  ];

  const navigate = useNavigate();

  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    deliveryMethod: "",
    wilaya: "",
    address: "",
    commune: "",
  });

  // Additional state for loading and success message
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Access cart products from Redux state
  const products = useSelector((state) => state.cart.products);

  // Handling form input changes
  const handleChange = (e) => {
    const { name, value } = e.target; // Removed type and checked as they are not needed for Input fields
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update state correctly for all inputs
    }));
  };

  // Handle delivery method change
  const handleDeliveryMethodChange = (method) => {
    setFormData((prevData) => ({
      ...prevData,
      deliveryMethod: method,
      ...(method === "Standard" && { address: "" }), // Clear address if Standard is chosen
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.phoneNumber ||
      !formData.deliveryMethod ||
      !formData.wilaya ||
      !formData.commune ||
      (formData.deliveryMethod === "Express" && !formData.address)
    ) {
      setMessage("Veuillez remplir tous les champs.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // Calculate total order price (excluding delivery cost)
      const orderPrice = products.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/orders`,
        {
          data: {
            ...formData,
            products: products.map((product) => ({
              id: product.id,
              title: product.title,
              price: product.price,
              quantity: product.quantity,
            })),
            totalOrderPrice: orderPrice,
          },
        }
      );

      // Navigate to the Thank You page on successful submission
      navigate("/thank-you");

      setMessage("Commande soumise avec succès !");
      setFormData({
        name: "",
        phoneNumber: "",
        deliveryMethod: "",
        wilaya: "",
        address: "",
        commune: "",
      }); // Reset form
    } catch (error) {
      console.error("Error submitting order:", error);
      setMessage(
        "Erreur lors de la soumission de la commande. Veuillez réessayer."
      );
    } finally {
      setLoading(false);
    }
  };

  const orderPrice = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  const deliveryCost = () => {
    if (formData.deliveryMethod && formData.wilaya) {
      const selectedWilaya = shippingData.find(
        (item) => item.Wilaya === formData.wilaya
      );
      if (selectedWilaya) {
        return formData.deliveryMethod === "Express"
          ? selectedWilaya.expressShipping
          : selectedWilaya.standardShipping;
      }
    }
    return 0; // Default to 0 if no match
  };

  const subtotal = orderPrice + deliveryCost();

  return (
    <div className="flex items-center justify-center min-h-screen py-8">
      <Card color="transparent" shadow={false}>
        <Typography
          color="black"
          className="mt-1 text-center text-xl font-bold font-Secondary"
        >
          Entrez vos coordonnées
        </Typography>
        {message && (
          <Typography className="text-center text-red-500">
            {message}
          </Typography>
        )}
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 lg:w-full"
        >
          <div className="mb-1 flex flex-col gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="col-span-2">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-3 font-Secondary flex justify-between"
                >
                  <span>Votre Nom et Prénom</span>
                  <span dir="rtl" className="text-right">
                    الاسم الكامل
                  </span>
                </Typography>
                <Input
                  size="lg"
                  placeholder="Votre Prénom"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="col-span-2">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-3 font-Secondary flex justify-between"
                >
                  <span>Numéro de Téléphone</span>
                  <span dir="rtl" className="text-right">
                    رقم الهاتف
                  </span>
                </Typography>
                <Input
                  type="tel"
                  size="lg"
                  placeholder="+213 555 555 555"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-3 font-Secondary flex justify-between"
            >
              <span>Sélectionnez votre Wilaya</span>
              <span dir="rtl" className="text-right">
                اختر ولايتك
              </span>
            </Typography>
            <Select
              label="Choose your Wilaya"
              size="lg"
              name="wilaya"
              value={formData.wilaya}
              onChange={(e) => setFormData({ ...formData, wilaya: e })}
              required
            >
              {[
                "Adrar",
                "Chlef",
                "Laghouat",
                "Oum El Bouaghi",
                "Batna",
                "Béjaïa",
                "Biskra",
                "Béchar",
                "Blida",
                "Bouira",
                "Tamanrasset",
                "Tébessa",
                "Tlemcen",
                "Tiaret",
                "Tizi Ouzou",
                "Alger",
                "Djelfa",
                "Jijel",
                "Sétif",
                "Saïda",
                "Skikda",
                "Sidi Bel Abbès",
                "Annaba",
                "Guelma",
                "Constantine",
                "Médéa",
                "Mostaganem",
                "M'Sila",
                "Mascara",
                "Ouargla",
                "Oran",
                "El Bayadh",
                "Illizi",
                "Bordj Bou Arreridj",
                "Boumerdès",
                "El Tarf",
                "Tindouf",
                "Tissemsilt",
                "El Oued",
                "Khenchela",
                "Souk Ahras",
                "Tipaza",
                "Mila",
                "Aïn Defla",
                "Naâma",
                "Aïn Témouchent",
                "Ghardaïa",
                "Relizane",
                "Timimoun",
                "Bordj Badji Mokhtar",
                "Ouled Djellal",
                "Béni Abbès",
                "In Salah",
                "In Guezzam",
                "Touggourt",
                "Djanet",
                "El M'Ghair",
                "El Meniaa",
              ].map((wilaya, index) => (
                <Option key={index} value={wilaya}>
                  {wilaya}
                </Option>
              ))}
            </Select>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="col-span-2">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-3 font-Secondary flex justify-between"
                >
                  <span>La Commune</span>
                  <span dir="rtl" className="text-right">
                    البلدية
                  </span>
                </Typography>
                <Input
                  type="text"
                  size="lg"
                  placeholder="Nom de la Commune"
                  name="commune"
                  value={formData.commune}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-3 font-Secondary flex justify-between"
            >
              <span>Méthode de Livraison</span>
              <span dir="rtl" className="text-right">
                طريقة التوصيل
              </span>
            </Typography>
            <div className="flex gap-6">
              <Radio
                id="delivery-standard"
                name="deliveryMethod"
                label={
                  <div>
                    <span>Livraison Standard (stop desk)</span>
                    <br />
                    <span dir="rtl">التوصيل العادي (مكتب التوصيل)</span>
                  </div>
                }
                checked={formData.deliveryMethod === "Standard"}
                onChange={() => handleDeliveryMethodChange("Standard")}
              />
              <Radio
                id="delivery-express"
                name="deliveryMethod"
                label={
                  <div>
                    <span>livraison à domicile </span>
                    <br />
                    <span dir="rtl">التوصيل إلى المنزل</span>
                  </div>
                }
                checked={formData.deliveryMethod === "Express"}
                onChange={() => handleDeliveryMethodChange("Express")}
              />
            </div>

            {formData.deliveryMethod === "Express" && (
              <div>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-3 font-Secondary flex justify-between"
                >
                  <span>Adresse</span>
                  <span dir="rtl" className="text-right">
                    العنوان
                  </span>
                </Typography>
                <Input
                  size="lg"
                  placeholder="Votre Adresse"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required={formData.deliveryMethod === "Express"}
                />
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <div className="col-span-2">
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-3 font-Secondary flex justify-between"
              >
                <span>Résumé de la commande</span>
                <span dir="rtl" className="text-right">
                  ملخص الطلبية
                </span>
              </Typography>

              <div className="border p-4 rounded-lg bg-gray-100">
                <div className="flex justify-between mb-2">
                  <span>Prix de la commande</span>
                  <span>{orderPrice} DA</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Coût de livraison</span>
                  <span>{deliveryCost()} DA</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Sous-total</span>
                  <span>{subtotal} DA</span>
                </div>
              </div>
            </div>
          </div>

          <Button
            fullWidth
            type="submit"
            variant="gradient"
            className="mt-6 font-Secondary"
            disabled={loading}
          >
            {loading ? "Soumission en cours..." : "Soumettre la commande"}
          </Button>
        </form>
      </Card>
    </div>
  );
}
