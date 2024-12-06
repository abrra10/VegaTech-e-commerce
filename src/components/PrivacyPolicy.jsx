import React from "react";
import { Typography } from "@material-tailwind/react";

export default function PrivacyPolicy() {
  return (
    <div className=" py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <Typography
            variant="h4"
            color="blue-gray"
            className="font-bold text-3xl font-tertiary"
          >
            Privacy Policy
          </Typography>
          <p className="text-lg text-gray-600 font-tertiary">
            Last updated: December 2024
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <Typography
              variant="h5"
              color="blue-gray"
              className="font-bold text-xl font-tertiary"
            >
              Introduction
            </Typography>
            <p className="text-gray-700 font-tertiary">
              We value your privacy and are committed to protecting your
              personal information. This privacy policy outlines how we collect,
              use, and protect your data.
            </p>
          </section>

          <section>
            <Typography
              variant="h5"
              color="blue-gray"
              className="font-bold text-xl font-tertiary"
            >
              Information We Collect
            </Typography>
            <p className="text-gray-700 font-tertiary">
              We collect the following types of personal information when you
              fill out a form on our website:
            </p>
            <ul className="list-disc pl-6 text-gray-700 font-tertiary">
              <li>Contact information (name, phone number, address)</li>
            </ul>
          </section>

          <section>
            <Typography
              variant="h5"
              color="blue-gray"
              className="font-bold text-xl font-tertiary"
            >
              How We Use Your Information
            </Typography>
            <p className="text-gray-700 font-tertiary">
              The information we collect is used solely for the purpose of
              processing your order and contacting you. We will use your details
              to contact you directly for further steps in completing your
              purchase.
            </p>
          </section>

          <section>
            <Typography
              variant="h5"
              color="blue-gray"
              className="font-bold text-xl font-tertiary"
            >
              Sharing Your Information
            </Typography>
            <p className="text-gray-700 font-tertiary">
              We do not share your personal information with third parties,
              except when required by law or to assist with the processing of
              your order.
            </p>
          </section>

          <section>
            <Typography
              variant="h5"
              color="blue-gray"
              className="font-bold text-xl font-tertiary"
            >
              Your Rights
            </Typography>
            <p className="text-gray-700 font-tertiary">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 font-tertiary">
              <li>Request access to your personal information</li>
              <li>Update your personal information</li>
              <li>Request the deletion of your personal information</li>
            </ul>
          </section>

          <section>
            <Typography
              variant="h5"
              color="blue-gray"
              className="font-bold text-xl font-tertiary"
            >
              Data Security
            </Typography>
            <p className="text-gray-700 font-tertiary">
              We implement security measures to protect your personal
              information from unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section>
            <Typography
              variant="h5"
              color="blue-gray"
              className="font-bold text-xl font-tertiary"
            >
              Changes to This Privacy Policy
            </Typography>
            <p className="text-gray-700 font-tertiary">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with the updated date.
            </p>
          </section>

          <section>
            <Typography
              variant="h5"
              color="blue-gray"
              className="font-bold text-xl font-tertiary"
            >
              Contact Us
            </Typography>

            <p className="text-gray-700 font-tertiary">
              If you have any questions or concerns about this privacy policy or
              our practices, please contact us at:
            </p>
            <p className="text-gray-700 font-tertiary">
              Email:{" "}
              <a href="mailto:vega19.tech@gmail.com" className="text-blue-600">
                vega19.tech@gmail.com
              </a>
            </p>
            <p className="text-gray-700 font-tertiary">
              Phone:{" "}
              <a href="tel:+213660893554" className="text-blue-600">
                0660 893 554
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
