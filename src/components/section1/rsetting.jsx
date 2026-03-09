import React from "react";

export default function PrivacyControls() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-6">
      {/* Header */}
      <h2 className="text-xl font-semibold text-gray-800">
        Data Privacy Controls
      </h2>

      {/* Data Collection Consent */}
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-3">
          Data Collection Consent
        </h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <input type="checkbox" defaultChecked className="mr-2" />
            <span>Store transaction metadata for AI model training</span>
          </li>
          <li className="flex items-center">
            <input type="checkbox" defaultChecked className="mr-2" />
            <span>Enable automated KYC deepfake detection</span>
          </li>
          <li className="flex items-center">
            <input type="checkbox" defaultChecked className="mr-2" />
            <span>Log IP addresses for security audits</span>
          </li>
        </ul>
      </div>

      {/* Encryption Status */}
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-3">
          Encryption Status
        </h3>
        <div className="space-y-4">
          <div className="border rounded-md p-3 bg-gray-50">
            <h4 className="font-semibold text-gray-800">PII Vault</h4>
            <p className="text-sm text-gray-600">
              Usernames, emails, and phone numbers are encrypted using AES-256
              at rest.
            </p>
          </div>
          <div className="border rounded-md p-3 bg-gray-50">
            <h4 className="font-semibold text-gray-800">Token Vault</h4>
            <p className="text-sm text-gray-600">
              Credit card numbers are tokenized. Original PANs are stored in an
              isolated, air-gapped table.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

